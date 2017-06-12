export default props =>
  <header className="header">
    <h2 className="title">{props.children}</h2>
    <style jsx>{`
      .header {
        text-align: center;
        margin-bottom: 2em;
        font-size: 2rem;
      }
      .title {
        font-size: 1.125em;
      }
      @media screen and (min-width: 769px) {
        .title {
          font-size: 1.5em;
        }
      }
    `}</style>
  </header>
