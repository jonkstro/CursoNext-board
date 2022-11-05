
import Head from 'next/head';
import styles from '../styles/styles.module.scss';


export default function Home() {
  return (
    <>
      <Head>
        <title>My Board - Organizando suas tarefas.</title>
      </Head>
      <main className={styles.contentContainer}>
        <img src='/images/board-user.svg' alt='ferramenta board' /> 
        
        <section className={styles.callToAction}>
          <h1>
            Uma ferramenta para o seu dia a dia. <span>Escreva, planeje e organize-se...</span>
            <p>
              <span>100% Gratuito</span> e online.
            </p>
          </h1>
        </section>
        
        <h3 className={styles.donatersTitle}>Apoiadores: </h3>
        <div className={styles.donaters}>
        
          <img src='https://github.com/jonkstro.png' alt='foto do apoiador' />        
        </div>
      </main>
    </>
  )
}
