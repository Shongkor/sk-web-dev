import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import './Contact.css'

const Contact = () => {
    return (
        <div className="background">
            <Navigation></Navigation>
            <form id="contactForm" class="col-md-6 col-sm-12 col-xs-12  m-auto py-5" name="contact" method="POST">
                
                <div class="mb-3">
                    <label for="inputName" class="form-label">Name</label>
                    <input required="" name="name" type="text" class="form-control" id="inputName" placeholder="Your Name"/>
                </div>
                <div class=" ml-auto mr-auto mb-3">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input required="" name="email" type="text" class="form-control" id="inputEmail" placeholder="Your Email"/>
                </div>
                <div class="ml-auto mr-auto mb-3">
                    <label for="inputMassage" class="form-label">Your Massage
                    </label>
                    <textarea required="" name="message" type="text" class="form-control" id="inputMassage" placeholder="Your Massage" style={{height: "150px"}}>
                    </textarea>
                </div>
                <div className="text-center">
                    <button class="btn btn-outline-success">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;