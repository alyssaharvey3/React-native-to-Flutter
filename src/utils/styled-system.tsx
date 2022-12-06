import { toFBorderRadius, toFColor } from "../converter/flutter-properties";
import sizes from "../theme/size";


export const getColor = (value: string) => {
  let color = value.replace("#", "0xff");
  return color

};


export const toDouble = (value: any) => {

  return parseFloat(value).toFixed(1)
}

export const toInt = (value: any) => {

  if (value.indexOf("#") === 0) {
    value = value.replace("#", "0xff");
    return value
  }
  return parseInt(value);

}

export const getBoxConstraints = (value: string, property: string) => {
  var token: string = value;
  var resolvedTokenValue = sizes[token];

  console.log(resolvedTokenValue)
  return property.replace("_", resolvedTokenValue)
}


export const layout = {
  width: {
    property: 'width',
    scale: 'sizes',
  },
  w: {
    property: 'width',
    scale: 'sizes',
  },
  height: {
    property: 'height',
    scale: 'sizes',
  },
  h: {
    property: 'height',
    scale: 'sizes',
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
  },
  minW: {
    property: 'minWidth',
    scale: 'sizes',
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
  },
  minH: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  maxW: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  maxH: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  size: {
    property: 'BoxConstraints(minHeight: _, minWidth: _)',
    scale: 'sizes',
    transformer: getBoxConstraints
  },
  boxSize: {
    properties: ['width', 'height'],
    scale: 'sizes',
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true,
  textAlign: true,
} as const;

export const flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  flexDir: {
    property: 'flexDirection',
    scale: 'flexDirection',
  },
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true,
} as const;

export const position = {
  position: true,
  zIndex: {
    property: 'zIndex',
  },
  top: {
    property: 'top',
    scale: 'space',
  },
  right: {
    property: 'right',
    scale: 'space',
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
  },
  left: {
    property: 'left',
    scale: 'space',
  },
} as const;

export const color = {
  color: {
    property: 'color',
    scale: 'colors',
    transformer: toFColor


  },
  tintColor: {
    property: 'tintColor',
    scale: 'colors',

  },
  backgroundColor: {

    property: 'Color(_)',
    scale: 'colors',
    transformer: getColor

  },
  opacity: {
    property: 'opacity',
    scale: 'opacity',
  },
  bg: {
    property: 'Color(_)',
    scale: 'colors',
    transformer: getColor

  },
  bgColor: {
    property: 'backgroundColor',
    scale: 'colors',

  },
  background: {
    property: 'backgroundColor',
    scale: 'colors',

  },
  textDecorationColor: {
    property: 'textDecorationColor',
    scale: 'colors',

  },
} as const;

export const border = {
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths',
    flutterProp: 'border'
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles',
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors',
    flutterProp: 'border'
  },

  borderTop: {
    property: 'borderTop',
    scale: 'borders',
    flutterProp: 'border'
  },

  borderRight: {
    property: 'borderRight',
    scale: 'borders',
    flutterProp: 'border'
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders',
    flutterProp: 'border'
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
    flutterProp: 'border'
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
    flutterProp: 'border'
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders',
    flutterProp: 'border'
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders',
    flutterProp: 'border'
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders',
    flutterProp: 'border'
  },
  borderTopWidth: {
    property: 'borderTopWidth',
    scale: 'borderWidths',
    flutterProp: 'border'
  },
  borderTopColor: {
    property: 'borderTopColor',
    scale: 'colors',
    flutterProp: 'border'

  },
  borderTopStyle: {
    property: 'borderTopStyle',
    scale: 'borderStyles',
    flutterProp: 'border'
  },
  borderBottomWidth: {
    property: 'borderBottomWidth',
    scale: 'borderWidths',
    flutterProp: 'border'
  },
  borderBottomColor: {
    property: 'borderBottomColor',
    scale: 'colors',
    flutterProp: 'border'

  },
  borderBottomStyle: {
    property: 'borderBottomStyle',
    scale: 'borderStyles',
    flutterProp: 'border'
  },
  borderLeftWidth: {
    property: 'borderLeftWidth',
    scale: 'borderWidths',
    flutterProp: 'border'
  },
  borderLeftColor: {
    property: 'borderLeftColor',
    scale: 'colors',
    flutterProp: 'border'

  },
  borderLeftStyle: {
    property: 'borderLeftStyle',
    scale: 'borderStyles',
    flutterProp: 'border'
  },
  borderRightWidth: {
    property: 'borderRightWidth',
    scale: 'borderWidths',
    flutterProp: 'border'
  },
  borderRightColor: {
    property: 'borderRightColor',
    scale: 'colors',
    flutterProp: 'border'

  },
  borderRightStyle: {
    property: 'borderRightStyle',
    scale: 'borderStyles',
    flutterProp: 'border'
  },
  rounded: {
    property: 'borderRadius',
    scale: 'radii',
    flutterProp: 'border'
  },

  roundedTopLeft: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
    flutterProp: 'border'
  },

  roundedTopRight: {
    property: 'borderTopRightRadius',
    scale: 'radii',
    flutterProp: 'border'
  },

  roundedBottomLeft: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
    flutterProp: 'border'
  },

  roundedBottomRight: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
    flutterProp: 'border'
  },

  roundedTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii',
    flutterProp: 'border'
  },
  borderBottomRadius: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii',
    flutterProp: 'border'
  },
  roundedBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii',
    flutterProp: 'border'
  },

  roundedLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii',
    flutterProp: 'border'
  },

  roundedRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii',
    flutterProp: 'border'
  },
  border: {
    flutterProp: 'border'
  }
} as const;

export const borderRadius = {
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii',
    flutterProp: 'borderRadius',
    transformer: toFBorderRadius

  },
  borderTopRadius: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii',
    flutterProp: 'borderRadius'
  },
  borderLeftRadius: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii',
    flutterProp: 'borderRadius'
  },
  borderRightRadius: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii',
    flutterProp: 'borderRadius'
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
    flutterProp: 'borderRadius'
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii',
    flutterProp: 'borderRadius'
  },
}

export const background = {
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundBlendMode: true,
  bgImage: {
    property: 'backgroundImage',
  },
  bgImg: {
    property: 'backgroundImage',
  },
  bgBlendMode: {
    property: 'backgroundBlendMode',
  },
  bgSize: {
    property: 'backgroundSize',
  },
  bgPosition: {
    property: 'backgroundPosition',
  },
  bgPos: {
    property: 'backgroundPosition',
  },
  bgRepeat: {
    property: 'backgroundRepeat',
  },
  bgAttachment: {
    property: 'backgroundAttachment',
  },
} as const;

export const space: any = {
  margin: {
    property: 'margin',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  m: {
    property: 'margin',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  marginTop: {
    property: 'marginTop',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  mt: {
    property: 'marginTop',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  marginRight: {
    property: 'marginRight',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  mr: {
    property: 'marginRight',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  mb: {
    property: 'marginBottom',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  ml: {
    property: 'marginLeft',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'spacing',
    flutterProp: 'padding'
  },
  mx: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'spacing',
    flutterProp: 'padding'
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'spacing',
    flutterProp: 'padding'
  },
  my: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'spacing',
    flutterProp: 'padding'
  },

  padding: {
    property: 'padding',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  p: {
    property: 'padding',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  pt: {
    property: 'paddingTop',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  pr: {
    property: 'paddingRight',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  pb: {
    property: 'paddingBottom',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  pl: {
    property: 'paddingLeft',
    scale: 'spacing', flutterProp: 'padding'
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'spacing',
    flutterProp: 'padding'
  },
  px: {
    property: 'EdgeInsets.fromLTRB(_, top, _, bottom)',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'spacing',
    flutterProp: 'padding'
  },
  py: {
    property: 'EdgeInsets.fromLTRB(_, _, _, _)',
    scale: 'spacing',
    flutterProp: 'padding'
  },
  gap: {
    property: 'gap',
    scale: 'spacing',
    flutterProp: 'padding'
  },
} as const;

export const typography = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts',
    // transformer: (val: any, scale: any) => {
    //   const value = get(scale, val);
    //   return value ? value.toString() : undefined;
    // },
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights',

  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights',
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings',
  },
  textAlign: true,
  fontStyle: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  textDecoration: { property: 'textDecorationLine' },
  txtDecor: { property: 'textDecorationLine' },
  textDecorationLine: true,
} as const;

const extraProps = {
  outline: true,
  outlineWidth: true,
  outlineColor: true,
  outlineStyle: true,
  shadow: {
    scale: 'shadows',
  },
  cursor: true,
  overflow: true,
  userSelect: { property: 'userSelect' },
} as const;

export const propConfig = {
  ...color,
  ...space,
  ...layout,
  ...flexbox,
  ...border,
  ...position,
  ...typography,
  ...background,
  ...extraProps,
  ...borderRadius,
  space
} as const;


export type StyledPropConfig = typeof propConfig;

