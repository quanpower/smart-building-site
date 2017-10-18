import { request, config } from 'utils'

const { api } = config
const { loraTemperature, loraTemperatures, loraTemperatureRecord, loraBat, barns, grainQuote,
  airConTemp, airConTemps, airConTempRecord, airConDashboard, grainSmartTempCtrl, grainRealtimeTemp, grainFireAlarm,
  grainDynamicLinkage, grainSecurity, grainHistory  } = api

export async function loraTemp (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_temperature/1/1',
    // # todo
    url: loraTemperature.concat('/1/1'),
    method: 'get',
    data: params,
  })
}


export async function loraTemps (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_temperatures/1/1',
    // # todo
    url: loraTemperatures.concat('/1/1'),
    method: 'get',
    data: params,
  })
}


export async function loraTempRecord (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_temperature_record/1/1/?/?',
    // # todo
    url: loraTemperatureRecord,
    method: 'post',
    data: params,
  })
}


export async function loraBattery (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_battery/<gateway_addr>/<node_addr>',
    url: loraBat.concat('/1/1'),
    method: 'get',
    data: params,
  })
}


export async function getBarns (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_battery/<gateway_addr>/<node_addr>',
    url: barns,
    method: 'get',
    data: params,
  })
}


export async function getAirConTemp (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_battery/<gateway_addr>/<node_addr>',
    url: airConTemp.concat('/1/1'),
    method: 'get',
    data: params,
  })
}


export async function getAirConTemps (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_battery/<gateway_addr>/<node_addr>',
    url: airConTemps.concat('/1/1'),
    method: 'get',
    data: params,
  })
}


export async function getAirConTempRecord (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_battery/<gateway_addr>/<node_addr>',
    url: airConTempRecord.concat('/1/1/2017-9-7 00:00:00/2017-9-8 23:00:00'),
    method: 'get',
    data: params,
  })
}


export async function getAirConDashboard (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_battery/<gateway_addr>/<node_addr>',
    url: airConDashboard.concat('/1/1'),
    method: 'get',
    data: params,
  })
}


export async function getGrainQuote (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_battery/<gateway_addr>/<node_addr>',
    url: grainQuote.concat('/1/1'),
    method: 'get',
    data: params,
  })
}


export async function getSmartTempCtrl (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_battery/<gateway_addr>/<node_addr>',
    url: grainSmartTempCtrl.concat('/1/1'),
    method: 'get',
    data: params,
  })
}

export async function getRealtimeTemp (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_battery/<gateway_addr>/<node_addr>',
    url: grainRealtimeTemp.concat('/1/1'),
    method: 'get',
    data: params,
  })
}

export async function getFireAlarm (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_battery/<gateway_addr>/<node_addr>',
    url: grainFireAlarm.concat('/1/1'),
    method: 'get',
    data: params,
  })
}

export async function getDynamicLinkage (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_battery/<gateway_addr>/<node_addr>',
    url: grainDynamicLinkage.concat('/1/1'),
    method: 'get',
    data: params,
  })
}

export async function getSecurity (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_battery/<gateway_addr>/<node_addr>',
    url: grainSecurity.concat('/1/1'),
    method: 'get',
    data: params,
  })
}


export async function getGrainHistory (params) {
  return request({
    // url: 'http://101.200.158.2:8888/api/v2/loranode_battery/<gateway_addr>/<node_addr>',
    url: grainHistory,
    method: 'get',
    data: params,
  })
}
