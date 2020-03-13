import React from 'react';

function Header(props) {
	const handleMenu = event => {
		props.showStudentScore(event.title);
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
			<h1>Student Dashboard</h1>
			<nav>
				<ul>{menu}</ul>
			</nav>
		</header>
	);
}

export default Header;
