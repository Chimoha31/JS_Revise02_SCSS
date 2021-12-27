document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector('#btn');
  const ta = new TextAnimation('.animate-title');
  const ta2 = new TextAnimation('.animate-title-2');
  btn.addEventListener('click', () => {
      ta.animate();
      ta2.animate();
    });
});

class TextAnimation {
  constructor(el) {
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split("");
    this.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((accu, curr) => {
      curr = curr.replace(" ", "&nbsp;");
      return `${accu}<span class="char">${curr}</span>`;
    }, "");
  }
  animate() {
      this.el.classList.toggle('inview');
  }
}
