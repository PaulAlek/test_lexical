import "./App.css";
import Editor from "./Editor";
import { LexicalComposer } from "@lexical/react/LexicalComposer";

function App() {
  function onError(error) {
    console.error(error);
  }
  
  const initialConfig = {
    namespace: "MyEditor",
    // theme,
    onError,
  };

  return (
    <div className="App">
      <LexicalComposer initialConfig={initialConfig}>
        <Editor />
      </LexicalComposer>
    </div>
  );
}

export default App;
