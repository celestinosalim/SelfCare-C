import React from 'react';

const Details = ({user}) => {
  return (
    <div className="UserDetails">
      <div className="AttrTitle">
        <h1>{user.name}</h1>
      </div>
      <div className='AttrInfo' key={user.id}>
        <p>Email: {user.email}</p>
      </div>
    </div>
  )
};

export default Details;
