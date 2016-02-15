require('./main.less');

import React from 'react';
import ReactDom from 'react-dom';
// import Index from './pages/Index.jsx';
// import AreaChartExtent from './components/AreaChartExtent.jsx';
import BarChartExtent from './components/BarChartExtent.jsx';
// import EnhancedInput from './components/EnhancedInput.jsx';

ReactDom.render((
    <BarChartExtent/>
), document.querySelector('#container'));