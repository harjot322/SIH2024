import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'


function useRegister() {

    const [loading , setLoading] = useState(false)
    const navigate = useNavigate()
    

    const register = async (name,email, password) => {

        try {
            setLoading(true)
            const response = await registerRequest(name,email, password)
            console.log(response)
            if(response.status === 200){
                
                toast.success('Register successful')
                navigate('/login');

            }else{
                
                toast.error(response.message)
            }
        } catch (error) {
            
            toast.error(error.message)

        }finally{
            setLoading(false)
        }
    }
    return {register, loading}
}

export default useRegister


const registerRequest = async (name , email, password) => {
    try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name,email, password})
        })
        return response.json();
    } catch (error) {
        console.log(error)
    }
}