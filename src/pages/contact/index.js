/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState} from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)  }=${  encodeURIComponent(data[key])}`)
    .join('&')
}

export default function Index() {
  const [val, setVal] = useState({ isValidated: false })
  const handleChange = (e) => {
    setVal({
      ...val,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
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
      .then(() => navigate(form.getAttribute('action')))
      // eslint-disable-next-line no-alert
      .catch(error => alert(error));
  }

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Contact</h1>
            <form
              name="contact"
              method="post"
              action="/contact/thanks/"
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
              <div className="field">
                <label className="label" htmlFor="name">
                  Your name
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
                    type="email"
                    name="email"
                    onChange={handleChange}
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="message">
                  Message
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name="message"
                    onChange={handleChange}
                    id="message"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <button className="button is-link" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
