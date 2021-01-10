import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logging_out, reset_products } from '../actions';
import { useHistory } from 'react-router-dom';

const Layout = (props) => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logging_out());
    dispatch(reset_products());
    history.push("/");
  };

  return (
    <div>
      <nav className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
        <div className="container">
          {user.name && <>
            <div className="navbar-translate">
              <div className="navbar-brand">
                Hello {user.name}!
            </div>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"> <button className="btn btn-danger btn-round" onClick={handleLogout}>logout</button></li>
              </ul>
            </div>
          </>}
        </div>
      </nav>
      {props.children}
    </div>
  );
};
export default Layout;