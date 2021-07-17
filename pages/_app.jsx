import { Grommet } from 'grommet';
import { theme } from '../lib/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Grommet full theme={theme}>
      <Component {...pageProps} />
    </Grommet>
  );
}

export default MyApp
