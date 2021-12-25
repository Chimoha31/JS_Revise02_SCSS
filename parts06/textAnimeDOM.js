document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".animate-title");
  // 余分な空白をtrim()で消す
  const str = el.innerHTML.trim().split("");

  // let concatStr = "";
  // for文の場合
  // for(let c of str) {
  //   // PLAYの後の空白は、詰められるのでUIでは空白がないので、 &nbsp;で空白を作る。
  //   c = c.replace(' ', '&nbsp;');
  //   concatStr += `<span class="char">${c}</span>`;
  // }


  // reduceの場合は配列に直さないといけないので、trim()の後にsplit(””)を記載。
  el.innerHTML = str.reduce((accu, curr) => {
    curr = curr.replace(" ", "&nbsp;");
    return `${accu}<span class="char">${curr}</span>`;
  }, "");
});

