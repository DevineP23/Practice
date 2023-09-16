/*const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    const lowerCaseStr = str.toLowerCase();
    let results = [];

    for (let item of fruit) {
        if (item.toLowerCase().includes(lowerCaseStr)) {
            results.push(item);
        }

        if (results.length === limit) {
            break;
        }
    }

    return results;
}

function searchHandler(e) {
    const searchTerm = e.target.value;
    const results = search(searchTerm);
    showSuggestions(results, searchTerm);
}

function showSuggestions(results, inputVal) {
    suggestions.innerHTML = '';

    for (let result of results) {
        const suggestionItem = document.createElement('li');
        suggestionItem.textContent = result;
        suggestionItem.addEventListener('click', () => {
            input.value = result;
            suggestions.innerHTML = '';
        });
        suggestions.appendChild(suggestionItem);
    }
}

input.addEventListener('keyup', searchHandler);
input.addEventListener('focus', () => {
    input.placeholder = 'Start typing...';
});

input.addEventListener('blur', () => {
    input.placeholder = 'Search for fruits...';
});

document.addEventListener('click', (e) => {
    if (!suggestions.contains(e.target) && e.target !== input) {
        suggestions.innerHTML = '';
    }
});
*/

const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', /* ... (rest of the fruit array) */];

function search(str) {
  let results = [];

  // Filter the fruit array based on user input
  results = fruit.filter(item => item.toLowerCase().includes(str.toLowerCase()));

  return results;
}

function searchHandler(e) {
  const inputVal = e.target.value.trim(); // Trim whitespace
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  // Clear previous suggestions
  suggestions.innerHTML = '';

  // Create and append list items for each suggestion
  results.forEach(result => {
    const listItem = document.createElement('li');
    listItem.textContent = result;
    suggestions.appendChild(listItem);
  });

  // Add mouseover event listeners to highlight suggestions
  suggestions.querySelectorAll('li').forEach(suggestion => {
    suggestion.addEventListener('mouseover', () => {
      suggestion.classList.add('highlighted');
    });

    suggestion.addEventListener('mouseout', () => {
      suggestion.classList.remove('highlighted');
    });
  });
}

function useSuggestion(e) {
  if (e.target.tagName === 'LI') {
    // Set the selected suggestion as the input value
    input.value = e.target.textContent;
    suggestions.innerHTML = ''; // Clear suggestions
  }
}

input.addEventListener('input', searchHandler); // Use 'input' event for real-time updates
suggestions.addEventListener('click', useSuggestion);
