import React from 'react'
import { Table } from 'antd'
import styles from './List.less'

const List = ({ ...tableProps }) => {
  const columns = [{
    title: '序号',
    dataIndex: 'key',
    }, {
      title: '图标',
      dataIndex: 'image',
      className: styles.image,
      width: 64,
      render: text => <img alt="Feture" width={26} src={text} />,
    }, {
      title: '节点',
      dataIndex: 'conc_node_id',
    }, {
      title: '日期时间',
      dataIndex: 'datetime',
    }, {
      title: '温度1',
      dataIndex: 'temp1',
    }, {
      title: '温度2',
      dataIndex: 'temp2',
    }, {
      title: '温度3',
      dataIndex: 'temp3',
    }, {
      title: '温度4',
      dataIndex: 'temp4',
    }, {
      title: '温度5',
      dataIndex: 'temp5',
    }, {
      title: '温度6',
      dataIndex: 'temp6',
    }, {
      title: '电池',
      dataIndex: 'battery_vol',
    },
  ]

  return (
    <div>
      <Table
        {...tableProps}
        bordered
        scroll={{ x: 850 }}
        columns={columns}
        simple
        className={styles.table}
        rowKey={record => record.id}
      />
    </div>
  )
}

export default List
