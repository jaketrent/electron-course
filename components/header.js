import Spacer from './spacer'
import MerryMedlies from './merry-medlies'

export default props =>
  <header className="header">
    <div className="header__merry">
      <MerryMedlies />
    </div>
    <div className="header__content">
      <Spacer>
        <h1 className="header__title">
          <a
            href="https://app.pluralsight.com/library/courses/electron-fundamentals/table-of-contents"
            className="header__link"
          >
            Electron Fundamentals
          </a>
        </h1>
        <h2 className="header__subtitle">
          A course to engage your web tech skills in native desktop app dev
        </h2>
      </Spacer>
    </div>
    <style jsx>{`
      .header {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        text-align: center;
        font-size: 2rem;
        overflow: hidden;
        padding: 2em 0 2em 0;
      }
      .header__merry {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200%;
      }
      .header__content {
        position: relative;
        color: #fff;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
      }
      .header__title {
        font-size: 1.5em;
      }
      .header__link {
        border-bottom: 1px solid transparent;
      }
      .header__link:hover {
        color: inherit;
      }
      .header__subtitle {
        margin-top: 1.25em;
        font-size: 1em;
      }
      @media screen and (min-width: 426px) {
        .header__merry {
          width: 150%;
        }
      }
      @media screen and (min-width: 769px) {
        .header {
          padding: 4.5em 0 4.5em 0;
        }
        .header__merry {
          width: 120%;
        }
        .header__title {
          font-size: 1.825em;
        }
      }
      @media screen and (min-width: 1441px) {
        .header {
        }
        .header__title {
          font-size: 2.5em;
        }
      }
    `}</style>
  </header>
