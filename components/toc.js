const List = props =>
  <ol className="toc-list">
    {props.children}
    <style jsx>{`
      .toc-list {
        font-size: 1rem;
        list-style: none;
      }
    `}</style>
  </ol>

const Item = props =>
  <li className="toc-item">
    <div className="toc-line">
      <h3 className="toc-title">
        <a className="toc-link" href={props.href}>{props.title}</a>
      </h3>
      <div className="toc-len">
        {props.length}
      </div>
    </div>
    <p className="toc-desc">
      {props.children}
    </p>
    <style jsx>{`
      .toc-item {
        margin-bottom: 2.5em;
      }
      .toc-line {
        display: flex;
        align-items: center;
      }
      .toc-title {
        flex: 1;
        font-size: 1.5em;
        margin-right: 0.5em;
      }
      .toc-link {
        color: #0DB0C9;
      }
      .toc-len {
        font-size: 1.25em;
        font-weight: 100;
      }
      .toc-desc {
      }
      @media screen and (min-width: 769px) {
        .toc-title {
          font-size: 2em;
        }
      }
    `}</style>
  </li>

const Total = props =>
  <li className="toc-item">
    <div className="toc-line">
      <div className="toc-total">Total time</div>
      <div className="toc-len">
        {props.length}
      </div>
    </div>
    <style jsx>{`
      .toc-item {
      }
      .toc-line {
        display: flex;
        align-items: center;
      }
      .toc-total {
        flex: 1;
        font-size: 1.25em;
        text-align: right;
        padding-right: 1.125em;
      }
      .toc-len {
        font-size: 1.375em;
        font-weight: 100;
      }
    `}</style>
  </li>
export default {
  List,
  Item,
  Total
}
