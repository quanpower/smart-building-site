import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { query } from 'services/dashboard'
import { model } from 'models/common'
import * as weatherService from 'services/weather'
import { getConcTemps, getConcDashboard } from '../services/concrete'

export default modelExtend(model, {
  namespace: 'concrete',
  state: {
    weather: {
      city: '上海',
      temperature: '31',
      name: '晴',
      icon: '//s5.sencdn.com/web/icons/3d_50/2.png',
    },
    concDash: [],
    quote: {
      avatar: 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
    },
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({pathname}) => {
        if (pathname === '/concrete') {
          dispatch({ type: 'query' })
          console.log('----update ConcTemps begin---')
          setInterval(() => {
            dispatch({type: 'fetchAirConDashboard'})

          }, 30000)
        } else {
          console.log('we are at:', pathname)
        }
      })
    }
  },

  effects: {
    * query ({ payload }, { call, put }) {
      const data = yield call(query, parse(payload))
      console.log('dashboard data is:', data)
      yield put({
        type: 'updateState',
        payload: data,
      })
    },

    * fetchAirConDashboard ({ payload }, { call, put }) {
      const concDash = yield call(getConcDashboard)
      console.log('concDash are :', concDash)
      yield put({
        type: 'updateConcDashboard',
        payload: {
          concDash: concDash.concDash,
        }
      })
    },
  },

  reducers: {
    updateAirConDashboard (state, { payload: { concDash } }) {
      console.log('reducers concDash are :', concDash)

      return { ...state, concDash: concDash }
    },
  },
})
