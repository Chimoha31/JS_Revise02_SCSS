document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("#btn");
  const ta = new TextAnimation(".animate-title");
  const ta2 = new TextAnimation(".animate-title-2");
  btn.addEventListener("click", () => {
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
    this.el.classList.toggle("inview");
  }
}

class TextAnimation2 extends TextAnimation {
  constructor(el) {
    super(el);
  }
  // _splitText() {
  //   return this.chars.reduce((accu, curr) => {
  //     curr = curr.replace(" ", "&nbsp;");
  //     return `${accu}<span class="char">${curr}</span>`;
  //   }, "");
  // }

  // 内容書き換える場合(override)
  animate() {
    this.el.classList.toggle("inview");
  }
}

// // About class
// const obj = {
//   first_name: 'Chiho',
//   last_name: 'Maekawa',
//   printFullName: function() {
//     console.log('hello');
//   }
// }

// class MyObj {
//   constructor() {
//     this.first_name = "Teddy";
//     this.last_name= "Sanghera";
//   }
//   printFullName() {
//     console.log('hello2');
//   }
// }

// const obj2 = new MyObj();

// obj.printFullName();
// obj2.printFullName();

// // thisとbind
// const obj3 = {
//   first_name: 'Hana',
//   last_name: 'Maekawa',
//   printFullName: function() {
//     console.log(this);
//     const _that = this;

//     window.setTimeout(function() {
//       console.log(this);
//     }.bind(this));
//   }
// }

// obj3.printFullName();
