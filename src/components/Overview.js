import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import StudentDashboard from './StudentDashboard';
import StudentView from './StudentView';
import winclogo from './resources/winc-logo.jpg';

function Overview() {
	return (
		<Router>
			<div className='top-title'>
				<img src={winclogo} />
				<h1>Student Dashboard</h1>
			</div>
			<ul className='top-nav'>
				<li>
					<Link to='/StudentDashboard'>Dashboard</Link>
				</li>
				<li>
					<Link to='/StudentView'>Studentview</Link>
				</li>
			</ul>
			<Switch>
				<Route path='/StudentDashBoard'>
					<StudentDashboard />
				</Route>
				<Route path='/StudentView'>
					<StudentView />
				</Route>
			</Switch>
		</Router>
	);
}

export default Overview;
