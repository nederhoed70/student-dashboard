import React from 'react';
import {
	VictoryBar,
	VictoryChart,
	VictoryAxis,
	VictoryTheme,
	VictoryGroup,
	VictoryLine,
} from 'victory';

function DashboardCharts(props) {
	return (
		<div className={'charts'}>
			<VictoryChart
				style={{ parent: { maxWidth: '70%' } }}
				theme={VictoryTheme.material}
				width={800}
				height={325}
				domainPadding={1}
			>
				<VictoryAxis
					label='Overall scores per task'
					theme={VictoryTheme.material}
					fixLabelOverlap={false}
					style={{
						axisLabel: { fontSize: 10, padding: 40 },
						ticks: { stroke: 'grey', size: 5 },
						tickLabels: { fontSize: 5, padding: 5, angle: 45 },
					}}
				/>
				<VictoryGroup offset={10} colorScale={'qualitative'}>
					<VictoryBar
						animate={{
							duration: 2000,
							onLoad: { duration: 1000 },
						}}
						barWidth={3}
						height={3}
						style={{
							data: { fill: '#c43a31' },
						}}
						data={props.dashboardFunScore}
						x='task'
						y='funscore'
					/>
					<VictoryBar
						animate={{
							duration: 2000,
							onLoad: { duration: 700 },
						}}
						barWidth={2}
						height={3}
						style={{
							data: { fill: '#00a8cc' },
						}}
						data={props.dashboardToughScore}
						x='task'
						y='difficultyscore'
					/>
				</VictoryGroup>
			</VictoryChart>
			<VictoryChart
				width={800}
				height={225}
				domainPadding={0}
				style={{ parent: { maxWidth: '70%' } }}
			>
				<VictoryAxis
					label='Overall scores per student'
					theme={VictoryTheme.material}
					fixLabelOverlap={false}
					style={{
						axisLabel: { fontSize: 10, padding: 40 },
						ticks: { stroke: 'grey', size: 5 },
						tickLabels: { fontSize: 9, padding: 5, angle: 45 },
					}}
				/>

				<VictoryLine
					animate={{
						duration: 2000,
						onLoad: { duration: 1000 },
					}}
					style={{
						data: {
							stroke: '#c43a31',
							strokeWidth: 3,
						},
						labels: {
							fontSize: 15,
							fill: ({ datum }) => (datum.x === 3 ? '#000000' : '#c43a31'),
						},
					}}
					height={3}
					data={props.dashboardStudentScore}
					x='name'
					y='funscore'
				/>
				<VictoryLine
					animate={{
						duration: 2000,
						onLoad: { duration: 1000 },
					}}
					style={{
						data: {
							stroke: '#00a8cc',
							strokeWidth: 3,
						},
						labels: {
							fontSize: 15,
							fill: ({ datum }) => (datum.x === 3 ? '#000000' : '#c43a31'),
						},
					}}
					height={3}
					data={props.dashboardStudentScore}
					x='name'
					y='difficultyscore'
				/>
			</VictoryChart>
		</div>
	);
}

export default DashboardCharts;
