import axios from "axios";

const axiosInstance = axios.create();

interface ITodo {
    id: string;
    label: string;
    complite: boolean;
}
interface ITodoWithoutId{
    label: string;
    complite: boolean;
}

export const TodoAPI = {
    async getAll() {
        const response = await axiosInstance.get('/api/todos');

        return response.data.todos as ITodo[];
    },
    async create(data: ITodoWithoutId) {
        const response = await axiosInstance.post('/api/todos', data);

        return response.data.todos as ITodo;
    },
    //O Partial deixa a pessoa atualizar apenas um campo se ela queser
    //e não necessariamente todos
    async updateById(id: string, data: Partial<ITodoWithoutId>) {
        await axiosInstance.put(`/api/todos/${id}`, data);

        return;
    },
    async deleteById(id: string) {
        await axiosInstance.delete(`/api/todos/${id}`);

        return;
    }
};
