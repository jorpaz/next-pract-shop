import '../styles/globals.css';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

export default function App({ Component, pageProps }) {
  const inicialState = useInitialState();
  return (
    <AppContext.Provider value={inicialState}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
