import React from 'react';
import DataHandler from '../data/DataHandler';
import ReactDOM from 'react-dom';
import {
	VictoryBar,
	VictoryChart,
	VictoryAxis,
	VictoryTheme,
	VictoryGroup,
	VictoryStack
} from 'victory';
const data2012 = [
	{ quarter: 1, earnings: 13000 },
	{ quarter: 2, earnings: 16500 },
	{ quarter: 3, earnings: 14250 },
	{ quarter: 4, earnings: 19000 }
];

class StudentDashboard extends React.Component {
	constructor() {
		super();
		this.state = {
			students: [...DataHandler('students')],
			program: [...DataHandler('program')],
			rawData: [...DataHandler('raw')]
		};

		console.log('state: ', this.state);
	}
	showFunScorePerProgram = () => {
		let program = this.state.program;
		let data = this.state.rawData;
		const funScore = program.map((task, index) => {
			const scores = data.filter(object => object.task === task);
			const scoreSom = scores.reduce((acc, object) => {
				return acc + object.fun;
			}, 0);
			return { task: task, funscore: scoreSom };
		});
		return funScore;
	};
	render() {
		const dashboardFunScore = this.showFunScorePerProgram();
		console.log(dashboardFunScore);
		return (
			<VictoryChart theme={VictoryTheme.material} domainPadding={10}>
				<VictoryBar
					// data={this.dashboardFunScore}
					data={dashboardFunScore}
					x='task'
					// data accessor for y values
					y='funscore'
				/>
			</VictoryChart>
		);
	}
}
export default StudentDashboard;
