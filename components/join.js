export default _ =>
  <div className="signup">
    <p className="signup__desc">
      This course is offered as a part of the Pluralsight library. Pluralsight
      is a great
      platform for expanding your skills and gaining the knowledge that you
      desire
      to engage in new and interesting projects. Try this and many other
      worthwhile courses
      in the library.{' '}
    </p>
    <div className="signup__links">
      <a
        className="signup__link"
        href="http://bit.ly/pluralsight-create-the-future"
      >
        Try Pluralsight
      </a>
      <div className="signup__meta">
        10-day free trial
      </div>
    </div>
    <style jsx>{`
      .signup {
        margin: 0 auto;
      }
      .signup__desc {
        margin-bottom: 2em;
      }
      .signup__links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .signup__link {
        display: inline-block;
        padding: 0.75em 2em;
        background: linear-gradient(0deg, #D1591A, #e56a2c);
        border-radius: 3px;
        margin: 0 0 0.5em 0;
        text-align: center;
        border: none;
        font-size: 1.25em;
      }
      .signup__link:hover {
        color: #fff;
        background: #E56A2C;
        border: none;
      }
      .signup__meta {
        font-style: italic;
        font-size: 0.8em;
      }
      @media screen and (min-width: 650px) {
        .signup {
          display: flex;
          align-items: center;
        }
        .signup__desc {
          flex: 2;
        }
        .signup__links {
          flex: 1;
          margin-left: 1.25em;
        }
      }
    `}</style>
  </div>
