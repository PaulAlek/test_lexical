import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { FORMAT_TEXT_COMMAND } from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import ToolbarPlugin from "./plugins/ImageToolbar";
import ImagePlugin from "./plugins/ImagePlugin";
import { ImageNode } from "./nodes/ImageNode";
import ExampleTheme from "./themes/ExampleTheme";



export default function Editor() {

  
  function onError(error) {
    console.error(error);
  }
  
  const editorConfig = {
    theme: ExampleTheme,
    onError(error) {
      throw error;
    },
    nodes: [ImageNode]
  };
  

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <ToolbarPlugin />
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>Enter some text...</div>}
      >
        <ListPlugin />
      </RichTextPlugin>
      <ImagePlugin />
      <HistoryPlugin />
  </LexicalComposer>
  );
}
