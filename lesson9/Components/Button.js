export default class Button {
  title;

  constructor(title) {
    this.title = title;
  }

  render() {
    return `<button type="button" class="filter-btn" data-filter="${this.title}">${this.title}</button>`;
  }
}
