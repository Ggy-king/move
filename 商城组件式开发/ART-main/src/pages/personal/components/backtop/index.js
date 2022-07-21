import Backtop from 'components/backtop';

const scrollContainer = document.getElementById('index-page');
const backtopEl = scrollContainer.querySelector('.backtop');

new Backtop(backtopEl, window.innerHeight, scrollContainer);
