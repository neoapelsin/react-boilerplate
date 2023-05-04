import './App.css';
import { useDispatch, useSelector, useStore } from "react-redux";
import React, {useState, useEffect} from 'react';
import { updateCalculatedLayout } from "./redux/actions";
import _ from 'lodash';

//sm, md, lg, xl
const Breakpoints = {
  small: { min: 0, max: 600 },
  medium: { min: 601, max: 900 },
  large: { min: 901, max: 1200 },
  huge: { min: 1201, max: 1410 }
};

const ScreenType = {
  gird4: 0,
  grid8: 1,
  grid12: 2,
  grid16: 3,
  unknown: 4
} 

export const calc = function (maxWidth, margin) {
  let lt = {};
  let width = Breakpoints.small.min;

  if (maxWidth <= Breakpoints.huge.max) {
    width = maxWidth;
  } else {
    width = Breakpoints.huge.max;
  }

  lt.margin = margin;
  lt.col = 60;
  lt.gutter = margin;
  let type = getScreenType(width);
  if (type === ScreenType.gird4) {
    lt.max = 2;
    lt.containerWidth = width;
  } else if (type === ScreenType.grid8) {
    lt.max = 4;
    lt.containerWidth = width;
  } else if (type === ScreenType.grid12) {
    lt.max = 6;
    lt.containerWidth = width;
  } else if (type === ScreenType.grid16) {
    lt.max = 8;
    lt.containerWidth = width;
  } else {
    return lt;
  }

  let half = lt.containerWidth / 2;
  let total = (lt.col + lt.gutter + lt.margin) * lt.max;
  let adj = (total - half) / lt.max;
  lt.col -= adj;
  lt.max *= 2;

  lt.containerWidth = (lt.col + lt.gutter + lt.margin) * lt.max;
  lt.innerWidth = lt.containerWidth - lt.margin * 2;
  lt.gutter *= 2;
  lt.bunch1 = lt.col;
  lt.bunch2 = lt.bunch1 + (lt.col + lt.gutter);
  lt.bunch3 = lt.bunch2 + (lt.col + lt.gutter);
  lt.bunch4 = lt.bunch3 + (lt.col + lt.gutter);
  lt.bunch5 = lt.bunch4 + (lt.col + lt.gutter);
  lt.bunch6 = lt.bunch5 + (lt.col + lt.gutter);
  lt.bunch7 = lt.bunch6 + (lt.col + lt.gutter);
  lt.bunch8 = lt.bunch7 + (lt.col + lt.gutter);
  lt.bunch9 = lt.bunch8 + (lt.col + lt.gutter);
  lt.bunch10 = lt.bunch9 + (lt.col + lt.gutter);
  lt.bunch11 = lt.bunch10 + (lt.col + lt.gutter);
  lt.bunch12 = lt.bunch11 + (lt.col + lt.gutter);
  lt.bunch13 = lt.bunch12 + (lt.col + lt.gutter);
  lt.bunch14 = lt.bunch13 + (lt.col + lt.gutter);
  lt.bunch15 = lt.bunch14 + (lt.col + lt.gutter);
  lt.bunch16 = lt.bunch15 + (lt.col + lt.gutter);

  lt.space0 = lt.margin;
  lt.space1 = lt.space0 + (lt.col + lt.gutter);
  lt.space2 = lt.space1 + (lt.col + lt.gutter);
  lt.space3 = lt.space2 + (lt.col + lt.gutter);
  lt.space4 = lt.space3 + (lt.col + lt.gutter);
  lt.space5 = lt.space4 + (lt.col + lt.gutter);
  lt.space6 = lt.space5 + (lt.col + lt.gutter);
  lt.space7 = lt.space6 + (lt.col + lt.gutter);
  lt.space8 = lt.space7 + (lt.col + lt.gutter);
  lt.space9 = lt.space8 + (lt.col + lt.gutter);
  lt.space10 = lt.space9 + (lt.col + lt.gutter);
  lt.space11 = lt.space10 + (lt.col + lt.gutter);
  lt.space12 = lt.space11 + (lt.col + lt.gutter);
  lt.space13 = lt.space12 + (lt.col + lt.gutter);
  lt.space14 = lt.space13 + (lt.col + lt.gutter);
  lt.space15 = lt.space14 + (lt.col + lt.gutter);

  return lt;
}

function getScreenType(width) {
  if (width >= Breakpoints.small.min && width <= Breakpoints.small.max) {
    return ScreenType.gird4;
  } else if (width > Breakpoints.medium.min && width <= Breakpoints.medium.max) {
    return ScreenType.grid8;
  } else if (width > Breakpoints.medium.min && width <= Breakpoints.large.max) {
    return ScreenType.grid12;
  } else if (width > Breakpoints.huge.min && width <= Breakpoints.huge.max) {
    return ScreenType.grid16;
  } else {
    return ScreenType.unknown;
  }
}

export const Axis = {
  main: {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
    initial: "initial",
    inherit: "inherit",
  },
  cross: {
    stretch: "stretch",
    start: "flex-start",
    end: "flex-end",
    center: "center",
    baseline: "baseline",
    initial: "initial",
    inherit: "inherit",
  },
  self: {
    auto: "auto",
    initial: "initial",
    inherit: "inherit",
    stretch: "stretch",
    start: "flex-start",
    end: "flex-end",
    center: "center",
    baseline: "baseline"
  }
}

export function Row(props) {
  
  const filterProps = ["debug", "center", "top", "left", "right", "bottom", "width", "height", "color", "main", "cross", "self", "sx"];

  let style = {
    display: 'flex',
    flexDirection: 'row',
  };
  if (props.width) {
    style.width = props.width;
  }
  if (props.height) {
    style.height = props.height;
  }
  if (props.color) {
    style.backgroundColor = props.color;
  }
  if (props.center) {
    style.justifyContent = 'center';
    style.alignItems = 'center';
  }
  if (props.main) {
    style.justifyContent = props.main;
  }
  if (props.cross) {
    style.alignItems = props.cross;
  }
  if (props.self) {
    style.alignSelf = props.self;
  }
  if (props.top) {
    style.marginTop = props.top;
  }
  if (props.right) {
    style.marginRight = props.right;
  }
  if (props.left) {
    style.marginLeft = props.left;
  }
  if (props.bottom) {
    style.marginBottom = props.bottom;
  }
  if (props.debug) {
    style.borderStyle = 'dashed';
    style.borderColor = 'yellow';
    style.borderWidth = 2;
    style.boxSizing = 'border-box';
  };
  style = {...style, ...props.sx};

  let copyProps = {...props};
  for (let item of filterProps) {
    if (copyProps.hasOwnProperty(item)) {
      delete copyProps[item];
    }
  }
  
  return (
    <div style={style} {...copyProps}>
      {props.children}
    </div>
  );
}


export function Column(props) {
  
  const filterProps = ["debug", "center", "top", "left", "right", "bottom", "width", "height", "color", "main", "cross", "self", "sx"];

  let style = {
    display: 'flex',
    flexDirection: 'column',
  };
  if (props.width) {
    style.width = props.width;
  }
  if (props.height) {
    style.height = props.height;
  }
  if (props.color) {
    style.backgroundColor = props.color;
  }
  if (props.center) {
    style.justifyContent = 'center';
    style.alignItems = 'center';
  }
  if (props.main) {
    style.justifyContent = props.main;
  }
  if (props.cross) {
    style.alignItems = props.cross;
  }
  if (props.self) {
    style.alignSelf = props.self;
  }
  if (props.top) {
    style.marginTop = props.top;
  }
  if (props.right) {
    style.marginRight = props.right;
  }
  if (props.left) {
    style.marginLeft = props.left;
  }
  if (props.bottom) {
    style.marginBottom = props.bottom;
  }
  if (props.debug) {
    style.borderStyle = 'dashed';
    style.borderColor = 'yellow';
    style.borderWidth = 2;
    style.boxSizing = 'border-box';
  };
  style = {...style, ...props.sx};

  let copyProps = {...props};
  //console.log(copyProps);
  for (let item of filterProps) {
    if (copyProps.hasOwnProperty(item)) {
      delete copyProps[item];
    } 
  }
  
  return (
    <div style={style} {...copyProps}>
      {props.children}
    </div>
  );
}

export function Stack(props) {
  
  const filterProps = ["debug", "top", "left", "right", "bottom", "width", "height", "color", "sx"];

  /*let style = {
    position: 'relative',
    width: this.props.width,
    height: this.props.height,
    top: this.props.top,
    left: this.props.left,
    right: this.props.right,
    bottom: this.props.bottom,
    backgroundColor: this.props.color,
    borderStyle: this.props.debug ? 'dashed' : 'none',
    borderColor: this.props.debug ? 'black' : 'none',
    borderWidth: this.props.debug ? 2 : 0,
    boxSizing: this.props.debug ? 'border-box' : 'none',
  }*/

  let style = {
    position: 'relative',
  };
  if (props.width) {
    style.width = props.width;
  }
  if (props.height) {
    style.height = props.height;
  }
  if (props.color) {
    style.backgroundColor = props.color;
  }
  if (props.top) {
    style.marginTop = props.top;
  }
  if (props.right) {
    style.marginRight = props.right;
  }
  if (props.left) {
    style.marginLeft = props.left;
  }
  if (props.bottom) {
    style.marginBottom = props.bottom;
  }
  if (props.debug) {
    style.borderStyle = 'dashed';
    style.borderColor = 'yellow';
    style.borderWidth = 2;
    style.boxSizing = 'border-box';
  };
  style = {...style, ...props.sx};

  let copyProps = {...props};
  for (let item of filterProps) {
    if (copyProps.hasOwnProperty(item)) {
      delete copyProps[item];
    }
  }
  
  return (
    <div style={style} {...copyProps}>
      {props.children}
    </div>
  );
}


export function StackItem(props) {
  
  const filterProps = ["debug", "top", "left", "right", "bottom", "width", "height", "color", "z", "sx"];

  /*
  let style = {
      position: 'absolute',
      width: this.props.width,
      height: this.props.height,
      top: this.props.top,
      left: this.props.left,
      right: this.props.right,
      bottom: this.props.bottom,
      backgroundColor: this.props.color,
      zIndex: this.props.zindex,
      borderStyle: this.props.debug ? 'dashed' : 'none',
      borderColor: this.props.debug ? 'black' : 'none',
      borderWidth: this.props.debug ? 2 : 0,
      boxSizing: this.props.debug ? 'border-box' : 'none',
    }
  */

  let style = {
    position: 'absolute',
  };
  if (props.z) {
    style.zIndex = props.z;
  }
  if (props.top) {
    style.top = props.top;
  }
  if (props.left) {
    style.left = props.left;
  }
  if (props.right) {
    style.right = props.right;
  }
  if (props.bottom) {
    style.bottom = props.bottom;
  }
  if (props.width) {
    style.width = props.width;
  } else {
    //style.width ='auto';
  }
  if (props.height) {
    style.height = props.height;
  } else {
    //style.height = "auto";
  }
  if (props.color) {
    style.backgroundColor = props.color;
  }
  if (props.debug) {
    style.borderStyle = 'dashed';
    style.borderColor = 'yellow';
    style.borderWidth = 2;
    style.boxSizing = 'border-box';
  };
  style = {...style, ...props.sx};

  let copyProps = {...props};
  for (let item of filterProps) {
    if (copyProps.hasOwnProperty(item)) {
      delete copyProps[item];
    }
  }
  
  return (
    <div style={style} {...copyProps}>
      {props.children}
    </div>
  );
}


export function ContentContainer(props) {
  const dispatch = useDispatch();
  const stateObj = useSelector((state) => state.mainState);
  const lt = stateObj.lt;

  useEffect(()=>{
    const update = ()=> {
      dispatch(updateCalculatedLayout(calc(window.innerWidth, 4)));
    }
    window.addEventListener("resize", update);

    return () => {
      window.addEventListener("resize", update);
    };
  },[lt.containerWidth, dispatch]);

  return(
    <div style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
      {props.debug &&
        <Column center><Dbg></Dbg></Column>
      }
      {props.children}
    </div>
  );
}

/*
export const Head = styled('div')`
  width:100%;
`;

export const Content = styled('div')`
  width:100%;
`;

export const Filler = styled('div')`
  flex:1;
  overflow:auto;
`;
*/

export function Dbg() {
  const stateObj = useSelector((state) => state.mainState);
  const lt = stateObj.lt;

  const [height, setHeight] = useState(20);

  let body = [];
  for (let i = 0; i < lt.max; i++) {
    body.push(
      <Column center key={i} width={lt.col + lt.gutter} height={height} color={'rgba(80, 102, 161, 0.3)'} sx={{ transition: "height 0.3s ease-in-out" }}>
        <Column width={lt.col} height={height} color={'rgba(240, 113, 121, 0.3)'} sx={{ transition: "height 0.3s ease-in-out" }}></Column>
      </Column>
    );
  }
  
  return(
    <Stack width='100%' onClick={()=>{
      if (height === 20) {
        setHeight(window.document.documentElement.scrollHeight);
      } else {
        setHeight(20);
      }
    }}>
      <StackItem width='100%' z={1000}>
        <Row center>{body}</Row>
      </StackItem>
    </Stack>
  );
}

