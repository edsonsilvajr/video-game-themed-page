import { fontFace, style, globalStyle } from '@vanilla-extract/css';

export const reactor7 = fontFace({
  src: 'url("src/fonts/Reactor7.ttf")',
});

export const container = style({
  background: 'black',
});
export const section = style({
  height: 'calc(100vh - 65px)',
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
  marginTop: 65,

  fontSize: 36,
  padding: '1rem',
  borderRadius: 7,

  color: '#eff1ff',
  textShadow: '2px 2px #212421, 1px 1px #212021',
});

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});
