import { Container } from '@mui/system';
import { SearchField, Title } from 'components';

function App() {
  return (
    <>
      <main>
        <Container maxWidth={'sm'}>
          <Title>Weather forecast</Title>
          <SearchField />
        </Container>
      </main>
    </>
  );
}

export default App;
