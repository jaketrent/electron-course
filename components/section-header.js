export default props =>
  <header className="header">
    <h2 className="title">{props.children}</h2>
    <style jsx>{`
.header {
  text-align: center;
  margin-bottom: 50px;
}
.title {
  font-size: 50px;
}
    `}</style>
  </header>
