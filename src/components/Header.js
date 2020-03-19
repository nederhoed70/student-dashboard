import React from 'react';

function Header(props) {
	const showStudentScore = studentId => {
		let selectedStudent = studentId;
		let data = props.data.rawData;
		const scores = [
			...new Set(data.filter(object => object.name === selectedStudent))
		];
		return {
			name: selectedStudent,
			scores: scores
		};
	};

	const handleMenu = event => {
		//	let studentScore = showStudentScore();
		props.selectedStudentFromChild(event.target.title);
	};

	const menu = props.data.students.map(student => (
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
		<header>
			<nav>
				<ul>{menu}</ul>
			</nav>
		</header>
	);
}

export default Header;
