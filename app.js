AOS.init();
// bar
const navitems = document.querySelector(".nav-items")
const Phonelinks = document.querySelector(".Phonelinks")
const icon = document.querySelector(".toggle")

// const slider = document.querySelector('.slider');
const sliderFront = document.querySelectorAll('.sliderFront');
// const sliderBack = document.querySelectorAll('.sliderBack');

const movielist = document.querySelectorAll('.container');
const first = document.querySelector(".first")
const second = document.querySelector(".second")
const third = document.querySelector(".third")
const fourth = document.querySelector(".fourth")



icon.addEventListener("click", animator)

function animator() {
  var state = Phonelinks.style.transform;

    if (state == "translateX(150px)") {
      Phonelinks.style.transform = "translateX(0px)"
      Phonelinks.style.transition = "0.5s all ease-in-out"

    } else {
      Phonelinks.style.transform = "translateX(150px)"
    }
  }
console.log(innerWidth)

sliderFront.forEach((arrow, i) => {
  const itemNum = movielist[i].querySelectorAll("img").length;
  let counter = 0;
  arrow.addEventListener("click", () => {
    counter++;
    if (itemNum - (4 + counter) >= 0) {
      movielist[i].style.transform = `translateX(${movielist[i].computedStyleMap().get("transform")[0].x.value - 305}px)`;
    } else {
      movielist[i].style.transform = "translateX(0)"
      counter = 0;
    }

    //1
    if (movielist[i].style.transform != "translateX(0)") {
      first.style.color = "black"
    }
    if (movielist[i].style.transform == "translateX(0)") {
      first.style.color = "skyblue"
    }
    if (counter == 0) {
      first.style.color = "skyblue"
    }

    //2
    if (movielist[i].style.transform != "translateX(-340px)") {
      second.style.color = "black"
    }
    if (movielist[i].style.transform == "translateX(-340px)") {
      second.style.color = "skyblue"
    }
    if (counter == 1) {
      second.style.color = "skyblue"
    }

    //3
    if (movielist[i].style.transform != "translateX(-680px)") {
      third.style.color = "black"
    }
    if (movielist[i].style.transform == "translateX(-680px)") {
      third.style.color = "skyblue"
    }
    if (counter == 2) {
      third.style.color = "skyblue"
    }

    //4
    if (movielist[i].style.transform != "translateX(-1020px)") {
      fourth.style.color = "black"
    }
    if (movielist[i].style.transform == "translateX(-1020px)") {
      fourth.style.color = "skyblue"
    }
    if (counter == 3) {
      fourth.style.color = "skyblue"
    }
  })

  //1
  if (counter == 0) {
    first.style.color = "skyblue"
  }
  first.addEventListener("click", () => {
    movielist[i].style.transform = "translateX(0)"
    second.style.color = "black"
    first.style.color = "skyblue"
    third.style.color = "black"
    fourth.style.color = "black"
    counter = 0
  })
  console.log(counter)

  //2
  if (counter == 1) {
    second.style.color = "skyblue"
  }
  second.addEventListener("click", () => {
    movielist[i].style.transform = "translateX(-340px)"
    second.style.color = "skyblue"
    first.style.color = "black"
    third.style.color = "black"
    fourth.style.color = "black"
    counter = 1
  })

  //3
  if (counter == 2) {
    third.style.color = "skyblue"
  }
  third.addEventListener("click", () => {
    movielist[i].style.transform = "translateX(-680px)"
    second.style.color = "black"
    first.style.color = "black"
    third.style.color = "skyblue"
    fourth.style.color = "black"
    counter = 2
  })

  //4
  if (counter == 3) {
    fourth.style.color = "skyblue"
  }
  fourth.addEventListener("click", () => {
    movielist[i].style.transform = "translateX(-1020px)"
    second.style.color = "black"
    first.style.color = "black"
    third.style.color = "black"
    fourth.style.color = "skyblue"
    counter = 3;
  })
});

// AOS

// sliderFront.forEach((arrow, i)=>{
//   const itemNum = movielist[i].querySelectorAll("img").length;
//   let counter = 0;
// )
// });


















