import { ITask } from '@/types/task';
import axios from 'axios';

export async function axiosGetTask(): Promise<ITask[]> {
    const data = await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos',
        responseType: 'json',
    });

    return data.data;
}

export async function axiosPostTask(task: ITask): Promise<ITask> {
    const data = await axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        responseType: 'json',
        data: task,
    });

    return data.data;
}

export async function axiosDeleteTask(id: number): Promise<ITask> {
    const data = await axios({
        method: 'delete',
        url: `https://jsonplaceholder.typicode.com/todos/${id}`,
        responseType: 'json',
    });

    return data.data;
}

export async function axiosPutTask(task: ITask): Promise<ITask> {
    const data = await axios({
        method: 'put',
        url: `https://jsonplaceholder.typicode.com/todos/${task.id}`,
        responseType: 'json',
        data: task,
    });

    return data.data;
}
