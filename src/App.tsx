import { Layout } from "./layouts/Layout.component"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { WorkingPage } from "./pages/Working.page"
const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<WorkingPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
