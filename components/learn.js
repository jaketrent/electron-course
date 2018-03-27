import Atom from './atom'
import ToC from './toc'

export default _ =>
  <div className="learn">
    <div className="learn__atom">
      <Atom />
    </div>
    <div className="learn__toc">
      <ToC.List>
        <ToC.Item
          href="http://bit.ly/jaketrent-electroncourse-toc"
          title="Learn About Electron"
          length="06:47"
        >
          Determine what Electron is, where its sweet spot is, and what it's
          best at.{' '}
        </ToC.Item>
        <ToC.Item
          href="http://bit.ly/jaketrent-electroncourse-toc"
          title="Try Out Electron"
          length="17:36"
        >
          Get basic Electron setup running using all basic tech. Introduce
          inter-process communication.
        </ToC.Item>
        <ToC.Item
          href="http://bit.ly/jaketrent-electroncourse-toc"
          title="Experiment with Native APIs"
          length="36:39"
        >
          Learn highlight Electron APIs. Use each in a small project.
        </ToC.Item>
        <ToC.Item
          href="http://bit.ly/jaketrent-electroncourse-toc"
          title="Make an Electron App"
          length="31:01"
        >
          Combine your Electron skills in a fun and interesting project.
        </ToC.Item>
        <ToC.Item
          href="http://bit.ly/jaketrent-electroncourse-toc"
          title="Package Native Apps"
          length="17:36"
        >
          Get your app ready for distribution. Test on different operating
          systems.
        </ToC.Item>
        <ToC.Total length="1h 50m" />
      </ToC.List>
    </div>
    <style jsx>{`
      .learn {
        display: flex;
        flex-direction: column-reverse;
      }
      .learn__atom {
        height: 16em;
        width: 16em;
        margin: 0 auto;
      }
      .learn__toc {
      }
      @media screen and (min-width: 56em) {
        .learn {
          position: relative;
        }
        .learn__atom {
          position: absolute;
          left: -20em;
          top: 50%;
          height: 20em;
          width: 20em;
          transform: translateY(-50%);
        }
        .learn__toc {
          position: relative;
        }
      }
    `}</style>
  </div>
