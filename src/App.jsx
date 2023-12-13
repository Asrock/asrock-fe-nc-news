import './App.css'
import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage'
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/articles/:article_id" element={<ArticlePage />} />
    </Routes>
  )
}

export default App
