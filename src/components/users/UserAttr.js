import React from 'react';

import Details from './Details'
import Medications from './Medications'
import Insurances from './Insurances'
import Providers from './Providers'

const UserAttr = (props) => {
  return (
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
  )
};

export default UserAttr;
