import React from 'react'

export default props =>
  <form
    action="//jaketrent.us16.list-manage.com/subscribe/post?u=a807b6fd3aee3dfcaba6c44c2&amp;id=b958d44038"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    className="mail"
    target="_blank"
    noValidate
  >
    <label htmlFor="mce-EMAIL" className="mail__label">
      Receive news about new courses I release!
    </label>
    <input
      type="email"
      defaultValue=""
      name="EMAIL"
      className="mail__input"
      id="mce-EMAIL"
      placeholder="email address"
      required
    />
    <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
      <input
        type="text"
        name="b_a807b6fd3aee3dfcaba6c44c2_b958d44038"
        tabIndex="-1"
        defaultValue=""
      />
    </div>
    <div className="clear">
      <input
        type="submit"
        value="Subscribe"
        name="subscribe"
        id="mc-embedded-subscribe"
        className="mail__button"
      />
    </div>
    <style jsx>{`
      .mail {
        display: flex;
        flex-direction: column;
      }
      .mail__label {
      }
      .mail__input {
        padding: 0.125em .5em;
        border: 0;
        border-radius: 3px;
        height: 2em;
        line-height: 2em;
        font-size: 1.25em;
        margin: 0.5em 0;
      }
      .mail__button {
        display: inline-block;
        height: 2em;
        line-height: 2em;
        padding: 0 2em;
        background: linear-gradient(0deg, #D1591A, #e56a2c);
        border-radius: 3px;
        margin: 0 auto;
        text-align: center;
        border: none;
        font-size: 1.25em;
        color: #fff;
        font-family: 'Raleway', sans-serif;
      }
      .mail__button:hover {
        color: #fff;
        background: #E56A2C;
        border: none;
      }
      @media screen and (min-width: 426px) {
        .mail {
          flex-direction: row;
          align-items: center;
          flex-wrap: wrap;
          max-width: 36em;
          margin: 0 auto;
        }
        .mail__label {
          min-width: 100%;
        }
        .mail__input {
          flex: 1;
          margin-right: 0.5em;
        }
      }
    `}</style>
  </form>
