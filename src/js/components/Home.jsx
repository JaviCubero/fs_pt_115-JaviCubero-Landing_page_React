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
				<div className="row">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;