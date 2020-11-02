import { useSelector } from 'react-redux'

const useAuth = () => {
  const token = useSelector((state) => state.authReducer.token)
  return { isAuthenticated: Boolean(token) }
}

export default useAuth
