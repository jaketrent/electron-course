export default _ =>
  <style global jsx>{`
    * {
      box-sizing: border-box;
    }
    html, body {
      margin: 0;
      padding: 0;
      font-family: 'Raleway', sans-serif;
      background-color: #0F6402;
      color: #fff;
      font-size: 16px;
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
    iframe {
      max-width: 100%;
    }
    @media screen and (min-width: 426px) {
    }
    @media screen and (min-width: 769px) {
      html, body {
        font-size: 18px;
      }
    }
    @media screen and (min-width: 1441px) {
      html, body {
        font-size: 22px;
      }
    }
  `}</style>
