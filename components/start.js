export default _ =>
  <div className="start">
    <pre>
      <code className="start__code">npm install electron-prebuilt</code>
    </pre>
    <p className="start-desc">
      If you know how to npm install, you know how to get started with
      Electron. You use the same tools you're used to in a web tech
      stack. Write JS in Node style and write UIs in HTML and CSS.
    </p>
    <p>
      Jump right into coding the basics in the&nbsp;
      <a href="https://app.pluralsight.com/player?course=electron-fundamentals&author=jake-trent&name=electron-fundamentals-m2&clip=0&mode=live">
        second module
      </a>.
    </p>
    <style jsx>{`
      .start {
      }
      .start__code {
        display: block;
        max-width: 100%;
        margin: 0 auto 2.25em auto;
        font-family: Menlo,
          Monaco,
          "Andale Mono",
          "lucida console",
          "Courier New",
          monospace;
        background: #353B3C;
        border: 3px solid white;
        border-radius: 3px;
        padding: 1.125em;
        text-align: center;
        overflow: hidden;
      }
      @media screen and (min-width: 769px) {
        .start__code {
          width: 70vw;
        }
      }
    `}</style>
  </div>
