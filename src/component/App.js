import React, { useEffect } from "react";
import Editor from "./editor";
import Userdata from "../hooks/userdata";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {

  const [html, sethtml] = Userdata('html', '')
  const [css, setcss] = Userdata('css', '');
  const [js, setjs] = Userdata('js', '');
  const [srcDoc, setsrcDoc] = Userdata('');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setsrcDoc(`
    <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>`)
    }, 250)

    return () => clearTimeout(timeout);
  },)
  return (
    <>
      <div className="pane top-pane">
        <Editor language="xml" displayname="HTML" value={html} onChange={sethtml} />
        <Editor language="css" displayname="CSS" value={css} onChange={setcss} />
        <Editor language="javascript" displayname="JS" value={js} onChange={setjs} />
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          srcDoc={srcDoc}
          width="100%"
          height="100%"
        />
      </div>
      <footer><a href="https://github.com/BRijesh2001singh" style={{ textDecoration: "none", color: "black" }}>
        Created By : Brijesh Singh
        <FontAwesomeIcon icon={faGithub} size="2x" /></a></footer>
    </>
  );
}

export default App;

