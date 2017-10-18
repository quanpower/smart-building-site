import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Card } from 'antd'
import styles from './storeHouse.less'

function StoreHouse ({ icon, color, title, number }) {
  return (
    <Card className={styles.storeHouse} bordered={false} bodyStyle={{ padding: 0 }}>
      <Icon className={styles.iconWarp} style={{ color }} type={icon} />
      <div className={styles.content}>
        <p className={styles.title}>{title || 'No Title'}</p>
        <p className={styles.number}>
          {number}℃
        </p>
      </div>
    </Card>
  )
}

StoreHouse.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.number,
}

export default StoreHouse
