document.addEventListener("DOMContentLoaded", function () {
  const els = document.querySelectorAll(".animate-title");
  const cb = function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const ta = new TextAnimation(entry.target);
        ta.animate();
        // 監視を止めたい場合
        observer.unobserve(entry.target);
      } else {
      }
    });
    // alert('inter');
  };
  const options = {
    root: null,
    rootMargin: "0px", //0でも必ずpxを付けること
    thredhold: 0,
  };

  const io = new IntersectionObserver(cb, options);
  els.forEach((el) => {
    io.observe(el);
  });
});

// text-animation.jsに以下のコードをカット＆ペースト
// してファイル分割。
// class TextAnimation {
//     constructor(el) {
//         this.DOM = {};
//         this.DOM.el = document.querySelector(el);
//         this.chars = this.DOM.el.innerHTML.trim().split("");
//         this.DOM.el.innerHTML = this._splitText();
//     }
//     _splitText() {
//         return this.chars.reduce((acc, curr) => {
//             curr = curr.replace(/\s+/, '&nbsp;');
//             return `${acc}<span class="char">${curr}</span>`;
//         }, "");
//     }
//     animate() {
//         this.DOM.el.classList.toggle('inview');
//     }
//   }
//   class TweenTextAnimation extends TextAnimation {
//     constructor(el) {
//         super(el);
//         this.DOM.chars = this.DOM.el.querySelectorAll('.char');
//     }

//     animate() {
//         this.DOM.el.classList.add('inview');
//         this.DOM.chars.forEach((c, i) => {
//             TweenMax.to(c, .6, {
//                 ease: Back.easeOut,
//                 delay: i * .05,
//                 startAt: { y: '-50%', opacity: 0},
//                 y: '0%',
//                 opacity: 1
//             });
//         });
//     }
//   }
