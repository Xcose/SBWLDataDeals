import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { Calendar } from "primereact/calendar";

const UsageGraph = ({ dataPackage }) => {
	const { name, price } = dataPackage;
	const [dates, setDates] = useState([]);
	const [usageStartDate, setUsageStartDate] = useState(new Date());
	const [usageEndDate, setUsageEndDate] = useState();
	let today = new Date();
	useEffect(() => {
		daysInMonth();
	}, [usageStartDate]);
	const basicData = {
		labels: dates,
		datasets: [
			{
				label: "Normal",
				backgroundColor: "#42A5F5",
				borderColor: "#42A5F5",
				fill: false,
				lineTension: 0,
				data: [
					47,
					28,
					27,
					35,
					24,
					43,
					33,
					54,
					53,
					60,
					57,
					21,
					37,
					48,
					36,
					56,
					45,
					42,
					31,
					32,
					40,
					30,
					51,
					50,
					22,
					39,
					38,
					44,
					46,
					25,
				],
			},
			{
				label: "Night shift",
				backgroundColor: "indigo",
				borderColor: "indigo",
				fill: false,
				lineTension: 0,
				data: [
					35,
					26,
					23,
					44,
					56,
					54,
					46,
					22,
					42,
					31,
					27,
					47,
					34,
					37,
					21,
					38,
					55,
					59,
					49,
					24,
					58,
					33,
					50,
					53,
					29,
					36,
					43,
					28,
					45,
					48,
				],
			},
		],
	};

	const basicOptions = {
		legend: {
			labels: {
				fontColor: "#495057",
			},
		},
		scales: {
			xAxes: [
				{
					ticks: {
						fontColor: "#495057",
					},
				},
			],
			yAxes: [
				{
					ticks: {
						fontColor: "#495057",
						min: 0,
						max: parseInt(name),
					},
				},
			],
		},
	};

	const daysInMonth = () => {
		const newDates = [];
		const start = new Date(usageStartDate);
		const aMonthAgo = new Date(start.setMonth(start.getMonth() - 1));
		setUsageEndDate(new Date(aMonthAgo));
		while (aMonthAgo < usageStartDate) {
			newDates.push(aMonthAgo.getDate());
			aMonthAgo.setDate(aMonthAgo.getDate() + 1);
		}
		setDates(newDates);
	};

	return (
		<>
			<h5>Usage</h5>
			<Chart type="line" data={basicData} options={basicOptions} />
			<div className="p-fluid p-grid p-pt-5">
				<div className="p-field p-col-12 p-md-4">
					<label htmlFor="from">From</label>
					<Calendar
						id="from"
						value={usageStartDate}
						onChange={(e) => setUsageStartDate(e.value)}
						showIcon
						maxDate={usageStartDate}
						dateFormat="dd MM yy"
					/>
				</div>
				<div className="p-field p-col-12 p-md-4">
					<label htmlFor="to">To</label>
					<Calendar
						id="to"
						value={usageEndDate}
						readOnlyInput
						disabled
						dateFormat="dd MM yy"
					/>
				</div>
			</div>
		</>
	);
};

export default UsageGraph;
