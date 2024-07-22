import { IGetTodosPromise, IGetTodoPromise, ITodo } from "../interfaces";
import { HTTPService } from "../services/htttpService";
import { PATH } from "../constants";

export const getTodos = (
    username: string
): Promise<IGetTodosPromise> => HTTPService.get(`${PATH.todos}${username}`);

export const getTodo = (
    id: string
): Promise<IGetTodoPromise> => HTTPService.get(`${PATH.todo}${id}`);

export const createTodo = (
    todo: ITodo
): Promise<IGetTodoPromise> => HTTPService.post(`${PATH.todo}`, todo);

export const deleteTodo = (
    id: string
): Promise<IGetTodoPromise> => HTTPService.delete(`${PATH.todo}${id}`)