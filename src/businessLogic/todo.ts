import { getTodos as getTodosAPI } from "../api";
import { IGetTodosResponse, EStatus } from "../interfaces";

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