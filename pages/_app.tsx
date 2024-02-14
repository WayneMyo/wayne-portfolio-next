import CustomHead from '@/src/app/components/CustomHead';
import Context from '@/src/app/contexts/Context';
import Loader from '@/src/app/components/Loader';
import '@/src/app/styles/globals.css';
import { useEffect, useState, FC } from 'react';

interface AppProps {
  Component: FC<any>;
  pageProps: Record<string, any>;
}

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [load, setLoad] = useState(false);
  const [load1, setLoad1] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad1(true);
    }, 1000);
    setTimeout(() => {
      setLoad(true);
    }, 2000);
  }, []);

  return (
    <Context>
      <CustomHead pageTitle='Wayne Myo - Personal Portfolio Site (NextJS)' />
      {!load && <Loader />}
      {load1 && <Component {...pageProps} />}
    </Context>
  );
};

export default App;
