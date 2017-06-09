export default props =>
  <header className="pg-header">
    <h1 className="pg-title">
      <a href="https://app.pluralsight.com/library/courses/electron-fundamentals/table-of-contents" className="pg-title-link">Learn Electron</a>
    </h1>
    <h2 className="pg-subtitle">A course to engage your web tech skills in native desktop app dev</h2>
  <style jsx>{`
.pg-header {
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: url(/static/img/merrymedlies.png) center no-repeat;
}
.pg-title {
  font-size: 70px;
}
.pg-title-link {
  border-bottom: 0;
  border-bottom: 1px solid transparent;
}
.pg-title-link:hover {
  color: inherit;
}
.pg-subtitle {
  margin-top: 20px;
}
`}</style>
  </header>
