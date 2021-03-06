import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { color } from 'utils'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import styles from './concTemps.less'

function Temps ({ data }) {
  return (
    <div className={styles.concTemps}>
      <div className={styles.title}>温度曲线</div>
      <ResponsiveContainer minHeight={360}>
        <LineChart data={data}>
          <Legend verticalAlign="top"
            content={(prop) => {
              const { payload } = prop
              return (<ul className={classnames({ [styles.legend]: true, clearfix: true })}>
                {payload.map((item, key) => <li key={key}><span className={styles.radiusdot} style={{ background: item.color }} />{item.value}</li>)}
              </ul>)
            }}
          />
          <XAxis dataKey="时间" axisLine={{ stroke: color.borderBase, strokeWidth: 1 }} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <CartesianGrid vertical={false} stroke={color.borderBase} strokeDasharray="3 3" />
          <Tooltip
            wrapperStyle={{ border: 'none', boxShadow: '4px 4px 40px rgba(0, 0, 0, 0.05)' }}
            content={(content) => {
              const list = content.payload.map((item, key) => <li key={key} className={styles.tipitem}><span className={styles.radiusdot} style={{ background: item.color }} />{`${item.name}:${item.value}`}</li>)
              return <div className={styles.tooltip}><p className={styles.tiptitle}>{content.label}</p><ul>{list}</ul></div>
            }}
          />
          <Line type="monotone" dataKey="温度1" stroke={color.purple} strokeWidth={3} dot={{ fill: color.purple }} activeDot={{ r: 5, strokeWidth: 0 }} />
          <Line type="monotone" dataKey="温度2" stroke={color.red} strokeWidth={3} dot={{ fill: color.red }} activeDot={{ r: 5, strokeWidth: 0 }} />
          <Line type="monotone" dataKey="温度3" stroke={color.green} strokeWidth={3} dot={{ fill: color.green }} activeDot={{ r: 5, strokeWidth: 0 }} />
          <Line type="monotone" dataKey="温度4" stroke={color.blue} strokeWidth={3} dot={{ fill: color.blue }} activeDot={{ r: 5, strokeWidth: 0 }} />
          <Line type="monotone" dataKey="温度5" stroke={color.yellow} strokeWidth={3} dot={{ fill: color.yellow }} activeDot={{ r: 5, strokeWidth: 0 }} />
          <Line type="monotone" dataKey="温度6" stroke={color.peach} strokeWidth={3} dot={{ fill: color.peach }} activeDot={{ r: 5, strokeWidth: 0 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

Temps.propTypes = {
  data: PropTypes.array,
}

export default Temps
