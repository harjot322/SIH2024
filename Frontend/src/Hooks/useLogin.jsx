import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'


function useLogin() {

    // const dispatch = useDispatch()
    const [loading , setLoading] = useState(false)
    const navigate = useNavigate()

    const login = async (email, password) => {
        try {

            setLoading(true)
            const response = await loginRequest(email, password)
            console.log(response)
            if(response.status === 200){
                
                // dispatch(login(response.userData));
                toast.success('Login successful')
                console.log(response.userData)
                navigate('/list');

            }else{

                toast.error('Login failed')

            }
            
        } catch (error) {
            
            
            toast.error('Login failed')

        }finally{

            setLoading(false)
        
        }
    }
    return {login, loading}
    
    
}

export default useLogin


const loginRequest = async (email, password) => {
    try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        })
        
        return response.json();
        
    } catch (error) {
        console.log(error)
    }

}