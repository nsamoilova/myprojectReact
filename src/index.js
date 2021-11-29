console.log('work');
import  {sum, divideArr, currCon} from "./helpers/math";
import './style/default.scss';
import ReactDom from 'react-dom';
import React from 'react';
import App from './components/App';
import { BrowserRouter} from 'react-router-dom'

const element = document.querySelector('#root');

ReactDom.render(
<BrowserRouter>
  <App />
</BrowserRouter>,

element)
