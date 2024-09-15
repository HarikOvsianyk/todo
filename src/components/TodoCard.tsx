import { useState, FunctionComponent } from 'react';
import Card from '@mui/joy/Card';
import { styled } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import CheckCircle from '@mui/icons-material/CheckCircle';
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import Delete from '@mui/icons-material/Delete';
import { ITodo } from '../interfaces';

const TodoContainer = styled(Card)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    margin: '10px'
});

const CheckIcon = styled(CheckCircle)({
    fontSize: '20px',
    color: 'rebeccapurple'
});

const EmptyIcon = styled(RadioButtonUnchecked)({
    fontSize: '20px',
    color: 'rebeccapurple'
});

const DeleteIcon = styled(Delete)({
    fontSize: '20px',
    color: 'rebeccapurple'
});



export const TodoCard: FunctionComponent<{cardData: ITodo, deleteTodo: (id: string) =>void, updateTodo: (params: { id: string, todo: Partial<ITodo> }) => void}> = ({cardData: {todo, isDone, _id}, deleteTodo, updateTodo}) => {
    const [done, setDone] = useState<boolean>(isDone);
    const changeTodo = (id: string) => {
        setDone(prevDone => {
            const newDone = !prevDone;
            updateTodo({id, todo:{ isDone: newDone }});
            return newDone;
        });
    };
    return (
        <TodoContainer>
            <Button variant='outlined' onClick={() => _id && changeTodo(_id)}>{done ? <CheckIcon /> : <EmptyIcon />}</Button >{todo}<Button variant='outlined' onClick={() => deleteTodo(_id!)}><DeleteIcon /></Button>
        </TodoContainer>
    )
}