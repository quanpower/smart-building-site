import { request, config } from 'utils'

const { api } = config
const { concTemp, concTemps, concTempRecord, concDashboard } = api

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

export async function getConcDashboard (params) {
  return request({
    url: concDashboard,
    method: 'get',
    data: params,
  })
}
