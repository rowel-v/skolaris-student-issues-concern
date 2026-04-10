import { Route, Routes } from 'react-router-dom'
import './App.css'
import Form from './pages/Form'
import FormSuccess from './pages/FormSuccess'

function App() {

  return (
    <Routes>
      <Route path="/entry-form" element={<Form />} />
      <Route path="/submitted" element={<FormSuccess />}>
      </Route>
    </Routes>
  )

}

export default App
