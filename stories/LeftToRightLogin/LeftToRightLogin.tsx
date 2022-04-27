import React,{useContext} from 'react';
import {Button} from 'antd';
import {ConfigContext} from '../config-provide';
import classnames from 'classnames';
import './LeftToRightLogin.less';

export interface LeftToRightLoginProps {
  background?:string
  slogan?:string
  
}

const LeftToRightLogin = (props:any) => {

  const {getPrefixCls} = useContext(ConfigContext);
  const prefixCls = getPrefixCls('login-container');
  return (
    <div className={classnames(prefixCls)}>
      <Button type="primary">button</Button>
    </div>
  );
}

export default LeftToRightLogin;