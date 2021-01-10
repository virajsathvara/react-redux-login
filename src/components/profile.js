import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from './productList';

const Profile = () => {

  const { user } = useSelector(state => state);
  return (
    <div>
      {
        user.name
          ?
          <div className="content">
            <ProductList />
          </div>
          :
          <div className="content tim-typo text-center">
            <h1>
              Please Return to login page
          </h1>
          </div>
      }
    </div>);
};

export default Profile;