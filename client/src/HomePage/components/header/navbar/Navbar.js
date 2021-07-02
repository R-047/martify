import {useState} from 'react'
import './navbar.css'
import Login from '../../login/Login';

function Navbar({NavContainerStyleClassName, NavbarStyleClassName}) {
    const [toggleState, settoggleState] = useState(false);
    function handleLoginClick(e){
        e.preventDefault();
        settoggleState(true);
    }

    function handleLoginClose(){
        settoggleState(false);
    }
    return (
        <nav className={NavbarStyleClassName}>
            <ul className = {NavContainerStyleClassName}>
                <li><a href='www.google.com'>About</a></li>
                <li><a onClick={handleLoginClick}>Login</a></li>
                <li><a href='www.google.com'>Sign Up</a></li>
            </ul>

            <Login isOpen={toggleState} onClose={handleLoginClose}/>
        </nav>
    )
}

export default Navbar
