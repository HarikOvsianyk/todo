import { FunctionComponent } from 'react';
import { Sheet} from '@mui/joy';
import { styled } from '@mui/joy/styles';
import { TodoCard } from './TodoCard';
import { ITodo } from '../interfaces';

const ListContainer = styled(Sheet)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    '@media (min-width: 1440px)': {
        width: '30%',
      },
});

export const List:FunctionComponent<{todos: ITodo[], deleteTodo: (id: string) => void, updateTodo: (params: { id: string, todo: Partial<ITodo> }) => void}> = ({todos, deleteTodo, updateTodo}) => {
    return (
        <ListContainer>
            {todos.map((todo, index) => (
                <TodoCard key={index} cardData={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            ))}
        </ListContainer>
    )
}

