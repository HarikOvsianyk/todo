import { FunctionComponent } from 'react';
import { styled } from '@mui/joy/styles';
import {Input, Sheet} from '@mui/joy';
import Add from '@mui/icons-material/Add';
import Button from '@mui/joy/Button';

const InputContainer = styled(Sheet)({
    display:'flex',
    justifyContent: 'center',
    width: '25%',
    margin: '20px 0 20px 0'
})
const TextInput = styled(Input)({
    display:'flex',
    width: '100%',
})

export const TodoInput:FunctionComponent = () => {
    return (
        <InputContainer>
        <TextInput 
            placeholder='What do you need to do?'
          startDecorator={<Add />}
          endDecorator={<Button>ADD</Button>}
        
        />
        </InputContainer>
    )
}