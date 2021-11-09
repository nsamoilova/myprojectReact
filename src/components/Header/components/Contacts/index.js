import React from 'react';
import styles from './style.module.scss';
import Phone from './components/Phone';
import Social from './components/Social';

class Contacts extends React.Component {
    render() {
        return (
            <div className={styles.contacts}>
            <Phone />
            <Social />
            </div>
        )
    }
}

export default Contacts;