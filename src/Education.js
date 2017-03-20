import React, { Component } from 'react';
import resume from './resume.json';

class Education extends Component {

	render() {
		return(
      <div className="item">
        <h4 className="degree">{this.props.item.degree}</h4>
        <h5 className="meta">{this.props.item.school}</h5>
        <div className="time">{this.props.item.period}</div>
    	</div>
		)
	}
}

export default Education;
