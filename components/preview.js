export default _ =>
  <div>
    <iframe
      className="vid-frame"
      width="853"
      height="480"
      src="https://www.youtube.com/embed/dMDNWLTOU8o?rel=0"
      frameBorder="0"
      allowFullScreen
    />
    <style jsx>{`
      .vid-frame {
        display: block;
        margin: 0 auto;
      }
    `}</style>
  </div>
