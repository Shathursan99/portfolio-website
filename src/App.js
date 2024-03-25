
import { Form } from 'react-bootstrap';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import FormIn from './components/Forms/Form'
import FormIn2 from './components/Forms/Form2'
import FormAddSyllabus from './components/Forms/FormAddSyllabus';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
      {/* <FormIn/>
      <FormIn2/>
      <FormAddSyllabus/> */}

    </div>
  );
}

export default App;
