const child = document.querySelector('.child');
const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      console.log('inview');
      entry.target.classList.add('inview');
      
      // 監視を止めたい場合
      // observer.unobserve(entry.target);
    } else {
      console.log('out view');
      entry.target.classList.remove('inview');
    } 
  });
  // alert('inter');
}
const options = {
  root: null,
  rootMargin: "-300px 0px 0px 0px", //0でも必ずpxを付けること
  thredhold: [0, 0.5, 0],
};


const io = new IntersectionObserver(cb, options);
io.observe(child);