/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { navigate } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function Contact() {
  const [validationMessage, setValidationMessage] = useState('')
  const [isValidationShown, setIsValidationShown] = useState(false);
  const [val, setVal] = useState({ isValidated: false });
  const handleChange = e => {
    setVal({
      ...val,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...val,
      }),
    })
      .then(() => {
        setValidationMessage(`Thank you for your message, ${val.name}!`)
        setIsValidationShown(true)
        setVal({ isValidated: false });
      })
      .catch(error => {
        setValidationMessage(`Sorry there was an error submitting your message. \n \n Error Code: ${error.status}`);
        setIsValidationShown(true);
        setVal({ isValidated: false });
      });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <h1 className="title spaced-title has-text-centered">Contact Us</h1>
            <p className="has-text-centered has-text-grey">
              Tell us how we can help you!
            </p>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={handleChange} />
                </label>
              </div>
              <div className="columns">
                <div className="column is-5">
                  <div className="field">
                    <label className="label" htmlFor="name">
                      Name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        id="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="email">
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="email"
                        onChange={handleChange}
                        id="email"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="column is-5 is-offset-2">
                  <div className="has-text-left">
                    <div className="field">
                      <label className="label" htmlFor="phone">
                        Phone number (optional)
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type="number"
                          name="phone"
                          onChange={handleChange}
                          id="phone"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column is-12">
                  <div className="field">
                    <label className="label" htmlFor="message">
                      Message
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        rows="5"
                        type="text"
                        name="message"
                        onChange={handleChange}
                        id="message"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column is-7">
                  {isValidationShown && validationMessage}
                </div>
                <div className="column is-5">
                  <button
                    type="submit"
                    className="is-pulled-right button has-background-grey has-text-white is-rounded"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
