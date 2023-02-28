import { fontFace, style, globalStyle } from '@vanilla-extract/css';

export const reactor7 = fontFace({
  src: 'url("src/fonts/Reactor7.ttf")',
});

export const container = style({
  padding: 10,
});

globalStyle('body', {
  margin: 0,
  padding: 0,
});
