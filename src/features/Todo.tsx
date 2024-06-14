import { Sheet} from '@mui/joy';
import { styled } from '@mui/joy/styles';

const Container = styled(Sheet)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    width: '100wh',
    height: '90vh'
})

export const Todo = () => {
    return (
        <Container variant='plain'>
            <h1>Hello world</h1>
        </Container>
    )
};
