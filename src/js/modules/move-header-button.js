function moveHeaderButton() {
  const headerButton = document.querySelector(".header__button");
  const headerMenu = document.querySelector(".header__menu");
  const menuList = document.querySelector(".menu__list");

  const mediaQuery = window.matchMedia("(min-width: 62rem)");
  function handleTabletChange(e) {
    if (e.matches) {
      headerMenu.append(headerButton);
    }
  }
  mediaQuery.addEventListener("change", handleTabletChange);
  handleTabletChange(mediaQuery);

  const mediaQuery2 = window.matchMedia(
    "(min-width: 36rem) and (max-width: 61.99875rem)"
  );
  function handleTabletChange2(e) {
    if (e.matches) {
      headerMenu.after(headerButton);
    }
  }
  mediaQuery2.addEventListener("change", handleTabletChange2);
  handleTabletChange2(mediaQuery2);

  const mediaQuery3 = window.matchMedia("(max-width: 35.99875rem)");
  function handleTabletChange3(e) {
    if (e.matches) {
      menuList.append(headerButton);
    }
  }
  mediaQuery3.addEventListener("change", handleTabletChange3);
  handleTabletChange3(mediaQuery3);
}

export default moveHeaderButton;
