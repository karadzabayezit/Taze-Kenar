import { Navigate } from "react-router-dom"

const MissingRoute = () => {
  return <Navigate to={{pathname: '/home'}} />
}

export default MissingRoute