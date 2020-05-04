import React from 'react';
import DataHandler from '../data/DataHandler';
import StudentMenu from './StudentMenu';
import Footer from './Footer';
import StudentViewCharts from '../charts/StudentViewCharts';

class StudentView extends React.Component {
	constructor() {
		super();
		this.state = {
			students: [...DataHandler('students')],
			program: [...DataHandler('program')],
			rawData: [...DataHandler('raw')],
			activeFilter: '',
			studentScore: [],
		};
		this.selectedStudentFromChild = this.selectedStudentFromChild.bind(this);
	}
	//this is where the selected student from Header menu arrives at parent
	selectedStudentFromChild(newSelectedStudent) {
		this.setState({ activeFilter: newSelectedStudent });
		this.filterStudentScore(newSelectedStudent);
	}
	// filter data by specified student
	filterStudentScore(selectedStudent) {
		let studentToFilter = selectedStudent;
		let dataToFilter = this.state.rawData;
		let filteredStudentData = dataToFilter.filter((each) =>
			each.name.includes(studentToFilter)
		);
		this.setState({ studentScore: filteredStudentData });
	}

	render() {
		let showChart = '';
		if (this.state.activeFilter) {
			showChart = <StudentViewCharts chartData={this.state.studentScore} />;
		}
		return (
			<div className={'studentview'}>
				<StudentMenu
					data={this.state}
					selectedStudentFromChild={this.selectedStudentFromChild}
				/>

				<h2 className='student-name'>{this.state.activeFilter}</h2>
				{showChart}

				<Footer />
			</div>
		);
	}
}

export default StudentView;
