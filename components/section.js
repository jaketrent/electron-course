export default props =>
  <section className={`${props.className ? props.className + ' ' : ''}section`}>
    <div className="section-inner">
      {props.children}
    </div>
    <style jsx>{`
      .section {
      }
      .section-inner {
      }
    `}</style>
  </section>
