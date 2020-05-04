import React from 'react';

class Filter extends React.Component {
	render() {
		const studentsFilter = this.props.students.map((student) => (
			<div
				className={
					this.props.activeFilter.includes(student) ? 'inactive' : 'active'
				}
				title={student}
				key={student + 'key'}
				onClick={this.props.onClick}
				id={'name'}
				style={{ cursor: 'pointer' }}
			>
				{student}
			</div>
		));
		const tasksFilter = this.props.tasks.map((task) => (
			<div
				className={
					this.props.activeFilter.includes(task) ? 'inactive' : 'active'
				}
				title={task}
				key={task + 'key'}
				id={'task'}
				onClick={this.props.onClick}
				style={{ cursor: 'pointer' }}
			>
				{task.replace(/\s/g, '').substring(0, 7)}
			</div>
		));
		return (
			<div className={'filter-menu'}>
				<h2>Filters:</h2>
				<h3>students</h3>
				<div className='students-filter'>{studentsFilter}</div>
				<h3>tasks</h3>
				<div className='tasks-filter'>{tasksFilter}</div>
			</div>
		);
	}
}

export default Filter;
