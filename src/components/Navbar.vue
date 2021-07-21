<template>
<div>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">
             <img src="../assets/HOME'S BOOKS2.png" width="170" height="38">
                <!--<span class="title is-4"> Home's Books </span>-->
            </a>

            <a role="button" class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
            <div class="navbar-start">
                
                <router-link v-if="token" to="/" class="navbar-item">
                    RICERCA LIBRO 
                </router-link>

                <router-link v-if="token" to="/books" class="navbar-item">
                    I TUOI LIBRI
                </router-link>

                <router-link v-if="!token" to="/registrazione" class="navbar-item">
                    REGISTRATI
                </router-link>

                <router-link v-if="!token" to="/login" class="navbar-item">
                    ACCEDI
                </router-link>
            </div>
             <div class="navbar-end">
                <a v-if="token" href="#" @click="signout" class="navbar-item logout">LOGOUT</a>
            </div>
        </div>
    </nav>
    <div v-if="utente" class="notification is-info is-light utente">
        CIAO {{utente}}!!!
    </div>
</div>
</template>

<script>
import { LOGIN } from "../api/books";
export default {
    name: "Navbar",
    data (){
    return {
     showNav: false,
     token: null,
     utente : null
    }
  },
  methods: {
    signout: function (){
        localStorage.removeItem('token');
        this.token = null;
        this.$router.go();
    },
     async getMe (){
    const response = await fetch(LOGIN+'/me', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer '+this.token
            },
        })
        let result =  await response.json();
        if(result.message !=='Non Autorizzato!!!'){
            this.utente = result.user.toUpperCase()
        }else{
            localStorage.removeItem('token');
            //this.$router.replace("/books");
            //his.$router.back();

        }
    }
  },
  mounted(){
    this.token = localStorage.getItem('token');
    this.getMe();
    },
    
}

</script>

<style scoped>
.navbar-brand{
    margin-left: 10px;
}

.title{
    margin-left: 2px;
    color: hsl(0, 0%, 95%);
}
.logout{
    margin-right: 10px;
}
.utente{
    /*font-family: Papyrus;*/
    text-align: center;
}

</style>