import { Header } from './components/Header/Header';
import { Intro } from './components/Intro/Intro';
import { Benefits } from './components/Benefits/Benefits';
import { Apartments } from './components/Apartments/Apartments';
import { FormClaim } from './components/FormClaim/FormClaim';
import { Location } from './components/Location/Location';
import { Feedback } from './components/Feedback/Feedback';
import { Footer } from './components/Footer/Footer';

import './styles/main.scss';

export const App = () => (
  <>
    <Header />
    <Intro />
    <Benefits />
    <Apartments />
    <FormClaim />
    <Location />
    <Feedback />
    <Footer />
  </>
);
