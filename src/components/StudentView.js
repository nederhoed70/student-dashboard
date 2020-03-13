import React from 'react';
import DataHandler from '../data/DataHandler';
import Header from './Header';
import Filter from './Filter';
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
			activeFilter: []
		};
	}
	showStudentScore() {
		let selectedStudent = 'Evelyn';
		let data = this.state.rawData;
		const scores = data.filter(object => object.name === selectedStudent);
		const scoreTough = scores.reduce((acc, object) => {
			return Math.round((acc + object.difficulty / scores.length) * 100) / 100;
		}, 0);

		return {
			name: selectedStudent,
			funscore: scores,
			difficultyscore: scoreTough
		};
	}

	render() {
		console.log(this.showStudentScore());
		const individualStudentData = this.showStudentScore();
		return (
			<div className={'studentview'}>
				<Header
					students={this.state.students}
					showStudentScore={this.showStudentScore}
				/>
				<h2>Evelyn</h2>
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
							data={individualStudentData.funscore}
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
							data={individualStudentData.funscore}
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
