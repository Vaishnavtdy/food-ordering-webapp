import React from 'react'
import './Navbar.css'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useNavigate, Link } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate()
    return (
        <nav className='navigation'>
            <ul>
                <li className='list active'>
                    <b></b>
                    <b></b>
                    <Link to='/' className='nav__link'>
                        <span>
                            <ArticleOutlinedIcon fontSize="small" className='nav__icon' />
                            <span className='nav__title'>Home</span>
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar