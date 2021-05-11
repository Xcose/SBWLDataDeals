import React from "react";
import { Card } from "primereact/card";
import { Knob } from "primereact/knob";
import UsageGraph from "./UsageGraph";

const DataInformation = ({ dataPackage }) => {
	return (
		<>
			<div className="p-col-12 p-lg-6">
				<Card className="p-h-100">
					<div className="p-grid">
						<div className="p-col-12 p-lg-6">
							<h3>Normal</h3>
							<Knob
								value={25}
								valueTemplate={"{value}GB"}
								size={200}
								min={0}
								max={parseInt(dataPackage.name)}
								rangeColor={"SlateGray"}
								readOnly
							/>
						</div>
						<div className="p-col-12 p-lg-6">
							<h3>Night shift</h3>
							<Knob
								value={60}
								valueTemplate={"{value}GB"}
								size={200}
								min={0}
								max={parseInt(dataPackage.name)}
								rangeColor={"SlateGray"}
								readOnly
							/>
							<h4>Roll over: 25GB Remaining</h4>
						</div>
					</div>
					<div></div>
					<div></div>
					<div className="p-col-12">
						<h2>{dataPackage.name + " + " + dataPackage.name}</h2>
						<h3>Month-to-Month</h3>
					</div>
				</Card>
			</div>
			<div className="p-col-12 p-lg-6">
				<Card>
					<UsageGraph dataPackage={dataPackage} />
				</Card>
			</div>
		</>
	);
};

export default DataInformation;
