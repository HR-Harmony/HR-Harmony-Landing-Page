export default function initParallax() {
  document.addEventListener('scroll', function () {
    const title = document.querySelector('.title');
    const fluidleft = document.querySelector('.fluidleft');
    const fluidright = document.querySelector('.fluidright');
    const fluidbottom2 = document.querySelector('.fluidbottom2');
    const fluid1 = document.querySelector('.fluid1');
    const mount2 = document.querySelector('.mount2');

    let value = window.scrollY
    console.log(value)

    if (title) {
      title.style.marginTop = window.scrollY * 1.1 + 'px';
    }

    if (fluidleft) {
      fluidleft.style.marginLeft = -window.scrollY + 'px';
    }

    if (fluidright) {
      fluidright.style.marginLeft = window.scrollY + 'px';
    }

    if (fluidbottom2) {
      fluidbottom2.style.marginBottom = -window.scrollY + 'px';
    }

    if (fluid1) {
      fluid1.style.marginBottom = -window.scrollY * 1.1 + 'px';
    }
  });
}
