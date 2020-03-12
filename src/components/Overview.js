import React from 'react';
import Header from './Header';
import Footer from './Footer';
import StudentDashboard from './StudentDashboard';

function Overview() {
	return (
		<div>
			<Header />

			<StudentDashboard />
			<Footer />
		</div>
	);
}

export default Overview;
