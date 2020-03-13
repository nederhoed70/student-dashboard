import React from 'react';

function Filter(props) {
	function filterAllData(item, filter) {
		const dataToFilter = props.rawData;
		let filteredDataToState = '';
		if (item === 'name') {
			filteredDataToState = dataToFilter.filter(each => each.name !== filter);
		} else if (item === 'task') {
			filteredDataToState = dataToFilter.filter(each => each.task !== filter);
		}
		props.alterState(filteredDataToState);
	}

	const handleClick = event => {
		const { title, id } = event.target;
		event.target.classList = { backgroundColor: 'black' };
		//filter data in charts by clicked filter
		filterAllData(id, title);
		let filterList = props.activeFilter;
		filterList.push(title);
		props.filterSwitchToState(filterList);
	};
	const studentsFilter = props.students.map(student => (
		<li
			className={props.activeFilter.includes(student) ? 'inactive' : 'active'}
			title={student}
			key={student}
			id={'name'}
			onClick={handleClick}
			style={{ cursor: 'pointer' }}
		>
			{student}
		</li>
	));
	const tasksFilter = props.tasks.map(task => (
		<li
			className={props.activeFilter.includes(task) ? 'inactive' : 'active'}
			title={task}
			key={task}
			id={'task'}
			onClick={handleClick}
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
