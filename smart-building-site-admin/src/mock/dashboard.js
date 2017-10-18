import { color } from '../utils/theme'

const Mock = require('mockjs')
const config = require('../utils/config')

const { apiPrefix } = config

const Dashboard = Mock.mock({
  'temps|10': [
    {
      'time|+1': 1,
      'Temp1|280-500': 1,
      'Temp2|280-500': 1,
      'Temp3|280-500': 1,
    },
  ],
  cpu: {
    'usage|50-600': 1,
    space: 825,
    'cpu|40-90': 1,
    'data|20': [
      {
        'cpu|20-80': 1,
      },
    ],
  },
  browser: [
    {
      name: 'Google Chrome',
      percent: 43.3,
      status: 1,
    },
    {
      name: 'Mozilla Firefox',
      percent: 33.4,
      status: 2,
    },
    {
      name: 'Apple Safari',
      percent: 34.6,
      status: 3,
    },
    {
      name: 'Internet Explorer',
      percent: 12.3,
      status: 4,
    },
    {
      name: 'Opera Mini',
      percent: 3.3,
      status: 1,
    },
    {
      name: 'Chromium',
      percent: 2.53,
      status: 1,
    },
  ],
  user: {
    name: 'quanpower',
    email: 'quanpower@gmail.com',
    sales: 3241,
    sold: 3556,
    avatar: 'http://tva4.sinaimg.cn/crop.0.0.996.996.180/6ee6a3a3jw8f0ks5pk7btj20ro0rodi0.jpg',
  },
  'completed|12': [
    {
      'name|+1': 2008,
      'Task complete|200-1000': 1,
      'Cards Complete|200-1000': 1,
    },
  ],
  'comments|5': [
    {
      name: '@last',
      'status|1-3': 1,
      content: '@sentence',
      avatar () {
        return Mock.Random.image('48x48', Mock.Random.color(), '#757575', 'png', this.name.substr(0, 1))
      },
      date () {
        return `2017-${Mock.Random.date('MM-dd')} ${Mock.Random.time('HH:mm:ss')}`
      },
    },
  ],
  'recentSales|36': [
    {
      'id|+1': 1,
      name: '@last',
      'status|1-4': 1,
      date () {
        return `${Mock.Random.integer(2015, 2016)}-${Mock.Random.date('MM-dd')} ${Mock.Random.time('HH:mm:ss')}`
      },
      'price|10-200.1-2': 1,
    },
  ],
  quote: {
    name: '福建直属库',
    title: '公告栏',
    content: '福建直属库欢迎您!',
    avatar: 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
  },
  concRealtimeTemp: [
    {
      icon: 'team',
      color: color.green,
      title: 'Temp1',
      number: 31.1,
    }, {
      icon: 'team',
      color: color.blue,
      title: 'Temp2',
      number: 32.2,
    }, {
      icon: 'team',
      color: color.purple,
      title: 'Temp3',
      number: 33.3,
    }, {
      icon: 'message',
      color: color.red,
      title: 'Battery_Vol',
      number: 1,
    },
  ],
})

module.exports = {
  [`GET ${apiPrefix}/dashboard`] (req, res) {

    res.json(Dashboard)
  },
}
