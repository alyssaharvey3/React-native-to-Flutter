import { convertNativeBaseThemeToFlutterWidgets } from '../.';

import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useState } from 'react';

import Editor from "@monaco-editor/react";

let styles: any = {
  backgroundColor: "#ff0000",
  minHeight: 30,
  maxHeight: 20,
  height: 2,
  width: 3,
  padding: 10,
  borderRadius: 20,
  borderWidth:1,
  color: "red"

}

function App() {
  const [code, setCode] = useState(JSON.stringify(styles, null, 2));
  const [output, setOutput]: any = useState('');
  const [error,setError]:any = useState(false)
  const transpileCode = (code: string) => {
   
    setOutput(convertNativeBaseThemeToFlutterWidgets(code));
  };

  React.useEffect(() => {
    console.log(output);
  }, [output])

  React.useEffect(()=>{
    setOutput('')
  },[]);
  React.useEffect(()=>{
    
    if(code && !error){
       transpileCode(code)
    }
  },[code]);

  return (

    <div style={{ height: '100vh' , padding:"10px"}}>
      <h3 style={{ color: "#FFFFFF",borderBottom:"1px solid #cfcfcf",paddingBottom:"5px" }}>React Native Component to Flutter Widgets</h3>
      <div style={{ flexDirection: 'row', display: 'flex', height: '80%' }}>
        
        <div
          style={{
            flex: 1,
            backgroundColor: '#4d4d4d',
            padding: 8,
            justifyContent: 'center',
            height: '100%',
          }}
        >
           
            <p  style={{ color: "#FFFFFF" }}> Select React Native Component and add styles in the editor</p>
            <p style={{ color: "#FFFFFF",margin:0,padding:0 }}>React Native Component</p>
           <div style={{flex:1}}><select style={{width:"10%",marginBottom:"10px",padding:"2px"}}>
            <option>View</option>
            </select></div>
          <div style={{ display: 'flex', height: "calc(100vh - 120px)" }}>
           
            <div style={{ flex: 1, height: "100%" }}>
              <Editor
                theme="vs-dark"
                defaultLanguage="json"
                defaultValue={code}
                onValidate={(e)=>{
                  if(e.length>1){
                    debugger
                    setError(true);
                  }
                }}
                onChange = {(e:string)=>{
                  if(!error){
                    setCode(e)
                    setOutput('')
                  }
                 
                  
                }}
              />

              
            </div>
            <div style={{ padding: '4px' }}></div>
            <div style={{ flex: 1, height: "100%" }}>
              
              <Editor
                theme="vs-dark"
                defaultLanguage="dart"
                value={output}
                defaultValue={output}
              />
            </div>



          </div>
          <button
            style={{
              width: '100%',
             
              backgroundColor: '#aae8dc',
              color: '#4a5567',
              border: 'none',
              borderRadius: 5,
              marginTop: 4,
            }}
            onClick={() => transpileCode(code)}
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));