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

  const onSelectProps = {
    // title: '确定提交操作？',
    // okText: '确定',
    // cancelText: '取消',

    // const Option = Select.Option;

  // function handleChange(value) {
  //   console.log(value); // { key: "lucy", label: "Lucy (101)" }
  // }

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
          endTime: '2017-10-30 23:00:00',
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

        <Select {...onSelectProps}  style={{ width: 120 }} >
          <Option value="110">110</Option>
          <Option value="112">112</Option>
          <Option value="114">114</Option>
        </Select>

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
