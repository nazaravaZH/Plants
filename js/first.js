//menu
let blur = document.querySelector('.blur');
let header_burger = document.querySelectorAll('.header_burger, .header_link');
let header_menu = document.querySelector('.header_menu');

blur.addEventListener('click', function() {
  header_menu.classList.remove('active');
  blur.classList.remove('show');
  header_burger.forEach(function (item) {
    item.classList.remove('active');
  });
  document.body.style.overflow = null;
});

header_burger.forEach(function (item) {
  item.onclick = function () {
    blur.classList.toggle('show');
    item.classList.toggle('active');
    header_menu.classList.toggle('active');
    document.body.style.overflow = 'hidden';
    if (!header_menu.classList.contains('active')) {
      blur.classList.remove('show');
      document.body.style.overflow = null;
    }
  }; 
});

let header_links = document.querySelectorAll('.header_link, .header_link1');
header_links.forEach(function (link) {
  link.onclick = function () {
    header_burger.forEach(function (item) {
      item.classList.remove('active');
    });
    header_menu.classList.remove('active');
    blur.classList.remove('show');
    document.body.style.overflow = null;
  };
});



//accordion
const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
  let accordionHeader = item.querySelector(".accordion-header");
  let icon = accordionHeader.querySelector("i.fa");

  accordionHeader.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".description");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`;
      if (icon) {
        icon.classList.replace("fa-plus", "fa-minus");
      }
    } else {
      description.style.height = "0px";
      if (icon) {
        icon.classList.replace("fa-minus", "fa-plus");
      }
    }
    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 !== index2) {
      item2.classList.remove("open");

      let des = item2.querySelector(".description");
      des.style.height = "0px";

      let icon = item2.querySelector("i.fa");
      if (icon) {
        icon.classList.replace("fa-minus", "fa-plus");
      }
    }
  });
}

document.addEventListener("click", (event) => {
  const clickedElement = event.target;
  let isOutsideAccordion = true;
  for (let element of clickedElement.parents()) {
    if (element.classList.contains("accordion")) {
      isOutsideAccordion = false;
      break;
    }
  }

  if (isOutsideAccordion) {
    removeOpen(-1); 
  }
});
Element.prototype.parents = function* () {
  let current = this;
  while (current = current.parentElement) {
    yield current;
  }
};


//select
const select = document.querySelector('.select');
const caret = document.querySelector('.caret');
const menu = document.querySelector('.menu');
const divs = document.querySelectorAll('.dropdown > div[class^="div"]');
const buttons = document.querySelectorAll('.menu li button');
const selectedCity = document.querySelector('.selected');
selectedCity.textContent = 'City';
menu.style.display = 'none';

let activeDivIndex = -1;

select.addEventListener('click', () => {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
    select.style.backgroundColor = '#C1E698';
    caret.style.transform = 'rotate(180deg)';
    caret.style.paddingLeft = '20px';
    hideAllDivs(); 
  } else {
    menu.style.display = 'none';
    select.style.backgroundColor = '';
    caret.style.transform = '';
    caret.style.paddingLeft = '';
  }
});

const hideAllDivs = () => {
  divs.forEach((div) => {
    div.style.display = 'none';
  });
  activeDivIndex = -1; 
};

const toggleDiv = (index) => {
  if (activeDivIndex === index) {
    divs[index].style.display = 'none'; 
    activeDivIndex = -1; 
  } else {
    hideAllDivs();
    divs[index].style.display = 'block';
    selectedCity.textContent = buttons[index].textContent;
    activeDivIndex = index; 
  }
};

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    toggleDiv(index);
    menu.style.display = 'none'; 
  });
});

document.addEventListener('mousedown', (event) => {
  const clickedElement = event.target;
  const isInsideMenu = menu.contains(clickedElement);
  const isInsideSelect = select.contains(clickedElement);
  const isInsideDivs = Array.from(divs).some((div) => div.contains(clickedElement));

  if (!isInsideMenu && !isInsideSelect && !isInsideDivs) {
    hideAllDivs();
    menu.style.display = 'none';
    select.style.backgroundColor = '';
    caret.style.transform = '';
    caret.style.paddingLeft = '';
    selectedCity.textContent = 'City';
  }
});

//box
const box1 = document.querySelector('#box1'); // gardens
    const box2 = document.querySelector('#box2'); // plan
    const box3 = document.querySelector('#box3'); // lawn
    const box4 = document.querySelector('#box4'); // plan
    const box5 = document.querySelector('#box5'); // gardens
    const box6 = document.querySelector('#box6'); // plan

    const selectBox1Btn = document.querySelector('#select-box1'); // gardens
    const selectBox2Btn = document.querySelector('#select-box2'); // lawn
    const selectBox3Btn = document.querySelector('#select-box3'); // plan

    function removeBlurAndResetButtons() {
      [box1, box2, box3, box4, box5, box6].forEach((box) => {
        box.style.filter = '';
      });

      [selectBox1Btn, selectBox2Btn, selectBox3Btn].forEach((btn) => {
        btn.style.background = 'none';
        btn.style.color = '#E06733';
      });
    }

    selectBox1Btn.addEventListener('click', () => {
      removeBlurAndResetButtons();
      selectBox1Btn.style.background = '#E06733';
      selectBox1Btn.style.color = '#FFFFFF';
      box2.style.filter = 'blur(5px)';
      box3.style.filter = 'blur(5px)';
      box4.style.filter = 'blur(5px)';
      box6.style.filter = 'blur(5px)';
    });

    selectBox2Btn.addEventListener('click', () => {
      removeBlurAndResetButtons();
      selectBox2Btn.style.background = '#E06733';
      selectBox2Btn.style.color = '#FFFFFF';
      box1.style.filter = 'blur(5px)';
      box2.style.filter = 'blur(5px)';
      box4.style.filter = 'blur(5px)';
      box5.style.filter = 'blur(5px)';
      box6.style.filter = 'blur(5px)';
    });

    selectBox3Btn.addEventListener('click', () => {
      removeBlurAndResetButtons();
      selectBox3Btn.style.background = '#E06733';
      selectBox3Btn.style.color = '#FFFFFF';
      box1.style.filter = 'blur(5px)';
      box3.style.filter = 'blur(5px)';
      box5.style.filter = 'blur(5px)';
    });
    document.addEventListener('mousedown', (event) => {
      const clickedElement = event.target;

      const isInsideBlurBox = [box1, box2, box3, box4, box5, box6].some((box) => box.contains(clickedElement));
      const isInsideButtons = [selectBox1Btn, selectBox2Btn, selectBox3Btn].some((btn) => btn.contains(clickedElement));
      if (!isInsideBlurBox && !isInsideButtons) {
        removeBlurAndResetButtons();
      }
    });

