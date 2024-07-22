import { getTodos as getTodosAPI, getTodo as getTodoAPI,deleteTodo as deleteTodoAPI, createTodo as createTodoAPI } from "../api";
import { IGetTodosResponse, IGetTodoResponse, EStatus, ITodo } from "../interfaces";

export const getTodos = async (username: string): Promise<IGetTodosResponse> => {
    try {
        const { data } = await getTodosAPI(
            username
        );

        if (data?.length) {
            return {
                todos: data,
                status: EStatus.success,
                error: null
            }
        }

        return {
            todos: [],
            status: EStatus.empty,
            error: null
        }
    } catch (err) {
        const error = err as Error;
        return {
            todos: null,
            status: EStatus.error,
            error: error.message
        }
    }
}

export const getTodo = async (id: string): Promise<IGetTodoResponse> => {
    try {
        const { data } = await getTodoAPI(
            id
        );

        return {
            todo: data || [],
            status: EStatus.success || EStatus.empty,
            error: null
        }
    } catch (err) {
        const error = err as Error;
        return {
            todo: null,
            status: EStatus.error,
            error: error.message
        }
    }
}

export const createTodo = async (todo: ITodo): Promise<IGetTodoResponse> => {
    try {
        const { data } = await createTodoAPI(todo);

        return {
            todo: data,
            status: EStatus.success || EStatus.empty,
            error: null,
        }
    } catch (err) {
        const error = err as Error;
        return {
            todo: null,
            status: EStatus.error,
            error: error.message
        }
    }
}

export const deleteTodo = async (id: string): Promise<IGetTodoResponse> => {
    try {
        const { data } = await deleteTodoAPI(
            id
        );

        return {
            todo: data || [],
            status: EStatus.success || EStatus.empty,
            error: null
        }
    } catch (err) {
        const error = err as Error;
        return {
            todo: null,
            status: EStatus.error,
            error: error.message
        }
    }
}