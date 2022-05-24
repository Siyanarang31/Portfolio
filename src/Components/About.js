import React, { Component } from 'react';
import pdf from '../Components/Resume.pdf'


class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
         <div data-aos="zoom-in">
            <img className="profile-pic"  src={profilepic} alt="Siya Profile Pic" />
         </div>
         </div>
         <div className="nine columns main-col">
         <div data-aos="zoom-in">
            <h2>About Me</h2>
         </div>
            <p>{bio}</p>
            
            <div className="row">
               <div className="columns contact-details">
               <div data-aos="zoom-in">
                  <h2>Contact Details</h2>
               </div> 
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               
               <div className="columns download">
               <div data-aos="zoom-in">
                  <p>
                     <a href={pdf} className="button"><i className="fa fa-download"></i>Show Resume</a>
                  </p>
               </div>
               </div>
            </div>
            
         </div>
      </div>

   </section>
    );
  }
}

export default About;
