import React from 'react';
import {
	VictoryBar,
	VictoryChart,
	VictoryAxis,
	VictoryTheme,
	VictoryGroup,
	VictoryLine
} from 'victory';

function StudentViewCharts(props) {
	return (
		<VictoryChart
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
					tickLabels: { fontSize: 5, padding: 5, angle: 45 }
				}}
			/>
			<VictoryGroup offset={10} colorScale={'qualitative'}>
				<VictoryBar
					animate={{
						duration: 1300,
						onLoad: { duration: 700 }
					}}
					barWidth={2}
					height={3}
					style={{
						data: { fill: '#00a8cc' }
					}}
					data={props.chartData}
					x='task'
					y='difficulty'
				/>
				<VictoryBar
					animate={{
						duration: 1300,
						onLoad: { duration: 700 }
					}}
					barWidth={2}
					height={3}
					style={{
						data: { fill: '#c43a31' }
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
