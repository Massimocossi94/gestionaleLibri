<template>
  <div class="card" v-if="book">
   <!-- 
    <div class="card-image">
      <figure class="image is-50x60" v-if="book.volumeInfo.imageLinks">
        <img :src="book.volumeInfo.imageLinks.thumbnail" :alt="book.volumeInfo.title">
      </figure>
    </div>
    -->
    <div class="card-content">
      <div class="media">
        <div class="media-left" v-if="book.volumeInfo.imageLinks">
          <figure class="image is-68x68">
            <img :src="book.volumeInfo.imageLinks.thumbnail" :alt="book.volumeInfo.title">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-6">{{ book.volumeInfo.title }}</p>
          <p class="subtitle is-6" v-if="book.volumeInfo.authors">{{ getAuthors(book.volumeInfo.authors) }}</p>
        </div>
      </div>

      <div class="content">
        Editore: {{ book.volumeInfo.publisher }}<br/>
        Pubblicato il {{ new Date(book.volumeInfo.publishedDate).toLocaleDateString() }}<br/>
        ISBN: {{ getISBN(book.volumeInfo.industryIdentifiers) }}<br/>
      </div>
      <div class="cardButton">
        <button class="button is-primary is-info" @click="tramaModal = true">Trama</button>
        <button class="button is-primary is-focused" @click="aggiungiModal = true">Aggiungi</button>
      </div>
      
      <div class="modal" :class="{ 'is-active': tramaModal }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Trama</p>
              <button @click="tramaModal = false" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
              <div class="title is-6">{{ book.volumeInfo.title }}</div>
              <span>{{ getTrama(book) }}</span>
            </section>
          </div>
        </div>
      </div>
      <div class="modal" :class="{ 'is-active': aggiungiModal }">
        <div class="modal-background"></div>
        <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">In quale formato hai il libro?</p>
          <button @click="aggiungiModal = false" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">Seleziona tipologia</label>
            <div class="control">
              <div class="select">
                <select @change="onTipologiaChange">
                  <option>Seleziona tipologia</option>
                  <option value="Cartaceo">Cartaceo</option>
                  <option value="Ebook">Ebook</option>
                  <option value="AudioLibro">Audio libro</option>
                </select>
              </div>
            </div>
          </div>
         <div class="field">
            <label class="label">Libro Letto?</label>
            <div class="control">
              <div class="select">
                <select @change="onLettoChange">
                  <option>Seleziona</option>
                  <option value="Sì">Sì</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot formatButtons">
          <button @click="aggiungiModal = false" class="button">Chiudi</button>
          <button class="button is-primary" @click="addBook" :disabled="tipologiaLibro === '' || libroLetto==='' 
            || libroLetto==='Seleziona' || tipologiaLibro === 'Seleziona tipologia'">Aggiungi Libro</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: {
    book: Object,
  },
  data (){
    return {
      tramaModal: false,
      aggiungiModal: false,
      tipologiaLibro: '',
      libroLetto:''
    }
  },
  methods: {
    onTipologiaChange(event) {
      this.tipologiaLibro = event.target.value;
    },
    onLettoChange(event) {
      this.libroLetto = event.target.value;
    },
    getAuthors(authors) {
      return authors.join(", ");
    },
    getISBN(codes) {
      const findIsbn10 = codes.find(code => code.type === "ISBN_13");
      if (findIsbn10) {
        return findIsbn10.identifier;
      } else {
        return "Non trovato";
      }
    },
    getTrama(book) {
      let description = "Trama non disponibile";
      if (book.volumeInfo.description) {
        description = book.volumeInfo.description;
      }
      return description;
    },
    addBook() {
      this.$emit('addBook', { book: this.book, tipologia: this.tipologiaLibro, letto:this.libroLetto });
      this.aggiungiModal = false;
    }
  }
}
</script>

<style scoped>
.cardButton{
  display: flex;
  justify-content: space-between;
}
.modal-card-head{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.modal-card-body {
  text-align: justify;
}
.booksFormat{
  display: flex;
  justify-content: space-around;
}
.formatButtons{
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}
 .modal-card-head{
    background: hsl(207, 61%, 53%);
  }
  .modal-card-title{
    color: hsl(0, 0%, 93%);
  }
  .modal-card-foot{
    background: white;
    border: white;
  }
  


</style>
