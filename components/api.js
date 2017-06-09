export default _ =>
  <div>

          <p className="api-desc">
            You'll get to make a number of small projects so you can try out
            some of the awesome APIs that Electron provides or supports.  Each will expand
            your imagination and capability of what you can create with Electron.
          </p>
          <ol className="api-list">
            <li className="api-item">
              <h3 className="api-title">Inter-process Communication</h3>
            </li>
            <li className="api-item">
              <h3 className="api-title">Application Menus</h3>
            </li>
            <li className="api-item">
              <h3 className="api-title">System Tray</h3>
            </li>
            <li className="api-item">
              <h3 className="api-title">Clipboard</h3>
            </li>
            <li className="api-item">
              <h3 className="api-title">Global Shortcuts</h3>
            </li>
            <li className="api-item">
              <h3 className="api-title">Screenshot</h3>
            </li>
            <li className="api-item">
              <h3 className="api-title">Child Processes</h3>
            </li>
            <li className="api-item">
              <h3 className="api-title">Webcam</h3>
            </li>
            <li className="api-item">
              <h3 className="api-title">WebGL</h3>
            </li>
          </ol>
<style jsx>{`

.api-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
}
.api-item {
  margin: 20px 3vw;
  padding: 20px 30px;
  background: #A88A05;
  text-align: center;
  border-radius: 3px;
}
.api-item:nth-child(2n) {
  background: #7B9804;
}
`}</style>
  </div>
