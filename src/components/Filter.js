import React from 'react';

function Filter(props) {
	// function filterAllData(item, filter) {
	// 	const dataToFilter = props.rawData;
	// 	let filteredDataToState = '';
	// 	if (item === 'name') {
	// 		// filteredDataToState = dataToFilter.filter(each => each.name !== filter);
	// 		filteredDataToState = dataToFilter.filter(
	// 			each => !filter.includes(each.name)
	// 		);
	// 	} else if (item === 'task') {
	// 		// filteredDataToState = dataToFilter.filter(each => each.task !== filter);
	// 		filteredDataToState = dataToFilter.filter(
	// 			each => !filter.includes(each.task)
	// 		);
	// 	}
	// 	props.alterState(filteredDataToState);
	// }

	const handleClick = event => {
		let { id, title } = event.target;
		//filter data in charts by clicked filter
		let filterList = props.activeFilter;
		if (!filterList.includes(title)) {
			filterList.push(title);
			console.log('aan');
			props.filterSwitchToState(filterList);
		} else if (filterList.includes(title)) {
			console.log('uit');
			let newFilterList = props.activeFilter.filter(fil => fil !== title);
			console.log('fl:', newFilterList);
			props.filterSwitchToState(newFilterList);
		}

		console.log('state:', props.activeFilter);
		props.alterState(id, title);
	};
	const studentsFilter = props.students.map(student => (
		<li
			className={props.activeFilter.includes(student) ? 'inactive' : 'active'}
			title={student}
			key={student + 'key'}
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
			key={task + 'key'}
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
