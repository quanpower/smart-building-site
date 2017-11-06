import { request, config } from 'utils'

const { api } = config
const { concTemp, concTemps, concTempRecord, concDashboard, concHistoryRecord } = api

export async function getConcTemp (params) {
  return request({
    url: concTemp,
    method: 'get',
    data: params,
  })
}

export async function getConcTemps (params) {
  return request({
    url: concTemps,
    method: 'get',
    data: params,
  })
}

export async function getConcTempRecord (params) {
  return request({
    url: concTempRecord,
    method: 'get',
    data: params,
  })
}


export async function getConcHistoryRecord (params) {
  return request({
    url: concHistoryRecord,
    method: 'get',
    data: params,
  })
}


export async function getConcTempHourRecord (params) {
  return request({
    url: concTempHourRecord,
    method: 'get',
    data: params,
  })
}


export async function getConcDashboard (params) {
  return request({
    url: concDashboard,
    method: 'get',
    data: params,
  })
}
