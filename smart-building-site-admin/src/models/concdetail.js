import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
// import { query } from 'services/dashboard'
import { model } from 'models/common'
import { getConcTemp, getConcTemps, getConcTempRecord, getConcDashboard } from "../services/concrete"

export default modelExtend(model, {
  namespace: 'concdetail',
  state: {
    concRealtimeTemp: [],
    concTemps: [],
    concTempRecord: [],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/concdetail') {
          console.log('---update concRealtimeTemp begin---')


          dispatch({
            type: 'concdetail/fetchAirConRealtimeTemp',
            payload: {
              gatewayAddr: '1',
              nodeAddr: '112',
            },
          })

          dispatch({
            type: 'concdetail/fetchAirConTemps',
            payload: {
              gatewayAddr: '1',
              nodeAddr: '112',
            },
          })

          dispatch({
            type: 'concdetail/fetchAirConTempRecord',
            payload: {
              gatewayAddr: '1',
              nodeAddr: '112',
              startTime: '2017-10-20 00:00:00',
              endTime: '2017-10-30 23:00:00',
            },
          })

          // setInterval(() => {
          //
          //
          //   dispatch({
          //     type: 'concdetail/fetchAirConRealtimeTemp',
          //     payload: {
          //       gatewayAddr: '1',
          //       nodeAddr: '112',
          //     },
          //   })
          //
          //   dispatch({
          //     type: 'concdetail/fetchAirConTemps',
          //     payload: {
          //       gatewayAddr: '1',
          //       nodeAddr: '112',
          //     },
          //   })
          //
          //   dispatch({
          //     type: 'concdetail/fetchAirConTempRecord',
          //     payload: {
          //       gatewayAddr: '1',
          //       nodeAddr: '112',
          //       startTime: '2017-10-20 00:00:00',
          //       endTime: '2017-10-30 23:00:00',
          //     },
          //   })
          //
          // }, 10000)
        } else {
          console.log('we are at:', pathname)
        }
      })
    },
  },


  effects: {
    * fetchAirConRealtimeTemp ({ payload }, { call, put }) {
      const concRealtimeTemp = yield call(getConcTemp, payload)
      console.log('concRealtimeTemp', concRealtimeTemp)
      yield put({
        type: 'updateAirConRealtimeTemp',
        payload: {
          concRealtimeTemp: concRealtimeTemp.concRealtimeTemp,
        }
      })
    },

    * fetchAirConTemps ({payload }, { call, put }) {
      const concTemps = yield call(getConcTemps, payload)
      console.log('concTemps', concTemps)

      yield put({
        type: 'updateAirConTemps',
        payload: {
          concTemps: concTemps.concTemps,
        }
      })
    },

    * fetchAirConTempRecord ({payload }, { call, put }) {
      const concTempRecord = yield call(getConcTempRecord, payload)
      console.log('concTempRecord', concTempRecord)
      yield put({
        type: 'updateAirConTempRecord',
        payload: {
          concTempRecord: concTempRecord.concTempRecord,
        }
      })
    },
  },

  reducers: {
    updateAirConRealtimeTemp (state, { payload: {concRealtimeTemp} }) {
      return {
        ...state, concRealtimeTemp: concRealtimeTemp,
      }
    },

    updateAirConTemps (state, { payload: {concTemps} }) {
      return {
        ...state, concTemps: concTemps,
      }
    },

    updateAirConTempRecord (state, { payload: {concTempRecord} }) {
      return {
        ...state, concTempRecord: concTempRecord,
      }
    },
  },
})
