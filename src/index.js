import React from 'react';
import ReactDOM from 'react-dom';

function Gif({ id }) {
  const src = `https://media.giphy.com/media/${id}/giphy.gif`;
  return <img src={src} alt="" />;
}

const app = <Gif id="33OrjzUFwkwEg" />;

const root = document.getElementById('root');
ReactDOM.render(app,root);
