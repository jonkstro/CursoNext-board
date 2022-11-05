
import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';


export function SignInButton() {

    // criar variável de sessão, para ele renderizar um botão pra caso estiver
    // logado, e outro caso estiver offline
    const session = true; 

    return session ? (
        // caso o usuário esteja logado: session = true
        <button
            type='button'
            className={styles.signInButton}
            onClick={ () => {} }
        >
            <img src='https://github.com/jonkstro.png' alt='foto do usuario' />
            Olá Jonas
            <FiX color='#737380' className={styles.closeIcon} />
        </button>
    ) : (
        // casso usuário esteja deslogado: session = false
        <button
            type='button'
            className={styles.signInButton}
            onClick={ () => {} }
        >
            <FaGithub color='#FFB800' />
            Entrar com Github
        </button>
    )
}