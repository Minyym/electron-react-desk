import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from './components/Todo';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </Router>
  );
}
