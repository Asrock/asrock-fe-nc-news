import './App.css'
import { UserProvider } from './contexts/UserContext';
import ArticlesPage from './pages/ArticlesPage'
import { Routes, Route } from "react-router-dom";
import UsersPage from './pages/UsersPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </UserProvider>
  )
}

export default App
