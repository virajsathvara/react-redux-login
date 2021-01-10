import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logging_in } from '../actions';
import { useHistory } from 'react-router-dom';
import "../assets/css/material-kit.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      password
    };
    console.log('in submit');
    if (name && password) {
      dispatch(logging_in(user));
      history.push('/profile');
    };
  };
  return (
    <div className="page-header header-filter">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 ml-auto mr-auto">
            <div className="card card-login">
              <form className="form" onSubmit={handleSubmit} action="./profile.js">
                <div className="card-header card-header-primary text-center">
                  <h4 className="card-title">Login</h4>
                </div>
                <div className="card-body">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="material-icons">face</i>
                      </span>
                    </div>
                    <input type="name" className="form-control" placeholder="Name..." value={name} onChange={e => setName(e.target.value)} />
                  </div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="material-icons">lock_outline</i>
                      </span>
                    </div>
                    <input type="password" className="form-control" placeholder="Password..." value={password} onChange={e => setPassword(e.target.value)} />
                  </div>
                </div>
                <div className="footer text-center">
                  <button className="btn btn-primary btn-link btn-wd btn-lg" type="submit">Get Started</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>);
};

export default Login;