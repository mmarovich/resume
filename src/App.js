import React, { Component } from 'react';
import './App.css';
import resume from './resume.json';
import Experience from './Experience';
import Contact from './Contact';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';

class App extends Component {

	renderExperiences() {
		let resultsArray = [];
		resume.experiences.map((item, i) => {
			resultsArray.push(<Experience item={item} key={i} />)
		})
		return resultsArray;
	}

	renderEducation() {
		let resultsArray = [];
		resume.education.map((item, i) => {
			resultsArray.push(<Education item={item} key={i} />)
		})
		return resultsArray;
	}

	renderProjects() {
		let resultsArray = [];
		resume.projects.map((item, i) => {
			resultsArray.push(<Projects item={item} key={i} />)
		})
		return resultsArray;
	}

	renderSkills() {
		let resultsArray = [];
		resume.skills.map((item, i) => {
			resultsArray.push(<Skills item={item} key={i} />)
		})
		return resultsArray;
	}

	renderInterests() {
		let resultsArray = [];
		resume.interests.map((item, i) => {
			resultsArray.push(<li key={i}>{item}</li>)
		})
		return resultsArray;
	}

	render() {
    return (
      <div className="wrapper">
        <div className="sidebar-wrapper">
          
          <Contact />
            
          <div className="education-container container-block">
             <h2 className="container-block-title">Education</h2>
             
             {this.renderEducation()}

          </div>
          
          <div className="languages-container container-block">
              <h2 className="container-block-title">Languages</h2>
              <ul className="list-unstyled interests-list">
                  <li>{resume.languages[0].name} <span className="lang-desc">({resume.languages[0].details})</span></li>
                  <li>{resume.languages[1].name} <span className="lang-desc">({resume.languages[1].details})</span></li>
              </ul>
          </div>
          
          <div className="interests-container container-block">
              <h2 className="container-block-title">Interests</h2>
              <ul className="list-unstyled interests-list">
                  {this.renderInterests()}
              </ul>
          </div>
            
        </div>
        
        <div className="main-wrapper">
            
          <section className="section summary-section">
              <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
              <div className="summary">
                  <p>I began learning code when I joined the Thinkful bootcamp in October of 2016.  I have chosen this path because it offers me constant opportunities to learn every day within a context of humility and collaboration. It also offers me the skillset to achieve an outlet for my own personal creative projects.</p>
              </div>
          </section>
          
          <section className="section experiences-section">
              <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>
              
              {this.renderExperiences()}
              
          </section>
          
          <section className="section projects-section">
              <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
              <div className="intro">
                  <p>Here are some things that I have accomplished on my learning journey</p>
              </div>
              
              {this.renderProjects()}

          </section>
          
          <section className="skills-section section">
              <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
              <div className="skillset">        
                  
            		{this.renderSkills()}                    
                  
              </div>  
          </section>
            
        </div>
    </div>
    );
  }
}

export default App;
