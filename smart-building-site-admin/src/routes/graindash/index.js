import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
import { color } from 'utils'
import { Loader } from 'components'
import { AirConDashboard, Weather, DynamicLinkage, FireAlarm, RealtimeTemp, Security, SmartTempCtrl, Quote } from './components'
import styles from './index.less'
import dashboard from "../../models/dashboard";

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function GrainDash ({ graindash }) {
  const { airConDash, weather, dynamiclinkage, firealarm, realtimetemp, security, smarttempctrl, quote } = graindash
  console.log('airConDash is: ', airConDash)
  console.log('weather is: ', weather)
  console.log('quote is: ', quote)

  return (
    <div>
      {/*<Loader spinning={loading.models.dashboard} />*/}
      <Row gutter={24}>

        <Col lg={12} md={24}>
          <Card bordered={false}
                bodyStyle={{
            padding: '24px 36px 24px 0',
          }}
          >
            <AirConDashboard data={airConDash} />
          </Card>
        </Col>

        <Col lg={6} md={24}>
          <Row gutter={24}>

            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.quote}
                    bodyStyle={{
                      padding: 0,
                      height: 204,
                      background: color.purple,
                    }}
              >
                <SmartTempCtrl {...smarttempctrl} />
              </Card>
            </Col>

            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.quote}
                    bodyStyle={{
                      padding: 0,
                      height: 204,
                      background: color.green,
                    }}
              >
                <RealtimeTemp {...realtimetemp} />
              </Card>
            </Col>

            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.quote}
                    bodyStyle={{
                      padding: 0,
                      height: 204,
                      background: color.red,
                    }}
              >
                <FireAlarm {...firealarm} />
              </Card>
            </Col>

          </Row>
        </Col>

        <Col lg={6} md={24}>
          <Row gutter={24}>
            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.weather}
                    bodyStyle={{
                      padding: 0,
                      height: 204,
                      background: color.blue,
                    }}
              >
                <Weather {...weather} />

                {/*<Weather {...weather} loading={loading.effects['dashboard/queryWeather']} />*/}
              </Card>
            </Col>

            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.quote}
                    bodyStyle={{
                      padding: 0,
                      height: 204,
                      background: color.peach,
                    }}
              >
                <DynamicLinkage {...dynamiclinkage} />
              </Card>
            </Col>

            <Col lg={24} md={12}>
              <Card bordered={false}
                    className={styles.quote}
                    bodyStyle={{
                      padding: 0,
                      height: 204,
                      background: color.yellow,
                    }}
              >
                <Security {...security} />
              </Card>
            </Col>

          </Row>
        </Col>

      </Row>
    </div>
  )
}

GrainDash.propTypes = {
  graindash: PropTypes.object,

}

export default connect(({ graindash}) => ({ graindash }))(GrainDash)
