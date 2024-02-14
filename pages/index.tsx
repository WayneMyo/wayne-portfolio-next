import { FC, Fragment, useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Context } from '@/src/app/contexts/Context';
import Header from '@/src/app/components/Header';
import Nav from '@/src/app/components/Nav';

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

  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About Me' },
    { key: 'resume', label: 'Resume' },
    { key: 'contact', label: 'Contact Me' },
  ]

  return (
    <Fragment>
      <Nav navItems={navItems}/>
      <div className={`pages-stack ${toggle ? 'pages-stack--open' : ''}`}>
        <Home />
        <About />
        <WorkExperiences />
        <Contact />
      </div>
      <Header logoName='WAYNE MYO' />
    </Fragment>
  );
};

export default Index;
