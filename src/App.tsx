import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Layout } from './layouts/Layout.component';
import { CarrerPage } from './pages/Carrer/Carrer.page';
import { ContactPage } from './pages/Contact/Contact.page';
import { ErrorPage } from './pages/Error/Error.page';
import { HomePage } from './pages/Home/Home.page';
import { ProjectsPage } from './pages/Projects/Projects.page';

const App = () => {
  const isMaintence = true;

  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={ isMaintence ? <ErrorPage isMaintence={true}/> : <HomePage/>}/>
            <Route path="/contact" element={ <ContactPage errorPage={!isMaintence && <ErrorPage isMaintence={true}/> }/>}/>
            <Route path="/projects" element={ isMaintence ? <ErrorPage isMaintence={true}/> : <ProjectsPage/>}/>
            <Route path="/carrer" element={ isMaintence ? <ErrorPage isMaintence={true}/> : <CarrerPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
