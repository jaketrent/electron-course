import MerryMedlies from './merry-medlies'
import Spacer from './spacer'

const now = _ => new Date().getFullYear()

export default _ =>
  <footer className="footer">
    <div className="section-inner">
      <div className="footer__merry">
        <MerryMedlies />
      </div>
      <Spacer>
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
              Course &copy; {now()} Pluralsight; this page &copy; {now()} Jake
              Trent{' '}
              <br />
              This content uses affiliate links.
            </div>
          </div>
        </div>
      </Spacer>
    </div>
    <style jsx>{`
      .footer {
        position: relative;
        overflow: hidden;
        max-width: 56em;
        margin: 0 auto;
      }
      .footer__merry {
        position: absolute;
        top: -10%;
        left: 50%;
        transform: translateX(-50%);
        height: 1300px;
        width: 1300px;
      }
      .footer-body {
        position: relative;
        margin: 0 auto;
        padding: 3em 0;
      }
      .footer-col {
        margin-bottom: 1em;
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
      }
      .footer-invite-link:hover {
      }
      .footer-copy {
        font-size: 0.75em;
        line-height: 1.125em;
        margin-top: 3em;
      }
      @media screen and (min-width: 426px) {
        .footer-body {
          display: flex;
        }
        .footer-col {
          flex: 1;
        }
        .footer-col + .footer-col {
          margin-left: 1.25em;
        }
        .footer-col__copy {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          text-align: right;
        }
      }
    `}</style>
  </footer>
