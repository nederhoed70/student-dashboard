import React from 'react';

function Filter(props) {
	function filterAllData(item, filter) {
		const dataToFilter = props.rawData;
		let filteredDataToState = '';
		if (item === 'name') {
			// filteredDataToState = dataToFilter.filter(each => each.name !== filter);
			filteredDataToState = dataToFilter.filter(
				each => !props.activeFilter.includes(each.name)
			);
		} else if (item === 'task') {
			// filteredDataToState = dataToFilter.filter(each => each.task !== filter);
			filteredDataToState = dataToFilter.filter(
				each => !props.activeFilter.includes(each.task)
			);
		}
		props.alterState(filteredDataToState);
	}

	const handleClick = event => {
		const { title, id } = event.target;
		//filter data in charts by clicked filter

		let filterList = props.activeFilter;
		if (!props.activeFilter.includes(title)) {
			filterList.push(title);
		} else {
			filterList.shift(title);
		}
		props.filterSwitchToState(filterList);
		filterAllData(id, title);
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
