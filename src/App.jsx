import './App.css'
import { Routes, Route } from "react-router-dom";
import { UserProvider } from './contexts/UserContext';
import Header from './components/Header';
import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage'
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import UserPage from './pages/UserPage';


function App() {
  return (
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:username" element={<UserPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </UserProvider>
  )
}

export default App
