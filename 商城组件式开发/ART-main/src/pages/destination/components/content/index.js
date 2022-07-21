import './content.css';
import render from './content.art';
import renderLoading from 'components/loading/loading.art';

class Content {
  constructor(el) {
    this.el = el;
  }

  set(data) {
    this.el.innerHTML = render({
      contents: data
    });
  }

  setLoading() {
    this.el.innerHTML = renderLoading();
  }
}

export default Content;
