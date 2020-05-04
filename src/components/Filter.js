import React from 'react';

class Filter extends React.Component {
	render() {
		const studentsFilter = this.props.students.map((student) => (
			<li
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
			</li>
		));
		const tasksFilter = this.props.tasks.map((task) => (
			<li
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
			</li>
		));
		return (
			<div className={'column-lg-2 column-md-2 column-sm-2 column-xs-2'}>
				<h2>Filters:</h2>
				<h3>students</h3>
				<ul className='students-filter'>{studentsFilter}</ul>
				<h3>tasks</h3>
				<ul className='tasks-filter'>{tasksFilter}</ul>
			</div>
		);
	}
}

export default Filter;
