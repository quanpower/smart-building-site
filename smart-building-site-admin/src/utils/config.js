const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

module.exports = {
  name: 'Smart Admin',
  prefix: 'antdAdmin',
  footerText: 'SmartLink Admin  © 2017 smartlinkcloud',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    weather: `${APIV1}/weather`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,

    menus: `${APIV2}/menus`,

    loraTemperature: `${APIV2}/loranode_temperature`,
    loraTemperatures: `${APIV2}/loranode_temperatures`,
    loraTemperatureRecord: `${APIV2}/loranode_temperature_record`,

    loraBat: `${APIV2}/loranode_battery`,
    barns: `${APIV2}/barns`,
    grainQuote: `${APIV2}/grain_quote`,
    grainSmartTempCtrl: `${APIV2}/grain_smart_temperature_control`,
    grainRealtimeTemp: `${APIV2}/grain_realtime_temperature`,
    grainFireAlarm: `${APIV2}/grain_fire_alarm`,
    grainDynamicLinkage: `${APIV2}/grain_dynamic_linkage`,
    grainSecurity: `${APIV2}/grain_security`,
    grainHistory: `${APIV2}/grain_history`,

    concTemp: `${APIV2}/concrete_realtime_temperature`,
    concTemps: `${APIV2}/concrete_temperatures`,
    concTempRecord: `${APIV2}/concrete_temperature_record`,
    concTempHourRecord: `${APIV2}/concrete_temperature_hour_record`,

    concDashboard: `${APIV2}/concrete_dashboard`,

  },
}
