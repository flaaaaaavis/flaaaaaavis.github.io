function changeView(shown, hidden) {
  const toHide = document.getElementById(shown)
  const toShow = document.getElementById(hidden)

  toHide.style.display('none');
  toShow.style.display('flex');
}

module.exports = changeView
