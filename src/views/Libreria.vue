<template>
    <div>
        <section class="section">
            <div class="field">
                <label class="label">Ricerca per autore</label>
                <div class="control">
                    <input class="input" type="text" v-model="ricercaAutore" placeholder="es. Donato Carrisi">
                </div>
            </div>
            <div class="field">
                <label class="label">Filtra per tipologia</label>
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
            

            <div v-if="libriFiltrati.length > 0" class="columns is-multiline">
                <div class="column is-6" v-for="book in libriFiltrati" :key="book.id">
                    <my-book :book="book" @deleteBook="onDeleteBook($event)" @updateBook="onUpdateBook($event)"></my-book>
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
            optionSelected: null,
            ricercaAutore: '',
            token: localStorage.getItem('token')
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
            } else {
                filtrati = this.books;
            }
            // Filtro per autore
            if (this.ricercaAutore !== '') {
                filtrati = filtrati.filter(book => {
                    return book.autori.toLowerCase().includes(this.ricercaAutore.toLowerCase())
                });
            }
            return filtrati;
        }
    },
    methods: {
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
                        'Accept': 'application/json',
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
        }  
    }
}
</script>
