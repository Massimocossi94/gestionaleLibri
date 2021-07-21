<template>
  <div>
      <section class="section">
        <div v-if="validationErrors.length" class="card">
            <div class="card-content">
                <div v-if="validationErrors.length" class="notification is-danger is-light">
                    <button @click="resetError()" class="delete"></button>
                    <div class="content">
                        Risolvi i seguenti errori prima di procedere:
                        <ul style="margin-top:0.3em; margin-left: 1em">
                                <li
                                v-for="(error, index) in validationErrors"
                                :key="`error-${index}`"
                                v-html="error"
                                />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Email" v-model="email">
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
            </p>
        </div>
         <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="username" placeholder="Username" v-model="username">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password" v-model="password">
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
            </p>
        </div>
         <div class="field">
            <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Conferma Password" v-model="passwordConfirm">
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-success" @click="signup">
                    REGISTRATI
                </button>
            </p>
        </div>
         <p>Se sei già registrato effettua <a href="/login">qui</a> l'accesso</p>
        </section>
  </div>
</template>

<script>
import { LOGIN } from "../api/books";
export default {
    name: 'Signup',
    data() {
        return {
            email: null,
            username: null,
            password: null,
            passwordConfirm: null,
            validationErrors:[]
        }
    },
    methods : {
         resetError(){
            this.validationErrors = [];
        },
        async signup(e) {
            try {
                this.resetError();
                e.preventDefault();
                if (this.password === this.passwordConfirm) {
                    const user = {
                        email: this.email,
                        username: this.username,
                        password: this.password
                    }
                    const response = await fetch(LOGIN+'/register', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(user)
                    })
                    let result = await response.json();
                    if(result.messages === 'Success Operation'){
                        //console.log(result.error[0].msg);
                        this.$router.replace("/login");
                    }
                    if (result.message === 'Errore input'){
                        for(let i = 0; i<Object.keys(result.error).length; i++){
                            if(result.error[i].msg == 'Inserire email valida'){
                                this.validationErrors.push("Inserire <strong>E-mail</strong> valida");
                            }if(result.error[i].msg == 'Password almeno di 8 caratteri'){
                                this.validationErrors.push("Inserire <strong>Password</strong> di almeno 8 caratteri");
                            }if(result.error[i].msg == 'Email già esistente!!!'){
                                this.validationErrors.push("<strong>E-mail</strong> già esistente");
                            }if(result.error[i].msg == 'Inserisci Username'){
                                this.validationErrors.push("Inserire <strong>Username</strong>");
                            }if(result.error[i].msg == 'Username già esistente!!!'){
                                this.validationErrors.push("<strong>Username</strong> già esistente");
                            }
                        }
                    }
                }else{
                    this.validationErrors.push("le <strong>Password</strong> non corrispondono!!!");
                }
            } catch(error) {
                console.log('errore: ', error);
            } 
        }
        
    }
}
</script>

<style>

</style>