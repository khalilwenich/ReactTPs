import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Hello from './components/Hello';
import Form from './components/Form';
import Counter from './components/Counter';
import ComFct from "./components/ComFct";
import Event from "./components/Event";
import Events from './components/Events';
import ProductList from "./components/ProductList";

function App() {
  return (
    <Router>
      

      {/* Routes for Different Pages */}
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
