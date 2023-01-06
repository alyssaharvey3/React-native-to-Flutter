import { buildDartAST } from "./index";

export function buildDartASTfromAST(expression: any, myDartAST: any, recursive: boolean = false) {

debugger

  if (!recursive) {
    if (expression.children.length < 2) {
      if (myDartAST?.class) {
        let index = myDartAST.properties.findIndex((data: any) => (data.namedProp === "child"));
        if (myDartAST.properties[index]?.class === "Row" || myDartAST.properties[index]?.class === "Column") {
          let i = myDartAST.properties[index].properties.findIndex((data: any) => (data.namedProp === "children"));

          if (i > -1) {
            myDartAST.properties[index].properties[i].values = [];
          }
        }
      }
    }

    let index = myDartAST?.properties?.findIndex((data: any) => (data.namedProp === "child"));
    if (index) {
      if (myDartAST?.properties[index]?.class === "Row" || myDartAST?.properties[index]?.class === "Column") {
        let i = myDartAST.properties[index].properties.findIndex((data: any) => (data.namedProp === "children"));
        if (i > -1) {
          myDartAST.properties[index].properties[i].values = [];
        }
      }
    }
  }



  Object.entries(expression.children).forEach(([k, v]: any) => {
    debugger
    let a: any = {};

    if (v.type === "JSXElement") {



      let style = {};
   
      let name = v.openingElement.name.name;

      let attributes = v.openingElement.attributes[0];



      let properties = attributes?.value?.expression?.properties;
      if (properties) {
        Object.entries(properties).forEach(([, v]: any) => {

          style = { ...style, [v.key.name]: v.value.value };
        });

      }

      if (myDartAST?.class) {
        let layout: any = {
          type: "constructor",
          properties: []
        }


        a = buildDartAST(name, style);

        if (name === "View") {
          let index = a.properties.findIndex((data: any) => (data.class === "Row" || data.class === "Column"));
          if (index > -1) {

            layout = { ...layout, "class": a.properties[index].class }
            a.properties.splice(index, 1);
          } else {
            layout = { ...layout, "class": "Row" }
          }





          let childIndex = a.properties.findIndex((data: any) => (data.namedProp === "child"));
          if (childIndex > -1) {
            a.properties[childIndex].properties.push({ ...layout, "namedProp": "child" })
          } else {
            a.properties.push({ ...layout, "namedProp": "child" })
          }

        }
        if (name === 'Text') {
          a = { ...a, id: k, value: v.children[0]?.value ?? '' };
        } else {
          a = { ...a, id: k };
        }



        let index = myDartAST?.properties?.findIndex((data: any) => (data.namedProp === "child"));
        if (myDartAST.properties[index]?.class === "Row" || myDartAST.properties[index]?.class === "Column") {

          let i = myDartAST?.properties[index]?.properties.findIndex((data: any) => (data?.namedProp === "children"));

          if (i > -1) {
            let ii = myDartAST?.properties[index]?.properties[i]?.values?.findIndex((data: any) => (data.id === a.id));
            if (ii > -1) {
              myDartAST?.properties[index].properties[i].values.splice(ii, 1);
            }
            myDartAST?.properties[index].properties[i].values.push(a);

          } else {
            myDartAST?.properties[index].properties.push({ namedProp: "children", type: "Array", values: [a] });
          }

        } else {
          debugger
          searchForDeepChildAndPush(myDartAST, a);

          // myDartAST?.properties.push({ "namedProp": "child", ...a });
        }

      }

      console.log(style);
      console.log(myDartAST);


    }

    if (v.children) {
      if (v.children.length > 0) {
        console.log(v);
        buildDartASTfromAST(v, a);
      }
    }

  });



}

export function searchForDeepChildAndPush(myDartAST: any, a: any) {
  debugger
  let prop = myDartAST?.properties ?? myDartAST?.values;
  if(prop.length > 0){
    Object.entries(prop).forEach(([, v]: any) => {
      
  
      if (v.namedProp === "child") {
        if (v.properties.length > 0) {
          searchForDeepChildAndPush(v, a);
        } else {
          pushChildToParent(v, a);
        }
      } if (v.namedProp === "children") {
        
        if(a.hasOwnProperty("namedProp")){
          if (v.values.length > 0) {
            searchForDeepChildAndPush(v, a);
          } else {
            pushChildToParent(v, a);
          }
        } else {
          v.values.push(a)
        }
        
  
      }
    });

  } else {
    
    pushChildToParent(myDartAST,a)
  }
  
}

export function pushChildToParent(v: any, a: any) {
  if (v.type == "constructor") {
   
    if (v.class === 'Row' || v.class === 'Column') {
      v.properties.push({ namedProp: "children", type: "Array", values: [a] });
    } else {
      v.properties.push({ "namedProp": "child", ...a });
    }

  }
}

