<template>
    <div>
        <div class="columns search">
          <input class="input column is-11" type="text" placeholder="Fai la tua ricerca (autore, titolo, etc.)" v-model="query" @keypress.enter="getBooks()">
          <button class="button is-primary is-1" @click="getBooks()">Cerca</button>
        </div>

        <section class="section">
          <div class="columns is-multiline">
              <div class="column is-6" v-for="book in books" :key="book.id">
                <book :book="book" @addBook="onAddBook($event)" />
              </div>
          </div>
          <div class="modal" :class="{ 'is-active': confermaModal }">
            <div class="modal-background"></div>
            <div class="modal-card">
              <section class="modal-card-body" :class="{'conferma' : libroSuccesso, 'presente' : libroGiaPresente}">
                <h1 class="presenzaLibro">{{ libroPresente }}</h1>
                <button  @click="confermaModal = false" class="button okbutton"><p class="subtitle">OK</p></button>
              </section>
            </div>
          </div>
        </section>
    </div>
</template>

<script>
import Book from '../components/Book.vue';
import { BOOKS } from "../api/books";

export default {
  components: { Book },
  name: 'App',
   mounted() {
        if (!localStorage.getItem('token')) {
            this.$router.replace("/login");
        }
    },
  created() {
    // this.getBooks();
  },
  data() {
    return {
      books: [],
      query: "",
      tramaModal: false,
      aggiungiModal: false,
      tipologiaLibro: '',
      confermaModal : false,
      libroPresente : "",
      libroGiaPresente : false,
      libroSuccesso : false,
      token: localStorage.getItem('token')
    }
  },
  methods: {
    async onAddBook({ book, tipologia }) {
      const newBook = {
        titolo: book.volumeInfo.title,
        autori: book.volumeInfo.authors.toString(),
        trama: book.volumeInfo.description,
        thumbnail: book.volumeInfo.imageLinks.thumbnail,
        dataPubblicazione: book.volumeInfo.publishedDate,
        editore: book.volumeInfo.publisher,
        isbn: book.volumeInfo.industryIdentifiers[0].identifier,
        tipologia: tipologia
      };

      // Controllare se libro è già presente nella libreria
      let toAdd = true;
      const bookresponse = await fetch(BOOKS+'/user/me', {
          method: 'GET',
          headers: {
              'Authorization': 'Bearer '+this.token
          },
      });
      const bookresult = await bookresponse.json();
      console.log(bookresult.message);
      if(bookresult.message !== 'Non Autorizzato!!!'){
        for(let i=0; i<bookresult.book.length; i++ ){
          if (bookresult.book[i].titolo === newBook.titolo) {
            this.confermaModal = true;
            this.libroGiaPresente = true;
            this.libroSuccesso = false;
            this.libroPresente = 'Libro già presente in libreria'
            toAdd = false;
          }
        }
      }else{
        alert('SESSIONE SCADUTA');
        localStorage.removeItem('token');
        this.$router.replace("/login");
      }
      // console.log(newBook);
      if (toAdd) {
        //console.log("newBook", newBook);
        const response = await fetch(BOOKS, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          },
          body: JSON.stringify(newBook)
        });
         let result = await response.json();
        console.log(result.messages);
          this.confermaModal = true;
          this.libroSuccesso = true;
          this.libroGiaPresente = false;
          this.libroPresente = 'Libro aggiunto in libreria con successo'        
      }
    },
    async getBooks() {
      // sintassi async/await
      try {
        const result = await fetch('https://www.googleapis.com/books/v1/volumes?q='+this.query);
        const data = await result.json();
        this.books = data.items;
      } catch(error) {
        console.log('errore: ', error);
      }
    }
  }
}
</script>

<style>
  .search{
    margin: 20px 10px;
    display: flex;
    justify-content: center;
  }
  .okbutton{
    margin: auto;
  }
  .presenzaLibro{
    text-align: center;
    color: hsl(0, 0%, 95%);
    font-size: 2vmax;
    padding-bottom: 15px;
    margin: auto;
  }

  .conferma{
    background: hsl(153, 53%, 53%);
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
  }
  .presente{
    background: hsl(348, 86%, 61%);
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
  }
</style>
