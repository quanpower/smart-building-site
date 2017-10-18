import React from 'react'
import PropTypes from 'prop-types'
import styles from './smartTempCtrl.less'
import { routerRedux, Link} from 'dva/router'

function SmartTempCtrl ({ name, content, title, avatar }) {
  return (
    <div className={styles.quote}>
      <div className={styles.inner}>
        {content}
      </div>
      <div className={styles.footer}>
        <div className={styles.description}>
          <p>{name}</p>
          <h1><Link to="/aircon_control" activeStyle={{ color: 'black' }}>{title}</Link></h1>
        </div>
        <div className={styles.avatar} style={{ backgroundImage: `url(${avatar})` }} />
      </div>
    </div>
  )
}

SmartTempCtrl.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.string,
}

export default SmartTempCtrl
