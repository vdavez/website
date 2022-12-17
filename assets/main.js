const MiniSearch = require("minisearch")

const miniSearch = new MiniSearch({
    fields: ['title', 'content'],
    storeFields: ['title', 'permalink'],
    searchOptions: {
      boost: { title: 2 },
      processTerm: (term) => term.toLowerCase()
    //   fuzzy: 0.2
    }
  })

fetch("/index.json")
  .then(response => response.json())
  .then(docs => {
      miniSearch.addAll(docs)
  })

  /**
   * debounce function for search ... credit entirely to
   * https://www.joshwcomeau.com/snippets/javascript/debounce/
   * @param {*} callback 
   * @param {*} wait 
   * @returns 
   */
  const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback.apply(null, args);
      }, wait);
    };
  }


/**
 * Removes all the children elements of the parent node
 * Used to clear the select when searches change...
 *
 * @param {Element} parent the parent node
 */
const removeChildren = (parent) => {
  while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
  }
};

/**
 * 
 * @param {event} event 
 */
const formChange = debounce((event,inputElem,optionsList) => {
  const inputText = inputElem.value;
  removeChildren(optionsList)

  // Hide the select element initially
  optionsList.style.display = "none"
  
  // Check to make sure that there's enough input text to bother with
  if (inputText.length > 2) {
    
      const results = miniSearch.search(inputText, { prefix: true })
      
      if (results.length > 0) {
        
        // Add the options to the select
        results.map(d => {
          const optionElem = document.createElement("option")
          optionElem.value = d.permalink
          optionElem.text = d.title
          optionsList.append(optionElem)
        })

        // Show the options with "display: block" but limit to 10 results 
        optionsList.style.display = "block"
        optionsList.size = (results.length < 10 ? results.length : 10)
        optionsList.focus()
      }
    }
  }, 250);

  const inputSidebar = document.getElementById('site-search-sidebar');
  const inputFooter = document.getElementById('site-search-footer');
  const optionsListSidebar = document.getElementById("search-results-list-select-sidebar")
  const optionsListFooter = document.getElementById("search-results-list-select-footer")
  optionsListSidebar.style.display = "none"
  optionsListFooter.style.display = "none"

  document.body.addEventListener('input', (ev) => {
    if (ev.target.id == "site-search-sidebar") {
      formChange(ev,inputSidebar,optionsListSidebar)
    }
    if (ev.target.id == "site-search-footer") {
      formChange(ev,inputFooter, optionsListFooter)
    }
  })

  /**
   * When you click on the option, go to the URL
   */
  const selectItem = (event) => {
    if (event.key == "Enter" ||
      event.key == " " ||
      event.type == "click"
      ) {
        window.location.assign(`${event.target.value}`);
      }
  }
  
  optionsListSidebar.addEventListener('click',selectItem);
  optionsListSidebar.addEventListener('keydown',selectItem)
  optionsListFooter.addEventListener('click',selectItem);
  optionsListFooter.addEventListener('keydown',selectItem)