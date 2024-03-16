const itemsData = {
  lengthObj : 7,
  item1 : {
    name : 'bamboo-watch',
    img : './images/bamboo-watch.jpg'
  }, 
  item2 : {
    name : 'black-watch',
    img : './images/black-watch.jpg'
  },
  item3 : {
    name : 'blue-band',
    img : './images/blue-band.jpg'
  },
  item4 : {
    name : 'blue-t-shirt',
    img : './images/blue-t-shirt.jpg'
  },
  item5 : {
    name : 'bracelet',
    img : './images/bracelet.jpg'
  },
  item6 : {
    name : 'brown-purse',
    img : './images/brown-purse.jpg'
  },
  item7 : {
    name : 'game-controller',
    img : './images/game-controller.jpg'
  }
}

function createControl(itemsData){
  const leftSide =
  `<div class="contener contener-available">
    <div class="contener__buttons">
      <ul class="buttons__items">
          <button class="buttons-item button-up-a">
            <img src="./icons/up.svg" alt="Up to 1 step" class="button-img img-up">
          </button>
          <button class="buttons-item button-doubUp-a">
            <img src="./icons/doubleUp.svg" alt="Up to first position" class="button-img img-dobUp">
          </button>
          <button class="buttons-item button-doubDown-a">
            <img src="./icons/doubleDown.svg" alt="Down to last position" class="button-img img-dobDwn">
          </button>
          <button class="buttons-item button-down-a" >
            <img src="./icons/down.svg" alt="Down to 1 step" class="button-img img-dwn">
          </button>
      </ul>
    </div>
    <div class="contener__block">
      <h1 class="block__header">Available</h1>
      <hr/>
      <div class="block__search">
        <input type="text" placeholder="Search item" class="search-input">
      </div>
      <hr/>
      <div class="contener_block__items">
        <ul class="block__items"></ul>
      </div>
    </div>
  </div>`;

  const centerSide = 
    `<div class="contener contener-centerButtons">
      <nav>
        <ul class="buttons__items">
          <button class="buttons-item button-left">
              <img src="./icons/left.svg" alt="Transfer from Select to Avaliable 1 item" class="button-img img-left">
            </button>
            <button class="buttons-item button-doubLeft">
              <img src="./icons/doubleLeft.svg" alt="Transfer from Select to Avaliable all items" class="button-img img-dobLeft">
            </button>
            <button class="buttons-item button-doubRight">
              <img src="./icons/doubleRight.svg" alt="Transfer from Avaliable to Select all items" class="button-img img-dobRight">
            </button>
            <button class="buttons-item button-right">
              <img src="./icons/right.svg" alt="Transfer from Avaliable to Select 1 item" class="button-img img-right">
            </button>
        </ul>
      </nav>
    </div>`;

  const rigthSide =
    `<div class="contener contener-selected">
      <div class="contener__block">
        <h1 class="block__header">Selected</h1>
        <hr/>
        <div class="block__search">
          <input type="text" placeholder="Search item" class="search-input">
        </div>
        <hr/>
        <div class="contener_block__items">
          <ul class="block__items"></ul>
        </div>
      </div>
      <div class="contener__buttons">
        <ul class="buttons__items">
            <button class="buttons-item button-up-s">
            <img src="./icons/up.svg" alt="Up to 1 step" class="button-img img-up">
            </button>
            <button class="buttons-item button-doubUp-s">
              <img src="./icons/doubleUp.svg" alt="Up to first position" class="button-img img-dobUp">
            </button>
            <button class="buttons-item button-doubDown-s">
              <img src="./icons/doubleDown.svg" alt="Down to last position" class="button-img img-dobDwn">
            </button>
            <button class="buttons-item button-down-s" >
              <img src="./icons/down.svg" alt="Down to 1 step" class="button-img img-dwn">
            </button>
        </ul>
      </div>
    </div>`;

  const wrapper = document.querySelector('.control__wrapper');
  wrapper.innerHTML = leftSide + centerSide + rigthSide;

  const contenerAvaliable = [];
  const contenerSelect = [];

  const buttonUpAv = document.querySelector('.button-up-a');
  const buttonDubleUpAv = document.querySelector('.button-doubUp-a');
  const buttonDownAv = document.querySelector('.button-down-a');
  const buttonDubleDownAv = document.querySelector('.button-doubDown-a');
  buttonUpAv.addEventListener('click', upQueue);
  buttonDubleUpAv.addEventListener('click', upQueueToFirst);
  buttonDownAv.addEventListener('click', downQueue);
  buttonDubleDownAv.addEventListener('click', downQueueToFirst);

  const buttonUpSe = document.querySelector('.button-up-s');
  const buttonDubleUpSe = document.querySelector('.button-doubUp-s');
  const buttonDownSe = document.querySelector('.button-down-s');
  const buttonDubleDownSe = document.querySelector('.button-doubDown-s');

  const buttonLeft = document.querySelector('.button-left');
  const buttonDubleLeft = document.querySelector('.button-doubLeft');
  const buttonDubleRight = document.querySelector('.button-doubRight');
  const buttonRight = document.querySelector('.button-right');

  for (let i = 0; i < itemsData.lengthObj; ++i){
    contenerAvaliable[i] = itemsData['item' + (i + 1)];
  }

  function fillElem(i){
    return `
      <div class="items__img">
        <img src="${contenerAvaliable[i].img}" alt="${contenerAvaliable[i].img} image" class="item-img">
      </div>
      <span class="items__text">${contenerAvaliable[i].name}</span>`
  }
  
  function fillAvaliableItems(){
    let getUl = document.querySelector('.block__items');
    
    for (let i = 0; i < contenerAvaliable.length; ++i){
      let createElemLi = document.createElement('li');
      createElemLi.classList.add('items-li');
      createElemLi.innerHTML = fillElem(i);
      createElemLi.addEventListener('click', function(){
        document.querySelectorAll(".items-li").forEach((itemLi) => { itemLi.classList.remove("active"); });
			  createElemLi.classList.add("active");
      })
      getUl.appendChild(createElemLi);
    }
  }

  fillAvaliableItems();

  function upQueue(){
    let elemet = document.querySelector('.active');
    let aboveElemet = elemet.previousSibling;

    if (elemet === null && aboveElemet === null){
      return;
    }

    for (let i = 0; i < contenerAvaliable.length; ++i){
      if (contenerAvaliable[i].name === elemet.lastElementChild.innerHTML && i != 0){
        let oldElemet = elemet.innerHTML;
        let oldAbovePosition = contenerAvaliable[i - 1];
        contenerAvaliable[i - 1] = contenerAvaliable[i]; 
        contenerAvaliable[i] = oldAbovePosition;
        elemet.innerHTML = aboveElemet.innerHTML;
        aboveElemet.innerHTML = oldElemet;
        elemet.classList.remove("active");
        return;
      }
    }
  }

  function upQueueToFirst(){
    let elemet = document.querySelector('.active');
    if (elemet === null){
      return;
    }

    for (let i = 0; i < contenerAvaliable.length; ++i){
      if (contenerAvaliable[i].name === elemet.lastElementChild.innerHTML && i != 0){
        let temp = contenerAvaliable[i];

        for (let j = i; j > 0; --j){
          contenerAvaliable[j] = contenerAvaliable[j - 1];
        }
        contenerAvaliable[0] = temp;
        
        for (let k = 0; k < contenerAvaliable.length; ++k){
          let liElement = document.querySelectorAll(".items-li")[k];
          let data = fillElem(k);
          liElement.innerHTML = data;
          liElement.classList.remove('active');
        }
        return;
      }
    }
  }
  
  function downQueue(){
    let elemet = document.querySelector('.active');
    let belowElemet = elemet.nextSibling;

    if (elemet === null && belowElemet === null){
      return;
    }

    for (let i = 0; i < contenerAvaliable.length; ++i){
      if (contenerAvaliable[i].name === elemet.lastElementChild.innerHTML && i != contenerAvaliable.length - 1){
        let oldElemet = elemet.innerHTML;
        let oldBelowPosition = contenerAvaliable[i + 1];
        
        contenerAvaliable[i + 1] = contenerAvaliable[i]
        contenerAvaliable[i] = oldBelowPosition;
        elemet.innerHTML = belowElemet.innerHTML;
        belowElemet.innerHTML = oldElemet;
        elemet.classList.remove("active");
        return;
      }
    }

  }

  function downQueueToFirst(){
    let elemet = document.querySelector('.active');
    if (elemet === null){
      return;
    }

    for (let i = 0; i < contenerAvaliable.length; ++i){
      if (contenerAvaliable[i].name === elemet.lastElementChild.innerHTML && i != contenerAvaliable.length - 1){
        let temp = contenerAvaliable[i];

        for (let j = i; j < contenerAvaliable.length - i; ++j){
          contenerAvaliable[j] = contenerAvaliable[j + 1];
        }
        contenerAvaliable[contenerAvaliable.length - 1] = temp
        
        for (let k = 0; k < contenerAvaliable.length; ++k){
          let liElement = document.querySelectorAll(".items-li")[k];
          let data = fillElem(k);
          liElement.innerHTML = data;
          liElement.classList.remove('active');
        }
        return;
      }
    }
  }
}

createControl(itemsData);