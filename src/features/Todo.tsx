import { FunctionComponent, useEffect, useState } from 'react';
import { Sheet} from '@mui/joy';
import { styled } from '@mui/joy/styles';
import { getTodos } from '../businessLogic/todo';
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

export const Todo:FunctionComponent = () => {
    const [todosList, setTodosList] = useState<ITodo[]>([]);
    useEffect(() => {
        const getData = async () => {
            const {todos} = await getTodos('test');
            todos !== null && setTodosList(todos);
        };
        getData();
    }, []);

    return (
        <Container variant='plain'>
            <Logo/>
            <TodoInput />
            <List todos={todosList} />
        </Container>
    )
};
