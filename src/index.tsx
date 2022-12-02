
import {  getAlignmentAxis, getBorder, getBorderRadius, getColor, getPositioned, toDouble, toInt } from "./utils/styled-system";
import { getMargin } from "./utils/getMargin";
import { getPadding } from "./utils/getPadding";


export const dartType = {
  double: {
    type: "double",
    transformer: toDouble,
    value: "",
  },
  int: {
    type: "int",
    transformer: toInt,
    value: ""
  },

}

export const flutterWidget = {
  Container: {
    type: "constructor",
    class: "Container",
    properties: []
  },

  MainAxisAlignment :{
    type:"enum",
    class : "MainAxisAlignment",
    value : "",

  },

  CrossAxisAlignment :{
    type:"enum",
    class : "CrossAxisAlignment",
    value : "",

  },

  Column :{
    type: "constructor",
    class: "Column",
    properties: []
  },


  Row :{
    type: "constructor",
    class: "Row",
    properties: []
  },
  Positioned:{
    type: "constructor",
    class: "Positioned",
    properties: []
  },

  BoxDecoration: {
    type: "constructor",
    class: "BoxDecoration",
    namedProp: "decoration",
    properties: []
  },

  Color: {
    type: "constructor",
    class: "Color",
    namedProp: "color",
    value: dartType.int,
    transformer: getColor

  },
  BoxConstraints: {
    type: "constructor",
    namedProp: "constraints",
    class: "BoxConstraints",
    properties: []
  },





  EdgeInsets: {
    type: "constructor",
    class: "EdgeInsets.all",
    properties: [],
    value: dartType.double,
  },

  RadiusCircular: {
    type: "constructor",
    class: "Radius.circular",
    value: dartType.double
  },


  BorderBottomWidth: {
    type: "constructor",
    class: "BorderSide",
    properties: [

    ],
    value: dartType.double,
  },

  BorderTopWidth: {
    type: "constructor",
    class: "BorderSide",
    properties: [

    ],
    value: dartType.double,
  },
  
  BorderLeftWidth: {
    type: "constructor",
    class: "BorderSide",
    properties: [

    ],
    value: dartType.double,
  },

  BorderRightWidth: {
    type: "constructor",
    class: "BorderSide",
    properties: [

    ],
    value: dartType.double,
  },

  Border: {
    type: "constructor",
    class: "Border.all",
    properties: [

    ],
    value: dartType.double,
    callee: "Border",

  },



  BorderRadius: {
    type: "constructor",
    class: "BorderRadius.all",
    namedProp: "borderRadius",
    properties: [

    ],
    value: dartType.double,
  },



  BorderTopLeftRadius: {
    type: "constructor",
    class: "BorderRadius.only",
    properties: [

    ],
    value: dartType.double,
  },
  



  

  BorderBottomLeftRadius: {
    type: "constructor",
    class: "BorderRadius.only",
    properties: [

    ],
    value: dartType.double,
  }
} as const








let mapReactComponentToFlutterWidgets: any = {
  "View": flutterWidget.Container
};


let styleSystem: any = {


  "minHeight": {
    widget: "Container",
    "property": "minHeight",
    class: dartType.double,
    "partOf": {
      "class": flutterWidget.BoxConstraints,
      "property": "constraints",
    }
  },

  "minWidth": {
    widget: "Container",
    "property": "minWidth",
    class: dartType.double,
    "partOf": {
      "class": flutterWidget.BoxConstraints,
      "property": "constraints",
    }
  },

  "maxHeight": {
    widget: "Container",
    "property": "maxHeight",
    class: dartType.double,
    "partOf": {
      "class": flutterWidget.BoxConstraints,
      "property": "constraints",
    }
  },

  "maxWidth": {
    widget: "Container",
    "property": "maxWidth",
    class: dartType.double,
    "partOf": {
      "class": flutterWidget.BoxConstraints,
      "property": "constraints",
    }
  },

  "width": {
    "widget": "Container",
    "property": "width",
    class: dartType.double

  },


  "height": {
    "widget": "Container",
    "property": "height",
    class: dartType.double
  },

  "backgroundColor": {
    "widget": "Container",
    "property": "color",
    class: flutterWidget.Color,
    "partOf": {
      "class": flutterWidget.BoxDecoration,
      "property": "decoration",
    }
  },

  "borderRadius": {
    "widget": "Container",
    "property": "borderRadius",
    class: flutterWidget.BorderRadius,
    "partOf": {
      "class": flutterWidget.BoxDecoration,
      "property": "decoration",
    },
    transformer: getBorderRadius
  },

  "borderTopLeftRadius": {
    "widget": "Container",
    "property": "borderRadius",
    class: flutterWidget.BorderTopLeftRadius,
    "partOf": {
      "class": flutterWidget.BoxDecoration,
      "property": "decoration",
    },
    transformer: getBorderRadius
  },

  "borderTopRightRadius": {
    "widget": "Container",
    "property": "borderRadius",
    class: flutterWidget.BorderTopLeftRadius,
    "partOf": {
      "class": flutterWidget.BoxDecoration,
      "property": "decoration",
    },
    transformer: getBorderRadius
  },

  "borderBottomLeftRadius": {
    "widget": "Container",
    "property": "borderRadius",
    class: flutterWidget.BorderBottomLeftRadius,
    "partOf": {
      "class": flutterWidget.BoxDecoration,
      "property": "decoration",
    },
    transformer: getBorderRadius
  },
  borderWidth: {
    "widget": "Container",
    "property": "border",
    class: flutterWidget.Border,
    "partOf": {
      "class": flutterWidget.BoxDecoration,
      "property": "decoration",
    },

    transformer: getBorder,
  },

  borderBottomWidth :{
    "widget": "Container",
    "property": "border",
    class: flutterWidget.Border,
    "partOf": {
      "class": flutterWidget.BoxDecoration,
      "property": "decoration",
    },
    transformer: getBorder,
  },

  borderTopWidth :{
    "widget": "Container",
    "property": "border",
    class: flutterWidget.Border,
    "partOf": {
      "class": flutterWidget.BoxDecoration,
      "property": "decoration",
    },
    transformer: getBorder,
  },

  borderRightWidth :{
    "widget": "Container",
    "property": "border",
    class: flutterWidget.Border,
    "partOf": {
      "class": flutterWidget.BoxDecoration,
      "property": "decoration",
    },
    transformer: getBorder,
  },

  borderLeftWidth :{
    "widget": "Container",
    "property": "border",
    class: flutterWidget.Border,
    "partOf": {
      "class": flutterWidget.BoxDecoration,
      "property": "decoration",
    },
    transformer: getBorder,
  },

  borderColor: {
    "widget": "Container",
    "property": "border",
    class: flutterWidget.Border,
    "partOf": {
      "class": flutterWidget.BoxDecoration,
      "property": "decoration",
    },
    transformer: getBorder,
  },

  "padding": {
    "widget": "Container",
    "property": "padding",
    class: flutterWidget.EdgeInsets,
    transformer: getPadding,

  },
  paddingLeft: {
    "widget": "Container",
    "property": "padding",
    class: flutterWidget.EdgeInsets,
    transformer: getPadding,
  },

  paddingRight: {
    "widget": "Container",
    "property": "padding",
    class: flutterWidget.EdgeInsets,
    transformer: getPadding,
  },

  paddingTop: {
    "widget": "Container",
    "property": "padding",
    class: flutterWidget.EdgeInsets,
    transformer: getPadding,
  },

  paddingBottom: {
    "widget": "Container",
    "property": "padding",
    class: flutterWidget.EdgeInsets,
    transformer: getPadding,
  },

  margin: {
    "widget": "Container",
    "property": "margin",
    class: flutterWidget.EdgeInsets,
    transformer: getMargin,
  },

  marginLeft: {
    "widget": "Container",
    "property": "margin",
    class: flutterWidget.EdgeInsets,
    transformer: getMargin,
  },

  marginRight: {
    "widget": "Container",
    "property": "margin",
    class: flutterWidget.EdgeInsets,
    transformer: getMargin,
  },

  marginTop: {
    "widget": "Container",
    "property": "margin",
    class: flutterWidget.EdgeInsets,
    transformer: getMargin,
  },

  marginBottom: {
    "widget": "Container",
    "property": "margin",
    class: flutterWidget.EdgeInsets,
    transformer: getMargin,
  },

  alignContent:{
    widget:"Column",
    "property": "mainAxisAlignment",
    class : flutterWidget.MainAxisAlignment,
    transformer : getAlignmentAxis
  },

  alignItems :{
    widget:"Column",
    "property": "crossAxisAlignment",
    class : flutterWidget.CrossAxisAlignment,
    transformer : getAlignmentAxis
  },

justifyContent :{
    widget:"Column",
    "property": "mainAxisAlignment",
    class : flutterWidget.MainAxisAlignment,
    transformer : getAlignmentAxis
  },

position :{
  widget:"Positioned",
  class: flutterWidget.Positioned,
  transformer : getPositioned
},


  "boxShadow": {
    "widget": "Container",
    "property": "boxShadow",
    "partOf": {
      "class": "BoxDecoration",
      "property": "decoration",

    }
  },




  "fontSize": {
    "widget": "Text",
    "property": "fontSize",
    "partOf": {
      "class": "TextStyle",
      "property": "style"
    }
  }
}

let dartAST: any = {}







function buildDartAST(component: any, theme: any) {


  try {
    let widget: any = mapReactComponentToFlutterWidgets[component];
    delete widget.properties;
    widget.properties = []
    dartAST = ''
    dartAST = widget;
    theme = JSON.parse(theme);

    clearProperties(theme);
   
    loopStyle(theme);
   
  } catch (error) {
    console.error(error)
    return error
  } finally {
    return dartAST
  }



}








function loopStyle(theme: any) {

  Object.entries(theme).map(([k, v]: any) => {



    if (styleSystem.hasOwnProperty(k)) {

      if (styleSystem[k].hasOwnProperty("partOf")) {
        if (dartAST["properties"]) {

          let newVal = { [styleSystem[k].partOf.property]: styleSystem[k].partOf.class };
          let myObject = addProperty(newVal[styleSystem[k].partOf.property], v, k, theme);
          if(myObject.nested){
            dartAST = myObject.object;
          }else {
            let index = dartAST["properties"].findIndex((data: any) => { return data.class === myObject.class });

            if (index < 0) {
  
              dartAST.properties.push(myObject);
            }
  
          }
         

        }
      } else {

        let newVal = { ...styleSystem[k].class };
        let myObject = addProperty(newVal, v, k, theme);
       
        if(myObject.nested){
          dartAST = myObject.object;
        }else {
          let index = dartAST["properties"].findIndex((data: any) => { return data.namedProp === myObject.namedProp });

          if (index < 0) {

            dartAST.properties.push(myObject);
          }

        }
        
      }
    }

  });
}

function clearProperties(theme: any) {
  Object.entries(theme).map(([k,]: any) => {
    if (styleSystem.hasOwnProperty(k)) {
      if (styleSystem[k].hasOwnProperty("partOf")) {
        styleSystem[k].partOf.class.properties = [];
      }
    }
  });
}

function addProperty(myObject: any, val: any, prop: any, style: any) {

  let newProp: any;
  
  if (styleSystem.hasOwnProperty(prop)) {
    if (myObject.type === "constructor" || myObject.type === "enum") {


      newProp = { ...styleSystem[prop].class, namedProp: styleSystem[prop].property }
      if (typeof newProp.value === "object") {
        newProp.value = { ...newProp.value, value: val };
      } else {
        newProp.value = val;
      }
      
   
      if( styleSystem[prop]?.transformer){
      
       // newProp.properties = []
        newProp = styleSystem[prop]?.transformer(style, newProp,dartAST);
      
        if(newProp.nested){
          return newProp;
        }
      }
     

      

    } else {

      newProp = { ...myObject, value: val, namedProp: styleSystem[prop].property }
    }
  }
 
  if (newProp.class !== myObject.class) {
    if (styleSystem[prop].hasOwnProperty("partOf")) {

      let index = myObject["properties"].findIndex((data: any) => {
       
       
          return data.class === newProp.class;
        
      });

      if (index < 0) {
        myObject.properties.push(newProp);
      }
    } else {
      myObject = newProp;
    }

  } else {
    myObject = newProp
  }


  return myObject;
}

let code: string = ""
let tab: string = '\t';
let count: number = 0;
function createFlutterWidget(ast: any, c: number) {
  
  if (ast.hasOwnProperty("namedProp")) {
     if(ast.type === "constructor"){
      code += `${tab.repeat(c)}${ast.namedProp}:${ast.class}(\n`
     } else if (ast.type === "Array"){
      code += `${tab.repeat(c)}${ast.namedProp}:[\n`
     }
    
  } else {
    code += `${tab.repeat(c)}${ast.class}(\n`
  }
  c++

  Object.entries(ast.properties).forEach(([, v]: any) => {
    
    if (v.hasOwnProperty("properties") || v.hasOwnProperty("widgets")) {
      createFlutterWidget(v, c);
      code += `${tab.repeat(c)}),\n`


    } else {


      let innerValue = v;
      let innerKey




      if (innerValue.class) {
        if (innerValue.type === "constructor" || innerValue.type === "enum" ) {
          if (innerValue.hasOwnProperty("properties")) {
            createFlutterWidget(innerValue, c);

          }


          if (innerValue.value.transformer) {
            innerValue.value.value = innerValue.value.transformer(innerValue.value.value)
          } else {
            if (innerValue.transformer) {
              innerValue.value = innerValue.transformer(innerValue.value)
            }
          }
          if(innerValue.type === "constructor"){
            // Build class when its constrictor
            /// for eg Color(0xffffffff)
            
            code += `${tab.repeat(c)}${innerValue.namedProp}:${innerValue.class}(${innerValue.value.value ?? innerValue.value}),\n`
          } else if(innerValue.type ==="enum"){
            // Build class when its constrictor
            /// for eg MainAxisAlignment.center
            code += `${tab.repeat(c)}${innerValue.namedProp}:${innerValue.class}.${innerValue.value.value ?? innerValue.value},\n`
          }
         
        } 


      } else {
        if (innerValue.type === "nameConstructor") {

          let args: string = ''

          if (innerValue.args) {
            Object.entries(innerValue.args[0]).forEach(([k, v]: any, index: number) => {

              if (index == 0) {
                args += `\n`;
              }


              if (v.transformer) {
                v.value = v.transformer(v.value);
              }




              args += `${tab.repeat(c + 1)}${k}:${v.value},\n`
            })
            code += `${tab.repeat(c)}${innerKey}:${innerValue.callee}.${innerValue.name}(${args}${tab.repeat(c)}),\n`
          } else {
            code += `${tab.repeat(c)}${innerKey}:${innerValue.callee}.${innerValue.name}(\n${innerValue.value}),\n`
          }
        } else {

          if (innerValue.transformer) {

            innerValue.value = innerValue.transformer(innerValue.value ?? innerValue)
          }

          code += `${tab.repeat(c)}${innerValue.namedProp}:${innerValue.value ?? innerValue},\n`
        }


      }



    }

  });


}












export const convertNativeBaseThemeToFlutterWidgets = (styles: any): string => {
  code = '';
  try {
    let a = buildDartAST("View", styles);

    if (a.message) {
      return code = a.message;
    } else {
      createFlutterWidget(a, count)
    }



    console.log(a)

    code += ');\n'
  } catch (error) {
    code = error as string
  }


  return code;
}
