import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
// import { query } from 'services/dashboard'
import { model } from 'models/common'
import { getAirConTemp, getAirConTemps, getAirConTempRecord, getAirConDashboard } from "../services/grain"

export default modelExtend(model, {
  namespace: 'aircondetail',
  state: {
    airConRealtimeTemp: [],
    airConTemps: [],
    airConTempRecord: [],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/aircondetail') {
          console.log('update airConRealtimeTemp begin---')
          setInterval(() => {
            dispatch({ type: 'fetchAirConRealtimeTemp' })
            dispatch({ type: 'fetchAirConTemps' })
            dispatch({ type: 'fetchAirConTempRecord' })
          }, 5000)
        } else {
          console.log('we are at:', pathname)
        }
      })
    },
  },


  effects: {
    * fetchAirConRealtimeTemp ({ payload }, { call, put }) {
      const airConRealtimeTemp = yield call(getAirConTemp, {})
      console.log('airConRealtimeTemp', airConRealtimeTemp)
      yield put({
        type: 'updateAirConRealtimeTemp',
        payload: {
          airConRealtimeTemp: airConRealtimeTemp.airConRealtimeTemp,
        }
      })
    },

    * fetchAirConTemps ({payload }, { call, put }) {
      const airConTemps = yield call(getAirConTemps, {})
      console.log('airConTemps', airConTemps)

      yield put({
        type: 'updateAirConTemps',
        payload: {
          airConTemps: airConTemps.airConTemps,
        }
      })
    },

    * fetchAirConTempRecord ({payload }, { call, put }) {
      const airConTempRecord = yield call(getAirConTempRecord, {})
      console.log('airConTempRecord', airConTempRecord)
      yield put({
        type: 'updateAirConTempRecord',
        payload: {
          airConTempRecord: airConTempRecord.airConTempRecord,
        }
      })
    },
  },

  reducers: {
    updateAirConRealtimeTemp (state, { payload: {airConRealtimeTemp} }) {
      return {
        ...state, airConRealtimeTemp: airConRealtimeTemp,
      }
    },

    updateAirConTemps (state, { payload: {airConTemps} }) {
      return {
        ...state, airConTemps: airConTemps,
      }
    },

    updateAirConTempRecord (state, { payload: {airConTempRecord} }) {
      return {
        ...state, airConTempRecord: airConTempRecord,
      }
    },
  },
})
