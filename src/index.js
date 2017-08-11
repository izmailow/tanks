import React from 'react';
import ReactDOM from 'react-dom';
import { Page } from './containers';
import registerServiceWorker from './registerServiceWorker';

import { Socket } from 'react-socket-io';

const uri = 'http://localhost:3001';
const options = { transports: ['websocket'] };

ReactDOM.render(
    <Socket uri={uri} options={options}> 
        <Page />
    </Socket>, document.getElementById('root'));
registerServiceWorker();
