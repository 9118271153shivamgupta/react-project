import React, { useState } from 'react';
import UserContext from './UserContext';


const UserContextProvider = ({children}) =>  {

    // const[User, setUser] =React.useState()
    const [user, setUSer] = useState(null)
  return (
    <UserContext.Provider value={{user,setUSer}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider

