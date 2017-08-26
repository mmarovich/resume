import React, { Component } from 'react';
import resume from './resume.json';

class Contact extends Component {
	render() {
		return(
			<div>
				<div className="profile-container">
		      <img className="profile" src={resume.image} alt="" />
		      <h1 className="name">{resume.name}</h1>
		      <h3 className="tagline">Full Stack Developer</h3>
		  	</div>
		  	<div className="contact-container container-block">
		      <ul className="list-unstyled contact-list">
		          <li className="email"><i className="fa fa-envelope"></i><a href={"mailto:" + resume.email}>{resume.email}</a></li>
		          <li className="phone"><i className="fa fa-phone"></i><a href={"tel:" + resume.phone}>{resume.phone}</a></li>
		          <li className="website"><i className="fa fa-globe"></i><a href={resume.website} target="_blank">Portfolio</a></li>
		          <li className="linkedin"><i className="fa fa-linkedin"></i><a href={resume.linkedin} target="_blank">Linkedin</a></li>
		          <li className="github"><i className="fa fa-github"></i><a href={resume.github} target="_blank">GitHub</a></li>
		          {/*<li className="twitter"><i className="fa fa-twitter"></i><a href="" target="_blank">@twittername</a></li>*/}
		      </ul>
		    </div>
	    </div>
		)
	}
}

export default Contact;
