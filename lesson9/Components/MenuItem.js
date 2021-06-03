export default class MenuItem {
  id;
  title;
  price;
  category;
  img;
  desc;

  constructor({ id, title, price, category, img, desc }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.desc = desc;
    this.category = category;
    this.img = img;
  }

  render() {
    return `
    <article class="menu-item">
    <img
      src="${this.img}"
      alt="${this.title}"
      width="400"
      height="250"
      class="photo"
    />
    <div class="menu-item-content">
      <div class="title">
        <h2>${this.title}</h2>
        <div class="price">$${this.price}</div>
      </div>
      <p>${this.desc}</p>
    </div>
  </article>`;
  }
}
