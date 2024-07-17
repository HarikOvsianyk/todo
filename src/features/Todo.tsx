import { useEffect } from 'react';
import { Sheet} from '@mui/joy';
import { styled } from '@mui/joy/styles';
import { getTodos, deleteTodo } from '../businessLogic/todo';

const Container = styled(Sheet)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    width: '100wh',
    height: '90vh'
})

export const Todo = () => {
    useEffect(() => {
        const getData = async () => {
            const {todos} = await getTodos('test');
            console.log(todos)
        };

        getData();
        deleteTodo("664e0e8248860eaba1be27f3");
    });

    return (
        <Container variant='plain'>
            <h1>Hello world</h1>
        </Container>
    )
};
