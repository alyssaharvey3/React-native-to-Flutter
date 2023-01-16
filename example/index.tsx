import { convertNativeBaseThemeToFlutterWidgets } from '../.';

import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useState } from 'react';
import Editor from "@monaco-editor/react";

//let styles: any = {

//   position:"absolute",
//   flexGrow:4,
//   minHeight:4,
//  width:3,
//   height:4,
//   borderRadius:4,
//   borderWidth:3,
//   borderColor:"#fcfcfc",
//   paddingHorizontal:30,
//   paddingRight:40,
//   paddingBottom:50,
//   paddingTop:40,
//   maxWidth:30,
//   minWidth:50,
//   maxHeight:50,
//   margin:30,
//   borderBottomWidth:1,
//   borderTopWidth:3,
//   borderLeftWidth:4,
//   borderRightWidth:5,
//   flexDirection:"column",
//   alignContent:"space-between",
//   alignItems:"stretch",
//   // position:"absolute",
//   top:10,
//   right:20,
//   bottom:30,
//   left:40,

// color: "#ffffff",
// fontSize: 23,
// letterSpacing: 4,
// lineHeight: 4,
// fontStyle: "italic",
// fontWeight: 300,
// textAlign: "center",
// fontFamily: "abc"

//}
let styles = (`
<View style={{   
  minHeight:4,
  width:3,
  height:4,
  borderRadius:4,
  borderWidth:3,
  borderColor:"#fcfcfc",
  paddingHorizontal:30,
  paddingRight:40,
  paddingBottom:50,
  paddingTop:40,
  maxWidth:30,
  minWidth:50,
  maxHeight:50,
  margin:30,
  borderBottomWidth:1,
  borderTopWidth:3,
  borderLeftWidth:4,
  borderRightWidth:5,
  flexDirection:"column",
  alignContent:"space-between",
  alignItems:"stretch",
}}>
       <Text style={{
       color: "#ffffff",
       fontSize: 23,
       letterSpacing: 4,
       lineHeight: 4,
       fontStyle: "italic",
       fontWeight: 300,
       textAlign: "center",
       fontFamily: "abc"
       }}>This Widget is Made from React Native to Flutter Tool</Text>
</View>
`)


const theme = {
  base: 'vs',
  inherit: true,
  rules: [
    { token: 'custom-info', foreground: 'a3a7a9', background: 'ffffff' },
    { token: 'custom-error', foreground: 'ee4444' },
    { token: 'custom-notice', foreground: '1055af' },
    { token: 'custom-date', foreground: '20aa20' },
  ],
  colors: {
    'editor.foreground': '#FFFFFF',
    'editor.background': '#CFCFCF',
  }
}





function App() {
  const [code, setCode] = useState(styles);
  const [output, setOutput]: any = useState('');
  const [error, setError]: any = useState(false)
  const transpileCode = (code: string) => {
    setOutput(convertNativeBaseThemeToFlutterWidgets(code));
  };

  function handleEditorWillMount(monaco) {
    // here is the monaco instance
    // do something before editor is mounted
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2016,
      allowNonTsExtensions: true,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      module: monaco.languages.typescript.ModuleKind.CommonJS,
      noEmit: true,
      typeRoots: ["node_modules/@types"]
    });
    monaco.editor.defineTheme('myTheme', theme)
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      `export declare function next() : string`,
      'node_modules/@types/external/index.d.ts');
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false
    })



  }

  React.useEffect(() => {
    console.log(output);
  }, [output])

  React.useEffect(() => {
    setOutput('')

  }, []);
  React.useEffect(() => {

    if (code && !error) {

      transpileCode(code)
    }
  }, [code]);

  return (

    <div style={{ height: '100vh' }}>
      
      <div style={{ display: "flex", alignItems: "center", backgroundColor: "#000", padding: "20px" }}>
       
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 1 ,justifyContent:"end",display:"flex",alignItems:"center",marginRight:"30px"}}>
          <a href="https://github.com/GeekyAnts/react-native-to-flutter/issues/new" style={{ justifySelf: "end",  color: "#fff", fontWeight: "bolder", padding: "10px" }}>Report an issue</a>
          <a href='https://github.com/GeekyAnts/react-native-to-flutter/blob/main/README_API_CHECKLIST.md' style={{ justifySelf: "end", color: "#fff", fontWeight: "bolder", paddingRight: "10px" }}>Supported Props</a>
          <a style={{ justifySelf: "end",  color: "#000", fontWeight: "bolder", padding: "10px" ,backgroundColor:"#fff",borderRadius:"5px" }} href="https://github.com/GeekyAnts/react-native-to-flutter"> GitHub</a>
        </div>

      </div>

      <div style={{ flexDirection: 'row', display: 'flex', }}>

        <div
          style={{
            flex: 1,
            backgroundColor: '#1B1A1A',
            padding: 8,
            justifyContent: 'center',
            height: '100%',
          }}
        >

<div> <h3 style={{ color: "#FFFFFF", paddingBottom: "5px" ,textAlign:"center" ,margin:"auto",maxWidth:"350px",marginBottom:"20px", marginTop:"10px", }}>React Native Component to Flutter Widgets <span style={{color:"#858181"}} >(Alpha)</span> </h3></div>

          <div style={{ display: 'flex', height: "calc(100vh - 180px)" }}>

            <div style={{ flex: 1, height: "100%",marginLeft:"50px" }}>
              <p style={{ marginBottom:"20px",padding: 0,textAlign:"center",color:"#B6B6B6" }}>React Native Component</p>
              <div style={{height:"90%",border:"1px solid #cfcfcf47"}}>
                <Editor
              
                  defaultLanguage="javascript"
                  defaultValue={code}

                  beforeMount={handleEditorWillMount}
                  onValidate={(e) => {

                    if (e.length > 1) {

                      setError(true);
                    } else {
                      setError(false);
                    }
                  }}
                  onChange={(e: string) => {
                    if (!error) {
                      setCode(e)
                      setOutput('')
                    }


                  }}
                />
              </div>


            </div>
            <div style={{ padding: '4px' }}></div>
            <div style={{ flex: 1, height: "100%" }}>
              <p style={{ marginBottom:"20px",padding: 0,textAlign:"center",color:"#B6B6B6" }}>Flutter Widget</p>
              <div style={{height:"90%",border:"1px solid #cfcfcf47",marginRight:"50px"}}>
              <Editor
              
                theme="vs-dark"
                defaultLanguage="dart"
                value={output}
                defaultValue={output}
              />
            </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
