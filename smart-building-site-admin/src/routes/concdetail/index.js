import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card, Select, message } from 'antd'
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



function ConcDetail ({ concdetail, dispatch }) {

  const { concRealtimeTemp, concTemps, concTempRecord } = concdetail
  console.log('concRealtimeTemp is:', concRealtimeTemp)
  console.log('concTemps are:', concTemps)
  console.log('concTempRecord are:', concTempRecord)

  const { Option, OptGroup } = Select

  const onSelectProps = {


    onChange (value) {
      console.log('选中节点是：', value)
      message.success('筛选成功！')

      dispatch({
        type: 'concdetail/fetchAirConRealtimeTemp',
        payload: {
          gatewayAddr: '1',
          nodeAddr: value,
        },
      })

      dispatch({
        type: 'concdetail/fetchAirConTemps',
        payload: {
          gatewayAddr: '1',
          nodeAddr: value,
        },
      })

      dispatch({
        type: 'concdetail/fetchAirConTempRecord',
        payload: {
          gatewayAddr: '1',
          nodeAddr: value,
          startTime: '2017-10-20 00:00:00',
          endTime: '2017-12-30 23:00:00',
        },
      })

    },

  }




  const concCards = concRealtimeTemp.map((item, key) => (<Col key={key} lg={6} md={6}>
    <ConcRealtimeTemp {...item} />
  </Col>))

  return (
    <div>
      {/*<Loader spinning={loading.models.dashboard} />*/}
      <Row gutter={24}>
        {/*todo*/}


        <Col lg={24} md={24}>
          <Card bordered={false}
                bodyStyle={{
                  padding: '24px 36px 24px 0',
                }}
          >
            <Select {...onSelectProps} defaultValue='112' style={{ width: 120 }} >

              <OptGroup label="B-9">
                <Option value="108">108</Option>
              </OptGroup>
            </Select>

          </Card>
        </Col>

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


