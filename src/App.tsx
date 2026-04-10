import { HashRouter as Router, Routes, Route, Form } from 'react-router-dom';
import FormSuccess from './pages/FormSuccess';

function App() {
  return (
    /* HashRouter handles the /skolaris-student-issues-concern/ path automatically 
       so you can remove the basename prop entirely. */
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/entry-form" element={<Form />} />
        <Route path="/submitted" element={<FormSuccess />} />
      </Routes>
    </Router>
  )
}

export default App;