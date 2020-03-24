import React from 'react';

function Filter(props) {
	const studentsFilter = props.students.map(student => (
		<li
			className={props.activeFilter.includes(student) ? 'inactive' : 'active'}
			title={student}
			key={student + 'key'}
			id={'name'}
			onClick={props.handleClick}
			style={{ cursor: 'pointer' }}
		>
			{student}
		</li>
	));
	const tasksFilter = props.tasks.map(task => (
		<li
			className={props.activeFilter.includes(task) ? 'inactive' : 'active'}
			title={task}
			key={task + 'key'}
			id={'task'}
			onClick={props.handleClick}
			style={{ cursor: 'pointer' }}
		>
			{task.replace(/\s/g, '').substring(0, 7)}
		</li>
	));
	return (
		<div className={'filter'}>
			<h2>Filters:</h2>
			<h3>students</h3>
			<ul className='students-filter'>{studentsFilter}</ul>
			<h3>tasks</h3>
			<ul className='tasks-filter'>{tasksFilter}</ul>
		</div>
	);
}

export default Filter;
