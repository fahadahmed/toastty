import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './pages/routes';
import { config } from 'dotenv';

config();

ReactDOM.render(<Routes />, document.querySelector('#root'));
