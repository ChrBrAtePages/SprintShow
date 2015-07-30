define(['./chart','./presentation','./sprintdata'],function (chart, presentation, sprintdata) {
		
	$.get( "http://localhost:3001/jiradata/sprinthistory", function( data ) {
		console.log(data);
		chart.renderCharts(sprintdata.getCurrentSprint(), sprintdata.getCurrentSprintTypes(), data);
	});
	presentation.hello();
/*
*/ 
});