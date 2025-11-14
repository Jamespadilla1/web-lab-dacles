
const input = document.getElementById('search');
if(input){
  input.addEventListener('keyup', (e) => {
    console.log('User typed:', e.target.value);
  });
}


const form = document.getElementById('addForm');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cafeName').value;
    if(name){
      let cafes = JSON.parse(localStorage.getItem('cafes')) || [];
      cafes.push(name);
      localStorage.setItem('cafes', JSON.stringify(cafes));
      document.getElementById('message').innerText = `"${name}" added!`;
      form.reset();
    }
  });
}

// Display cafes on Dashboard
const favoritesDiv = document.getElementById('favorites');
if(favoritesDiv){
  let cafes = JSON.parse(localStorage.getItem('cafes')) || [];
  cafes.forEach(cafe => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerText = cafe;
    favoritesDiv.appendChild(card);
  });
}
