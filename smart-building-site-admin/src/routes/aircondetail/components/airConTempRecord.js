import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button ,DatePicker, message} from 'antd';

const AirConTempRecord = ({ airConTempRecord }) => {
  const columns = [{
    title: '时间',
    dataIndex: 'time',
    key: 'time',
  }, {
    title: '1',
    dataIndex: 'Temp1',
    key: 'Temp1',
  }, {
    title: '2',
    dataIndex: 'Temp2',
    key: 'Temp2',
  },{
    title: '3',
    dataIndex: 'Temp3',
    key: 'Temp3',
  },
  ];
  console.log('airConTempRecord', airConTempRecord)

  return (
    <Table
      dataSource={airConTempRecord}
      columns={columns}
    />
  );
};

AirConTempRecord.propTypes = {
  airConTempRecord: PropTypes.array,
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


export default AirConTempRecord
