import { Button } from 'antd';
import React, { useState } from 'react';
import './Login.less';

export interface LoginProps {
  url: string;
  onClick?: () => void;
}

export const Login = (props: LoginProps) => {
  const { } = props;
  const [ email, setEmail ] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <>
      <div className='root-login'>
        <p className='label-title'>Sign In</p>
        <div>
          <p>Email</p>
          <input placeholder='Enter you email' value={email} onChange={handleChangeEmail} />
        </div>
        <div>
          <div className='label-password'>
            <p>Password</p>
            <p>Forgot password</p>
          </div>
          <input placeholder='Enter you password' value={password} onChange={handleChangePassword} />
          </div>
        </div>
        <div>
        <div>
          <Button type="primary">Sign In</Button>
        </div>
      </div>
    </>
  );
};
