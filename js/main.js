const elFeatureList = document.querySelector(".feature");
elArr = [];

movies.forEach((el) => {
  let elItem = document.createElement("li");
  elItem.className = "collection__item col-3";
  elItem.innerHTML = `
    <div class="collection__item-padding">
      <div class="collection__img-holder">
        <img class="featured-img" src="${el.youtubePosterMax}" alt="movie">
        <div class="collection__heart-holder">
          <span class="collection__type">
            MORE
          </span>
          <span class="collection__heart">
            <i class='bx bxs-heart'></i>
          </span>
        </div>
      </div>
      <div class="collection__info">
        <div class="collection__year">
          ${el.language},
        <span class="collection__year-num">
          ${el.year}
        </span>
      </div>
      <h2 class="collection__title">
        ${el.title}
      </h2>
      <div class="collection__rate-holder">
        <div class="collection__imdb d-flex justify-content-between align-items-center">
          <div class="collection__imdb-container d-flex align-items-center">
            <a target="_blank" href="#">
              <img src="https://picsum.photos/20/40" alt="imdb">
            </a>
            <span class="collection__imdb-rate">
              86.0 / 100
            </span>
          </div>
          <div class="collection__rate d-flex align-items-center">
            <img src="https://picsum.photos/20/20" alt="tomato">
              <span class="collection__rate-num">
                ${el.imdbRating}
              </span>
            </div>
          </div>
        </div>
      <div class="collection__category">
        ${el.categories.join(", ")}
      </div>
  </div>
</div>
  `;

  elArr.push(elItem);
});

showIt();

function showIt() {
  elFeatureList.innerHTML = "";
  elArr.forEach((el) => {
    elFeatureList.appendChild(el);
  });
}

let elPrev = document.querySelector(".prev-btn");
let elNext = document.querySelector(".next-btn");

idx = 0;
elNext.addEventListener("click", () => {
  elArr[elArr.length] = elArr[idx];
  idx++;
  showIt();
});


elPrev.addEventListener("click", () => {
  let elCorrect = [];
  elCorrect.push(elArr[elArr.length - 1]);

  for(let i = 0; i < elArr.length - 1; i++){
    elCorrect.push(elArr[i]);
  }
  elArr = elCorrect;

  showIt();
});
