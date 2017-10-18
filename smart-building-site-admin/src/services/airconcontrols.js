import { request, config } from 'utils'

const { api } = config
const { airConControls } = api

export async function query (params) {
  return request({
    url: airConControls,
    method: 'get',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: airConControls,
    method: 'delete',
    data: params,
  })
}
