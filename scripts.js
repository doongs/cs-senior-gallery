let results;
function createCard(index) {
  let student = results[index];
  let eid = student.eid;
  let name = student.name;
  let top = student.minors;
  let bottom = student.roles;
  let card = document.createElement("div");
  card.classList.add("col-md-4", "pb-4");

  let body = ``;

  if (student.minors != "") {
    top = `Minors: ${student.minors}`;
    bottom = `${student.roles}`;
  } else {
    top = `${student.roles}`;
    bottom = "";
  }

  let cardInner1 = `<div class="pb-4 h-100">
  <div class="card h-100 mb-4 box-shadow unseen aos-init aos-animate" data-aos="zoom-in" id="${eid}">
    <!--Carousel Begin-->
    <div id="carousel-${eid}" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
      <ol class="carousel-indicators">
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img class="card-img-top" src="resources/photos/${eid}1.jpg" alt="${name}1">
        </div>
      </div>
    </div>
    <!--Carousel End-->
    <div class="card-body d-flex flex-column justify-content-around">
  <h4>${name}</h4>
  <small class="text-muted pt-1 pb-1">${top}</small>
  <small class="text-muted pt-1 pb-1">${bottom}</small>
  <a class="" data-toggle="modal" data-target="#answer-modal">
    <button class="btn-purple btn w-50 mt-3" onclick="setModalText(${index})">More</button>
  </a>
</div>
</div>
</div>
`;

  let cardInner2 = `<div class="pb-4 h-100">
  <div class="card h-100 mb-4 box-shadow unseen aos-init aos-animate" data-aos="zoom-in" id="${eid}">
    <!--Carousel Begin-->
    <div id="carousel-${eid}" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
      <ol class="carousel-indicators">
        <li data-target="#carousel-${eid}" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-${eid}" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img class="card-img-top" src="resources/photos/${eid}1.jpg" alt="${name}1">
        </div>
        <div class="carousel-item">
          <img class="card-img-top" src="resources/photos/${eid}2.jpg" alt="${name}2">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carousel-${eid}" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carousel-${eid}" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!--Carousel End-->
    <div class="card-body d-flex flex-column justify-content-around">
  <h4>${name}</h4>
  <small class="text-muted pt-1 pb-1">${top}</small>
  <small class="text-muted pt-1 pb-1">${bottom}</small>
  <a class="" data-toggle="modal" data-target="#answer-modal">
    <button class="btn-purple btn w-50 mt-3" onclick="setModalText(${index})">More</button>
  </a>
</div>
</div>
</div>
`;

  let cardInner3 = `<div class="pb-4 h-100">
    <div class="card h-100 mb-4 box-shadow unseen aos-init aos-animate" data-aos="zoom-in"  id="${eid}">
      <!--Carousel Begin-->
      <div id="carousel-${eid}" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
        <ol class="carousel-indicators">
          <li data-target="#carousel-${eid}" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-${eid}" data-slide-to="1"></li>
          <li data-target="#carousel-${eid}" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img class="card-img-top" src="resources/photos/${eid}1.jpg" alt="${name}1">
          </div>
          <div class="carousel-item">
            <img class="card-img-top" src="resources/photos/${eid}2.jpg" alt="${name}2">
          </div>
          <div class="carousel-item">
            <img class="card-img-top" src="resources/photos/${eid}3.jpg" alt="${name}3">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carousel-${eid}" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel-${eid}" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <!--Carousel End-->
      <div class="card-body d-flex flex-column justify-content-around">
      <h4>${name}</h4>
      <small class="text-muted pt-1 pb-1">${top}</small>
      <small class="text-muted pt-1 pb-1">${bottom}</small>
      <a  class="" data-toggle="modal" data-target="#answer-modal">
        <button class="btn-purple btn w-50 mt-3" onclick="setModalText(${index})">More</button>
      </a>
    </div>
    </div>
    </div>
      `;

  if (doesFileExist(`resources/photos/${eid}2.jpg`)) {
    card.innerHTML = cardInner2;
  } else {
    if (doesFileExist(`resources/photos/${eid}3.jpg`)) {
      card.innerHTML = cardInner3;
    } else {
      card.innerHTML = cardInner1;
    }
  }
  return card;
}

function setModalText(index) {
  let student = results[index];
  document.querySelector("#studentName").textContent = student.name;
  if (student.advice == "") {
    document.querySelector("#advice-header").style.display = "none";
    document.querySelector("#advice").textContent = student.advice;
  } else {
    document.querySelector("#advice-header").style.display = "inline";
    document.querySelector("#advice").textContent = student.advice;
  }
  if (student.memories == "") {
    document.querySelector("#memories-header").style.display = "none";
    document.querySelector("#memories").textContent = student.memories;
  } else {
    document.querySelector("#memories-header").style.display = "inline";
    document.querySelector("#memories").textContent = student.memories;
  }
  if (student.plans == "") {
    document.querySelector("#plans-header").style.display = "none";
    document.querySelector("#plans").textContent = student.plans;
  } else {
    document.querySelector("#plans-header").style.display = "inline";
    document.querySelector("#plans").textContent = student.plans;
  }
  if (student.extra == "") {
    document.querySelector("#extra-header").style.display = "none";
    document.querySelector("#extra").textContent = student.extra;
  } else {
    document.querySelector("#extra-header").style.display = "inline";
    document.querySelector("#extra").textContent = student.extra;
  }
  $("#studentModal").modal("show");
}

function doesFileExist(variable) {
  var image = new Image();
  image.src = variable;
  if (image.width == 0) {
    return false;
  } else {
    return true;
  }
}

(function () {
  fetch("responses.json")
    .then((response) => response.json())
    .then((data) => processResults(data.responses));
})();

function processResults(res) {
  results = res;
  results.sort((a, b) => {
    let fa = a.eid.toLowerCase(),
      fb = b.eid.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  let cards = document.querySelector("#cards");

  for (let i = 0; i < Math.ceil(results.length / 3); i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    row.id = `row${i}`;
    cards.appendChild(row);
  }

  let counter = -1;
  for (let i = 0; i < results.length; i++) {
    if (i % 3 == 0) {
      counter++;
    }
    document.querySelector(`#row${counter}`).appendChild(createCard(i));
  }
  $(".carousel").carousel();
}
