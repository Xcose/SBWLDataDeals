import React, { Component } from "react";
import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import News from "../Components/news";

const Home = () => {
	return (
		<>
			<Hero />
			<News />
			<Contact />
		</>
	);
};

export default Home;
