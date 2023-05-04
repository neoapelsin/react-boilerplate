import { 
  SET_CALCULATED_LAYOUT, 
  RESET_STATE,
  BOOK_FORM,
} from "./types";
import { calc } from '../layout';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {  
      fontFamily: "futura-pt",
      textTransform: 'none',
      color:"#fff",
      fontStyle:"normal"
    }
  },
  palette: {
    primary: {
      main: "#0095da",
    },
    secondary: {
      main: "#dbae3b",
    },
    text: {
      main: "#fff",
    },
    text2: {
      main: "#fff",
    },
    text3: {
      main: "#999",
    },
    footer: {
      main: '#fff'
    }
  },
});

const INITIAL_STATE = {
  theme: theme,
  lt: calc(window.$(document).width(), 4),
  //api: "https://acc.goldexrobot.ru/report.php",
  api:"https://example123.com/detailing_api.php",
  book_forms: [
    {"id":1, "open":false}, 
    {"id":2, "open":false},
    {"id":3, "open":false},
    {"id":4, "open":false},
    {"id":5, "open":false},
    {"id":6, "open":false},
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CALCULATED_LAYOUT:
      return {
        ...state,
        ...action.payload,
      };
    case BOOK_FORM:
      return {
        ...state,
        ...action.payload,
      };
    case RESET_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return INITIAL_STATE;
  }
};