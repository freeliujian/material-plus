import React,{useContext} from 'react';
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

    </div>
  );
}

export default LeftToRightLogin;