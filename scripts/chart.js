

define([
		"./charts/doughnut",
		"./charts/line"
		],function (doughnut, line) {
	return {
		renderCharts :	function (taskDistributionData, typeDistributionData, sprintHistoryData) {
			//this.setGlobalChartJSConfig();
			this.renderTaskDistribution(taskDistributionData);
			this.renderTypeDistribution(typeDistributionData);
			this.renderSprintHistoryChart(sprintHistoryData);
		},
		renderTaskDistribution : function (taskDistributionData){
			doughnut.renderChart({
				canvasName: "taskDistribution",
				data: taskDistributionData,
				colorType: {
					base: 'blue',
					highcolor: 'orange'
				}
			});
		},
		renderTypeDistribution : function (typeDistributionData){
			doughnut.renderChart({
				canvasName: "typeDistribution",
				data: typeDistributionData,
				colorType: {
					base: 'green',
					highcolor: 'red'
				}
			});
		},
		renderSprintHistoryChart : function (sprintHistoryData){
			line.renderChart({
				canvasName: "history",
				data: sprintHistoryData
			});
		},
		setGlobalChartJSConfig : function (){
			Chart.defaults.global = {
				//animation: false,
			};
		}
	};
});
