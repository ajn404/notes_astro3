document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      console.log("当前页面不可见");
    } else {
      console.log("当前页面可见");
    }
  });

  // window.onblur = function () {
  //     console.log('blur,当前页面不可见');

  // }

  // window.onfocus = function () {
  //     console.log('focus','当前页面可见');
  // }

  // console.log(111);
  // setInterval(() => {
  //     requestAnimationFrame(() => {
  //         console.log('当前页面可见');
  //     })
  // },1000)
});
