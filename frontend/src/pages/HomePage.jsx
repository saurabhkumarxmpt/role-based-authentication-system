import { Link } from "react-router-dom";
const HomePage=()=>{
    return(
        <>
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Role Based Auth System</h1>
      <Link to="/login"><button className="px-6 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition">
        Login
      </button></Link>
    </div>
        </>
    )
}

export default HomePage;