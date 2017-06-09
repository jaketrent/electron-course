const List = props =>
  <ol className="toc-list">
    {props.children}
    <style jsx>{`
      .toc-list {
        list-style: none;
        width: 60%;
        min-width: 700px;
        margin: 0 auto;
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
        margin-bottom: 40px;
      }
      .toc-line {
        display: flex;
        align-items: center;
      }
      .toc-title {
        flex: 1;
        font-size: 30px;
      }
      .toc-link {
        color: #0DB0C9;
      }
      .toc-len {
        font-size: 20px;
        font-weight: 100;
      }
      .toc-desc {
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
        margin-bottom: 40px;
      }
      .toc-line {
        display: flex;
        align-items: center;
      }
      .toc-total {
        flex: 1;
        font-size: 20px;
        text-align: right;
        padding-right: 30px;
      }
      .toc-len {
        font-size: 20px;
        font-weight: 100;
      }
    `}</style>
  </li>
export default {
  List,
  Item,
  Total
}
