var React = require('react');
var Job   = require('./job.jsx');


var fartboner;




React.createClass({
	render: function() {
		return (
			<span>
				<Job />
				<Job />
				<Job />
				<Job />
				<Job />
			</span>
		);
	}
});