import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button ,DatePicker, message} from 'antd';

const ConcTempRecord = ({ concTempRecord }) => {
  const columns = [{
    title: '节点',
    dataIndex: 'conc_node_id',
    key: 'conc_node_id',
  }, {
    title: '时间',
    dataIndex: 'datetime',
    key: 'datetime',
  }, {
    title: '温度1',
    dataIndex: 'temp1',
    key: 'temp1',
  }, {
    title: '温度2',
    dataIndex: 'temp2',
    key: 'temp2',
  },{
    title: '温度3',
    dataIndex: 'temp3',
    key: 'temp3',
  }, {
    title: '温度4',
    dataIndex: 'temp4',
    key: 'temp4',
  }, {
    title: '温度5',
    dataIndex: 'temp5',
    key: 'temp5',
  },{
    title: '温度6',
    dataIndex: 'temp6',
    key: 'temp6',
  },
  ];
  console.log('concTempRecord', concTempRecord)

  return (
    <Table
      dataSource={concTempRecord}
      columns={columns}
    />
  );
};

ConcTempRecord.propTypes = {
  concTempRecord: PropTypes.array,
};

//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: '',
//     };
//   }
//   handleChange(date) {
//     message.info('您选择的日期是: ' + date.toString());
//     this.setState({ date });
//   }
//   render() {
//     return (
//       <div style={{ width: 400, margin: '100px auto' }}>
//         <DatePicker onChange={value => this.handleChange(value)} />
//         <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
//       </div>
//     );
//   }
// }


export default ConcTempRecord
