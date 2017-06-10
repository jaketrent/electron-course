import MerryMedlies from './merry-medlies'

export default _ =>
  <footer className="footer">
    <div className="section-inner">
      <div className="footer__merry">
        <MerryMedlies />
      </div>
      <div className="footer-body">
        <div className="footer-col">
          <p className="footer-invite">
            Check out some of my other tech shenanigans by visiting
            my <a href="https://github.com/jaketrent">Github</a> or
            by going to:{' '}
          </p>
          <a className="footer-invite-link" href="http://jaketrent.com">
            jaketrent.com
          </a>
        </div>
        <div className="footer-col footer-col__copy">
          <div className="footer-copy">
            Course &copy; 2016 Pluralsight; this page &copy; 2016 Jake Trent{' '}
            <br />
            This content uses affiliate links.
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .footer {
        position: relative;
        overflow: hidden;
      }
      .footer__merry {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 1300px;
        width: 1300px;
      }
      .footer-body {
        position: relative;
        display: flex;
        width: 80%;
        margin: 0 auto;
        padding: 10vh 0 8vh 0;
      }
      .footer-col {
        flex: 1;
      }
      .footer-col + .footer-col {
        margin-left: 20px;
      }
      .footer-invite {
      }
      .footer-invite-link {
        font: 0/0 a;
        text-shadow: none;
        color: transparent;
        background: url(/static/img/jaketrent-logo-white.png) center no-repeat;
        background-size: cover;
        height: 69.375px;
        width: 250px;
        border: 1px solid transparent;
        margin-top: 25px;
      }
      .footer-invite-link:hover {
        border: 1px dashed #889F1E;
      }
      .footer-col__copy {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
      }
      .footer-copy {
        font-size: .6em;
        line-height: 1em;
      }
    `}</style>
  </footer>
