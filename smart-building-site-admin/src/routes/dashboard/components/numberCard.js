import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Card } from 'antd'
import styles from './numberCard.less'

function NumberCard ({ icon, color, title, number }) {
  return (
    <Card className={styles.numberCard} bordered={false} bodyStyle={{ padding: 0 }}>
      <Icon className={styles.iconWarp} style={{ color }} type={icon} />
      <div className={styles.content}>
        <p className={styles.title}>{title || 'No Title'}</p>
        <p className={styles.number}>
          {number}
        </p>
      </div>
    </Card>
  )
}

NumberCard.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.number,
}

export default NumberCard
