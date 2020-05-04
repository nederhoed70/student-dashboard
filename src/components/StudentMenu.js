import React from 'react';

function StudentMenu(props) {
	const handleMenu = (event) => {
		//	let studentScore = showStudentScore();
		props.selectedStudentFromChild(event.target.title);
	};

	const menu = props.data.students.map((student) => (
		<li
			title={student}
			key={student + 'headermenu'}
			id={'name'}
			style={{ cursor: 'pointer' }}
			onClick={handleMenu}
		>
			{student}
		</li>
	));

	return (
		<div className='student-menu'>
			<ul>{menu}</ul>
		</div>
	);
}

export default StudentMenu;
