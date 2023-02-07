import Theme from '../styles/theme';
import '../components/BackgrooundAnimation/index.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 