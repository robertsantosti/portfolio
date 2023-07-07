import { Layout } from "./layouts/Layout.component"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ErrorPage } from "./pages/Error/Error.page"
import { HomePage } from "./pages/Home/Home.page"
import { ContactPage } from "./pages/Contact/Contact.page"
import { ProjectsPage } from "./pages/Projects/Projects.page"
import { CarrerPage } from "./pages/Carrer/Carrer.page"
const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/carrer" element={<CarrerPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
