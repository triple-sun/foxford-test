import { ThemeProvider } from '@emotion/react';
import { Box, Container, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

import useFoundUsers from '../hooks/use-found-users';
import FoundUsersTableComponent from '../components/responses/responses';
import Loading from '../components/loading/loading';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

const MainPage = () => {
  const { responses, isLoaded } = useFoundUsers();

  return (
    <ThemeProvider theme={Theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          p={10}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {isLoaded ? (
            <FoundUsersTableComponent responses={responses} />
          ) : (
            <Loading />
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default MainPage;
