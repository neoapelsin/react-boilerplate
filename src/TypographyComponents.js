import styled from "@emotion/styled/macro";
import Button from '@mui/material/Button';
import { Color } from './flatColors';
import { Typography } from '@mui/material';

export const A = styled('a')`
  text-decoration:none;
  color:#333;
  &:hover {
    text-decoration:none;
    color: #4db2ec;
    cursor:pointer;
  }
  &:focus {
    text-decoration:none;
    color: #4db2ec;
  }
  &:active {
    text-decoration:none;
    color: #4db2ec;
  }
`;

export const Img = styled('img')`
  width:100%;
  height:100%;
`;

export const FormTitle = styled('h1')`
font-size:16px;
font-weight:600;
color:#000;
padding: 0px 0px;
`;

export const FormSubTitle = styled('h2')`
font-size:12px;
font-weight:500;
color:#333;
padding: 0px 0px;
`;

export const FormText = styled('p')`
font-size:12px;
font-weight:400;
color:#000;
padding: 0px 0px;
`;

export const FormButton = styled(Button)`
padding:0px 15px;
height: 30px;
line-height: 24px;
color: #6abdd2;
font-size: 14px;
font-weight: 600;
text-transform: uppercase;
border: 3px solid #6abdd2;
border-radius: 15px;
&:hover {
  background-color:#6abdd2;
  color:#fff;
}
`;

export const Header1 = (props)=>{
  return(
    <Typography variant='h1' component='div' {...props}>{props.children}</Typography>
  );
}

export const Header2 = (props)=>{
  return(
    <Typography variant='h2' component='div' {...props}>{props.children}</Typography>
  );
}

export const Header3 = (props)=>{
  return(
    <Typography variant='h3' component='div' {...props}>{props.children}</Typography>
  );
}

export const Header4 = (props)=>{
  return(
    <Typography variant='h4' component='div' {...props}>{props.children}</Typography>
  );
}

export const Header5 = (props)=>{
  return(
    <Typography variant='h5' component='div' {...props}>{props.children}</Typography>
  );
}

export const Header6 = (props)=>{
  return(
    <Typography variant='h6' component='div' {...props}>{props.children}</Typography>
  );
}

export const Subtitle1 = (props)=>{
  return(
    <Typography variant='subtitle1' component='div' {...props}>{props.children}</Typography>
  );
}

export const Subtitle2 = (props)=>{
  return(
    <Typography component='div' variant='subtitle2' {...props}>{props.children}</Typography>
  );
}

export const Body1 = (props)=>{
  return(
    <Typography variant='body1' component='div' {...props}>{props.children}</Typography>
  );
}

export const Body2 = (props)=>{
  return(
    <Typography variant='body2' component='div' {...props}>{props.children}</Typography>
  );
}

export const ButtonText = (props)=>{
  return(
    <Typography variant='button' {...props}>{props.children}</Typography>
  );
}

export const Caption = (props)=>{
  return(
    <Typography variant='caption' component='div' {...props}>{props.children}</Typography>
  );
}

export const Overline = (props)=>{
  return(
    <Typography variant='overline' component='div' {...props}>{props.children}</Typography>  );
}