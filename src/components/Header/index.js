import React from 'react';
import styles from './style.module.scss';
import Menu from './components/Menu';
import Contacts from './components/Contacts';
import Logo from './components/Logo';

class Header extends React.Component {
    render() {
        return (
            <div className = {styles.header}>
                <Logo />
                <Menu />
                <Contacts />
            </div>
        )
    }
}

export default Header;