import { Layout } from "./layouts/Layout.component"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ErrorPage } from "./pages/Error/Error.page"
const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
