
import { useNavigate } from 'react-router-dom'

function useLogout() {
    let navigate = useNavigate()
  return()=>{
       localStorage.clear()
        navigate('/login')
    }
}


export default useLogout
