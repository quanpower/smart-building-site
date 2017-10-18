import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
import { color } from 'utils'
import { Loader } from 'components'
import { StoreHouse } from './components'
import styles from './index.less'
// import TempRecordList from "./components/temprecord";

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function Grain ({ grain }) {
  const { barns } = grain

  console.log('aaaaa are :', barns)
  const barnCards = barns.map((item, key) => (<Col key={key} lg={6} md={12}>
    <StoreHouse {...item} />
  </Col>))
  console.log('cards are :', barnCards)
  return (
    <div>
      {/*<Loader spinning={loading.models.dashboard} />*/}
      <Row gutter={24}>
        {barnCards}
      </Row>
    </div>
  )
}

Grain.propTypes = {
  grain: PropTypes.object,
}

export default connect(({ grain }) => ({ grain }))(Grain)
