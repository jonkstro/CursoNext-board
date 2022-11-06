
import { useState, FormEvent } from 'react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

import styles from './styles.module.scss';
import Head from 'next/head';
import { FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock } from 'react-icons/fi';
import { SupportButton } from '../../components/SupportButton';

import firebase from '../../services/firebaseConnection';
import { format } from 'date-fns'
import Link from 'next/link';



type TaskList = {
    id: string;
    created: string | Date;
    createdFormated?: string;
    tarefas: string;
    email: string;
    nome: string;
}


interface BoardProps {
    user: {
        // id: string;
        nome: string;
        email: string;
    }
    data: string;
}


export default function Board({ user, data }: BoardProps) {

    // criar useState de dados que serão armazenados:
    const [input, setInput] = useState('');
    const [taskList, setTaskList] = useState<TaskList[]>(JSON.parse(data));

    async function handleAddTask(e:FormEvent){
        e.preventDefault();
        if (input==''){
            alert('Preencha uma tarefa');
            return;
        }

        await firebase.firestore().collection('tarefas').add({
            created: new Date(),
            tarefas: input,
            email: user.email,
            nome: user.nome
        }).then((doc)=>{
            // criar objeto data para salvar dentro do array de objeto do useState
            let data = {
                id: doc.id,
                created: new Date(),
                createdFormated: format(new Date(), 'dd/MM/yyyy'),
                tarefas: input,
                email: user.email,
                nome: user.nome,
            };
            
            setTaskList([...taskList, data]);
            setInput('');
            alert('Cadastrado com id: '+ doc.id);

        }).catch((err)=>{
            console.log('Erro ao cadastrar: ',err);
        })




    }


    return (
        <>
            <Head>
               <title>Minhas Tarefas - Board</title> 
            </Head>
            <main className={styles.container}>
                <form onSubmit={handleAddTask}>
                    <input 
                        type="text"
                        placeholder='Digite a sua tarefa' 
                        value={input}
                        onChange={(e)=> setInput(e.target.value) }
                    />
                    <button type='submit'>
                        <FiPlus size={25} color='#17181F' />
                    </button>
                </form>

                <h1>Você tem duas tarefas!</h1>

                <section>
                    {taskList.map( task => (
                        <article className={styles.taskList}>
                            <Link legacyBehavior href={'/board/'+task.id}>
                                <p>{task.tarefas}</p>
                            </Link>
                            <div className={styles.actions}>
                                <div>
                                    <div>
                                        <FiCalendar size={20} color='#FFB800' />
                                        <time>{task.createdFormated}</time>
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
                    ))}
                    
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

// realizar a análise no lado do servidor se o usuário está logado
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req });

    console.log(session);
    // caso usuário não esteja logado, será redirecionado para home, ou outra página
    if(!session){
        return{
            redirect:{
                destination: '/',
                permanent: false
            }
        }
    }

    // receber as propriedades dos itens das tarefas
    const tasks = await firebase.firestore().collection('tarefas').orderBy('created', 'asc').get();

    const data = JSON.stringify(tasks.docs.map(u => {
        return {
            id: u.id,
            createdFormated: format(u.data().created.toDate(), 'dd/MM/yyyy'),
            ...u.data()
        }
    }))

    // construir o objeto user
    const user = {
        nome: session.user?.name,
        email: session.user?.email
    }

    return {
        props:{
            user,
            data
        }
    }


}

