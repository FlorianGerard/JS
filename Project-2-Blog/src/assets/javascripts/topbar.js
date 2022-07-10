console.log("topbar");
const iconMobile = document.querySelector(".header-menu-icon");
const headerMenu = document.querySelector(".header-menu");
let isMenuOpen = false;
let mobileMenuDOM;

toggleMobileMenu = () => {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
  isMenuOpen = !isMenuOpen;
};

iconMobile.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMobileMenu();
});

const closeMenu = () => {
    mobileMenuDOM.classList.remove('open');
};

const createMobileMenu = () => {
  mobileMenuDOM = document.createElement("div");
  mobileMenuDOM.classList.add("mobile-menu");
  mobileMenuDOM.addEventListener('click', e => {
      e.stopPropagation();
  })
  mobileMenuDOM.append(headerMenu.querySelector("ul").cloneNode(true));
  headerMenu.append(mobileMenuDOM);
};

const openMenu = () => {
  if (mobileMenuDOM) {
    closeMenu();
  } else {
    createMobileMenu();
  }
  mobileMenuDOM.classList.add('open');
};

window.addEventListener("click", () => {
    if(isMenuOpen){
        toggleMobileMenu();
    }
});

window.addEventListener('resize', e => {
    if(window.innerWidth > 480 && isMenuOpen){
        toggleMobileMenu();
    }
    
})
