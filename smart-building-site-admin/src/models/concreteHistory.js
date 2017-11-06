import modelExtend from 'dva-model-extend'
import { getConcHistoryRecord } from 'services/concrete'
import { pageModel } from 'models/common'
import queryString from 'query-string'

export default modelExtend(pageModel, {

  namespace: 'concreteHistory',

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/concrete_history') {
          console.log('in concrete_history')
          dispatch({ type: 'query',
            payload: {
              gatewayAddr: '1',
              nodeAddr: '112',
              startTime: '2017-10-20 00:00:00',
              endTime: '2017-12-30 23:00:00',
            } })
        }
      })
    },
  },

  effects: {
    * query ({
               payload,
             }, { call, put }) {
      const data = yield call(getConcHistoryRecord, payload)
      console.log('data is:', data)
      if (data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.list,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
          },
        })
      } else {
        throw data
      }
    },
  },
})
