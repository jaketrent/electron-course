import React from 'react'

export default props =>
  <div>
    <link
      href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
      rel="stylesheet"
      type="text/css"
    />
    <style type="text/css">
      {` #mc_embed_signup{font:14px Helvetica,Arial,sans-serif; } `}
    </style>
    <div id="mc_embed_signup">
      <form
        action="//jaketrent.us16.list-manage.com/subscribe/post?u=a807b6fd3aee3dfcaba6c44c2&amp;id=b958d44038"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <label htmlFor="mce-EMAIL">
            Receive news about new courses I release!
          </label>
          <input
            type="email"
            defaultValue=""
            name="EMAIL"
            className="email"
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
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
