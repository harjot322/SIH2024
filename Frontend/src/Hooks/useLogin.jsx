import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {login } from '../Context/Slices/UserSlice.js'


function useLogin() {

    // const dispatch = useDispatch()
    const [loading , setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loginRequest = async (email, password) => {
        try {

            setLoading(true)
            const response = await loginRequestApi(email, password)
            console.log(response)
            if(response.status === 200){
                
                dispatch(login(response.userData));
                
                toast.success('Login successful')
                
                localStorage.setItem('user',JSON.stringify(response.userData));

                navigate('/');

            }else{

                toast.error('Login failed')

            }
            
        } catch (error) {
            
            
            toast.error('Login failed')

        }finally{

            setLoading(false)
        
        }
    }
    return {loginRequest, loading}
    
    
}

export default useLogin


const loginRequestApi = async (email, password) => {
    try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials : 'include',
            body: JSON.stringify({email, password})
        })
        
        return response.json();
        
    } catch (error) {
        console.log(error)
    }

}