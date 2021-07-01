<template>
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
                <router-link to="/" class="navbar-item">
                    RICERCA LIBRO
                </router-link>

                <router-link to="/books" class="navbar-item">
                    I TUOI LIBRI
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data (){
    return {
     showNav: false
    }
  },
}

</script>

<style scoped>
.navbar-brand{
    padding: 0 16px;
}

.title{
    margin-left: 2px;
    color: hsl(0, 0%, 95%);
}

</style>