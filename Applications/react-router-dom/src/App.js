// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './App.css';
import Navbar from "./components/NavBar"
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogEntry from './pages/BlogEntry';

const App = () => {
    return (
        <Router>

            {<Navbar />}
            

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/new" element={<BlogEntry />} />
            </Routes>
        </Router>
    );
};

export default App;