
// 
// - id del post, numero progressivo da 1 a n
// - nome autore, 
// - foto autore, 
// - data in formato americano (mm-gg-yyyy), 
// - testo del post, 
// - immagine (non tutti i post devono avere una immagine), 
// - numero di likes.
// 

const posts = [
  {
    id: 1,
    autore: {
      nome:'Pablo Escobar',
      avatar: 'https://biografieonline.it/img/bio/p/Pablo_Escobar.jpg',
    },
    data:'08-05-2022',
    testo: 'Ognuno ha un prezzo, la cosa importante è scoprire qual è.',
    immagine:'https://www.ilmessaggero.it/photos/MED/85/09/3778509_2234_escobar_1.jpg',
    likes: 50,
  },
  {
    id: 2,
    autore: {
      nome:'Pietro Pacciani',
      avatar: 'https://static.fanpage.it/wp-content/uploads/2017/03/pacciani1.jpg',
    },
    data:'05-02-2005',
    testo: 'Se ni mondo esistesse un po di bene e ognun si considerasse suo fratello, ci sarebbe meno pensieri e meno pene e il mondo ne sarebbe assai più bello.',
    immagine:'https://img.ilgcdn.com/sites/default/files/styles/xl/public/foto/2021/12/13/1639377016-agenzia-fotogramma-fgr142076.jpg?_=1639377016',
    likes: 15000,
  },
  {
    id: 3,
    autore: {
      nome:'Michele Poggi',
      avatar: 'https://www.gedistatic.it/content/gnn/img/lastampa/2020/04/22/042210627-506e1683-3ecd-4b9f-a267-0ce91e7ed226.jpg',
    },
    data:'02-25-2022',
    testo: 'Regá é uscito Elden Ring.',
    immagine:'https://gamelegends.it/wp-content/uploads/2022/03/Elden-Ring-guida-new-2.jpg',
    likes: 20000,
  },

]

console.log(posts)
const feedEl = document.querySelector('.feed')
const buttonArray = []
const likeArray = []

posts.forEach(el => {
 feedEl.innerHTML +=
  `<div class="mycontainer">
    <div class="card-top">
      <div>
        <img class="avatar-img" src="${el.autore.avatar}" alt="">
      </div>
      <div>
        <h2 class="card-post-author">${el.autore.nome}</h2>
        <h3 class="card-post-date">${el.data}</h3>
      </div>
    </div>
    <p class="post-text">${el.testo}</p>
    <img class="post-img" src="${el.immagine}" alt="">
    <div class="like-section">
      <button type="button" class="like-button"><i class="fas fa-thumbs-up"></i> Mi Piace</button> <span class="like-counter">Piace a ${el.likes} persone</span>
    </div>
  </div>`
  const likeButton = document.querySelector('.like-button')
  const likeCounter = document.querySelector('.like-counter')
  buttonArray.push(likeButton)
  likeArray.push(likeCounter)

});

console.log(buttonArray)
console.log(likeArray)



