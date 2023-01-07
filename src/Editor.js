import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";


export default function Editor() {

  const [editor] = useLexicalComposerContext();
  
  return (
    <div>
       <button onClick={()=>{editor.dispatchCommand(FORMAT_TEXT_COMMAND,'bold')}}>
        Bold
      </button>
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>Enter some text...</div>}
      >
        <ListPlugin />
      </RichTextPlugin>
      <HistoryPlugin />
      </div>

  );
}
