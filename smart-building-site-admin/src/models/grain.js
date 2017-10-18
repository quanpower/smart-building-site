import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { query } from 'services/dashboard'
import { model } from 'models/common'
import * as weatherService from 'services/weather'
import { getBarns } from "../services/grain"

export default modelExtend(model, {
  namespace: 'grain',
  state: {
    barns: [],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        // if (pathname === '/grain' || pathname === '/') {
        if (pathname === '/grain') {
          dispatch({ type: 'fetchBarns' })
          console.log('update storehouses begin---')
          setInterval(() => {
            dispatch({ type: 'fetchBarns' })
          }, 5000)
        } else {
          console.log('we are at:', pathname)
        }
      })
    },

  },


  effects: {
    // * query ({
    //            payload,
    //          }, { call, put }) {
    //   const data = yield call(query, parse(payload))
    //   yield put({
    //     type: 'updateState',
    //     payload: data,
    //   })
    // },
    //
    // * queryWeather ({
    //                   payload = {},
    //                 }, { call, put }) {
    //   payload.location = 'shenzhen'
    //   const result = yield call(weatherService.query, payload)
    //   const { success } = result
    //   if (success) {
    //     const data = result.results[0]
    //     const weather = {
    //       city: data.location.name,
    //       temperature: data.now.temperature,
    //       name: data.now.text,
    //       icon: `//s5.sencdn.com/web/icons/3d_50/${data.now.code}.png`,
    //     }
    //     yield put({
    //       type: 'updateState',
    //       payload: {
    //         weather,
    //       },
    //     })
    //   }
    // },

    * fetchBarns ( { payload }, { call, put }) {
      const barns = yield call(getBarns)
      console.log('barns are :', barns)
      yield put({
        type: 'updateBarns',
        payload: {
          barns: barns.barns,
        }
      })
    },

    // * fetchTemps ( {payload }, { call, put }) {
    //   const temps = yield call(loraTemps, {})
    //   yield put({
    //     type: 'updateTemps',
    //     payload: {
    //       temps: temps.temps,
    //     }
    //   });
    // },
    //
    // * fetchTempRecord ( {payload }, { call, put }) {
    //   const temps = yield call(loraTemps, {})
    //   console.log(temps)
    //   yield put({
    //     type: 'updateTempRecord',
    //     payload: {
    //       tempRecord: temps.temps,
    //     }
    //   });
    // },


  },

  reducers: {
    updateBarns (state, { payload: {barns} }) {
      console.log('reducers barns are :', barns)

      return { ...state, barns: barns }
    },

    // updateTemps (state, { payload: {temps} }) {
    //   return {
    //     ...state, temps: temps,
    //   }
    // },
    //
    // updateTempRecord (state, { payload: {tempRecord} }) {
    //   return {
    //     ...state, tempRecord: tempRecord,
    //   }
    // },
  },
})
