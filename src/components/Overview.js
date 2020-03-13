import React from 'react';
import StudentDashboard from './StudentDashboard';
import StudentView from './StudentView';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Overview() {
	return (
		<Router>
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
