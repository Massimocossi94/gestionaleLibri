<template>
    <div>
        <div class="modal" :class="{ 'is-active': aggiungiModale }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Aggiungi Libro</p>
                    <button @click="aggiungiModale = false" class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <div class="field">
                        <label class="label">Titolo</label>
                        <div class="control">
                            <input class="input" type="text" v-model="titolo">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Autore/i</label>
                        <div class="control">
                            <input class="input" type="text" v-model="autori">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Editore</label>
                        <div class="control">
                            <input class="input" type="text" v-model="editore">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">ISBN</label>
                        <div class="control">
                            <input class="input" type="text" v-model="isbn">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Trama</label>
                        <div class="control">
                            <textarea class="textarea" v-model="trama"></textarea>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Copertina</label>
                        <div class="control">
                            <input placeholder="Incolla indirizzo immagine" class="input" type="text" v-model="thumbnail">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Data di pubblicazione</label>
                        <div class="control">
                            <input class="input" type="text" v-model="dataPubblicazione">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Seleziona Tipologia</label>
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
                        <label class="checkbox">
                            <input id='letto2' type="checkbox"> Libro letto
                        </label>
                    </div>
                    <button class="button is-info" @click="createBook" :disabled="tipologia==='Seleziona tipologia'">
                        Salva</button>
                </section>
            </div>
        </div>

        <section class="section">
            <label class="label">Aggiungi Libro che non trovi nella ricerca</label>
            <button class="button is-primary" @click="aggiungiModale = true">Aggiungi</button>
            
            <div class="field Ricerca">
                <label class="label">Ricerca per Autore</label>
                <div class="control">
                    <input class="input" type="text" v-model="ricercaAutore" placeholder="es. Donato Carrisi">
                </div>
                <label class="label">Ricerca per Titolo</label>
                <div class="control">
                    <input class="input" type="text" v-model="ricercaTitolo" placeholder="es. La ragazza nella nebbia">
                </div>
            </div>
            <div class="field">
                <label class="label">Filtra per Tipologia</label>
                <div class="control">
                    <div class="select">
                        <select  @change="onOptionChange">
                            <option value="All">Tutti</option>
                            <option
                                v-for="option in options"
                                :key="option.value"
                                :value="option.value"
                            >{{ option.label }}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">Filtra per Letti o Non Letti</label>
                <div class="control">
                    <div class="select">
                        <select  @change="onReadOptionChange">
                            <option value="All">Tutti</option>
                            <option
                                v-for="optionread in optionsread"
                                :key="optionread.value"
                                :value="optionread.value"
                            >{{ optionread.label }}</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div class="modal" :class="{ 'is-active': confermaModal }">
                <div class="modal-background"></div>
                <div class="modal-card">
                <section class="modal-card-body" :class="{'conferma' : libroSuccesso, 'presente' : libroGiaPresente}">
                    <h1 class="presenzaLibro">{{ libroPresente }}</h1>
                    <button  @click="confermaModal = false"  class="button okbutton">
                      <p class="subtitle">OK</p>
                    </button>
                </section>
                </div>
            </div> 

            <div v-if="libriFiltrati.length > 0" class="columns is-multiline">
                <div class="column is-6" v-for="book in libriFiltrati" :key="book.id">
                    <my-book :book="book" @deleteBook="onDeleteBook($event)" 
                    @updateBook="onUpdateBook($event)" @readBook="onReadBook($event)"></my-book>
                </div>
            </div>
            <h2 class="title is-2" v-else>Nessun libro trovato.</h2>
        </section>
    </div>
</template>

<script>
import MyBook from '../components/MyBook.vue';
import { BOOKS } from "../api/books";

export default {
    components:{
        MyBook
    },
    name: "Libreria",
    mounted() {
        if (!localStorage.getItem('token')) {
            this.$router.push("/login");
        }
    },
    data() {
        return {
            books: [],
            options: [
                { value: 'Ebook', label: 'EBook' },
                { value: 'Cartaceo', label: 'Cartaceo' },
                { value: 'AudioLibro', label: 'Audio libro' }
            ],
            optionsread: [
                { value: 'Sì', label: 'Letti' },
                { value: 'No', label: 'Non Letti' },
            ],
            optionSelected: null,
            optionSelectedread: null,
            ricercaAutore: '',
            ricercaTitolo:'',
            token: localStorage.getItem('token'),
            aggiungiModale: false,
            titolo: null,
            autori: null,
            trama: null,
            thumbnail: null,
            dataPubblicazione: null,
            editore: null,
            isbn: null,
            tipologia: null,
            letto:null,
            confermaModal : false,
            libroPresente : "",
            libroGiaPresente : false,
            libroSuccesso : false,
        }
    },
    created(){
        this.getbooks();
    },
    computed: {
        libriFiltrati() {
            let filtrati = [];
            // Filtro per tipologia
            if (this.optionSelected !== null && this.optionSelected !== 'All') {
                this.books.forEach(book => {
                    if (book.tipologia === this.optionSelected) {
                        filtrati.push(book);
                    }
                });
            }else {
                filtrati = this.books;
            }
            // Filtro per Letti
            if (this.optionSelectedread !== null && this.optionSelectedread !== 'All') {
                filtrati = filtrati.filter(book => {
                    return book.letto.includes(this.optionSelectedread)
                });
            }
            // Filtro per autore
            if (this.ricercaAutore !== '') {
                filtrati = filtrati.filter(book => {
                    return book.autori.toLowerCase().includes(this.ricercaAutore.toLowerCase())
                });
            }
            // Filtro per titolo
            if (this.ricercaTitolo !== '') {
                filtrati = filtrati.filter(book => {
                    return book.titolo.toLowerCase().includes(this.ricercaTitolo.toLowerCase())
                });
            }
            //ritorno i libri in ordine alfabetico in base al titolo
            return  filtrati.sort(function(a, b) {
                var nameA = a.titolo.toUpperCase(); 
                var nameB = b.titolo.toUpperCase(); 
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                //Se titoli uguali
                return 0;
            });
        }
    },
    methods: {
        onReadOptionChange(event) {
            this.optionSelectedread = event.target.value;
        },
        onTipologiaChange(event) {
            this.tipologia = event.target.value;
        },
        onOptionChange(event) {
            this.optionSelected = event.target.value;
        },
         async getbooks(){
             try{
                 const result = await fetch(BOOKS+'/user/me', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer '+this.token
                    },
                });
                 const data = await result.json();
                 if(data.message !== 'Non Autorizzato!!!'){
                    this.books = data.book;
                 }else{
                     alert('SESSIONE SCADUTA')
                     localStorage.removeItem('token');
                     this.$router.replace("/login");
                     //window.location.reload()
                 }
             }catch(error) {
                console.log('errore: ', error);
             }
        },
        async onUpdateBook(book) {
            try {
                const result = await fetch(BOOKS+'/'+book.id, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+this.token
                    },
                    body: JSON.stringify(book)
                })
                await result.json();
                this.getbooks();
            } catch(error) {
                console.log('errore: ', error);
            }
        },
        async onReadBook(book) {
            try {
                const result = await fetch(BOOKS+'/'+book.id, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+this.token
                    },
                    body: JSON.stringify(book)
                })
                await result.json();
                this.getbooks();
            } catch(error) {
                console.log('errore: ', error);
            }
        },
        async onDeleteBook(book){
            try{
                const result = await fetch(BOOKS+'/'+book.id, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer '+this.token
                    },
                })
                await result.json();
                this.getbooks();
            } catch(error) {
                console.log('errore: ', error);
            }
        },
        async createBook() {
            let letto = document.getElementById('letto2');
                if (letto.checked)
                    this.letto='Sì';
                else
                    this.letto='No';
            const newBook = {
                titolo: this.titolo,
                autori: this.autori,
                trama: this.trama,
                thumbnail: this.thumbnail,
                dataPubblicazione: this.dataPubblicazione,
                editore: this.editore,
                isbn: this.isbn,
                tipologia: this.tipologia,
                letto:this.letto
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
            for(let i=0; i<bookresult.book.length; i++ ){
                if (bookresult.book[i].titolo === newBook.titolo && bookresult.book[i].autore === newBook.autore 
                        &&  bookresult.book[i].tipologia === newBook.tipologia) {
                    this.confermaModal = true;
                    this.libroGiaPresente = true;
                    this.libroSuccesso = false;
                    this.libroPresente = 'Libro già presente in libreria'
                    toAdd = false;
                }
            }
            // console.log(newBook);
            if (toAdd) {
                //console.log("newBook", newBook);
                const response = await fetch(BOOKS, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+this.token
                    },
                    body: JSON.stringify(newBook)
                });
                let result = await response.json();
                //console.log(result.error);
                if(result.messages !== 'Success Operation'){
                    for(let i = 0; i<Object.keys(result.error).length; i++){
                        if(result.error[i].msg == 'Titolo Maggiore di 3 caratteri'){
                            this.confermaModal = true;
                            this.libroGiaPresente = true;
                            this.libroSuccesso = false;
                            this.libroPresente = 'Titolo obbligatorio'
                        }
                        if(result.error[i].msg == 'tipologia non vuota'){
                            this.confermaModal = true;
                            this.libroGiaPresente = true;
                            this.libroSuccesso = false;
                            this.libroPresente = 'Scegliere tipologia'
                        }
                    }
                }else{
                    this.confermaModal = true;
                    this.libroSuccesso = true;
                    this.libroGiaPresente = false;
                    this.libroPresente = 'Libro aggiunto in libreria con successo'
                    this.aggiungiModale = false;
                    this.getbooks();  
                }  
            }
        }
    }
}
</script>
<style>
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
    .presenzaLibro{
        font-size: 1.5rem;
    }
    .button{
        margin-bottom: 10px;
    }
    .Ricerca .control{
        margin-bottom: 10px;
    }
</style>