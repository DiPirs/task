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
        <input type="text" placeholder="Search item" class="search-input input-available">
      </div>
      <hr/>
      <div class="contener_block__items">
        <ul class="block__items itmes-available"></ul>
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
          <button class="buttons-item button-reset">RESET</button>
          <button class="buttons-item button-random">RANDOM</button>
        </ul>
      </nav>
    </div>`;

  const rigthSide =
    `<div class="contener contener-selected">
      <div class="contener__block">
        <h1 class="block__header">Selected</h1>
        <hr/>
        <div class="block__search">
          <input type="text" placeholder="Search item" class="search-input input-selected">
        </div>
        <hr/>
        <div class="contener_block__items">
          <ul class="block__items itmes-selected"></ul>
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
  const searchElemArr = [];

  const inputSearchAvailable = document.querySelector('.input-available');
  const inputSearchSelected = document.querySelector('.input-selected');
  inputSearchAvailable.addEventListener('input', () => getElemBySearch(inputSearchAvailable,contenerAvaliable, 'itmes-available', 'li-a'));
  inputSearchSelected.addEventListener('input', () => getElemBySearch(inputSearchSelected,contenerSelect, 'itmes-selected', 'li-s'));

  const buttonUpAv = document.querySelector('.button-up-a');
  const buttonDubleUpAv = document.querySelector('.button-doubUp-a');
  const buttonDownAv = document.querySelector('.button-down-a');
  const buttonDubleDownAv = document.querySelector('.button-doubDown-a');
  buttonUpAv.addEventListener('click', () => upQueue(contenerAvaliable));
  buttonDubleUpAv.addEventListener('click',() => upQueueToFirst(contenerAvaliable));
  buttonDownAv.addEventListener('click', () => downQueue(contenerAvaliable));
  buttonDubleDownAv.addEventListener('click', () => downQueueToFirst(contenerAvaliable));

  const buttonLeft = document.querySelector('.button-left');
  const buttonDubleLeft = document.querySelector('.button-doubLeft');
  const buttonDubleRight = document.querySelector('.button-doubRight');
  const buttonRight = document.querySelector('.button-right');
  buttonLeft.addEventListener('click', rightToLeft); 
  buttonDubleLeft.addEventListener('click', rightToLeftAll);
  buttonDubleRight.addEventListener('click', leftToRightAll); 
  buttonRight.addEventListener('click', leftToRight);

  const buttonReset = document.querySelector('.button-reset');
  const buttonRanom = document.querySelector('.button-random');
  // buttonReset.addEventListener('click', resetAll); 
  buttonRanom.addEventListener('click', randItem); 

  const buttonUpSe = document.querySelector('.button-up-s');
  const buttonDubleUpSe = document.querySelector('.button-doubUp-s');
  const buttonDownSe = document.querySelector('.button-down-s');
  const buttonDubleDownSe = document.querySelector('.button-doubDown-s');
  buttonUpSe.addEventListener('click', () => upQueue(contenerSelect));
  buttonDubleUpSe.addEventListener('click',() => upQueueToFirst(contenerSelect));
  buttonDownSe.addEventListener('click',() => downQueue(contenerSelect));
  buttonDubleDownSe.addEventListener('click',() => downQueueToFirst(contenerSelect));
  
  for (let i = 0; i < itemsData.lengthObj; ++i){
    contenerAvaliable[i] = itemsData['item' + (i + 1)];
  }

  function getElemBySearch(inputSearch,contener, ulSelec, liSelec){
    let searchValue = inputSearch.value.toLowerCase();
    let countToDel = searchElemArr.length;
    
    if (searchElemArr.length === 0){
      countToDel = contener.length;
    }

    let getUl = document.querySelector(`.${ulSelec}`);

    for (let i = 0; i < countToDel; ++i){
      let elem = document.querySelector(`.${liSelec}`);
      if ( elem != null){
        getUl.removeChild(elem);
      }
    }

    searchElemArr.splice(0, searchElemArr.length);

    for (let i = 0; i < contener.length; ++i){
      let isHas = hasChar(contener[i].name, searchValue)
      if (isHas === true){
        searchElemArr.push(contener[i]);    
      }
    }

    if (ulSelec === 'itmes-available'){
      fillAvaliableItems(searchElemArr);
    }
    else{
      for (let i = 0; i < searchElemArr.length; ++i){
        fillSelectedItems(searchElemArr, i);
      }
    }

  }

  function hasChar(str, char) {
      return str.includes(char)
  }

  function fillElem(contener){
    if (contener.img != null){
      return `<div class="items__img"> <img src="${contener.img}" alt="${contener.img} image" class="item-img"></div> <span class="items__text">${contener.name}</span>`
    }
    else{
      return `<span class="items__text">${contener.name}</span>`
    }
  }
  
  function fillAvaliableItems(contener,index){
    let getUl = document.querySelector('.itmes-available');
    let createElemLi = document.createElement('li');
    createElemLi.classList.add('items-li');
    createElemLi.classList.add('li-a');
    createElemLi.innerHTML = fillElem(contener[index]);
    createElemLi.addEventListener('click', function(){
      document.querySelectorAll(".items-li").forEach((itemLi) => { itemLi.classList.remove("active"); });
      createElemLi.classList.add("active");
    })
    getUl.appendChild(createElemLi);
  }

  for (let i = 0; i < contenerAvaliable.length; ++i){
    fillAvaliableItems(contenerAvaliable, i);
  }

  function fillSelectedItems(contener,index){
    let getUl = document.querySelector('.itmes-selected');
  
    let createElemLi = document.createElement('li');
    createElemLi.classList.add('items-li');
    createElemLi.classList.add('li-s');
    createElemLi.innerHTML = fillElem(contener[index]);
    createElemLi.addEventListener('click', function(){
      document.querySelectorAll(".items-li").forEach((itemLi) => { itemLi.classList.remove("active"); });
      createElemLi.classList.add("active");
    })
    getUl.appendChild(createElemLi);
    
  }

  function upQueue(contener){
    let elemet = document.querySelector('.active');
    if (elemet === null){
      return;
    }

    let aboveElemet = elemet.previousSibling;
    
    for (let i = 0; i < contener.length; ++i){
      if (contener[i].name === elemet.lastElementChild.innerHTML && i != 0){
        let oldElemet = elemet.innerHTML;
        let oldAbovePosition = contener[i - 1];
        contener[i - 1] = contener[i]; 
        contener[i] = oldAbovePosition;
        elemet.innerHTML = aboveElemet.innerHTML;
        aboveElemet.innerHTML = oldElemet;
        elemet.classList.remove("active");
        return;
      }
    }
  }

  function upQueueToFirst(contener){
    let elemet = document.querySelector('.active');
    if (elemet === null){
      return;
    }

    for (let i = 0; i < contener.length; ++i){
      if (contener[i].name === elemet.lastElementChild.innerHTML && i != 0){
        let temp = contener[i];

        for (let j = i; j > 0; --j){
          contener[j] = contener[j - 1];
        }
        contener[0] = temp;
        
        for (let k = 0; k < contener.length; ++k){
          let liElement = document.querySelectorAll(".items-li")[k];
          let data = fillElem(contener[k]);
          liElement.innerHTML = data;
          liElement.classList.remove('active');
        }
        return;
      }
    }
  }
  
  function downQueue(contener){
    let elemet = document.querySelector('.active');
    if (elemet === null){
      return;
    }

    let belowElemet = elemet.nextSibling;
    
    for (let i = 0; i < contener.length; ++i){
      if (contener[i].name === elemet.lastElementChild.innerHTML && i != contener.length - 1){
        let oldElemet = elemet.innerHTML;
        let oldBelowPosition = contener[i + 1];

        contener[i + 1] = contener[i]
        contener[i] = oldBelowPosition;
        elemet.innerHTML = belowElemet.innerHTML;
        belowElemet.innerHTML = oldElemet;
        elemet.classList.remove("active");
        return;
      }
    }

  }

  function downQueueToFirst(contener){
    let elemet = document.querySelector('.active');
    if (elemet === null){
      return;
    }

    for (let i = 0; i < contener.length; ++i){
      if (contener[i].name === elemet.lastElementChild.innerHTML && i != contener.length - 1){
        let temp = contener[i];

        for (let j = i; j < contener.length - i; ++j){
          contener[j] = contener[j + 1];
        }
        contener[contener.length - 1] = temp
        
        for (let k = 0; k < contener.length; ++k){
          let liElement = document.querySelectorAll(".items-li")[k];
          let data = fillElem(contener[k]);
          liElement.innerHTML = data;
          liElement.classList.remove('active');
        }
        return;
      }
    }
  }

  function leftToRight(){
    let elemet = document.querySelector('.active');
    if (elemet === null){
      return;
    }
    let perentUl = elemet.parentElement;

    for (let i = 0; i < contenerAvaliable.length; ++i){
      if (contenerAvaliable[i].name === elemet.lastElementChild.innerHTML){
        contenerSelect.push(contenerAvaliable[i]);
        contenerAvaliable.splice(i, 1);
        fillSelectedItems(contenerSelect,contenerSelect.length - 1);
        perentUl.removeChild(elemet);
        return;
      }
    }
  }

  function rightToLeft(){
    let elemet = document.querySelector('.active');
    if (elemet === null){
      return;
    }
    let perentUl = elemet.parentElement;

    for (let i = 0; i < contenerSelect.length; ++i){
      if (contenerSelect[i].name === elemet.lastElementChild.innerHTML){
        contenerAvaliable.push(contenerSelect[i]);
        contenerSelect.splice(i, 1);   
        fillAvaliableItems(contenerAvaliable,contenerAvaliable.length - 1);
        perentUl.removeChild(elemet);
        return;
      }
    }
  }

  function leftToRightAll(){
    let getUl = document.querySelector('.itmes-available');
    let contLen = contenerSelect.length;
    for (let i = 0; i < contenerAvaliable.length; ++i){
      let elemet = document.querySelector('.li-a');
      contenerSelect.push(contenerAvaliable[i]);
      getUl.removeChild(elemet);
    }

    for (let j = contLen; j < contenerAvaliable.length + contLen; ++j){
      fillSelectedItems(contenerSelect, j); 
    }
    contenerAvaliable.splice(0, contenerAvaliable.length);
  }

  function rightToLeftAll(){
    let getUl = document.querySelector('.itmes-selected');
    for (let i = 0; i < contenerSelect.length; ++i){
      let elemet = document.querySelector('.li-s');
      contenerAvaliable.push(contenerSelect[i]);
      getUl.removeChild(elemet)
    }

    for (let j = 0; j < contenerSelect.length; ++j){
      fillAvaliableItems(contenerSelect, j); 
    }  
    contenerSelect.splice(0, contenerSelect.length);
  }

  function randItem(){
    contenerAvaliable.push({
      name : `Random Item #${Math.floor(Math.random() * 100)}`
    });
    fillAvaliableItems(contenerAvaliable, contenerAvaliable.length - 1);
  }
}

createControl(itemsData);