import './nav.css';

import render from './nav.art';
import { getData, getDelayedData } from 'api/getData';
import { URL, LAYOUT_ID } from './config';

// https://www.imooc.com/api/mall-wepApp/index/nav
getData(URL).then(data => {
  document.getElementById(LAYOUT_ID).innerHTML = render({
    items: data
  });
});

// JSON Viewer
// [{url, text},{}]
