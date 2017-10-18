import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { query } from 'services/dashboard'
import { model } from 'models/common'
import * as weatherService from 'services/weather'
import { loraTemp, loraTemps, loraBattery } from "../services/grain"

export default modelExtend(model, {
  namespace: 'dashboard',
  state: {
    weather: {
      city: '上海',
      temperature: '31',
      name: '晴',
      icon: '//s5.sencdn.com/web/icons/3d_50/2.png',
    },
    concTemps: [],
    quote: {
      avatar: 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
    },
    concRealtimeTemp: [],
    recentSales: [],
    comments: [],
    completed: [],
    browser: [],
    cpu: {},
    user: {
      avatar: 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
    },
    concTempRecord: [],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/dashboard' || pathname === '/') {
          dispatch({ type: 'query' })
          dispatch({ type: 'queryWeather' })
          console.log('update concRealtimeTemp begin---')
          setInterval(() => {
            dispatch({ type: 'fetchAirConRealtimeTemp' })
            dispatch({ type: 'fetchAirConTemps' })
            dispatch({ type: 'fetchAirConTempRecord' })
          }, 5000);
        } else {
          console.log('we are at:', pathname)
        }
      })
    },

  },


  effects: {
    * query ({
      payload,
    }, { call, put }) {
      const data = yield call(query, parse(payload))
      yield put({
        type: 'updateState',
        payload: data,
      })
    },

    * queryWeather ({
      payload = {},
    }, { call, put }) {
      payload.location = 'shenzhen'
      const result = yield call(weatherService.query, payload)
      const { success } = result
      if (success) {
        const data = result.results[0]
        const weather = {
          city: data.location.name,
          temperature: data.now.temperature,
          name: data.now.text,
          icon: `//s5.sencdn.com/web/icons/3d_50/${data.now.code}.png`,
        }
        yield put({
          type: 'updateState',
          payload: {
            weather,
          },
        })
      }
    },

    * fetchAirConRealtimeTemp ({ payload }, { call, put }) {
      const temp = yield call(loraTemp, {})
      yield put({
        type: 'updateAirConRealtimeTemp',
        payload: {
          numbers: temp.concRealtimeTemp,
        }
      });
    },

    * fetchAirConTemps ({payload }, { call, put }) {
      const temps = yield call(loraTemps, {})
      yield put({
        type: 'updateAirConTemps',
        payload: {
          temps: temps.concTemps,
        }
      });
    },

    * fetchAirConTempRecord ({payload }, { call, put }) {
      const temps = yield call(loraTemps, {})
      console.log(temps)
      yield put({
        type: 'updateAirConTempRecord',
        payload: {
          tempRecord: temps.concTemps,
        }
      });
    },


  },

  reducers: {
    updateAirConRealtimeTemp (state, { payload: {numbers} }) {
      return {
        ...state, numbers: numbers,
      }
    },

    updateAirConTemps (state, { payload: {temps} }) {
      return {
        ...state, temps: temps,
      }
    },

    updateAirConTempRecord (state, { payload: {tempRecord} }) {
      return {
        ...state, tempRecord: tempRecord,
      }
    },
  },
})
