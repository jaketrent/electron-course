export default _ =>
  <div className="preview">
    <iframe
      className="preview__video"
      width="853"
      height="480"
      src="https://www.youtube.com/embed/dMDNWLTOU8o?rel=0"
      frameBorder="0"
      allowFullScreen
    />
    <style jsx>{`
      .preview {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
      }
      .preview__video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
