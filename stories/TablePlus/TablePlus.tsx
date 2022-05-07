import React, { useContext, useState ,ReactNode} from 'react';
import {Table, TableProps} from 'antd';
import { ConfigContext } from '../config-provide';
import classnames from 'classnames';
import './TablePlus.less';

// interface TablePlueProps<RecordType> extends TableProps<RecordType>  {
//   title:ReactNode;
  

// }

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];
const col = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a>{text}</a>,
},
{
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
},
{
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
},]

function TablePlus<RecordType extends object = any>(props: any){
  const {title} = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('tablePlue-container-root');
  return (
    <div className={classnames(prefixCls)}>
      <div className='tablePlue-title'>
        数据模拟
      </div>
      <Table
        columns={col}
        dataSource={dataSource}
      />
    </div>
  )
}

export default TablePlus;
