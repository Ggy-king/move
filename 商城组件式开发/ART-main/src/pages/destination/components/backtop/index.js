import Backtop from 'components/backtop';

const backtopEl = document.querySelector('.backtop');
const scrollContainer = document.getElementById('destination-content');

new Backtop(backtopEl, scrollContainer.offsetHeight, scrollContainer);
