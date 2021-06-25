import React, { useEffect } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import "./VerticalBar.css";

const data = {
	labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	datasets: [
		{
			label: "# of Votes",
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(255, 206, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(153, 102, 255, 0.2)",
				"rgba(255, 159, 64, 0.2)",
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
				"rgba(153, 102, 255, 1)",
				"rgba(255, 159, 64, 1)",
			],
			borderWidth: 1,
		},
	],
};

const data2 = {
	labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	datasets: [
		{
			label: "Data 1",
			data: [12, 19, 3, 5, 2, 3],
		},
		{
			label: "Data 2",
			data: [2, 9, 8, 15, 7, 13],
		},
		{
			label: "Data 3",
			data: [2, 9, 8, 15, 7, 13],
		},
	],
};

const options = {
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: true,
				},
			},
		],
	},
};

const options2 = {
	scales: {
		yAxes: [
			{
				stacked: true,
				ticks: {
					beginAtZero: true,
				},
			},
		],
		xAxes: [
			{
				stacked: true,
			},
		],
	},
};

const VerticalBar = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className="header">
				<h1 className="title">Vertical Bar Chart</h1>
				<div className="links"></div>
			</div>
			<div className="container">
				<div className="chart">
					<Bar data={data} options={options} />
				</div>
				<div className="chart">
					<Line data={data2} options={options} />
				</div>
				<div className="chart">
					<Line data={data} options={options} />
				</div>
				<div className="chart">
					<Doughnut data={data} options={options} />
				</div>
			</div>
		</>
	);
};

export default VerticalBar;
