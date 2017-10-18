import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
import { color } from 'utils'
import { Loader } from 'components'
import {  ConcRealtimeTemp, ConcTemps, ConcTempRecord } from './components'
import styles from './index.less'
// import TempRecordList from "./components/temprecord";

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function ConcDetail ({ concdetail }) {
  const { concRealtimeTemp, concTemps, concTempRecord } = concdetail
  console.log('concRealtimeTemp', concRealtimeTemp)
  console.log('concTemps', concTemps)
  console.log('concTempRecord', concTempRecord)

  const concCards = concRealtimeTemp.map((item, key) => (<Col key={key} lg={6} md={12}>
    <ConcRealtimeTemp {...item} />
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
            <ConcTemps data={concTemps} />
          </Card>
        </Col>

      <Col lg={24} md={24}>
        <Card bordered={false}
          bodyStyle={{
            padding: '24px 36px 24px 0',
          }}
        >
          <ConcTempRecord concTempRecord={concTempRecord} />
        </Card>
      </Col>

      </Row>
    </div>
  )
}

ConcDetail.propTypes = {
  concdetail: PropTypes.object,
}

export default connect(({ concdetail }) => ({ concdetail }))(ConcDetail)
