import React from 'react';
import DataHandler from '../data/DataHandler';
import Filter from './Filter';
import Footer from './Footer';
import DashboardCharts from '../charts/DashboardCharts';

class StudentDashboard extends React.Component {
	constructor() {
		super();
		this.state = {
			students: [...DataHandler('students')],
			program: [...DataHandler('program')],
			rawData: [...DataHandler('raw')],
			filteredData: [...DataHandler('raw')],
			activeFilter: [],
		};
	}

	alterState = (id, title) => {
		let newStateItem = '';

		switch (id) {
			case 'name':
				newStateItem = this.state.rawData.filter(
					(each) =>
						!this.state.activeFilter.includes(each.name) &&
						!this.state.activeFilter.includes(each.task)
				);
				this.setState({ filteredData: [...newStateItem] });
				break;
			case 'task':
				newStateItem = this.state.rawData.filter(
					(each) =>
						!this.state.activeFilter.includes(each.name) &&
						!this.state.activeFilter.includes(each.task)
				);
				this.setState({ filteredData: [...newStateItem] });
				break;
			default:
				return null;
		}
		//this.setState({ filteredData: [...newStateItem] });
	};
	handleClick = (event) => {
		let { id, title } = event.target;
		let newFilter = '';
		let stateFilter = this.state.activeFilter;
		if (this.state.activeFilter.includes(title)) {
			console.log(title, 'zit in filter, gaat eruit');
			newFilter = stateFilter.filter((item) => item !== title);
			this.setState(
				{
					activeFilter: newFilter,
				},
				() => this.alterState(id)
			);
			console.log('newFilter: ', newFilter);
			console.log(this.state.activeFilter);
		} else {
			console.log(title, 'zit niet in filter, komt bij filter');
			newFilter = this.state.activeFilter;
			newFilter.push(title);
			this.setState({ activeFilter: newFilter }, () => this.alterState(id));
			console.log(this.state.activeFilter);
		}
	};

	showScorePerProgram = (type) => {
		let program = this.state.program;
		let data = this.state.filteredData;
		const scoreType = program.map((task) => {
			const scores = data.filter((object) => object.task === task);
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
		let data = this.state.filteredData;
		const studentScores = students.map((student) => {
			const scores = data.filter((object) => object.name === student);
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
				difficultyscore: scoreTough,
			};
		});

		return studentScores;
	}

	render() {
		const dashboardFunScore = this.showScorePerProgram('fun');
		const dashboardToughScore = this.showScorePerProgram('tough');
		const dashboardStudentScore = this.showScorePerStudent();

		return (
			<div className={'overview'}>
				<Filter
					students={this.state.students}
					tasks={this.state.program}
					rawData={this.state.rawData}
					activeFilter={this.state.activeFilter}
					alterState={this.alterState}
					filterSwitchToState={this.filterSwitchToState}
					onClick={this.handleClick}
				/>
				<DashboardCharts
					dashboardFunScore={dashboardFunScore}
					dashboardToughScore={dashboardToughScore}
					dashboardStudentScore={dashboardStudentScore}
				/>
				<Footer />
			</div>
		);
	}
}
export default StudentDashboard;
