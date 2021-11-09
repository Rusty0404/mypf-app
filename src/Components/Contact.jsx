import React from 'react';

const Contact = () => {
    return(
        <div>
            <div className="container">
<section className="section2">
    <div className="contactform">
                <h5>Contact Form</h5>
              
                    <p>
                      Depending on the content of the inquiry, it may take time to reply.
                    </p>
                    <form
                      action="https://formspree.io/f/xpzkaqnl"
                      method="POST"
                      className="form-contact"
                    >
                     
                     <label className="mdl-textfield__label" htmlFor="firstname">
                     <i className="cntfrmicn fa fa-user"></i>
                       Generic Name...
                        <input
                          className="form-fields"
                          type="text"
                          id="Name"
                          name="firstname"
                        />
                        </label>
                        
                   
                      
                        
                        <label className="mdl-textfield__label" htmlFor="Email"
                          ><i className="cntfrmicn fa fa-envelope"></i>Email...(Required)
                        <input
                          className="form-fields"
                          type="text"
                          id="Email"
                          name="_replyto"
                          　
                        />
                        </label>
                        <label className="form-fields" htmlFor="note"
                          > <i className="cntfrmicn fa fa-comment"></i>Inquiry details
                        <textarea
                          className="form-fields"
                          type="text"
                          rows="5"
                          id="note"
                          name="message"
                        ></textarea>
                        </label>
                   
                      <p>
                     
                        <button
                          className="form-fields button"
                          type="submit"
                          　id="contactbtn"
                        >
                        message me
                        </button>
                        
                      </p>
                    </form>
                    
                    </div>
      </section>
      </div>
        </div>
    )
}

export default Contact;