var ulElement = $("#parent").find("ul");
      ulElement.css("background-color", "lightblue");

      // Using next() to select the next sibling element after the <h2> element
      var nextSibling = $("#parent h2").next();
      nextSibling.css("font-style", "italic");


// Slider JS
let currentSlideIndex = 1;
    showSlide(currentSlideIndex);

    function changeSlide(n) {
      showSlide(currentSlideIndex += n);
    }

    function currentSlide(n) {
      showSlide(currentSlideIndex = n);
    }

    function showSlide(n) {
      const slides = document.getElementsByClassName("slide");
      const dots = document.getElementsByClassName("dot");

      if (n > slides.length) {
        currentSlideIndex = 1;
      }

      if (n < 1) {
        currentSlideIndex = slides.length;
      }

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }

      slides[currentSlideIndex - 1].style.display = "block";
      dots[currentSlideIndex - 1].classList.add("active");
    }
// Slider JS end