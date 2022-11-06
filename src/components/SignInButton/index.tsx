import { useSession, signIn, signOut } from "next-auth/react"

import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';


export function SignInButton() {

    // criar variável de sessão, para ele renderizar um botão pra caso estiver
    // logado, e outro caso estiver offline
    const { data: session } = useSession();

    return session ? (
        // caso o usuário esteja logado: session = true
        <button
            type='button'
            className={styles.signInButton}
            onClick={ () => signOut() }
        >
            <img src={session.user?.image} alt='foto do usuario' />
            Olá {session.user?.name}
            <FiX color='#737380' className={styles.closeIcon} />
        </button>
    ) : (
        // casso usuário esteja deslogado: session = false
        <button
            type='button'
            className={styles.signInButton}
            onClick={ () => signIn('github') }
        >
            <FaGithub color='#FFB800' />
            Entrar com Github
        </button>
    )
}