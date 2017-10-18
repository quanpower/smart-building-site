import { request, config } from 'utils'

const { api } = config
const { airConControl } = api

export async function query (params) {
  return request({
    url: airConControl,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: airConControl,
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: airConControl,
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: airConControl,
    method: 'patch',
    data: params,
  })
}
