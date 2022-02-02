<template>
  <div class="card" v-if="book">
    <div class="card-content">
      <div class="media">
        <div class="media-left" v-if="book.thumbnail">
          <figure class="image is-128x128">
            <img class="immagine" :src="book.thumbnail" :alt="book.titolo">
          </figure>
          
        </div>
        <div class="media-content">
          <p class="title is-6">{{ book.titolo }}</p>
          <p class="subtitle is-6" v-if="book.autori">{{ book.autori }}</p>
          <button class="button is-small is-info is-outlined" @click="tramaModalLibrary = true">Trama</button>
        </div>
      </div>

      <div class="content">
        <strong>Editore:</strong> {{ book.editore }}<br/>
        <strong>Pubblicato il</strong> {{ new Date(book.dataPubblicazione).toLocaleDateString() }}<br/>
        <strong>ISBN:</strong> {{ book.isbn }}<br/>
        <strong>Formato:</strong> {{ book.tipologia }}<br/>
        <div id='bottoneLetto'>
          <div><strong>Letto:</strong> {{ book.letto }}</div>
          <button v-if="book.letto === 'No'" class="button is-small is-success is-outlined" @click="readBook()">Segna come letto</button>
          <br/>
        </div>
      </div>
      <div class="cardButton">
        <button class="button is-primary is-info" @click="modificaModale = true">Modifica</button>
        <button class="button is-primary is-focused" @click="confermaDelete  = true">Elimina</button>
      </div>

      <div class="modal" :class="{ 'is-active': tramaModalLibrary }">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Trama</p>
            <button @click="tramaModalLibrary = false" class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <div class="title is-6">{{ book.titolo }}</div>
            <span>{{ getTrama(book) }}</span>
          </section>
        </div>
      </div>

      <div class="modal" :class="{ 'is-active': modificaModale }">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Modifica</p>
            <button @click="modificaModale = false" class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <div class="field">
              <label class="label">Titolo</label>
              <div class="control">
                <input class="input" type="text" v-model="book.titolo">
              </div>
            </div>
            <div class="field">
              <label class="label">Autore/i</label>
              <div class="control">
                <input class="input" type="text" v-model="book.autori">
              </div>
            </div>
            <div class="field">
              <label class="label">Editore</label>
              <div class="control">
                <input class="input" type="text" v-model="book.editore">
              </div>
            </div>
            <div class="field">
              <label class="label">ISBN</label>
              <div class="control">
                <input class="input" type="text" v-model="book.isbn">
              </div>
            </div>
            <div class="field">
              <label class="label">Trama</label>
              <div class="control">
                <textarea class="textarea" v-model="book.trama"></textarea>
              </div>
            </div>
            <div class="field">
              <label class="label">Copertina</label>
              <div class="control">
                  <input placeholder="Incolla indirizzo immagine" class="input" type="text" v-model="book.thumbnail">
              </div>
            </div>
            <div class="field">
            <label class="label">Libro Letto?</label>
            <div class="control">
              <div class="select">
                <select @change="onLettoChange">
                  <option selected disabled hidden>Seleziona</option>
                  <option value="Sì">Sì</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>
            <button class="button is-info" @click="updateBook">Salva</button>
          </section>
        </div>
      </div>

      <div class="modal" :class="{ 'is-active': confermaDelete }">
        <div class="modal-background"></div>
        <div class="modal-card">
          <section class="modal-card-body deleteModal">
            <h1 class="eliminaLibro">Sei sicuro/a di voler eliminare il libro?</h1>
            <div class="deleteButton">
              <button  @click="confermaDelete  = false" class="button is-danger">ANNULLA</button>
              <button  @click="deleteBook(); confermaDelete  = false; " class="button is-success">CONFERMA</button>
            </div>
          </section>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
    props: {
        book: []
    },
    data (){
      return {
        tramaModalLibrary: false,
        confermaDelete : false,
        modificaModale : false
      }
    },
    methods:{
      onLettoChange(event) {
      this.book.letto = event.target.value;
    },
      deleteBook(){
          this.$emit('deleteBook', this.book);
      },
      getTrama(book) {
        let description = "Trama non disponibile";
        if (book.trama) {
          description = book.trama;
        }
        return description;
      },
      updateBook() {
        this.$emit('updateBook', this.book);
        this.modificaModale = false;
      },
      readBook() {
        this.book.letto = 'Sì'
        this.$emit('readBook',this.book);
      }
    }
}

</script>


<style>
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
  .modal-card-head{
    background: hsl(207, 61%, 53%);
  }
  .modal-card-title{
    color: hsl(0, 0%, 93%);
  }
  .eliminaLibro{
    text-align: center;
    font-size: 1.5rem;
    color: black;
    padding-bottom: 20px;
  }
  .deleteButton{
    display: flex;
    justify-content: space-evenly;
  }

  .deleteModal{
    background: hsl(44, 100%, 77%);
    border-radius: 10px;
  }
  .immagine{
    max-width: 100%;
    max-height: 140%;    
  }
  .content{
    padding-top: 30px;
  }
  #bottoneLetto{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
</style>