let movies=[
  {
    name:"Bahubali2",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReL3I-uXSh8bGkraphnKU4m9VylU31MlTLJo8E6V81Kw&s",
    ratings:4.7,
    Description: "Kattappa narrates the story of Amarendra Bahubali to Shivudu, who learns his lineage as the prince of Mahishmati and the son of Amarendra Bahubali"
  },
  {
    name:"RRR",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJLjhNiNhtmS7WbRuCZH37XXOymm8NRufxqS-6diBlUQ&s",
    ratings:4.7,
    Description:"RRR is an fictitious story incorporating the lives of two real-life Indian revolutionaries, who fought against the British Raj and the Nizam of Hyderabad respectively. "
  },
  {
    name:"Raja Rani",
    poster:"https://upload.wikimedia.org/wikipedia/en/2/23/Raja_rani_tamil.jpg",
    ratings:4.8,
    Description:"John and Regina, who dislike each other, are forced to get married and lead troubled lives. However, things take a turn when the couple suffers a sudden tragedy."
  },
  {
    name:"Avengers-Endgame",
    poster:"https://images-cdn.ubuy.co.in/633feb99b0c4240a6e30e463-poster-stop-online-avengers-endgame.jpg",
    ratings:4.7,
    Description:"With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences, Avenge the fallen."
  },
  {
    name:"Jailer",
    poster:"https://preview.redd.it/every-posters-of-jailer-are-in-different-tone-no-idea-what-v0-kvyzkptoy2cb1.jpg?auto=webp&s=e784199e04d87815e96ebc43336473c70f5d26de",
    ratings:4.3,
    Description:"It revolves around a retired jailer seeking to apprehend an eccentric idol smuggler. Being the 169th film of Rajinikanth, while the official title was announced in June that year."
  },
  {
    name:"Annabelle",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvDj4HDfUCwdAm4RWFRJcQpeadkAgh6MAsz05ngFPhg&s",
    ratings:3.8,
    Description:"A couple begins to experience terrifying supernatural occurrences involving a vintage doll shortly after their home is invaded by satanic cultists."
  },
  {
    name:"Conjuring",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtuD3ek0SPTp7biXkXjJZf784Um9U8fp-7D3UwN_W2w&s",
    ratings:4.7,
    Description:"Parents need to know that The Conjuring is a truly scary horror movie that's based on a true story about a haunted house, a demon possession, and an exorcism."
  },
  {
    name:"The Nun",
    poster:"https://teaser-trailer.com/wp-content/uploads/The-Nun-Movie-poster.jpg",
    ratings:3.8,
    Description:"In 1952 Romania, two nuns living at the Saint Cartha's monastery are attacked by an unseen evil force. The surviving nun, flees from the attacker, and hangs herself."
  },
  {
    name:"Kantara",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBKnT1gN9Iwx4yCTAtVtTnPA__dfG8sYs5kljw8P76Q&s",
    ratings:4.8,
    Description:"When greed paves the way for betrayal, scheming and murder, a young tribal reluctantly dons the traditions of his ancestors to seek justice."
  },
  {
    name:"Charlie",
    poster:"https://upload.wikimedia.org/wikipedia/en/thumb/1/19/777_Charlie_official_poster.jpg/220px-777_Charlie_official_poster.jpg",
    ratings:4.9,
    Description:"The film follows the journey and bonding between a lonely factory worker and a stray Labrador dog."
  },
  {
    name:"HanuMan",
    poster:"https://img.etimg.com/thumb/width-1600,height-900,imgsize-112166,resizemode-75,msid-106749597/news/new-updates/director-prasanth-varmas-hanuman-a-culturally-rooted-indian-superhero-film-hits-cinemas-today.jpg",
    ratings:4.9,
    Description:"Follows the story of Hanumanthu, who gets the power of Lord Hanuman to save the people of Anjanadri, and faces off against Michael after coming in contact with a mysterious gem."
  },
  {
    name:"Premalu",
    poster:"https://img.nowrunning.com/content/movie/2024/prema-28955/Stills/premalu_202421.jpg",
    ratings:4.8,
    Description:"An engineering graduate who wants to advance his profession in the United Kingdom and is so bored with his hometown and the family's bakery business that he seeks an escape."
  },
  {
    name:"Gaami",
    poster:"https://indiaglitz-media.s3.amazonaws.com/telugu/home/gaami-review-2.jpg",
    ratings:3.9,
    Description:"Shankar, an amnesiac Aghori who suffers from the fear of touch, goes on a dangerous Himalayan trail in search of a mythical cure for his condition. "
  },
  {
    name:"Death Whisperer",
    poster:"https://image.tmdb.org/t/p/original/48TDjSJpCdJ4SBOHZX3G5IjaV02.jpg",
    ratings:3.9,
    Description:"When a bloodthirsty spirit possesses a young girl in a remote village, her older brother leads the charge to banish it before she's consumed by evil."
  },
  {
    name:"Farrey",
    poster:"https://stat5.bollywoodhungama.in/wp-content/uploads/2023/10/Farrey-322x402.jpg",
    ratings:4.2,
    Description:"Farrey is the story of Niyati and Akash, two toppers from a poor background. Niyati is living with her foster parents and the foster kids while Akash works as a part time delivery boy."
  },
  {
    name:"Mea Culpa",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTifeMbjeVGWAlGceKNqII-_xCXcrBeDuoL-J6jdhNxw&s",
    ratings:2.7,
    Description:"When criminal defense attorney Mea Harper takes on the murder case of artist Zyair Malloy, the truth isn't as obvious as it seems. "
  },


]


function input_text()
{
    let movieName=document.getElementById("text").value;
    // console.log(movieName)
    if (movieName!=="")
    {
      let result=movies.filter(function(movie)/*movie can be any name*/
      {
        if (movie.name.toUpperCase().includes(movieName.toUpperCase())){
          return movie.name;
        }
        })
        
    displayMovies(result)
    }
    
    else{
    displayMovies(movies)
     }
}


// function displayMovies(){
//  let movie= document.createElement("div");
//  movie.classList.add("movie-div");
 

//  let overlaydiv= document.createElement("div");
//  overlaydiv.classList.add("overlay");
  
//  movie.appendChild(overlaydiv);

//  let videodiv= document.createElement("div");
//  videodiv.classList.add("video");
 
//  let descriptiondiv= document.createElement("div");
//  descriptiondiv.classList.add("description");

//  overlaydiv.appendChild(videodiv);
//  overlaydiv.appendChild(descriptiondiv);
 


//  console.log(movie)
  
// }


function displayMovies(data){
  let htmlString=``;

for(let i=0;i<data.length;i++){
   htmlString+=`<div class="movie-div" id="movies">
   <div class="overlay"> 

       <div class="video"></div>
       <div class="description">
           <h1 >${data[i].name}</h1>
           <p>${data[i].ratings}</p>
           <p>${data[i].Description}</p>
       </div>
   </div>
   <img class="poster" src="${data[i].poster}" alt="poster logo">
</div>`

}
// console.log(htmlString)
document.getElementById("movies").innerHTML=htmlString;
}


// search_movie();

displayMovies(movies);
