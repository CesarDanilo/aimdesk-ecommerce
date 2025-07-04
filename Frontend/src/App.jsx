import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageAdmin from './views/admin/HomePageAdmin';
import Dashboard from './views/admin/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/admin/home" element={<HomePageAdmin />} />
        {/* <Route path="/auth/admin/home/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
