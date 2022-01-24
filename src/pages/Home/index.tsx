import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import {Container, TaskContainer} from './styles';

import { ReactComponent as CloseIcon}   from '../../assets/icons/close.svg';
import { Task } from '../../contexts/auth';

export const Home = () => {
    const {user, signOut} = useAuth();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tasks, setTasks] = useState<Task[]>(user?.tasks || []);

    useEffect(() => {
        window.document.title = "ToDo - Home";
    }, [])

    useEffect(() => {
        setTasks(user?.tasks || []);
    }, [user])


    const onSubmit = async (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault(); 
       
        const response = await api.post('/tasks', {
            title,
            description,
        });

        setTitle("");
        setDescription("");
        setTasks(state => [...state, response.data]);
    }

    const deleteTask = (id: number) => {
        setTasks(state => state.filter(task => task.id !== id));
    }

    return (
        <Container>
            <header>    
                <h1>ToDo</h1> 
                <Button onClick = {e => {e.preventDefault(); signOut() }}>Sair</Button>
            </header>
            

            <form onSubmit={onSubmit}>
                <Input value={title} onChange = {(e) => setTitle(e.target.value)} placeholder="Título"/>
                <Input value={description} onChange = {(e) => setDescription(e.target.value)} placeholder="Descrição"/>

                <Button type="submit" >Adicionar Tarefa</Button>
            </form>
            
            <ul>
                {tasks.map(task => <TaskItem deleteTask ={deleteTask} key = {task.id} data = {task}/>)}
            </ul>
        </Container> 
    )
}
 
interface TaskProps {
    data: { id: number;
        title: string;
        description: string | null;
        done: boolean;
    }
    deleteTask: (id: number) => void
}

function TaskItem( {data, deleteTask} :  TaskProps) {
    const [done, setDone] = useState(data.done);

    useEffect( () => {
        api.patch(`/tasks/${data.id}/done`, {done});
        console.log('Done', done)
    }, [done, data.id])


    const handleDelete = async () => {
        await api.delete(`/tasks/${data.id}`);
        deleteTask(data.id);
       
    }

    return (
    <TaskContainer className ={done? 'done': ''}>
        <label onClick = {(e) => { e.preventDefault(); setDone(done => !done)}} className="container">
            <input checked= {done} type="checkbox" /> 
            <span className="checkmark"></span>
        </label>
        <div className="content">
            <h4>{data.title}</h4>
            <p>{data.description}</p>
        </div>
        
        <div onClick = {handleDelete} className = 'delete-task'>
            <CloseIcon/>     
        </div>                  
    </TaskContainer>
    )
}