import { style } from '@vanilla-extract/css';
import { reactor7 } from './../../../App.css';

export const classicalFF = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  border: 'solid 1px #e7dfe7',
  boxShadow: `1px 1px #e7dfe7,
    -1px -1px #e7dfe7,
    1px -1px #e7dfe7,
    -1px 1px #e7dfe7,
    0 -2px #9c9a9c,
    -2px 0 #7b757b,
    0 2px #424542`,
  background: 'linear-gradient(to bottom,  #04009d 0%,#06004d 100%)',
  fontFamily: reactor7,
  fontSize: 36,
  padding: '1rem',
  borderRadius: 7,

  color: '#eff1ff',
  textShadow: '2px 2px #212421, 1px 1px #212021',
});

export const themesList = style({
  display: 'flex',
  gap: '36px',
  listStyleType: 'none',
});
