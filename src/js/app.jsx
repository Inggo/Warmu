import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Warmu from './components/Warmu';

injectTapEventPlugin();

ReactDOM.render(<Warmu />, document.getElementById('warmu'));
