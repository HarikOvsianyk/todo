import { IGetTodosPromise } from "../interfaces";
import { HTTPService } from "../services/htttpService";
import { PATH } from "../constants";

export const getTodos = (
    username: string
): Promise<IGetTodosPromise> => HTTPService.get(`${PATH.todos}${username}`);