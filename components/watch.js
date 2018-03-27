export default _ =>
  <div className="fun-body">
    <p className="fun-desc">
      It was fun to make. I think it'll be fun for you to watch and code. Let's
      learn a bit together.{' '}
    </p>
    <div className="fun-links">
      <a className="fun-link" href="http://bit.ly/jaketrent-electroncourse-toc">
        Watch the Electron course
      </a>
      <div className="fun-meta">via Pluralsight</div>
    </div>
    <style jsx>{`
      .fun-body {
        margin: 0 auto;
        font-size: 1.125rem;
      }
      .fun-link {
        display: block;
        padding: 0.875em 1.125em;
        background: linear-gradient(0deg, #d1591a, #e56a2c);
        border-radius: 3px;
        margin: 0 0 0.5em 0;
        text-align: center;
        border: none;
        font-size: 1.125em;
      }
      .fun-meta {
        font-size: 14px;
        text-align: center;
      }
      .fun-link:hover {
        color: #fff;
        background: #e56a2c;
        border: none;
      }
      @media screen and (min-width: 650px) {
        .fun-body {
          display: flex;
          align-items: center;
        }
        .fun-desc {
          flex: 1;
        }
        .fun-links {
          flex: 1;
          margin-left: 1em;
        }
      }
    `}</style>
  </div>
