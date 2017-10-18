import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
import { color } from 'utils'
import { Loader } from 'components'
import { ConcDashboard, Weather, Quote } from './components'
import styles from './index.less'
import dashboard from "../../models/dashboard";

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function ConcDash ({ concrete }) {
  const { concDash, weather, quote } = concrete
  console.log('concDash is: ', concDash)
  console.log('weather is: ', weather)
  console.log('quote is: ', weather)

  return (
    <div>
      {/*<Loader spinning={loading.models.dashboard} />*/}
      <Row gutter={24}>

        <Col lg={18} md={24}>
          <Card bordered={false}
                bodyStyle={{
            padding: '24px 36px 24px 0',
          }}
          >
            <ConcDashboard data={concDash} />
          </Card>
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
                <Quote {...quote} />
              </Card>
            </Col>
          </Row>
        </Col>

      </Row>
    </div>
  )
}

ConcDash.propTypes = {
  concrete: PropTypes.object,

}

export default connect(({ concrete}) => ({ concrete }))(ConcDash)
