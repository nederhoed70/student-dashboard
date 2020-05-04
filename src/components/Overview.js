import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import StudentDashboard from './StudentDashboard';
import StudentView from './StudentView';
import winclogo from './resources/winc-logo.jpg';

class Overview extends React.Component {
	render() {
		return (
			<Router>
				<div className='page-header' id='top-title'>
					<img src={winclogo} alt={'Winc Student Dashboard'} />
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
					<Route exact path='/' component={StudentDashboard} />
					{/* <StudentDashboard />
					</Route> */}
					<Route path='/StudentDashboard' component={StudentDashboard} />
					{/* <StudentDashboard />
					</Route> */}
					<Route path='/StudentView'>
						<StudentView />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default Overview;
