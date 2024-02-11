import React, { useState, useEffect} from 'react';
import './header.css';
import NavListItem from '../components/NavListItem';
import navListData from '../data/navListData';
import Search from '../components/Search';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
function Header({ loggedin, handleLoggedIn }) {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className='logo'>
                <Link to='/home'>
                    <img src='./otflix-logo.png' alt='logo otflix' id='logo' />
                </Link>
            </div>
            <ul className="nav" id="nav">
                {
                    navListData.map(data => (
                        <NavListItem nav={data} key={data._id} />
                    ))
                }
            </ul>
            <Search />
            <Button icon={<ion-icon name="log-in-outline"></ion-icon>} handleLoggedIn={handleLoggedIn} loggedin={loggedin} name={loggedin ? "Se déconnecter" : "Se connecter"} />
        </header>
    )
}

export default Header