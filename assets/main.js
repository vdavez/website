const MiniSearch = require("minisearch")

let miniSearch = new MiniSearch({
    fields: ['title', 'content'],
    storeFields: ['title', 'permalink', 'type']
  })
let allTitles = []

fetch("/index.json")
  .then(response => response.json())
  .then(docs => {
      allTitles = docs
      miniSearch.addAll(allTitles)
  })


  function formSubmit(event) {
    let input = document.getElementById('site-search').value;
    const titles = document.getElementsByClassName("post-title")
    const root = titles[0].parentNode
    while (titles.length > 0) {
      titles[0].parentNode.removeChild(titles[0])
    }

    let results = miniSearch.search(input)
    if (results == "") {
      results = allTitles.filter(d => {
        return d.type == "posts"
      })
    }
    else {
      const title = document.createElement("p")
      title.className = "post-title"
      title.innerHTML = `<strong>Showing results for: ${input}</strong>`
      root.appendChild(title)
    }

    results.map(d => {
      const title = document.createElement("p")
      title.className = "post-title"
      title.innerHTML = `<a href="${d.permalink}">${d.title}</a>`
      root.appendChild(title)
    })

    event.preventDefault();
  }
  
  const form = document.getElementById('search-form');
  form.addEventListener('submit', formSubmit);
  form.addEventListener('click', formSubmit)
