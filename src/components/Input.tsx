import { FunctionComponent, useState, FormEvent } from 'react';
import { styled } from '@mui/joy/styles';
import { Input, Sheet } from '@mui/joy';
import Add from '@mui/icons-material/Add';
import Button from '@mui/joy/Button';
import { ITodo } from '../interfaces';

const InputContainer = styled(Sheet)({
    display: 'flex',
    justifyContent: 'center',
    width: '25%',
    margin: '20px 0 20px 0'
})
const TextInput = styled(Input)({
    display: 'flex',
    width: '100%',
})

export const TodoInput: FunctionComponent<{createTodo: (todo: ITodo) => void}> = ({createTodo}) => {
    const [value, setValue] = useState<string>('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createTodo({
            todo: value,
            isDone: false,
            hasAttachment: false,
        })
        setValue('');
    };
    return (
        <InputContainer>
            <form onSubmit={handleSubmit}>
                <TextInput
                    placeholder='What do you need to do?'
                    startDecorator={<Add />}
                    endDecorator={<Button type='submit'>ADD</Button>}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
        </InputContainer>
    )
}