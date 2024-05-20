let carouselIndex = 1;
showCarousel(carouselIndex);

function nextImage(n) {
  showCarousel(carouselIndex += n);
}

function currentImage(n) {
  showCarousel(carouselIndex = n);
}

function showCarousel(n) {
  let i;
  let carousel = document.getElementsByClassName("carousel-item");
  let dots = document.getElementsByClassName("dot");

  if (n < 1) { carouselIndex = carousel.length }

  if (n > carousel.length) { carouselIndex = 1 }

  for (i = 0; i < carousel.length; i++) {
    carousel[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  carousel[carouselIndex - 1].style.display = "block";
  dots[carouselIndex - 1].className += " active";
}