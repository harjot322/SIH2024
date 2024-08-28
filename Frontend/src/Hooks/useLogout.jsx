import React from 'react'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout as lg} from '../Context/Slices/UserSlice.js'
import { useState } from 'react'
function useLogout() {


    const [loading , setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = async () => {
        
        try{
            console.log('logout')
            setLoading(true)
            

            const response = await fetch('http://localhost:5000/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'

            })

            console.log(response)
            if(response.status === 200){

                dispatch(lg());
                toast.success('Logout successful')
                localStorage.removeItem('user')
                
                navigate('/')
            }else {
                toast.error('Logout failed');
            }

        }catch(error){
        
            toast.error(error.message)
            
        }finally{
            setLoading(false)
        }

    }

    return {logout , loading}
}

export default useLogout