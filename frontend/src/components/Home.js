import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user") == null) {
      navigate("/");
    }
  });
  return (
    <div className='size-full bg-primary pb-5'>
      <h1 className='h1 fw-bolder text-center grid items-center text-white text-lg'>
        Plan Your Trip Now !
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="m-2 bi bi-send-fill" viewBox="0 0 16 16">
          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
        </svg>
      </h1> <br />
      <div className='text-center w-100'>
        <div><Link to="/home" className='btn btn-dark m-2 w-25 text-md'>Home</Link></div>
        <div><Link to="/whereto" className='btn btn-dark m-2 w-25 text-md'>Going</Link></div>
        <div><Link to="/towhere" className='btn btn-dark m-2 w-25 text-md'>Need to go</Link></div>
      </div>
      <br /><br /><br /><br /><br />
    </div>
  )
}

export default Home
