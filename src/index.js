console.log('work');
import  {sum, divideArr, currCon} from "./helpers/math";
import './style/default.scss';
import ReactDom from 'react-dom';
import React from 'react';
import App from './components/App'

const element = document.querySelector('#root');

ReactDom.render(<App />, element);
