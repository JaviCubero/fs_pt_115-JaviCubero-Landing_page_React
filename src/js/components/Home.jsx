import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";

const Home = () => {
	return (
		<>
			<Navbar />

			<div className="container">
				<Jumbotron />
				<div className="row mb-4">
					<Card
						content="Contenido de la primera tarjeta, texto de ejemplo. Proyecto para crear una página de inicio con React."
					/>
					<Card
						content="Contenido de la segunda tarjeta, texto de ejemplo. Proyecto para crear una página de inicio con React."
					/>
					<Card
						content="Contenido de la tercera tarjeta, texto de ejemplo. Proyecto para crear una página de inicio con React."
					/>
					<Card
						content="Contenido de la cuarta tarjeta, texto de ejemplo. Proyecto para crear una página de inicio con React."
					/>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;