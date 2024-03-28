function addItemLocalStorage(itemJSON) {
  localStorage.setItem("produtos", itemJSON);

  //   window.localStorage.clear();
}

export default addItemLocalStorage;
