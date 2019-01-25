import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';


const Login = props => {
  return (
    <form className="k-form" onSubmit={props.handleLogin} autoComplete="off">
      <fieldset>
        <legend>Log in</legend>
        <div className="mb-3">
          <Input
            name="username"
            label="Username"
            required={true}
            style={{ width: '100%' }}
            value={props.username}
            onChange={props.handleUsernameChange}
          />
        </div>
        <div>
          <Button type="submit" primary={true}>
            Sign in
          </Button>
        </div>
      </fieldset>
    </form>
  );
};

export default Login;
