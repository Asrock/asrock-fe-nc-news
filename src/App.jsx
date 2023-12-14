import './App.css'
import { Routes, Route } from "react-router-dom";
import { UserProvider } from './contexts/UserContext';
import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage'
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </UserProvider>
  )
}

export default App
