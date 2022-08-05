
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
      nome: 'Gianluca Lomarco',
      avatar: 'https://scontent.fpsr1-1.fna.fbcdn.net/v/t1.6435-9/121143737_10221704869284969_1392065519028001009_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dG-r5FZjYukAX8lU_vz&_nc_ht=scontent.fpsr1-1.fna&oh=00_AT-HwV8mCZ9xlEQXaUNsp5VnusvcqBHI6bw9zku7FZadPA&oe=6311318F',
    },
    data: '08-05-2022',
    testo: 'Sono il piú forte del mondo a disegnare',
    immagine: 'img/schermata_2022-08-05_alle_13.50.08.png',
    likes: 9999999,
  },
  {
    id: 2,
    autore: {
      nome: 'Pietro Pacciani',
      avatar: 'https://static.fanpage.it/wp-content/uploads/2017/03/pacciani1.jpg',
    },
    data: '05-02-1998',
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
    data: '08-05-2022',
    testo: 'GODO FINALMENTE LE VACANZE',
    immagine: 'https://c8.alamy.com/compit/2d684gd/godo-ra-5-giugno-2019-la-luce-del-sole-sta-illuminando-il-segnale-stradale-di-godo-piccolo-villaggio-2d684gd.jpg',
    likes: 0,
  },
  {
    id: 5,
    autore: {
      nome: 'Nigel DiNella',
      avatar :'https://i.ytimg.com/vi/CtMqOZbmJvQ/maxresdefault.jpg',

    },
    data: '08-04-2022',
    testo: 'Mauro voglio andare in vacanza, lasciami stare pls ti scongiuro',
    immagine: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/04/crying_toddler-1296x728-header.jpg?w=1155&h=1528',
    likes: 1,
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
  const nomeCognome = el.autore.nome.split(' ')
  const nomeL = nomeCognome[0].split('')
  const cognomeL = nomeCognome[1].split('')
  const primaLetteraNome = nomeL[0]
  const primaLetteraCognome = cognomeL[0]
  const iniziali = primaLetteraNome + ' ' + primaLetteraCognome
  console.log(iniziali)
  let imgProf = null

  if (el.autore.avatar == null) {
    imgProf = iniziali
  }
  else {
    imgProf = `<img class="avatar-img" src="${el.autore.avatar}" alt="${primaLetteraNome} ${primaLetteraCognome}"></img>`
  }
  const dateToday = new Date();
  const postDate = new Date(el.data)
   let postInfoDate
  console.log(postDate)
  let dateDifference = (Math.floor(((dateToday - postDate)) / (1000 * 60 * 60 * 24)))
  console.log(dateDifference)

  if(dateDifference < 1 ){
    postInfoDate = 'Oggi'
  }else if(dateDifference > 0 && dateDifference < 2){
    postInfoDate = 'Ieri'
  }else if(dateDifference > 1 && dateDifference < 31){
    postInfoDate = dateDifference + ' giorni fa'
  }else if(dateDifference >= 31 && dateDifference < 365){
    postInfoDate = Math.floor(dateDifference / 30 )
    if(postInfoDate < 2){
      postInfoDate = postInfoDate + ' mese fa'
    } else{
      postInfoDate = postInfoDate + ' mesi fa'
    }
  }else if(dateDifference >= 365){
    postInfoDate = Math.floor(dateDifference / 365 )
    if(postInfoDate < 2){
      postInfoDate = postInfoDate + ' anno fa'
    }else{
      postInfoDate = postInfoDate + ' anni fa'
    }
  }
    
  
   console.log(postInfoDate)
  


  feedEl.innerHTML +=
    `<div class="mycontainer">
      <div class="card-top">
        <div class="avatar">
          ${imgProf}
        </div>
        <div>
          <h2 class="card-post-author">${el.autore.nome}</h2>
          <h3 class="card-post-date">${dataIta} - ${postInfoDate}</h3>
        </div>
      </div>
      <p class="post-text">${el.testo}</p>
      <img class="post-img" src="${el.immagine}" alt="">
      <div class="like-section">
        <button type="button" class="like-button"><i class="fas fa-thumbs-up"></i> Mi Piace</button> <span class="like-counter">Piace a ${el.likes} persone</span>
      </div>
    </div>`


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

