import React from "react";
import BGI from "../Images/home.jpg";
import Navigation from "../Shared/Navigation";
import { Button } from "primereact/button";

const Hero = () => {
	return (
		<div className="hero" style={{}}>
			<Navigation />
			<div
				style={{ width: "35%", position: "absolute", top: "10%", left: "-15%" }}
			>
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="rgb(255,255,255)"
						opacity=".1"
						d="M48.2,-61.2C56.9,-50.1,54.6,-29.7,57.9,-10.3C61.2,9.1,70.1,27.3,66.8,43.7C63.5,60.1,48,74.6,30.8,78C13.6,81.5,-5.3,73.9,-19.9,64.4C-34.5,54.8,-44.8,43.3,-49.2,30.8C-53.6,18.2,-52.1,4.7,-50,-9.1C-47.9,-22.8,-45.1,-36.6,-36.7,-47.7C-28.2,-58.8,-14.1,-67.3,2.8,-70.6C19.7,-74,39.5,-72.3,48.2,-61.2Z"
						transform="translate(100 100)"
					/>
				</svg>
			</div>

			<div
				style={{
					width: "30%",
					position: "absolute",
					top: "45%",
					right: "-12%",
				}}
			>
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="rgb(255,255,255)"
						opacity=".2"
						d="M52.9,-64.1C64.9,-52.9,68.5,-32.8,72.1,-12.7C75.6,7.4,79,27.5,70.3,38.8C61.6,50.1,40.8,52.5,22.9,56C5.1,59.4,-9.9,63.8,-25.7,61.8C-41.5,59.8,-58.1,51.5,-67,37.8C-75.9,24.2,-77.1,5.2,-72.1,-10.9C-67.1,-27,-55.9,-40.1,-42.8,-51.1C-29.8,-62.1,-14.9,-71,2.8,-74.2C20.4,-77.5,40.8,-75.3,52.9,-64.1Z"
						transform="translate(100 100)"
					/>
				</svg>
			</div>
			<div
				style={{
					width: "25%",
					position: "absolute",
					top: "7%",
					right: "-10%",
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
			<div
				className="p-d-flex p-jc-center p-ai-center"
				style={{ height: "100%" }}
			>
				<div>
					<h1 className="main-text p-mt-0">SBWL</h1>
					<p className="subtext">The right mobile network for you.</p>
					<Button
						style={{ color: "white" }}
						icon="pi pi-chevron-down"
						className="p-button-rounded p-button-secondary p-button-outlined"
						onClick={() => {
							document
								.getElementById("deals")
								.scrollIntoView({ behavior: "smooth" });
						}}
					/>
				</div>
			</div>
			<div className="custom-shape-divider-bottom-1618143206">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
						opacity=".25"
						className="shape-fill"
					></path>
					<path
						d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
						opacity=".5"
						className="shape-fill"
					></path>
					<path
						d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
		</div>
	);
};

export default Hero;
