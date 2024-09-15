import { FunctionComponent } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Sheet, LinearProgress } from '@mui/joy';
import { styled } from '@mui/joy/styles';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../businessLogic/todo';
import { Logo, TodoInput, List, Notification } from '../components';
import { ITodo } from '../interfaces';

const Container = styled(Sheet)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    '@media (min-width: 600px)': {
        width: '70%',
    }
});

const Loader = styled(LinearProgress)({
    color: 'rebeccapurple'
})


export const Todo: FunctionComponent = () => {
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery({
        queryKey: ['todos'],
        queryFn: () => getTodos(),
    });

    const createTodoFN = useMutation({
        mutationFn: (todo: ITodo) => createTodo(todo),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] })
    });

    const updateTodoFN = useMutation({
        mutationFn: ({ id, todo }: { id: string, todo: Partial<ITodo> }) => updateTodo(id, todo),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] })
    });

    const deleteTodoFN = useMutation({
        mutationFn: (id: string) => deleteTodo(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] })
    });

    const todos = data?.todos ?? [];
    return (
        <Container variant='plain'>
            {isLoading ? <Loader
                size="lg"
                variant="soft"
            /> :
                <>
                    <Logo />
                    <TodoInput createTodo={createTodoFN.mutate} />
                    <List todos={todos} deleteTodo={deleteTodoFN.mutate} updateTodo={updateTodoFN.mutate} /></>}
                    <Notification/>
        </Container>
    )
};
