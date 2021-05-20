export default class Elmt {
  constructor(tagName, props = {}) {
    this.tagName = tagName;
    this.props = props;

    const element = document.createElement(this.tagName);
    for (const key in this.props) {
      element[key] = this.props[key];
    }
    return element;
  }
}