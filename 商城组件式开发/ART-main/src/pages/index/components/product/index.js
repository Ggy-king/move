import './product.css';

// https://www.imooc.com/api/mall-wepApp/index/product?icode=J6DDC8E3E7A8BF54C

// [{id,url,title,price},{}]

import { getData, getDelayedData } from 'api/getData';
import render from './items.art';
import { URL, LAYOUT_ID } from './config';

getData(URL).then(data => {
  document.getElementById(LAYOUT_ID).innerHTML = render({
    items: data
  });
});
