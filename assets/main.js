const MiniSearch = require("minisearch")

console.log("loading index")
const miniSearch = new MiniSearch({
    fields: ['title', 'content'],
    storeFields: ['title', 'content']
  })

const docs = fetch("/index.json")
    .then(response => response.json())
    .then(docs => {
        miniSearch.addAll(docs)
        // console.log(miniSearch.search("dumb"))
        console.log(miniSearch.toJSON())
    })