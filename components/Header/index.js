// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const header2 = document.querySelector('header')

function Header() {
  const headerDiv = document.createElement('div')
  headerDiv.classList.add('header')

  const headerDate = document.createElement('span')
  headerDate.classList.add('date')
  headerDiv.appenChild('headerDate')

  const headerTitle = document.createElement('h1')
  headerTitle.textContent = "Lambda Times"
  headerDiv.appendChild('h1')

  const headerTemp = document.createElement('span')
  headerTemp.classList.add('temp')
  headerDiv.appendChild('headerTemp')
  headerTemp.textContent = "98°"

  return headerDiv;
}
