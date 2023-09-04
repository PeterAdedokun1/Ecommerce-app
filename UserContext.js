import { createContext,useState } from "react";



const UserType = createContext();

const userContext = ({ children }) => {
    const [ userId,setUserId] = useState("")
    return (
        <UserType value={{userId, setUserId}}>
            {children}
        </UserType>
    )
}


export {UserType, userContext}