
import styles from './styles.module.scss';
import Head from 'next/head';
import { FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock } from 'react-icons/fi';
import { SupportButton } from '../../components/SupportButton';

export default function Board() {
    return (
        <>
            <Head>
               <title>Minhas Tarefas - Board</title> 
            </Head>
            <main className={styles.container}>
                <form>
                    <input 
                        type="text"
                        placeholder='Digite a sua tarefa' 
                    />
                    <button type='submit'>
                        <FiPlus size={25} color='#17181F' />
                    </button>
                </form>

                <h1>Você tem duas tarefas!</h1>

                <section>
                    <article className={styles.taskList}>
                        <p>Aprender criar projetos usando nextjs</p>
                        <div className={styles.actions}>
                            <div>
                                <div>
                                    <FiCalendar size={20} color='#FFB800' />
                                    <time>17 DE JULHO DE 2021</time>
                                </div>
                                <button>
                                    <FiEdit2 size={20} color='#FFF' />
                                    <span>Editar</span>
                                </button>
                            </div>

                            <button>
                                <FiTrash size={20} color='#FF3636' />
                                <span>Excluir</span>
                            </button>
                        </div>
                    </article>
                </section>
            
            </main>

            <div className={styles.vipContainer}>
                <h3>Obrigado por apoiar esse projeto.</h3>
                <div>
                    <FiClock size={20} color='#FFF' />
                    <time>
                        Última doação foi a 3 dias.
                    </time>
                </div>
            </div>
            <SupportButton/>
        </>
    )
}