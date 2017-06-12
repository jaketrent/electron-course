export default props =>
  <div className="spacer">
    {props.children}
    <style jsx>{`
      .spacer {
        padding-left: 1.25em;
        padding-right: 1.25em;
      }
    `}</style>
  </div>
