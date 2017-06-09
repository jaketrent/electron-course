export default _ =>
  <div className="fun-body">
  <p className="fun-desc">
  It was fun to make.  I think it'll be fun for you to watch and code.
              Let's learn a bit together.  
  </p>
  <div className="fun-links">
  <a className="fun-link" href="https://app.pluralsight.com/library/courses/electron-fundamentals/table-of-contents">Watch the Electron course</a>
  <div className="fun-meta">
  via Pluralsight
</div>
  <style jsx>{`
.fun-body {
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 700px;
}
.fun-desc {
  flex: 1;
}
.fun-links {
  flex: 1;
  padding-left: 20px;
}
.fun-link {
  display: block;
  padding: 12px 22px;
  background: linear-gradient(0deg, #D1591A, #e56a2c);
  border-radius: 3px;
  margin: 0 0 8px 0;
  text-align: center;
  border: none;
  font-size: 20px;
}
.fun-meta {
  font-size: 14px;
  text-align: center;
}
.fun-link:hover {
  color: #fff;
  background: #E56A2C;
  border: none;
}
`}</style>
  </div>
  </div>
