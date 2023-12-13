import './App.css'
import ArticlesPage from './pages/ArticlesPage'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/articles" element={<ArticlesPage />} />
    </Routes>
  )
}

export default App
