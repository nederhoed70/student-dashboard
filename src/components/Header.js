import React from 'react';

function Header(props) {
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
