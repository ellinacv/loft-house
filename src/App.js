import { Header } from './components/Header/Header';
import { Intro } from './components/Intro/Intro';
import { Benefits } from './components/Benefits/Benefits';
import { Apartments } from './components/Apartments/Apartments';
import { FormClaim } from './components/Form/FormClaim';

import './styles/main.scss';

export const App = () => (
  <>
    <Header />
    <Intro />
    <Benefits />
    <Apartments />
    <FormClaim />
  </>
);
