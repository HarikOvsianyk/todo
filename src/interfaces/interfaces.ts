import { EStatus } from './enums';

export interface ITodo {
    _id?: string,
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

export interface IDeleteTodoResponse {
    status: EStatus;
    error: string | null;
}

export interface IDeleteTodoPromise {
    status: number;
}

export interface ITabs {
    tabsList: string[];
    tabsContent: ITodo[];
}

