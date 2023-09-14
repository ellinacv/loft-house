import { Header } from './components/Header/Header';
import { Intro } from './components/Intro/Intro';
import { Benefits } from './components/Benefits/Benefits';
import { Apartments } from './components/Apartments/Apartments';

import './styles/main.scss';

export const App = () => (
  <>
    <Header />
    <Intro />
    <Benefits />
    <Apartments />
  </>
);
