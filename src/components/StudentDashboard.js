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

class StudentDashboard extends React.Component {
	constructor() {
		super();
		this.state = {
			students: [...DataHandler('students')],
			program: [...DataHandler('program')],
			rawData: [...DataHandler('raw')],
			activeFilter: []
		};

		console.log('state: ', this.state);
	}
	alterState = newStateItem => {
		this.setState({ rawData: [...newStateItem] });
	};
	filterSwitchToState = filtername => {
		this.setState({ filter: [...filtername] });
	};

	showScorePerProgram = type => {
		let program = this.state.program;
		let data = this.state.rawData;
		const scoreType = program.map(task => {
			const scores = data.filter(object => object.task === task);
			const scoreSom = scores.reduce((acc, object) => {
				switch (type) {
					case 'fun':
						return Math.round((acc + object.fun / scores.length) * 100) / 100;
					case 'tough':
						return (
							Math.round((acc + object.difficulty / scores.length) * 100) / 100
						);
				}
			}, 0);
			if (type === 'fun') {
				return { task: task, funscore: scoreSom };
			}
			if (type === 'tough') {
				return { task: task, difficultyscore: scoreSom };
			}
		});
		return scoreType;
	};

	showScorePerStudent() {
		let students = this.state.students;
		let data = this.state.rawData;
		const studentScores = students.map(student => {
			const scores = data.filter(object => object.name === student);
			const scoreFun = scores.reduce((acc, object) => {
				return Math.round((acc + object.fun / scores.length) * 100) / 100;
			}, 0);
			const scoreTough = scores.reduce((acc, object) => {
				return (
					Math.round((acc + object.difficulty / scores.length) * 100) / 100
				);
			}, 0);

			return {
				name: student,
				funscore: scoreFun,
				difficultyscore: scoreTough
			};
		});

		return studentScores;
	}

	render() {
		const dashboardFunScore = this.showScorePerProgram('fun');
		const dashboardToughScore = this.showScorePerProgram('tough');
		const dashboardStudentScore = this.showScorePerStudent();
		console.log(this.state);

		return (
			<div className={'overview'}>
				<Filter
					students={this.state.students}
					tasks={this.state.program}
					rawData={this.state.rawData}
					activeFilter={this.state.activeFilter}
					alterState={this.alterState}
					filterSwitchToState={this.filterSwitchToState}
				/>

				<div className={'charts'}>
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
									onLoad: { duration: 1000 }
								}}
								barWidth={3}
								height={3}
								style={{
									data: { fill: '#c43a31' }
								}}
								data={dashboardFunScore}
								x='task'
								y='funscore'
							/>
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
								data={dashboardToughScore}
								x='task'
								y='difficultyscore'
							/>
						</VictoryGroup>
					</VictoryChart>
					<VictoryChart width={800} height={225} domainPadding={0}>
						<VictoryAxis
							label='Overall scores per student'
							theme={VictoryTheme.material}
							fixLabelOverlap={false}
							style={{
								axisLabel: { fontSize: 10, padding: 40 },
								ticks: { stroke: 'grey', size: 5 },
								tickLabels: { fontSize: 9, padding: 5, angle: 45 }
							}}
						/>

						<VictoryLine
							animate={{
								duration: 2000,
								onLoad: { duration: 1000 }
							}}
							style={{
								data: {
									stroke: '#c43a31',
									strokeWidth: 3
								},
								labels: {
									fontSize: 15,
									fill: ({ datum }) => (datum.x === 3 ? '#000000' : '#c43a31')
								}
							}}
							height={3}
							data={dashboardStudentScore}
							x='name'
							y='funscore'
						/>
						<VictoryLine
							animate={{
								duration: 2000,
								onLoad: { duration: 1000 }
							}}
							style={{
								data: {
									stroke: '#00a8cc',
									strokeWidth: 3
								},
								labels: {
									fontSize: 15,
									fill: ({ datum }) => (datum.x === 3 ? '#000000' : '#c43a31')
								}
							}}
							height={3}
							data={dashboardStudentScore}
							x='name'
							y='difficultyscore'
						/>
					</VictoryChart>
				</div>
				<Footer />
			</div>
		);
	}
}
export default StudentDashboard;
