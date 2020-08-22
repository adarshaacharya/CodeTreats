import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

export const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.nav__items}>
                <li>
                    <Link to='/' className={styles.nav__item}>
                        {' '}
                        Home{' '}
                    </Link>
                </li>

                <li>
                    <Link to='/snippets' className={styles.nav__item}>
                        Snippets
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
