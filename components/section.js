export default props =>
  <section className={`${props.className ? props.className + ' ' : ''}section`}>
    <div className="section-inner">
      {props.children}
    </div>
    <style jsx>{`
      .section {
        position: relative;
        margin: 100px auto 0 auto;
        z-index: 2;
      }
      .section-inner {
        position: relative;
        width: 1024px;
        max-width: 100%;
        margin: 0 auto;
        z-index: 3;
      }
    `}</style>
  </section>
