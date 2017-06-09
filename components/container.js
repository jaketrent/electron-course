export default props =>
  <div className="container">
    {props.children}
    <style jsx>{`
      .container {
        outline: 1px solid blue;
      }
    `}</style>
  </div>
