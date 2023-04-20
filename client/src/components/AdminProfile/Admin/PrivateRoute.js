import {React} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
const whouse=localStorage.getItem('Auth')
export const AdminRoute=({
    element:element})=> {
    const navigate = useNavigate()
    //get the jwt token from the and the check if the user is admin or user, we have to import an external function to check if it's admin or not
    return (
        whouse=="admin"?<>
        <element/>
        </>: 
        <>
        {navigate('/signup')}
        </>
    )
}
export const UserRoute=({
    element: element
})=> {
    const navigate=useNavigate()
    return (
        whouse=="user"? <>
        {element}
        </>
        :
        <>
        {navigate('/signup')}
        </>
    )
}
