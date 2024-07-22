import { FunctionComponent } from 'react';
import { Sheet} from '@mui/joy';
import { styled } from '@mui/joy/styles';
import { TodoCard } from './TodoCard';
import { ITodo } from '../interfaces';

const ListContainer = styled(Sheet)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '20%'
});

export const List:FunctionComponent<{todos: ITodo[], deleteTodo: (id: string) => void}> = ({todos, deleteTodo}) => {
    return (
        <ListContainer>
            {todos.map((todo, index) => (
                <TodoCard key={index} cardData={todo} deleteTodo={deleteTodo}/>
            ))}
        </ListContainer>
    )
}

