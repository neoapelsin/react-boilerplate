import logo from './logo.svg';
import './App.css';
import React, { useRef, useState, useEffect} from 'react';
import { useDispatch, useSelector, useStore } from "react-redux";
import { Row, Column, Stack, StackItem, Axis, ContentContainer } from './layout'; 
import { Header1, Header2, Header3, Header4, Header5, Header6, Subtitle1, Subtitle2, Body1, Body2, A, Caption } from './TypographyComponents';
import { ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import uuid from 'react-uuid';
import _ from 'lodash';
import { Color } from './flatColors';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import TimerIcon from '@mui/icons-material/Timer';
import AddIcon from '@mui/icons-material/Add';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { bookForm } from './redux/actions';

/*import { 
  getReportData,
  resetState,
} from "./redux/actions";*/


function App() {
  const dispatch = useDispatch();
  const stateObj = useSelector((state) => state.mainState);
  const lt = stateObj.lt;
  const book_forms = stateObj.book_forms;
  const refClock = useRef();
  var date = new Date();
  var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
                date.getUTCDate(), date.getUTCHours(),
                date.getUTCMinutes(), date.getUTCSeconds());

  date = new Date(now_utc);
  date.setHours(1);
  date.setMinutes(28);
  date.setSeconds(14);
  const [clock, setCurrentClock] = React.useState(date.toISOString());
  //const [reload, setReload] = React.useState(false);
  let d = new Date(Date.parse(date));
  const [clockString, setClockString] = React.useState(`${d.getHours()}h ${d.getMinutes()}m ${d.getSeconds()}s`);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [dialogData, setDialogData] = React.useState([]);

  const generalPrice = [
    "0 water runoff steam cleaning of exterior.",
    "Hand dry using microfiber towels.",
    "Bug Removal From Paint.",
    "Air purification using an Ozone machine (if requested).",
    "Apply a protective coat of light ceramic coating OR wax, your choice!",
    "Vacuum Interior carpets and seats.",
    "Steam cleaning of interior windows and exterior windows.",
    "Natural disinfectant by steam cleaning all surfaces.",
    "Clean wheels and dress tires.",
    "Clean and dress wheel wells.",
    "Clean all interior plastics and leather.",
    "Condition all interior plastics and leather.",
    "Clay bar paint (leaves paint clean and smooth as glass).",
    "Steam Clean carpets and cloth seats (Removes Protein, Tannin, and Oil-Based stains).",
    "Shine exterior plastics.",
    "Deep cleaning of door and trunk jambs.",
    "Clean gas cap area.",
    "Moss removal from window seals.",
    "Spot cleaning of the headliner."
  ];

  const exteriorPrice = [
    "0 water runoff steam cleaning of exterior",
    "Hand dry using microfiber towels",
    "Clean wheels and dress tires",
    "Clean and dress wheel wells",
    "Clay bar paint (leaves paint clean and smooth as glass)",
    "Deep cleaning of door and trunk jambs",
    "Clean gas cap area",
    "Apply a protective coat of light ceramic coating OR wax, your choice!",
    "Shine exterior plastics",
    "Natural disinfectant by steam cleaning all surfaces",
    "Steam cleaning of interior windows and exterior windows",
  ];

  const interiorPrice = [
    "Vacuum Interior carpets and seats",
    "Steam extracting of carpets",
    "Deep cleaning of door and trunk jambs",
    "Natural odor reduction due to bacteria being killed on interior surfaces",
    "Air purification using an Ozone machine (if requested)",
    "Natural disinfectant by steam cleaning all surfaces",
    "Clean all interior plastics and leather",
    "Condition all interior plastics and leather",
    "Steam cleaning of interior windows and exterior windows",
    "Spot cleaning of the headliner",
  ];

  useEffect(()=>{
    //console.log(clockString);
    let anime = window.anime;
    let dt = new Date(Date.parse(clock)-2500);
    setCurrentClock(dt.toISOString());
    window.anime({
      targets:`#${refClock.current.id}`,
      rotateX:-360,
      duration:2500,
      easing:'easeOutQuint',
      complete: (anim)=>{
        window.$(`#${refClock.current.id}`).css({"transform":"rotateX(0deg)"});
        let d = new Date(Date.parse(clock)-2500);
        setCurrentClock(dt.toISOString());
        //setReload(!reload);
        setClockString(`${d.getHours()}h ${d.getMinutes()}m ${d.getSeconds()}s`)
      }
    })
  },[clockString])

  
  const handleClickOpenDialog = (value) => () => {
    console.log(value);
    if (value === 0) {
      setDialogData(generalPrice);
    } else if (value === 1) {
      setDialogData(interiorPrice);
    } else if (value === 2) {
      setDialogData(exteriorPrice);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  
  const handleBook = (id) => async () => {
    dispatch(bookForm(id, true));
  }

  return (
    <ThemeProvider theme={stateObj.theme} >
      <ContentContainer>
        <Column cross={Axis.cross.center} color="rgb(27,27,27)">
          <Column width={lt.bunch4}>
            <Column height={700} sx={{backgroundImage:"url(/images/main_pic.png)", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
              <Column height={80} main={Axis.main.start}>
                <Row width="100%" top={20} cross={Axis.cross.center} main={Axis.main.start}>
                  <Row>
                    <Row left={20}>
                      <img src="/images/logo.png" width={45}></img>
                    </Row>
                    <Row left={10}>
                      <Row sx={{color:"white", fontWeight:700, fontSize:20}} top={-5} cross={Axis.cross.center}>HappyDetailing</Row>
                    </Row>
                  </Row>
                </Row>
              </Column>
              <Column left={20} right={20} top={70} center>
                <Row sx={{textAlign:"center"}}><Header1 sx={{color:"white", fontWeight:900, fontSize:30}}>WASH.</Header1></Row>
                <Row sx={{textAlign:"center"}} top={5}><Header1 sx={{color:"white", fontWeight:900, fontSize:30}}>DETAIL.</Header1></Row>
                <Row sx={{textAlign:"center"}} top={5}><Header1 sx={{color:"white", fontWeight:900, fontSize:30}}>AT YOUR DRIVEWAY.</Header1></Row>
              </Column>
              <Column left={20} right={20} top={10} center>
                <Row sx={{textAlign:"center"}}><Subtitle1 sx={{color:"rgb(180,180,180)", fontWeight:500, fontSize:20}}>Renew Your car without breaking the bank.</Subtitle1></Row>
              </Column>
              <Row top={70} left={20} right={20}>
                <Button variant='contained' fullWidth sx={{borderRadius:"30px", color:"white", height:"60px", fontWeight:500, fontSize:"16px"}} onClick={handleBook(1)}>BOOK NOW</Button>
              </Row>
              <Row top={20} left={20} right={20} center>
                <Row sx={{color:"white", fontWeight:500, fontSize:14, color:"rgb(180,180,180)"}}>Mobile service in NYC and in Long Island</Row>
              </Row>
              <FormDialog open={book_forms[_.findIndex(book_forms, (x) => {return x.id === 1})].open} id={1}></FormDialog>
              <Row top={60} center>
                <Row><StarIcon sx={{color:'#FFD93D'}}></StarIcon></Row>
                <Row><StarIcon sx={{color:'#FFD93D'}}></StarIcon></Row>
                <Row><StarIcon sx={{color:'#FFD93D'}}></StarIcon></Row>
                <Row><StarIcon sx={{color:'#FFD93D'}}></StarIcon></Row>
                <Row><StarIcon sx={{color:'#FFD93D'}}></StarIcon></Row>
              </Row>
              <Row top={3} center>
                <Subtitle1>500+ REVIEWS</Subtitle1>
              </Row>
            </Column>
            <OurService></OurService>
            <Column top={50} bottom={50}>
              <Row left={20} right={20} center><Header5 sx={{fontWeight:800, fontSize:"25px", textAlign:"center"}}>HOW IT WORKS</Header5></Row>
              <Column left={20} top={40}>
                <Row top={0}>
                  <Row top={5}><AccessTimeIcon sx={{color:'#0095da'}}/></Row>
                  <Row left={20} right={20}><Body1 sx={{fontSize:"20px", color: "rgb(180,180,180)"}}>Book your appointment online or give us a call.</Body1></Row>
                </Row>
                <Row top={20}>
                  <Row top={5}><LocalCarWashIcon sx={{color:'#0095da'}}/></Row>
                  <Row left={20} right={20}><Body1 sx={{fontSize:"20px", color: "rgb(180,180,180)"}}>We come to your home, apartment or workplace.</Body1></Row>
                </Row>
                <Row top={20}>
                  <Row top={5}><CreditCardIcon sx={{color:'#0095da'}}/></Row>
                  <Row left={20} right={20}><Body1 sx={{fontSize:"20px", color: "rgb(180,180,180)"}}>Pay once your service is complete.</Body1></Row>
                </Row>
                <Row top={20}>
                  <Row top={5}><SentimentSatisfiedAltIcon sx={{color:'#0095da'}}/></Row>
                  <Row left={20} right={20}><Body1 sx={{fontSize:"20px", color: "rgb(180,180,180)"}}>Enjoy your new car feel.</Body1></Row>
                </Row>
              </Column>
              <Row top={50} left={20} right={20}>
                <Button variant='contained' fullWidth sx={{borderRadius:"30px", color:"white", height:"60px", fontWeight:400, fontSize:"16px"}} onClick={handleBook(2)}>BOOK NOW</Button>
              </Row>
              <FormDialog open={book_forms[_.findIndex(book_forms, (x) => {return x.id === 2})].open} id={2}></FormDialog>
              <Row top={30} center>
                <Row><PhoneIcon sx={{color:'#FFD93D'}}/></Row>
                <Row left={10}><Body2 sx={{fontSize:16, fontWeight:700}}>(111) 555 7777</Body2></Row>
              </Row>
            </Column>
          </Column>
          <Column width="100%" color="rgb(246,246,246)" center>
            <Column width={lt.bunch4} top={50} bottom={50} >
              <Row left={20} right={20} center><Header5 sx={{fontWeight:800, fontSize:25, textAlign:"center", color:"rgb(27,27,27)"}}>PRICING</Header5></Row>
              <Column top={40} left={20} right={20}>
                <Card>
                  <CardContent>
                    <Column center>
                      {/*<Row top={10}><Row top={5}>🔥&nbsp;</Row><Subtitle1 sx={{color:"rgb(28,28,28)", fontWeight:700, fontSize:20}}>BEST OFFER</Subtitle1><Row top={5}>&nbsp;🔥</Row></Row>*/}
                      <Row top={10}><Subtitle1 sx={{color:"rgb(28,28,28)", fontWeight:800, fontSize:30, color:"#ff0303"}}>BEST OFFER</Subtitle1></Row>
                      <Row width="100%" height={1}  top={20} color={Color.flatWhiteDark}></Row>
                      <Row top={20}><Header6 sx={{color:"rgb(28,28,28)"}}>Interior & Exterior Detail</Header6></Row>
                      <Row top={10}><Row><TimerIcon sx={{color:"#0095da"}} /></Row><Row left={10}>3-7 hours</Row></Row>
                      <Column top={30} color="rgb(245,245,245)" sx={{paddingLeft:30, paddingRight:30, paddingTop:15, paddingBottom:15, borderRadius:10}}>
                        <Column center>
                          <Row><Subtitle1 sx={{color:"rgb(28,28,28)", fontWeight:500}}>A special offer for new customers</Subtitle1></Row>
                          <Row center top={20}><Subtitle1 sx={{color:"rgb(28,28,28)", fontWeight:500}}>Ends in&nbsp;</Subtitle1><div ref={refClock} id='clock'><Row color="#ff0303" width={80} center sx={{paddingLeft:10, paddingRight:10, borderRadius:5}}><Subtitle1 sx={{color:"rgb(255,255,255)"}}>{clockString}</Subtitle1></Row></div></Row>
                          <Row top={20} sx={{fontSize:20, fontWeight:700}}><Row sx={{color:"rgb(150,150,150)"}}><strike>$499</strike></Row><Row left={10}>$349</Row></Row>
                        </Column>
                      </Column>
                      <Row top={20} bottom={20}><AddIcon /></Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Row width="100%" center sx={{color:"#0095da"}}>Vehicle Size Add-On</Row>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Column width={lt.bunch4-60}>
                            <Row top={7} left={10} right={10} main={Axis.main.between}><Row sx={{fontSize:14, fontWeight:500}}>Coupe</Row><Row sx={{fontSize:15, fontWeight:500}}>$0</Row></Row>
                            <Row top={7} left={10} right={10} main={Axis.main.between}><Row sx={{fontSize:14, fontWeight:500}}>Sedan</Row><Row sx={{fontSize:15, fontWeight:500}}>$20</Row></Row>
                            <Row top={7} left={10} right={10} main={Axis.main.between}><Row sx={{fontSize:14, fontWeight:500}}>Hatchback, Crossover</Row><Row sx={{fontSize:15, fontWeight:500}}>$40</Row></Row>
                            <Row top={7} left={10} right={10} main={Axis.main.between}><Row sx={{fontSize:14, fontWeight:500}}>Small SUV or Truck</Row><Row sx={{fontSize:15, fontWeight:500}}>$50</Row></Row>
                            <Row top={7} left={10} right={10} main={Axis.main.between}><Row sx={{fontSize:14, fontWeight:500}}>Minivan or Van</Row><Row sx={{fontSize:15, fontWeight:500}}>$80</Row></Row>
                          </Column>
                        </AccordionDetails>
                      </Accordion>
                      <Row top={30} width="100%"><Button fullWidth variant='contained' sx={{borderRadius:"28px", color:"white", height:"56px", fontWeight:400, fontSize:"14px"}} onClick={handleBook(3)}>BOOK NOW</Button></Row>
                      <FormDialog open={book_forms[_.findIndex(book_forms, (x) => {return x.id === 3})].open} id={3}></FormDialog>
                    </Column>
                  </CardContent>
                  <CardActions>
                    <Row width="100%" center><Button size="small" onClick={handleClickOpenDialog(0)}>Learn More</Button></Row>
                  </CardActions>
                </Card>
                <Dialog
                  open={openDialog}
                  onClose={handleCloseDialog}
                  scroll={'paper'}
                  aria-labelledby="scroll-dialog-title"
                  aria-describedby="scroll-dialog-description"
                >
                  <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                  <DialogContent>
                    {dialogData.map((item) => {
                      return(
                        <Row top={12} key={uuid()}><Row><CheckIcon sx={{color:"#0095da"}}/></Row><Row left={10}><Body2 sx={{color:"rgb(27,27,27)"}}>{item}</Body2></Row></Row>
                      )
                    })}
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogActions>
                </Dialog>
              </Column>
              <Column top={40} left={20} right={20}>
                <Card>
                  <CardContent>
                    <Column center>
                      <Row top={20}><Header6 sx={{color:"rgb(28,28,28)"}}>Interior Detail</Header6></Row>
                      <Row top={10}><Row><TimerIcon sx={{color:"#0095da"}} /></Row><Row left={10}>1,5-3 hours</Row></Row>
                      <Row top={20} sx={{fontSize:20, fontWeight:700}}><Row left={10}>$279</Row></Row>
                      <Row top={20} bottom={20}><AddIcon /></Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Row width="100%" center sx={{color:"#0095da"}}>Vehicle Size Add-On</Row>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Column width={lt.bunch4-60}>
                            <Row top={7} left={10} right={10} main={Axis.main.between}><Row sx={{fontSize:14, fontWeight:500}}>Coupe</Row><Row sx={{fontSize:15, fontWeight:500}}>$0</Row></Row>
                            <Row top={7} left={10} right={10} main={Axis.main.between}><Row sx={{fontSize:14, fontWeight:500}}>Sedan</Row><Row sx={{fontSize:15, fontWeight:500}}>$20</Row></Row>
                            <Row top={7} left={10} right={10} main={Axis.main.between}><Row sx={{fontSize:14, fontWeight:500}}>Hatchback, Crossover</Row><Row sx={{fontSize:15, fontWeight:500}}>$40</Row></Row>
                            <Row top={7} left={10} right={10} main={Axis.main.between}><Row sx={{fontSize:14, fontWeight:500}}>Small SUV or Truck</Row><Row sx={{fontSize:15, fontWeight:500}}>$50</Row></Row>
                            <Row top={7} left={10} right={10} main={Axis.main.between}><Row sx={{fontSize:14, fontWeight:500}}>Minivan or Van</Row><Row sx={{fontSize:15, fontWeight:500}}>$80</Row></Row>
                          </Column>
                        </AccordionDetails>
                      </Accordion>
                      <Row top={30} width="100%"><Button fullWidth variant='contained' sx={{borderRadius:"28px", color:"white", height:"56px", fontWeight:400, fontSize:"14px"}} onClick={handleBook(4)}>BOOK NOW</Button></Row>
                      <FormDialog open={book_forms[_.findIndex(book_forms, (x) => {return x.id === 4})].open} id={4}></FormDialog>
                    </Column>
                  </CardContent>
                  <CardActions>
                    <Row width="100%" center><Button size="small" onClick={handleClickOpenDialog(1)}>Learn More</Button></Row>
                  </CardActions>
                </Card>
                <Dialog
                  open={openDialog}
                  onClose={handleCloseDialog}
                  scroll={'paper'}
                  aria-labelledby="scroll-dialog-title"
                  aria-describedby="scroll-dialog-description"
                >
                  <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                  <DialogContent>
                    {dialogData.map((item) => {
                      return(
                        <Row top={12} key={uuid()}><Row><CheckIcon sx={{color:"#0095da"}}/></Row><Row left={10}><Body2 sx={{color:"rgb(27,27,27)"}}>{item}</Body2></Row></Row>
                      )
                    })}
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogActions>
                </Dialog>
              </Column>
              <Column top={40} left={20} right={20}>
                <Card>
                  <CardContent>
                    <Column center>
                      <Row top={20}><Header6 sx={{color:"rgb(28,28,28)"}}>Exterior Detail</Header6></Row>
                      <Row top={10}><Row><TimerIcon sx={{color:"#0095da"}} /></Row><Row left={10}>1-2 hours</Row></Row>
                      <Row top={20} sx={{fontSize:20, fontWeight:700}}><Row left={10}>$279</Row></Row>
                      <Row top={20} bottom={20}><AddIcon /></Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Row width="100%" center sx={{color:"#0095da"}}>Vehicle Size Add-On</Row>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Column width={lt.bunch4-60}>
                            <Row top={7} left={10} right={10} main={Axis.main.between}><Row sx={{fontSize:14, fontWeight:500}}>Coupe</Row><Row sx={{fontSize:15, fontWeight:500}}>$0</Row></Row>
                            <Row top={7} left={10} right={10} main={Axis.main.between}><Row sx={{fontSize:14, fontWeight:500}}>Sedan</Row><Row sx={{fontSize:15, fontWeight:500}}>$20</Row></Row>
                            <Row top={7} left={10} right={10} main={Axis.main.between}><Row sx={{fontSize:14, fontWeight:500}}>Hatchback, Crossover</Row><Row sx={{fontSize:15, fontWeight:500}}>$40</Row></Row>
                            <Row top={7} left={10} right={10} main={Axis.main.between}><Row sx={{fontSize:14, fontWeight:500}}>Small SUV or Truck</Row><Row sx={{fontSize:15, fontWeight:500}}>$50</Row></Row>
                            <Row top={7} left={10} right={10} main={Axis.main.between}><Row sx={{fontSize:14, fontWeight:500}}>Minivan or Van</Row><Row sx={{fontSize:15, fontWeight:500}}>$80</Row></Row>
                          </Column>
                        </AccordionDetails>
                      </Accordion>
                      <Row top={30} width="100%"><Button fullWidth variant='contained' sx={{borderRadius:"28px", color:"white", height:"56px", fontWeight:400, fontSize:"14px"}} onClick={handleBook(5)}>BOOK NOW</Button></Row>
                      <FormDialog open={book_forms[_.findIndex(book_forms, (x) => {return x.id === 5})].open} id={5}></FormDialog>
                    </Column>
                  </CardContent>
                  <CardActions>
                    <Row width="100%" center><Button size="small" onClick={handleClickOpenDialog(2)}>Learn More</Button></Row>
                  </CardActions>
                </Card>
                <Dialog
                  open={openDialog}
                  onClose={handleCloseDialog}
                  scroll={'paper'}
                  aria-labelledby="scroll-dialog-title"
                  aria-describedby="scroll-dialog-description"
                >
                  <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                  <DialogContent>
                    {dialogData.map((item) => {
                      return(
                        <Row top={12} key={uuid()}><Row><CheckIcon sx={{color:"#0095da"}}/></Row><Row left={10}><Body2 sx={{color:"rgb(27,27,27)"}}>{item}</Body2></Row></Row>
                      )
                    })}
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogActions>
                </Dialog>
              </Column>
            </Column>
          </Column>
          <Column width="100%" color="rgb(27,27,27)" center>
            <Column width={lt.bunch4} top={50} bottom={50}>
              <Row left={20} right={20} center><Header5 sx={{fontWeight:800, fontSize:25, textTransform:"uppercase", textAlign:"center"}}>But it doesn't end there...</Header5></Row>
              <Row left={20} right={20} top={40} center><Subtitle1 sx={{fontWeight:400, fontSize:20, textAlign:"center"}}>You also get this amazing bonus valued at <b>$50</b></Subtitle1></Row>
              <Row left={20} right={20} top={10} center><Subtitle1 sx={{fontWeight:800, fontSize:20, textAlign:"center", color:"#0095da"}}>FOR FREE!</Subtitle1></Row>
              <Row left={20} right={20} top={20} center><Subtitle1 sx={{fontWeight:600, fontSize:20, textAlign:"center"}}>Tire pressure adjustment, if required</Subtitle1></Row>
              <Row left={20} right={20} top={10} bottom={10} center><AddIcon sx={{color:"white"}}/></Row>
              <Row left={20} right={20} top={0} center><Subtitle1 sx={{fontWeight:600, fontSize:20}}>12-point health inspection</Subtitle1></Row>
              <Column left={20} right={20} top={20}>
                <Row top={10}><Row top={4}><TaskAltIcon sx={{color:"#0095da"}}/></Row><Row left={15}><Body1 sx={{color:"rgb(180,180,180)", fontSize:"20px"}}>Tire pressure checked</Body1></Row></Row>
                <Row top={10}><Row top={4}><TaskAltIcon sx={{color:"#0095da"}}/></Row><Row left={15}><Body1 sx={{color:"rgb(180,180,180)", fontSize:"20px"}}>Oil checked</Body1></Row></Row>
                <Row top={10}><Row top={4}><TaskAltIcon sx={{color:"#0095da"}}/></Row><Row left={15}><Body1 sx={{color:"rgb(180,180,180)", fontSize:"20px"}}>Windshield washer fluid checked</Body1></Row></Row>
                <Row top={10}><Row top={4}><TaskAltIcon sx={{color:"#0095da"}}/></Row><Row left={15}><Body1 sx={{color:"rgb(180,180,180)", fontSize:"20px"}}>Coolant levels checked</Body1></Row></Row>
                <Row top={10}><Row top={4}><TaskAltIcon sx={{color:"#0095da"}}/></Row><Row left={15}><Body1 sx={{color:"rgb(180,180,180)", fontSize:"20px"}}>Transmission fluid checked</Body1></Row></Row>
                <Row top={10}><Row top={4}><TaskAltIcon sx={{color:"#0095da"}}/></Row><Row left={15}><Body1 sx={{color:"rgb(180,180,180)", fontSize:"20px"}}>Tire tread checked</Body1></Row></Row>
                <Row top={10}><Row top={4}><TaskAltIcon sx={{color:"#0095da"}}/></Row><Row left={15}><Body1 sx={{color:"rgb(180,180,180)", fontSize:"20px"}}>Windshield wipers checked for damages</Body1></Row></Row>
                <Row top={10}><Row top={4}><TaskAltIcon sx={{color:"#0095da"}}/></Row><Row left={15}><Body1 sx={{color:"rgb(180,180,180)", fontSize:"20px"}}>Headlights, turn signals, brake lights, parking lights</Body1></Row></Row>
                <Row top={10}><Row top={4}><TaskAltIcon sx={{color:"#0095da"}}/></Row><Row left={15}><Body1 sx={{color:"rgb(180,180,180)", fontSize:"20px"}}>Battery life checked</Body1></Row></Row>
                <Row top={10}><Row top={4}><TaskAltIcon sx={{color:"#0095da"}}/></Row><Row left={15}><Body1 sx={{color:"rgb(180,180,180)", fontSize:"20px"}}>Power steering fluid checked</Body1></Row></Row>
                <Row top={10}><Row top={4}><TaskAltIcon sx={{color:"#0095da"}}/></Row><Row left={15}><Body1 sx={{color:"rgb(180,180,180)", fontSize:"20px"}}>Brake fluid checked</Body1></Row></Row>
                <Row top={10}><Row top={4}><TaskAltIcon sx={{color:"#0095da"}}/></Row><Row left={15}><Body1 sx={{color:"rgb(180,180,180)", fontSize:"20px"}}>OBD 2 Diagnostic Scan</Body1></Row></Row>
              </Column>
            </Column>
           </Column> 
        </Column>
        <Column width="100%" color="rgb(246,246,246)" center>
          <Column width={lt.bunch4} top={50} bottom={50}>
            <Row left={20} right={20}><Header5 sx={{fontWeight:800, fontSize:"25px", textTransform:"uppercase", color:"rgb(27,27,27)", textAlign:"center"}}>Why is it absolutely risk-FREE?</Header5></Row>
            <Row top={40} center><img src="/images/money_back.png" width="35%" style={{objectFit:"contain"}}></img></Row>
            <Row top={30} left={20} right={20}><Body1 sx={{color:"rgb(27,27,27)", fontSize:"20px"}}>If for any reason you are not entirely satisfied with our work, just shoot us a quick email in 48 hours, and we'll give back your money. No questions asked.</Body1></Row>
            <Row top={20} left={20} right={20}><Body1 sx={{color:"rgb(27,27,27)", fontSize:"20px"}}>We want to build a long term relationship with our customers, and we can't do that with a weak foundation.</Body1></Row>
            <Row top={20} left={20} right={20}><Body1 sx={{color:"rgb(27,27,27)", fontSize:"20px"}}>Simply click the button below to get a prefect auto detailing service.</Body1></Row>
            <Row top={50} left={20} right={20}>
              <Button variant='contained' fullWidth sx={{borderRadius:"30px", color:"white", height:"60px", fontWeight:400, fontSize:"16px"}} onClick={handleBook(6)}>BOOK NOW</Button>
            </Row>
            <FormDialog open={book_forms[_.findIndex(book_forms, (x) => {return x.id === 6})].open} id={6}></FormDialog>
          </Column>
        </Column>
        <Column width="100%" color="rgb(27,27,27)" center>
          <Column width={lt.bunch4} top={50} bottom={50}>
            <Row top={0} left={20} right={20} center><Body1 sx={{textAlign:"center", width:"100%"}}>&copy;&nbsp;2023 HappyDetailing, NY, USA</Body1></Row>
            <Row top={10} left={20} right={20} center><Button sx={{height:25}}>Privacy Policy</Button></Row>
            <Row top={3} left={20} right={20} center><Button sx={{height:25}}>Terms of Use</Button></Row>  
            <Row top={10} left={20} right={20} center><Body1 sx={{textAlign:"center", width:"100%"}}>4256 Ave X, Brooklyn, NY, 11235</Body1></Row>   
            <Row top={10} left={20} right={20} center>
              <Body1 sx={{textAlign:"center", width:"100%"}}>(111) 555 7777</Body1>
            </Row>     
          </Column>
        </Column>
      </ContentContainer>
    </ThemeProvider>
  );
}


function OurService() {
  const dispatch = useDispatch();
  const stateObj = useSelector((state) => state.mainState);
  const lt = stateObj.lt;

  return(
    <Column width="100%" color="rgb(27,27,27)" center>
      <Column width={lt.bunch4} top={50} bottom={50}>
        <Row left={20} right={20} center><Header5 sx={{fontWeight:800, fontSize:25, textTransform:"uppercase", textAlign:"center"}}>What we do</Header5></Row>
        <Row left={20} right={20} top={50}><img src="/images/detailing1.png" style={{width:"calc(100%)"}}></img></Row>
        <Row left={20} right={20} top={20}>
          <Body1 sx={{color:"rgb(180,180,180)", fontSize:"20px"}}>Detailing is a way of car care with the use of expensive materials. A team of professionals will return your car to its factory gloss and freshen up all outdated elements.</Body1>
        </Row>
        <Row left={20} right={20} top={20}><img src="/images/detailing2.png" style={{width:"calc(100%)"}}></img></Row>
        <Row left={20} right={20} top={20}><img src="/images/detailing3.png" style={{width:"calc(100%)"}}></img></Row>
        <Row left={20} right={20} top={20}><img src="/images/detailing4.png" style={{width:"calc(100%)"}}></img></Row>
        <Row left={20} right={20} top={20}><img src="/images/detailing5.png" style={{width:"calc(100%)"}}></img></Row>
      </Column>
      </Column>
  )
}

function FormDialog(props) {
  const dispatch = useDispatch();
  const stateObj = useSelector((state) => state.mainState);
  const id = props.id;
  /*const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };*/

  const handleClose = (value) => async () => {
    dispatch(bookForm(id, false));
    if (value !== 0) { 
      const response = await axios.post("https://example123.com/detailing_api.php", {command:"book_appointment", name:"name", phone:"phone"});
    }
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose(0)}>
        <DialogTitle>
          <Row top={10} center>
            <Row><img src='/images/logo_dark.png' width={40}></img></Row>
            <Row left={10}><Header6 sx={{color:"#0095da"}}>HappyDetailing</Header6></Row>
          </Row>
        </DialogTitle>
        <DialogContent>
          <Column>
            <Row><Header5 sx={{color:"rgb(27,27,27)"}}>Request an appointment</Header5></Row>
            <Row top={30}><Subtitle1 sx={{color:"rgb(27,27,27)"}}>Contact name:</Subtitle1></Row>
          </Column>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose(1)}>Next</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const dateWithTimeZone = (timeZone, year, month, day, hour, minute, second) => {
  let date = new Date(Date.UTC(year, month, day, hour, minute, second));

  let utcDate = new Date(date.toLocaleString('en-US', { timeZone: "UTC" }));
  let tzDate = new Date(date.toLocaleString('en-US', { timeZone: timeZone }));
  let offset = utcDate.getTime() - tzDate.getTime();

  date.setTime( date.getTime() + offset );

  return date;
};

export default App;
