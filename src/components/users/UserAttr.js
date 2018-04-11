import React from 'react';

import Details from './users/Details'
import Medications from './users/Medications'
import Insurances from './users/Insurances'
import Providers from './users/Providers'

const UserAttr = (props) => {
  <div className="UserInfo">
  {props.users.map(user =>
    <div className="UserAttributes" key={user.id}>
      <Details user={user}/>
      <Medications user={user}/>
      <Insurances user={user}/>
      <Providers user={user}/>
    </div>
  )}
  </div>
};

export default UserAttr;
