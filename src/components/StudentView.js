import React from 'react';
import DataHandler from '../data/DataHandler';
import Header from './Header';
import Footer from './Footer';
import {
	VictoryBar,
	VictoryChart,
	VictoryAxis,
	VictoryTheme,
	VictoryGroup,
	VictoryLine
} from 'victory';

class StudentView extends React.Component {
	constructor() {
		super();
		this.state = {
			students: [...DataHandler('students')],
			program: [...DataHandler('program')],
			rawData: [...DataHandler('raw')],
			activeFilter: [],
			studentScore: ''
		};
		this.studentScoreFromChild = this.studentScoreFromChild.bind(this);
	}

	studentScoreFromChild(newStudentScore) {
		this.setState({ studentScore: 'test' });
		console.log(newStudentScore.name, this.state.studentScore);
	}
	// 	console.log('click', newStudentScore);
	// 	this.setState({ studentScore: 'test' });
	// 	this.dataToChart(newStudentScore.scores);
	// 	console.log(newStudentScore.name, this.state.studentScore);
	// }

	render() {
		return (
			<div className={'studentview'}>
				<Header
					students={this.state.students}
					data={this.state.rawData}
					studentScoreFromChild={this.studentScoreFromChild}
				/>

				<VictoryChart
					theme={VictoryTheme.material}
					width={800}
					height={325}
					domainPadding={1}
				>
					<VictoryAxis
						label='Overall scores per task'
						theme={VictoryTheme.material}
						fixLabelOverlap={false}
						style={{
							axisLabel: { fontSize: 10, padding: 40 },
							ticks: { stroke: 'grey', size: 5 },
							tickLabels: { fontSize: 5, padding: 5, angle: 45 }
						}}
					/>
					<VictoryGroup offset={10} colorScale={'qualitative'}>
						<VictoryBar
							animate={{
								duration: 2000,
								onLoad: { duration: 700 }
							}}
							barWidth={2}
							height={3}
							style={{
								data: { fill: '#00a8cc' }
							}}
							data={this.dataToChart}
							x='task'
							y='difficulty'
						/>
						<VictoryBar
							animate={{
								duration: 2000,
								onLoad: { duration: 700 }
							}}
							barWidth={2}
							height={3}
							style={{
								data: { fill: '#c43a31' }
							}}
							data={this.dataToChart}
							x='task'
							y='fun'
						/>
					</VictoryGroup>
				</VictoryChart>

				<Footer />
			</div>
		);
	}
}

export default StudentView;
