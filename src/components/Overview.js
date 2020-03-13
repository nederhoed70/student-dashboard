import React from 'react';
import Header from './Header';
import Filter from './Filter';
import Footer from './Footer';
import StudentDashboard from './StudentDashboard';

function Overview() {
	return (
		<div className={'overview'}>
			<Header />
			<Filter />
			<StudentDashboard />
			<Footer />
		</div>
	);
}

export default Overview;
