import React, { useState, useEffect } from 'react';
import { ContextUsers } from './ContextUsers';

export function ContextUsersProvider({children,...props}) {
  const [users, setUsers] = useState({});
  useEffect(() => {
    setUsers(INITIAL_STATE_USERS);
  }, []);

  return (
    <ContextUsers.Provider value = {{users, setUsers}}>
      {children}
    </ContextUsers.Provider>
  )
}

export default ContextUsersProvider ;

const INITIAL_STATE_USERS = {
  userA:{
    score:0,
    streak:0,
    name:'user A'
  },
  userB:{
    score:0,
    streak:0,
    name:'user B'
  }
};