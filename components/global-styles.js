export default _ =>
  <style global jsx>{`
    * {
      box-sizing: border-box;
    }
    html, body {
      font-family: 'Raleway', sans-serif;
      background-color: #0F6402;
      color: #fff;
      margin: 0;
      padding: 0;
      font-size: 18px; /* font-size: calc(1em + 1vw); */
    }
    h1, h2, h3 {
      font-weight: 100;
      margin: 0;
    }
    a {
      display: inline-block;
      color: #fff;
      text-decoration: none;
      border-bottom: 1px dashed #889F1E;
      margin-bottom: 2px;
      cursor: pointer;
    }
    a:hover {
      border-bottom: none;
      color: #889F1E;
      border-bottom: 1px solid #889F1E;
    }
    ol {
      margin: 0;
      padding: 0;
    }
    p {
      line-height: 30px;
    }
  `}</style>
