import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
import { color } from 'utils'
import { Loader } from 'components'
import {  AirConRealtimeTemp, AirConTemps, AirConTempRecord } from './components'
import styles from './index.less'
// import TempRecordList from "./components/temprecord";

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function AirConDetail ({ aircondetail }) {
  const { airConRealtimeTemp, airConTemps, airConTempRecord } = aircondetail
  console.log('airConRealtimeTemp', airConRealtimeTemp)
  console.log('airConTemps', airConTemps)
  console.log('airConTempRecord', airConTempRecord)

  const concCards = airConRealtimeTemp.map((item, key) => (<Col key={key} lg={6} md={12}>
    <AirConRealtimeTemp {...item} />
  </Col>))

  return (
    <div>
      {/*<Loader spinning={loading.models.dashboard} />*/}
      <Row gutter={24}>
        {concCards}
        <Col lg={24} md={24}>
          <Card bordered={false}
            bodyStyle={{
              padding: '24px 36px 24px 0',
            }}
          >
            <AirConTemps data={airConTemps} />
          </Card>
        </Col>

      <Col lg={24} md={24}>
        <Card bordered={false}
          bodyStyle={{
            padding: '24px 36px 24px 0',
          }}
        >
          <AirConTempRecord airConTempRecord={airConTempRecord} />
        </Card>
      </Col>

      </Row>
    </div>
  )
}

AirConDetail.propTypes = {
  aircondetail: PropTypes.object,
}

export default connect(({ aircondetail }) => ({ aircondetail }))(AirConDetail)
