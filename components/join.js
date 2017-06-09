export default _ =>

  <div className="signup-body">
  <p className="signup-desc">
  This course is offered as a part of the Pluralsight library.  Pluralsight is a great
platform for expanding your skills and gaining the knowledge that you desire
to engage in new and interesting projects.  Try this and many other worthwhile courses
  in the library. 
  </p>
  <div className="signup-links">
  <a className="signup-link" href="http://bit.ly/jaketrent-pluralsight">Try Pluralsight</a>
  <div className="signup-meta">
  30-day free trial
</div>
  </div>
  <style jsx>{`

.signup {
  width: 700px;
}
.signup-body {
  display: flex;
}
.signup-desc {
  flex: 2;
}g
.signup-links {
  flex: 1;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.signup-link {
  display: inline-block;
  width: 220px;
  padding: 12px 22px;
  background: linear-gradient(0deg, #D1591A, #e56a2c);
  border-radius: 3px;
  margin: 0 0 8px 0;
  text-align: center;
  border: none;
  font-size: 20px;
}
.signup-link:hover {
  color: #fff;
  background: #E56A2C;
  border: none;
}
.signup-meta {
  font-style: italic;
  font-size: 0.8em;
}
`}</style>
  </div>
