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
			activeFilter: 'Evelyn',
			studentScore: []
		};
		this.studentScoreFromChild = this.studentScoreFromChild.bind(this);
		console.log('state:', this.state);
	}

	studentScoreFromChild(newStudentScore) {
		this.setState({ activeFilter: newStudentScore });
		this.filterStudentScore();
	}
	componentDidMount() {
		this.filterStudentScore();
	}
	filterStudentScore() {
		let studentToFilter = this.state.activeFilter;
		let dataToFilter = this.state.rawData;
		let filteredStudentData = dataToFilter.filter(each =>
			each.name.includes(studentToFilter)
		);
		console.log('filteredStudentData: ', filteredStudentData);

		this.setState({ studentScore: filteredStudentData });
		console.log('state from filter:', this.state);
	}

	render() {
		return (
			<div className={'studentview'}>
				<Header
					data={this.state}
					studentScoreFromChild={this.studentScoreFromChild}
				/>
				<h2>{this.state.activeFilter}</h2>
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
							// animate={
							// 	{
							// 	duration: 1300
							// 		onLoad: { duration: 700 }
							// 	}
							// }
							barWidth={2}
							height={3}
							style={{
								data: { fill: '#00a8cc' }
							}}
							data={this.state.studentScore}
							x='task'
							y='difficulty'
						/>
						<VictoryBar
							// animate={{
							// 	duration: 1300
							// 	// onLoad: { duration: 700 }
							// }}
							barWidth={2}
							height={3}
							style={{
								data: { fill: '#c43a31' }
							}}
							data={this.state.studentScore}
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
