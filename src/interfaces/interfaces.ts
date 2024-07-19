import { EStatus } from './enums';

export interface ITodo {
    username?: string;
    todo: string;
    isDone: boolean;
    hasAttachment?: boolean;
}

export interface IGetTodosResponse {
    todos: ITodo[] | null;
    status:  EStatus;
    error: string | null;
}

export interface IGetTodoResponse extends Omit<IGetTodosResponse, 'todos'> {
    todo: ITodo | null;
}

export interface IGetTodosPromise {
    data: ITodo[];
}

export interface IGetTodoPromise {
    data: ITodo;
}

export interface ITabs {
    tabsList: string[];
    tabsContent: ITodo[];
}

