import React, { useState } from "react";
import { Panel } from "primereact/panel";
import { Rating } from "primereact/rating";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import sim from "../Images/sim.png";

const News = () => {
	const data = [
		{
			id: "1000",
			code: "f230fh0g3",
			name: "10GB + 10GB",
			description: "Product Description",
			image: "bamboo-watch.jpg",
			price: 65,
			category: "Accessories",
			quantity: 24,
			inventoryStatus: "INSTOCK",
			rating: 5,
		},
		{
			id: "1001",
			code: "nvklal433",
			name: "20GB + 20GB",
			description: "Product Description",
			image: "black-watch.jpg",
			price: 72,
			category: "Accessories",
			quantity: 61,
			inventoryStatus: "INSTOCK",
			rating: 4,
		},
		{
			id: "1002",
			code: "zz21cz3c1",
			name: "40GB + 40GB",
			description: "Product Description",
			image: "blue-band.jpg",
			price: 79,
			category: "Fitness",
			quantity: 2,
			inventoryStatus: "LOWSTOCK",
			rating: 3,
		},
		{
			id: "1003",
			code: "244wgerg2",
			name: "60GB + 60GB",
			description: "Product Description",
			image: "blue-t-shirt.jpg",
			price: 29,
			category: "Clothing",
			quantity: 25,
			inventoryStatus: "INSTOCK",
			rating: 5,
		},
		{
			id: "1004",
			code: "h456wer53",
			name: "80GB + 80GB",
			description: "Product Description",
			image: "bracelet.jpg",
			price: 15,
			category: "Accessories",
			quantity: 73,
			inventoryStatus: "INSTOCK",
			rating: 4,
		},
		{
			id: "1005",
			code: "av2231fwg",
			name: "120GB + 120GB",
			description: "Product Description",
			image: "brown-purse.jpg",
			price: 120,
			category: "Accessories",
			quantity: 0,
			inventoryStatus: "OUTOFSTOCK",
			rating: 4,
		},
		{
			id: "1006",
			code: "bib36pfvm",
			name: "220GB + 220GB",
			description: "Product Description",
			image: "chakra-bracelet.jpg",
			price: 32,
			category: "Accessories",
			quantity: 5,
			inventoryStatus: "LOWSTOCK",
			rating: 3,
		},
		{
			id: "1007",
			code: "mbvjkgip5",
			name: "Galaxy Earrings",
			description: "Product Description",
			image: "galaxy-earrings.jpg",
			price: 34,
			category: "Accessories",
			quantity: 23,
			inventoryStatus: "INSTOCK",
			rating: 5,
		},
		{
			id: "1008",
			code: "vbb124btr",
			name: "Game Controller",
			description: "Product Description",
			image: "game-controller.jpg",
			price: 99,
			category: "Electronics",
			quantity: 2,
			inventoryStatus: "LOWSTOCK",
			rating: 4,
		},
		{
			id: "1009",
			code: "cm230f032",
			name: "Gaming Set",
			description: "Product Description",
			image: "gaming-set.jpg",
			price: 299,
			category: "Electronics",
			quantity: 63,
			inventoryStatus: "INSTOCK",
			rating: 3,
		},
	];
	const [products, setProducts] = useState(data);

	const responsiveOptions = [
		{
			breakpoint: "1024px",
			numVisible: 3,
			numScroll: 3,
		},
		{
			breakpoint: "600px",
			numVisible: 2,
			numScroll: 2,
		},
		{
			breakpoint: "480px",
			numVisible: 1,
			numScroll: 1,
		},
	];

	const itemTemplate = (productItem) => {
		return (
			<Panel
				// header={productItem.name}
				className="p-mx-0 p-mt-5 p-m-lg-5 custom-cards p-shadow-11"
			>
				<h1>{productItem.name}</h1>
				<div>
					<img src={sim} alt="sim image" style={{ width: "25%" }} />
					<div style={{ position: "relative" }}>
						<div
							style={{
								position: "absolute",
								width: "100%",
								top: "5%",
								left: "5%",
							}}
						>
							<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
								<path
									fill="rgb(255,255,255)"
									opacity="0.2"
									d="M35.1,-38.7C43.4,-35,46.5,-21.8,52.9,-6.2C59.4,9.4,69.2,27.5,63.7,36.5C58.2,45.5,37.3,45.4,20,49.1C2.8,52.8,-11,60.3,-20.5,56.7C-30.1,53.1,-35.5,38.3,-44.6,24.7C-53.8,11.1,-66.6,-1.5,-63,-9.2C-59.4,-17,-39.4,-20,-26.1,-22.9C-12.9,-25.8,-6.4,-28.6,3.5,-32.7C13.4,-36.9,26.9,-42.5,35.1,-38.7Z"
									transform="translate(100 100)"
								/>
							</svg>
						</div>
					</div>
				</div>
				<h2>R {productItem.price}</h2>
				{/* <Rating value={productItem.rating} stars={5} cancel={false} /> */}
			</Panel>
		);
	};
	return (
		<section className="p-p-1 p-p-lg-4" id="deals">
			<h1 className="title">DEALS</h1>
			<div>
				<Button
					href="https://secure.telkom.co.za/today/ucm/"
					target="_black"
					rel="'noopener noreferrer'"
					className="p-mt-4"
					label="Check Coverage"
					className="p-button-raised p-button-secondary"
				/>
			</div>
			<Carousel
				className="p-mb-5"
				value={products}
				itemTemplate={itemTemplate}
				numVisible={3}
				numScroll={3}
				responsiveOptions={responsiveOptions}
			></Carousel>
			<div className="p-grid p-jc-around p-mt-5 p-mx-5">
				<div className="p-col-12 p-lg-4 p-mb-5">
					<h1>
						<i
							className="pi pi-calendar-plus"
							style={{ fontSize: "3.5em" }}
						></i>{" "}
						<small>Month-to-month (No Contracts)</small>
					</h1>

					<p>
						No need to worry about the fine print and hassles of contracts,
						cancel when ever you want to.
					</p>
				</div>
				<div className="p-col-12 p-lg-4 p-mb-5">
					<h1>
						<i className="pi pi-refresh" style={{ fontSize: "3.5em" }}></i>{" "}
						<small>One month role over</small>
					</h1>

					<p>
						No byte goes to waste, what you don't use in that month, carries
						over for an extra month which means more up time.
					</p>
				</div>
				<div className="p-col-12 p-lg-4 p-mb-5">
					<h1>
						<i className="pi pi-ban" style={{ fontSize: "3.5em" }}></i>{" "}
						<small>No out-of-bundle data</small>
					</h1>

					<p>
						No nasty suprises, unknown cost or hidden fees. If your data is
						finished just recharge.
					</p>
				</div>
				<div className="p-col-12 p-lg-4 p-mb-5">
					<h1>
						<i className="pi pi-wifi" style={{ fontSize: "3.5em" }}></i>{" "}
						<small>
							LTE ready, just insert simcard into device and you are ready
						</small>
					</h1>

					<p>
						No need to worry about setting things up or going through
						complicated rocket science proceedures just to surface the web. Just
						pop the simcard into your device and you are good to go.
					</p>
				</div>
				<div className="p-col-12 p-lg-4 p-mb-5">
					<h1>
						<i
							className="pi pi-window-maximize"
							style={{ fontSize: "3.5em" }}
						></i>{" "}
						<small>3 in 1 breakable sim fits into any device</small>
					</h1>
					No special devices needs for the service, the simcard has all the
					sizes used by modern devices so you will never be left out.
				</div>
			</div>
		</section>
	);
};

export default News;
