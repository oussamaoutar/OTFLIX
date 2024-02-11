import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'swiper/css';
import React, { useState } from "react"
import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import PublishedBlog from './components/PublishedBlog';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Film from './pages/Film';
import SearchResult from './pages/SearchResult';
import NotFound from './pages/NotFound';


function App() {
	const [loggedin, setLoggedIn] = useState(false)
	return (
		<>
			<Header loggedin={loggedin} handleLoggedIn={setLoggedIn} />
			<Routes>
				<Route path='/' element={<Main />}/>
				<Route path='/home' element={<Main />}/>
				<Route path='/blogs' element={<Blog />}/>
				<Route path='/about' element={<About />}/>
				<Route path='/blogs/:idBlog' element={<PublishedBlog />} />
				<Route path='/contact-us' element={<Contact />} />
				<Route path='/login' element={<Login handleLoggedIn={setLoggedIn} />} />
				<Route path='/films/:idFilm' element={<Film />} />
				<Route path='/search/:title' element={<SearchResult />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
