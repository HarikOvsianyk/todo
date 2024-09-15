
import { FunctionComponent } from 'react';
import { Sheet } from '@mui/joy';
import { styled } from '@mui/joy/styles';
import TaskAlt from '@mui/icons-material/TaskAlt';
import Typography from '@mui/joy/Typography';

const LogoContainer = styled(Sheet)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
    '@media (min-width: 960px)': {
        width: '70%',
    },
    '@media (min-width: 1440px)': {
        justifyContent: 'space-between',
        width: '50%',
    },
    '@media (min-width: 1800px)': {
        justifyContent: 'space-between',
        width: '30%',
    },
});

const LogoText = styled(Typography)({
    color: 'rebeccapurple',
    fontSize: '30px',
    '@media (min-width: 768px)': {
        fontSize: '50px',
    },
});

const Icon = styled(TaskAlt)({
    fontSize: '30px',
    '@media (min-width: 768px)': {
        fontSize: '50px',
    },
    color: 'rebeccapurple'
});

export const Logo: FunctionComponent = () => {
    return (
        <LogoContainer>
            <LogoText level="title-md" color="primary">make it done</LogoText><Icon />
        </LogoContainer>
    )
}