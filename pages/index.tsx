import { FC, Fragment, useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Context } from '@/src/app/contexts/Context';
import Header from '@/src/app/components/Header';
import Nav from '@/src/app/components/Nav';
import ImageView from '@/src/app/components/ImageViewer';
import VideoPopup from '@/src/app/components/VideoPopup';

const Home = dynamic(() => import('@/src/app/Home'));
const About = dynamic(() => import('@/src/app/About'));
const WorkExperiences = dynamic(() => import('@/src/app/WorkExperiences'));
const Contact = dynamic(() => import('@/src/app/Contact'));

const Index: FC = () => {
  useEffect(() => {
    document.querySelector('html')?.classList.add('js');
    document.querySelector('body')?.classList.add('dark-body');
  }, []);

  const { toggle } = useContext(Context);

  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <Nav />
      <div className={`pages-stack ${toggle ? 'pages-stack--open' : ''}`}>
        <Home />
        <About />
        <WorkExperiences />
        <Contact />
      </div>
      <Header />
    </Fragment>
  );
};

export default Index;
