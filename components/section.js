import Spacer from './spacer'

export default props =>
  <section className={`${props.className ? props.className + ' ' : ''}section`}>
    <Spacer>
      {props.children}
    </Spacer>
    <style jsx>{`
      .section {
        padding: 3em 0;
        max-width: 56em;
        margin: 0 auto;
      }
      @media screen and (min-width: 769px) {
        .section {
          padding: 5em 0;
        }
      }
    `}</style>
  </section>
