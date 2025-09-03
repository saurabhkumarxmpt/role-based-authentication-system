import { Link } from "react-router-dom";
const HomePage=()=>{
    return(
        <>
        <h1>this is home page</h1>
        <button><Link to='/login'>Login</Link></button>
        </>
    )
}

export default HomePage;