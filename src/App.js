import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import "./App.css";

function App() {
  const { quill, quillRef } = useQuill();
  const [copied, setCopied] = React.useState(false);

  const handleExport = (e) => {
    e.preventDefault();
    const html = quill.root.innerHTML;
    document.querySelector(".html").value = html;
  };

  const handleCopy = (e) => {
    setCopied(true);
    alert('Copied');
    const input = document.createElement('input');
    input.setAttribute('value', quill.root.innerHTML);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }

  return (
    <div className="App">
      <h1 className="title font-bold text-sky-500 text-6xl my-5">Convert word to HTML</h1>
      {/* quill */}
      <div className="quill my-5">
        <div ref={quillRef} />
      </div>
      {/* button convert */}
      <button
        onClick={handleExport}
        className="p-2 border-2 bg-sky-500 rounded-lg text-white px-5"
        type="button"
      >
        Chuyển đổi
      </button>
      {/* render html code */}
      <div className="mx-10 mt-5 relative">
        <label className="text-left font-semibold w-full my-3 block" htmlFor="htmlCode">HTML Code:</label>
        <button className="absolute right-0 -top-0 border p-2 text-xs rounded bg-sky-500 text-white" onClick={handleCopy}>{copied ? 'Copied' : 'Copy'}</button>
        <input className="html border h-10 w-full resize-x focus:outline-none" disabled id="htmlCode"/>
      </div>
    </div>
  );
}

export default App;
