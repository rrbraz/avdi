import { Grommet } from 'grommet';
import '../styles/globals.css';
import { theme } from './theme';

function MyApp({ Component, pageProps }) {
  return (
    <Grommet full theme={theme}>
      <Component {...pageProps} />
    </Grommet>
  );
}

export default MyApp
