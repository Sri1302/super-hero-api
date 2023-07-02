// https://superheroapi.com/api/access-token/character-id

// id 👉 BASE_URL/id
//name 👉 BASE_URL/search/name


const SUPERHERO_TOKEN = 102551852898487

const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const newHero = document.getElementById("newHero")
const searchButton =document.getElementById('searchButton')

const searchedInput = document.getElementById('searchedInput')

 //object of emojis
const emojis ={
combat: '⚔️',
durability: '🪢',
intelligence: '🧠',
power: '⚡',
speed: '⏩',
strength: '💪🏼'
}

const getHeroInfo = (json) =>{
  const name = `<h2>${json.name}</h2>` //gets name of super hero
  const img =  `<img src="${json.image.url}" height=300 width = 300 />` //gets image of superhero
    
  const stats = Object.keys(json.powerstats).map(stat=>{
     return `<p>${stat.toUpperCase()} ${emojis[stat]} : ${json.powerstats[stat]} </p>`
  }).join('') //gets stats of superhero
  console.log(stats)
    document.getElementById('heroImage').innerHTML = `${name} ${img} ${stats}`
}

//superHero takes input as id and then fetches and then converts the response into json(javascript object notation) and goes to getsuperhero.
const superHero = (id,name) =>{
  fetch(`${BASE_URL}/${id}`)
  .then(response => response.json())
  .then(json => {
    console.log(json.powerstats)
    getHeroInfo(json)
  })

}
//SearchedSuperHero takes input as name and then fetches and then converts the response into json(javascript object notation) and goes to getsuperhero.

const searchedSuperHero = (name) =>{
  console.log(searchedInput.value)
  fetch(`${BASE_URL}/search/${name}`)
  .then(response => response.json())
  .then(json =>{
    json= json.results[0]
    console.log(json)
    getHeroInfo(json)  
  })
}

//This function generates random number b/w 1 to 731.
const randomNumber = () =>{
  return Math.ceil(Math.random() * 731 )
}

newHero.onclick = () =>superHero(randomNumber())

searchButton.onclick = () =>searchedSuperHero(searchedInput.value)





