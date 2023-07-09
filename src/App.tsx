import { Layout } from "./layouts/Layout.component"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ErrorPage } from "./pages/Error/Error.page"
import { HomePage } from "./pages/Home/Home.page"
import { ContactPage } from "./pages/Contact/Contact.page"
import { ProjectsPage } from "./pages/Projects/Projects.page"
import { CarrerPage } from "./pages/Carrer/Carrer.page"
const App = () => {
  const isMaintence = true;

  return (
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
  )
}

export default App
