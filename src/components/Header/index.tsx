import Link from 'next/link';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';


export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link legacyBehavior href='/'>
                    <img src='/images/logo.svg' alt='Logo meu Board' />
                </Link>
                <nav>
                    <Link legacyBehavior href='/'>
                        <a> Home </a>
                    </Link>
                    <Link legacyBehavior href='/board'>
                        <a> Meu board </a>
                    </Link>
                </nav>
                
                <SignInButton />

            </div>
        </header>
    )
}