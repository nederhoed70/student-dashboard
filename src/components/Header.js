import React from 'react';

function Header(props) {
	const showStudentScore = studentId => {
		let selectedStudent = studentId;
		let data = props.data;
		//const scores = data.filter(object => object.name === selectedStudent);
		const scores = [
			...new Set(data.filter(object => object.name === selectedStudent))
		];
		return {
			name: selectedStudent,
			scores: scores
		};
	};

	const handleMenu = event => {
		let studentScore = showStudentScore();
		props.studentScoreFromChild(event.target.title);
	};

	console.log(props);
	const menu = props.students.map(student => (
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
