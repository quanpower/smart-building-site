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
              <OptGroup label="A-1">
                <Option value="112">112</Option>
              </OptGroup>
              <OptGroup label="A-2">
                <Option value="101">101</Option>
                <Option value="103">103</Option>
                <Option value="105">105</Option>
                {/*<Option value="107">107</Option>*/}

                <Option value="109">109</Option>
                <Option value="115">115</Option>
              </OptGroup>
              <OptGroup label="A-3">
                <Option value="102">102</Option>
                <Option value="110">110</Option>
                <Option value="114">114</Option>


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


