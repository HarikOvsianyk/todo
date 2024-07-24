import { IGetTodosPromise, IGetTodoPromise, ITodo, IDeleteTodoPromise } from "../interfaces";
import { HTTPService } from "../services/htttpService";
import { PATH } from "../constants";

export const getTodos = (): Promise<IGetTodosPromise> => HTTPService.get(`${PATH.todos}`);

export const getTodo = (
    id: string
): Promise<IGetTodoPromise> => HTTPService.get(`${PATH.todo}${id}`);

export const createTodo = (
    todo: ITodo
): Promise<IGetTodoPromise> => HTTPService.post(`${PATH.todo}`, todo);

export const deleteTodo = (
    id: string
): Promise<IDeleteTodoPromise> => HTTPService.delete(`${PATH.todo}${id}`)