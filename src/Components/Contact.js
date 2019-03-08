import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          {/* <div className="ten columns">
            <p className="lead">{message}</p>
          </div> */}
        </div>

        <div className="row">
          <div className="eight columns">
            <form
              action="https://mailthis.to/lancygoyal"
              method="post"
              id="contactForm"
              name="contactForm"
            >
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contactSubject">
                    Subject <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                    required
                  />
                </div>
                <input
                  type="hidden"
                  name="_after"
                  value="https://lancygoyal.github.io/"
                />
                <input type="hidden" name="_honeypot" value="" />
                <input
                  type="hidden"
                  name="_subject"
                  value="Request : lancygoyal.github.io"
                />
                <input
                  type="hidden"
                  name="_confirmation"
                  value="I will respond asap. Thanks!"
                />
                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy </div>
            <div id="message-success">
              <i className="fa fa-check" />
              Your message was sent, thank you!
              <br />
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                <a href={"mailto:" + email}>{email}</a>
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>
                  <a href="tel:+919041040600">{phone}</a>
                </span>
              </p>
            </div>

            <div className="widget widget_tweets">
              <h4 className="widget-title">Scan QR Code</h4>
              <img alt="QR Code" src="/images/qrcode.png" width="160px" />
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
