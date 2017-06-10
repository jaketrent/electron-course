import MerryMedlies from './merry-medlies'

export default props =>
  <header className="pg-header">
    <div className="pg-header__merry">
      <MerryMedlies />
    </div>
    <h1 className="pg-title">
      <a
        href="https://app.pluralsight.com/library/courses/electron-fundamentals/table-of-contents"
        className="pg-title-link"
      >
        Electron Fundamentals
      </a>
    </h1>
    <h2 className="pg-subtitle">
      A course to engage your web tech skills in native desktop app dev
    </h2>
    <style jsx>{`
      .pg-header {
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        overflow: hidden;
        position: relative;
        padding: 240px 0;
      }
      .pg-header__merry {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 1300px;
        width: 1300px;
      }
      .pg-title {
        position: relative;
        font-size: 70px;
      }
      .pg-title-link {
        border-bottom: 0;
        border-bottom: 1px solid transparent;
      }
      .pg-title-link:hover {
        color: inherit;
      }
      .pg-subtitle {
        position: relative;
        margin-top: 20px;
      }
    `}</style>
  </header>
