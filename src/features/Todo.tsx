import { FunctionComponent } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Sheet } from '@mui/joy';
import { styled } from '@mui/joy/styles';
import { getTodos, createTodo, deleteTodo } from '../businessLogic/todo';
import { Logo, TodoInput, List } from '../components';
import { ITodo } from '../interfaces';

const Container = styled(Sheet)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    width: '100wh',
    height: '90vh'
})


export const Todo: FunctionComponent = () => {
    const queryClient = useQueryClient();
    const { data, error, isLoading } = useQuery({
        queryKey: ['todos'],
        queryFn: () => getTodos(),
    });

    const createTodoFN = useMutation({
        mutationFn: (todo: ITodo) => createTodo(todo),
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['todos']})
    });

    const deleteTodoFN = useMutation({
        mutationFn: (id: string) => deleteTodo(id),
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['todos']})
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error instanceof Error) {
        return <div>Error: {error.message}</div>;
    }

    const todos = data?.todos ?? [];
    return (
        <Container variant='plain'>
            <Logo />
            <TodoInput createTodo={createTodoFN.mutate}/>
            <List todos={todos} deleteTodo={deleteTodoFN.mutate}/>
        </Container>
    )
};
