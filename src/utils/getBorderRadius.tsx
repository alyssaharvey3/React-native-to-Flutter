import { flutterWidget } from "..";



export const getBorderRadius = (styles: any, object: any) => {

  object.properties = [];
  if (styles.hasOwnProperty("borderRadius")) {

    delete object.properties;
  } else if (styles.hasOwnProperty("borderEndWidth") || styles.hasOwnProperty("borderEndWidth")) {
  } else {
    object.nameProp = "BorderRadius.only";
    if (styles.hasOwnProperty("borderTopLeftRadius")) {

      let widget: any = flutterWidget.RadiusCircular;
      widget.value.value = styles["borderTopLeftRadius"];

      widget = { ...widget, namedProp: "topLeft" };
      object.properties.push(widget);

    }
    if (styles.hasOwnProperty("borderTopRightRadius")) {

      let widget: any = flutterWidget.RadiusCircular;
      widget.value.value = styles["borderTopRightRadius"];
      widget["namedProp"] = "topRight";
      object.properties.push(widget);
    }

    if (styles.hasOwnProperty("borderBottomRightRadius")) {

      let widget: any = flutterWidget.RadiusCircular;
      widget.value.value = styles["borderBottomRightRadius"];
      widget["namedProp"] = "bottomRight";
      object.properties.push(widget);

    }

    if (styles.hasOwnProperty("borderBottomLeftRadius")) {

      let widget: any = flutterWidget.RadiusCircular;
      widget.value.value = styles["borderBottomLeftRadius"];
      widget = { ...widget, namedProp: "bottomLeft" };
      object.properties.push(widget);
    }
  }


  return object;
};