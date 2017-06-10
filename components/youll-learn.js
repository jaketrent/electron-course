import ToC from './toc'

export default _ =>
  <div className="youll-learn">
    <ToC.List>
      <ToC.Item
        href="https://app.pluralsight.com/player?course=electron-fundamentals&author=jake-trent&name=electron-fundamentals-m1&clip=0&mode=live"
        title="Learn About Electron"
        length="06:47"
      >
        Determine what Electron is, where its sweet spot is, and what it's best
        at.{' '}
      </ToC.Item>
      <ToC.Item
        href="https://app.pluralsight.com/player?course=electron-fundamentals&author=jake-trent&name=electron-fundamentals-m2&clip=0&mode=live"
        title="Try Out Electron"
        length="17:36"
      >
        Get basic Electron setup running using all basic tech. Introduce
        inter-process communication.
      </ToC.Item>
      <ToC.Item
        href="https://app.pluralsight.com/player?course=electron-fundamentals&author=jake-trent&name=electron-fundamentals-m3&clip=0&mode=live"
        title="Experiment with Native APIs"
        length="36:39"
      >
        Learn highlight Electron APIs. Use each in a small project.
      </ToC.Item>
      <ToC.Item
        href="https://app.pluralsight.com/player?course=electron-fundamentals&author=jake-trent&name=electron-fundamentals-m4&clip=0&mode=live"
        title="Make an Electron App"
        length="31:01"
      >
        Combine your Electron skills in a fun and interesting project.
      </ToC.Item>
      <ToC.Item
        href="https://app.pluralsight.com/player?course=electron-fundamentals&author=jake-trent&name=electron-fundamentals-m5&clip=0&mode=live"
        title="Package Native Apps"
        length="17:36"
      >
        Get your app ready for distribution. Test on different operating
        systems.
      </ToC.Item>
      <ToC.Total length="1h 50m" />
    </ToC.List>
    <style jsx>{`
      .youll-learn {
        background: url(/static/img/atom.png) no-repeat -190px 100%;
      }
    `}</style>
  </div>
