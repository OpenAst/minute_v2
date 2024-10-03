import { createContext } from 'react';
 
const UserContext = createContext(undefined);

export const UserProvider = ({children}) => {
  
  const [user] = useState({
    name: "John",
    email: "johnwarp@gmail.com",
    dob: '8/02/1999'
  })
  return <UserContext.Provider></UserContext.Provider>
}