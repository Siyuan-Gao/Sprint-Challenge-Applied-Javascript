// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>




const newTab = (items) => {
  const tab1 = document.createElement('div');
  tab1.classList.add('tab');
  tab1.textContent = items;
  return tab1;
}




}axios
.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    const heroData = newTab(response.data.topics);
    tabEntry.appendChild(heroData);
})
.catch(err => {
    console.log('Noooo!', err);
});