import {Children, React, useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from './MainComponents/Navbar/Navbar';

export const AdminRoute=({
    element:element})=> {
        let whouse=localStorage.getItem('Auth')
        const navigate = useNavigate()
    useEffect(()=> {
        whouse=localStorage.getItem('Auth')
        if (whouse!=="admin") {
            
            window.alert("Not an admin, Unauthorized access login as admin  ")
            navigate('/signup')
        }
    },[whouse])

    //get the jwt token from the and the check if the user is admin or user, we have to import an external function to check if it's admin or not
    if (whouse=="admin"){
        return (
            <>
            <Navbar/>
            {element}
            </>
        )
    }
}
export const UserRoute=({
    element: element
})=> {
    let whouse=localStorage.getItem('Auth')
    const navigate=useNavigate()
    useEffect(()=> {
        whouse=localStorage.getItem('Auth')
        if (whouse!=="user") {
            window.alert("not signed in")
            navigate('/signup')
        }
    },[whouse])
    if (whouse=="user") {
        return (
            <>
            <Navbar/>
            {element}
            </>
        )
    }
}
// a potential problem is that sign up means that they would again sign in 