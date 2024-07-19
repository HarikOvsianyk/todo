
import { FunctionComponent } from 'react';
import { Sheet } from '@mui/joy';
import { styled } from '@mui/joy/styles';
import TaskAlt from '@mui/icons-material/TaskAlt';
import Typography from '@mui/joy/Typography';

const LogoContainer = styled(Sheet)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '19%'
});

const LogoText = styled(Typography)({
    color: 'rebeccapurple',
    fontSize: '50px'
});

const Icon = styled(TaskAlt)({
    fontSize: '50px',
    color: 'rebeccapurple'
});

export const Logo: FunctionComponent = () => {
    return (
        <LogoContainer>
            <LogoText level="title-md" color="primary">make it done</LogoText><Icon />
        </LogoContainer>
    )
}