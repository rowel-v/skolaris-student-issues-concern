import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Form from './pages/Form'
import FormSuccess from './pages/FormSuccess'

function App() {

  return (
    <BrowserRouter basename="/skolaris-student-issues-concern">
    <Routes>
      <Route path="/entry-form" element={<Form />} />
      <Route path="/submitted" element={<FormSuccess />}>
      </Route>
    </Routes>
    </BrowserRouter>
  )

}

export default App
