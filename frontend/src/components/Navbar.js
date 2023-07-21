import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = (props) => {
    const navigate = useNavigate();
    return (
        <nav className="py-2 text-center bg-primary bg-light text-center position-relative fixed-top">
            <Link to="/home" className='btn text-dark'>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="m-2 bi bi-send-fill" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg>
            </Link>
            <Link to="/home" className='btn btn-dark hover-expand mx-2 text-sm'>Home</Link>
            <Link to="/whereto" className='btn btn-dark hover-expand mx-2 text-sm'>Going</Link>
            <Link to="/towhere" className='btn btn-dark hover-expand mx-2 text-sm'>Need to go</Link>
            <div className='btn btn-danger mx-2 text-sm'
                onClick={() => {
                    localStorage.removeItem('user');
                    navigate("/");
                }}
            >Logout</div>
        </nav>
    )
}

export default Navbar

