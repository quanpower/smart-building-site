import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button ,DatePicker, message} from 'antd';

const TempRecord = ({ tempRecord }) => {
  const columns = [{
    title: '时间',
    dataIndex: '时间',
    key: '时间',
  }, {
    title: '温度1',
    dataIndex: '温度1',
    key: '温度1',
  }, {
    title: '温度2',
    dataIndex: '温度2',
    key: '温度2',
  },{
    title: '温度3',
    dataIndex: '温度3',
    key: '温度3',
  },
  ];
  console.log('dashboardTempRecord', tempRecord)

  return (
    <Table
      dataSource={tempRecord}
      columns={columns}
    />
  );
};

TempRecord.propTypes = {
  tempRecord: PropTypes.array,
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


export default TempRecord
