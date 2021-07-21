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
            <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password" v-model="password">
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-success" @click="signin">
                    ACCEDI
                </button>
            </p>
            <p>Se non sei ancora registrato crea il tuo profilo <a href="/registrazione">qui</a></p>
        </div>
        </section>
  </div>
</template>

<script>

import { LOGIN } from "../api/books";
export default {
    name: 'Signin',
    data() {
        return {
            email: null,
            password: null,
            validationErrors:[]
        }
    },
    methods : {
        resetError(){
            this.validationErrors = [];
        },
        async signin(e) {
            this.resetError();
            e.preventDefault();
            const user = {
                    email: this.email,
                    password: this.password
            }
            const response = await fetch(LOGIN+'/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            let result = await response.json();
            if(result.messages === 'Sei Loggato'){
                localStorage.setItem('token', result.token);
                this.$router.replace("/");
                window.location.reload()
            }if (result.message === 'Email errata!!!'){
                this.validationErrors.push("<strong>E-mail</strong> errata");
            }if (result.message === 'Password errata'){
                this.validationErrors.push("<strong>Password</strong> errata");
            }if (result.message === 'Errore input'){
                for(let i = 0; i<Object.keys(result.error).length; i++){
                    if(result.error[i].msg == 'Inserire email valida'){
                        this.validationErrors.push("Inserire <strong>E-mail</strong> valida");
                    }if(result.error[i].msg == 'Password almeno di 8 caratteri'){
                        this.validationErrors.push("Inserire <strong>Password</strong> di almeno 8 caratteri");
                    }
                }
            }
            
        }
        
    }
}
</script>

<style>


</style>