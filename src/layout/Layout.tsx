import { FunctionComponent, ReactNode } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';

const MainContainer = styled(Sheet)({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
});

export const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <CssVarsProvider>
                <MainContainer variant="plain">
                    {children}
                </MainContainer>
            </CssVarsProvider>
        </QueryClientProvider>
    )
};

