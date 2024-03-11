import { Navigate } from 'react-router-dom';



function AccountLayout({children}) {
        const user = localStorage.getItem("token") ? true : false

        if (!user) {
            return <Navigate to="/login" />
        }
        return children
    
   
}

export default AccountLayout