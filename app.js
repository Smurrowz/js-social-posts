
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
      nome: 'Pablo Escobar',
      avatar: 'https://biografieonline.it/img/bio/p/Pablo_Escobar.jpg',
    },
    data: '08-05-2022',
    testo: 'Ognuno ha un prezzo, la cosa importante è scoprire qual è.',
    immagine: 'https://www.ilmessaggero.it/photos/MED/85/09/3778509_2234_escobar_1.jpg',
    likes: 50,
  },
  {
    id: 2,
    autore: {
      nome: 'Pietro Pacciani',
      avatar: 'https://static.fanpage.it/wp-content/uploads/2017/03/pacciani1.jpg',
    },
    data: '05-02-2005',
    testo: 'Se ni mondo esistesse un po di bene e ognun si considerasse suo fratello, ci sarebbe meno pensieri e meno pene e il mondo ne sarebbe assai più bello.',
    immagine: 'https://img.ilgcdn.com/sites/default/files/styles/xl/public/foto/2021/12/13/1639377016-agenzia-fotogramma-fgr142076.jpg?_=1639377016',
    likes: 15000,
  },
  {
    id: 3,
    autore: {
      nome: 'Michele Poggi',
      avatar: 'https://www.gedistatic.it/content/gnn/img/lastampa/2020/04/22/042210627-506e1683-3ecd-4b9f-a267-0ce91e7ed226.jpg',
    },
    data: '02-25-2022',
    testo: 'Regá é uscito Elden Ring.',
    immagine: 'https://gamelegends.it/wp-content/uploads/2022/03/Elden-Ring-guida-new-2.jpg',
    likes: 20000,
  },
  {
    id: 4,
    autore: {
      nome: 'Piermenti Sfracellozzi',
      
    },
    data: '05-08-2022',
    testo: 'GODO FINALMENTE LE VACANZE',
    immagine: 'https://c8.alamy.com/compit/2d684gd/godo-ra-5-giugno-2019-la-luce-del-sole-sta-illuminando-il-segnale-stradale-di-godo-piccolo-villaggio-2d684gd.jpg',
    likes: 0,
  },

]
const imgArray = []
const feedEl = document.querySelector('.feed')


posts.forEach(el => {

  const { data } = el
  const dataSplitted = data.split('-')
  const [mese, giorno, anno] = dataSplitted
  let dataIta = [giorno, mese, anno].join('/')
  imgArray.push(el.autore.avatar)

  feedEl.innerHTML +=
    `<div class="mycontainer">
      <div class="card-top">
        <div class="avatar">
          <img class="avatar-img" src="${el.autore.avatar}" alt="">
        </div>
        <div>
          <h2 class="card-post-author">${el.autore.nome}</h2>
          <h3 class="card-post-date">${dataIta}</h3>
        </div>
      </div>
      <p class="post-text">${el.testo}</p>
      <img class="post-img" src="${el.immagine}" alt="">
      <div class="like-section">
        <button type="button" class="like-button"><i class="fas fa-thumbs-up"></i> Mi Piace</button> <span class="like-counter">Piace a ${el.likes} persone</span>
      </div>
    </div>`
    const nomeCognome = el.autore.nome.split(' ')
    const nomeL = nomeCognome[0].split('')
    const cognomeL = nomeCognome[1].split('')
    const primaLetteraNome = nomeL[0]
    const primaLetteraCognome = cognomeL[0]
    console.log(primaLetteraNome, primaLetteraCognome)
    

  });




  const likeButtons = document.querySelectorAll('.like-button')
  const likeCounters = document.querySelectorAll('.like-counter')


for (let i = 0; i < likeButtons.length; i++) {
  const button = likeButtons[i];
  const like = likeCounters[i]
  button.addEventListener('click', function () {
    if (!button.classList.contains('active')) {
      button.classList.add('active')
      like.innerHTML = ` piace a ${posts[i].likes + 1} persone`
    } else {
      button.classList.remove('active')
      like.innerHTML = ` piace a ${posts[i].likes} persone`
    }
  })

}

