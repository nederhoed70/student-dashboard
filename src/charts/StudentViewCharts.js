import React from 'react';
import {
	VictoryBar,
	VictoryChart,
	VictoryAxis,
	VictoryTheme,
	VictoryGroup,
} from 'victory';

function StudentViewCharts(props) {
	return (
		<VictoryChart
			style={{ parent: { maxWidth: '100%', margin: 0 } }}
			theme={VictoryTheme.material}
			width={470}
			height={235}
		>
			<VictoryAxis
				label='Overall scores per task'
				theme={VictoryTheme.material}
				fixLabelOverlap={false}
				style={{
					axisLabel: { fontSize: 5, padding: 5 },
					ticks: { stroke: 'grey', size: 5 },
					tickLabels: { fontSize: 5, padding: 0, angle: 50 },
				}}
			/>
			<VictoryAxis dependentAxis />
			<VictoryGroup offset={3}>
				<VictoryBar
					animate={{
						duration: 1300,
						onLoad: { duration: 700 },
					}}
					barWidth={1}
					barHeight={1}
					style={{
						data: { fill: '#00a8cc' },
					}}
					data={props.chartData}
					x='task'
					y='difficulty'
				/>

				<VictoryBar
					animate={{
						duration: 1300,
						onLoad: { duration: 700 },
					}}
					barWidth={1}
					barHeight={1}
					style={{
						data: { fill: '#c43a31' },
					}}
					data={props.chartData}
					x='task'
					y='fun'
				/>
			</VictoryGroup>
		</VictoryChart>
	);
}

export default StudentViewCharts;
