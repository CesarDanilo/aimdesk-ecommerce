import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './views/admin/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
