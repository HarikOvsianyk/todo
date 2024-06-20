import { useEffect } from 'react';
import { Sheet} from '@mui/joy';
import { styled } from '@mui/joy/styles';
import { getTodos } from '../businessLogic/todo';

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
    });

    return (
        <Container variant='plain'>
            <h1>Hello world</h1>
        </Container>
    )
};
