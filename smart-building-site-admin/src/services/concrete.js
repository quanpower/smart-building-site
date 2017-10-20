import { request, config } from 'utils'

const { api } = config
const { concTemp, concTemps, concTempRecord, concDashboard } = api

export async function getConcTemp (params) {
  return request({
    url: concTemp.concat('/1/112'),
    method: 'get',
    data: params,
  })
}

export async function getConcTemps (params) {
  return request({
    url: concTemps.concat('/1/112'),
    method: 'get',
    data: params,
  })
}

export async function getConcTempRecord (params) {
  return request({
    url: concTempRecord.concat('/1/112/2017-10-20 00:00:00/2017-10-20 24:00:00'),
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
