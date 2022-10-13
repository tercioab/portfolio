import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header.js";
import Home from "./pages/Home.js";
import Sobre from "./pages/Sobre.js";
import Projetos from "./pages/Projetos.js";
import Footer from "./components/footer.js";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projetos' element={<Projetos />} />
				<Route path='/sobre' element={<Sobre />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
