(function(t){function e(e){for(var o,n,r=e[0],l=e[1],c=e[2],d=0,m=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(o=!1)}o&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},i={app:0},s=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0f30":function(t,e,a){"use strict";a("12e7")},"12e7":function(t,e,a){},3887:function(t,e,a){"use strict";a("6dd2")},"43fe":function(t,e,a){"use strict";a("5d3e")},"4be0":function(t,e,a){"use strict";a("d3b4")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("navbar"),a("router-view")],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar is-info",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[t._m(0),a("a",{staticClass:"navbar-burger",class:{"is-active":t.showNav},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){t.showNav=!t.showNav}}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"navbar-menu",class:{"is-active":t.showNav},attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[t.token?a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v(" RICERCA LIBRO ")]):t._e(),t.token?a("router-link",{staticClass:"navbar-item",attrs:{to:"/books"}},[t._v(" I TUOI LIBRI ")]):t._e(),t.token?t._e():a("router-link",{staticClass:"navbar-item",attrs:{to:"/registrazione"}},[t._v(" REGISTRATI ")]),t.token?t._e():a("router-link",{staticClass:"navbar-item",attrs:{to:"/login"}},[t._v(" ACCEDI ")])],1),a("div",{staticClass:"navbar-end"},[t.token?a("a",{staticClass:"navbar-item logout",attrs:{href:"#"},on:{click:t.signout}},[t._v("LOGOUT")]):t._e()])])]),t.utente?a("div",{staticClass:"notification is-info is-light utente"},[t._v(" CIAO "+t._s(t.utente)+"!!! ")]):t._e()])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{staticClass:"navbar-item"},[o("img",{attrs:{src:a("a862"),width:"170",height:"38"}})])}],l=a("1da1"),c=(a("96cf"),a("d3b7"),"https://gestionale-libri-backend.herokuapp.com/book"),u="https://gestionale-libri-backend.herokuapp.com/auth",d={name:"Navbar",data:function(){return{showNav:!1,token:null,utente:null}},methods:{signout:function(){localStorage.removeItem("token"),this.token=null,this.$router.go()},getMe:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(u+"/me",{method:"GET",headers:{Authorization:"Bearer "+t.token}});case 2:return a=e.sent,e.next=5,a.json();case 5:o=e.sent,"Non Autorizzato!!!"!==o.message?t.utente=o.user.toUpperCase():localStorage.removeItem("token");case 7:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.token=localStorage.getItem("token"),this.getMe()}},m=d,v=(a("3887"),a("2877")),p=Object(v["a"])(m,n,r,!1,null,"337463e4",null),b=p.exports,g={components:{Navbar:b},name:"App"},f=g,C=(a("034f"),Object(v["a"])(f,i,s,!1,null,null,null)),h=C.exports,k=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"columns search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input column is-11",attrs:{type:"text",placeholder:"Fai la tua ricerca (autore, titolo, etc.)"},domProps:{value:t.query},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getBooks()},input:function(e){e.target.composing||(t.query=e.target.value)}}}),a("button",{staticClass:"button is-primary is-1",on:{click:function(e){return t.getBooks()}}},[t._v("Cerca")])]),a("section",{staticClass:"section"},[a("div",{staticClass:"columns is-multiline"},t._l(t.books,(function(e){return a("div",{key:e.id,staticClass:"column is-6"},[a("book",{attrs:{book:e},on:{addBook:function(e){return t.onAddBook(e)}}})],1)})),0),a("div",{staticClass:"modal",class:{"is-active":t.confermaModal}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-card"},[a("section",{staticClass:"modal-card-body",class:{conferma:t.libroSuccesso,presente:t.libroGiaPresente}},[a("h1",{staticClass:"presenzaLibro"},[t._v(t._s(t.libroPresente))]),a("button",{staticClass:"button okbutton",on:{click:function(e){t.confermaModal=!1}}},[a("p",{staticClass:"subtitle"},[t._v("OK")])])])])])])])},w=[],y=(a("ac1f"),a("5319"),a("25f0"),a("a4d3"),a("e01a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.book?a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[t.book.volumeInfo.imageLinks?a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-68x68"},[a("img",{attrs:{src:t.book.volumeInfo.imageLinks.thumbnail,alt:t.book.volumeInfo.title}})])]):t._e(),a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-6"},[t._v(t._s(t.book.volumeInfo.title))]),t.book.volumeInfo.authors?a("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.getAuthors(t.book.volumeInfo.authors)))]):t._e()])]),a("div",{staticClass:"content"},[t._v(" Editore: "+t._s(t.book.volumeInfo.publisher)),a("br"),t._v(" Pubblicato il "+t._s(new Date(t.book.volumeInfo.publishedDate).toLocaleDateString())),a("br"),t._v(" ISBN: "+t._s(t.getISBN(t.book.volumeInfo.industryIdentifiers))),a("br")]),a("div",{staticClass:"cardButton"},[a("button",{staticClass:"button is-primary is-info",on:{click:function(e){t.tramaModal=!0}}},[t._v("Trama")]),a("button",{staticClass:"button is-primary is-focused",on:{click:function(e){t.aggiungiModal=!0}}},[t._v("Aggiungi")])]),a("div",{staticClass:"modal",class:{"is-active":t.tramaModal}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Trama")]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.tramaModal=!1}}})]),a("section",{staticClass:"modal-card-body"},[a("div",{staticClass:"title is-6"},[t._v(t._s(t.book.volumeInfo.title))]),a("span",[t._v(t._s(t.getTrama(t.book)))])])])])]),a("div",{staticClass:"modal",class:{"is-active":t.aggiungiModal}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("In quale formato hai il libro?")]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.aggiungiModal=!1}}})]),a("section",{staticClass:"modal-card-body"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Seleziona tipologia")]),a("div",{staticClass:"control"},[a("div",{staticClass:"select"},[a("select",{on:{change:t.onTipologiaChange}},[a("option",[t._v("Seleziona tipologia")]),a("option",{attrs:{value:"Cartaceo"}},[t._v("Cartaceo")]),a("option",{attrs:{value:"Ebook"}},[t._v("Ebook")]),a("option",{attrs:{value:"AudioLibro"}},[t._v("Audio libro")])])])])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Libro Letto?")]),a("div",{staticClass:"control"},[a("div",{staticClass:"select"},[a("select",{on:{change:t.onLettoChange}},[a("option",[t._v("Seleziona")]),a("option",{attrs:{value:"Sì"}},[t._v("Sì")]),a("option",{attrs:{value:"No"}},[t._v("No")])])])])])]),a("footer",{staticClass:"modal-card-foot formatButtons"},[a("button",{staticClass:"button",on:{click:function(e){t.aggiungiModal=!1}}},[t._v("Chiudi")]),a("button",{staticClass:"button is-primary",attrs:{disabled:""===t.tipologiaLibro||""===t.libroLetto||"Seleziona"===t.libroLetto||"Seleziona tipologia"===t.tipologiaLibro},on:{click:t.addBook}},[t._v("Aggiungi Libro")])])])])]):t._e()}),x=[],S=(a("a15b"),a("7db0"),{name:"Book",props:{book:Object},data:function(){return{tramaModal:!1,aggiungiModal:!1,tipologiaLibro:"",libroLetto:""}},methods:{onTipologiaChange:function(t){this.tipologiaLibro=t.target.value},onLettoChange:function(t){this.libroLetto=t.target.value},getAuthors:function(t){return t.join(", ")},getISBN:function(t){var e=t.find((function(t){return"ISBN_13"===t.type}));return e?e.identifier:"Non trovato"},getTrama:function(t){var e="Trama non disponibile";return t.volumeInfo.description&&(e=t.volumeInfo.description),e},addBook:function(){this.$emit("addBook",{book:this.book,tipologia:this.tipologiaLibro,letto:this.libroLetto}),this.aggiungiModal=!1}}}),E=S,P=(a("0f30"),Object(v["a"])(E,y,x,!1,null,"1df66c78",null)),O=P.exports,I={components:{Book:O},name:"App",mounted:function(){localStorage.getItem("token")||this.$router.replace("/login")},data:function(){return{books:[],query:"",tramaModal:!1,aggiungiModal:!1,tipologiaLibro:"",letto:"",confermaModal:!1,libroPresente:"",libroGiaPresente:!1,libroSuccesso:!1,token:localStorage.getItem("token")}},methods:{onAddBook:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var o,i,s,n,r,l,u,d,m,v;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=t.book,i=t.tipologia,s=t.letto,n={titolo:o.volumeInfo.title,autori:o.volumeInfo.authors.toString(),trama:o.volumeInfo.description,thumbnail:o.volumeInfo.imageLinks.thumbnail,dataPubblicazione:o.volumeInfo.publishedDate,editore:o.volumeInfo.publisher,isbn:o.volumeInfo.industryIdentifiers[0].identifier,tipologia:i,letto:s},r=!0,a.next=5,fetch(c+"/user/me",{method:"GET",headers:{Authorization:"Bearer "+e.token}});case 5:return l=a.sent,a.next=8,l.json();case 8:if(u=a.sent,"Non Autorizzato!!!"!==u.message)for(d=0;d<u.book.length;d++)u.book[d].titolo===n.titolo&&u.book[d].autore===n.autore&&u.book[d].tipologia===n.tipologia&&(e.confermaModal=!0,e.libroGiaPresente=!0,e.libroSuccesso=!1,e.libroPresente="Libro già presente in libreria",r=!1);else alert("SESSIONE SCADUTA"),localStorage.removeItem("token"),e.$router.replace("/login");if(!r){a.next=22;break}return a.next=13,fetch(c,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+e.token},body:JSON.stringify(n)});case 13:return m=a.sent,a.next=16,m.json();case 16:v=a.sent,console.log(v.messages),e.confermaModal=!0,e.libroSuccesso=!0,e.libroGiaPresente=!1,e.libroPresente="Libro aggiunto in libreria con successo";case 22:case"end":return a.stop()}}),a)})))()},getBooks:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.googleapis.com/books/v1/volumes?q="+t.query);case 3:return a=e.sent,e.next=6,a.json();case 6:o=e.sent,t.books=o.items,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log("errore: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}}},L=I,T=(a("4be0"),Object(v["a"])(L,_,w,!1,null,null,null)),N=T.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal",class:{"is-active":t.aggiungiModale}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Aggiungi Libro")]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.aggiungiModale=!1}}})]),a("section",{staticClass:"modal-card-body"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Titolo")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.titolo,expression:"titolo"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.titolo},on:{input:function(e){e.target.composing||(t.titolo=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Autore/i")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.autori,expression:"autori"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.autori},on:{input:function(e){e.target.composing||(t.autori=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Editore")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.editore,expression:"editore"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.editore},on:{input:function(e){e.target.composing||(t.editore=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("ISBN")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.isbn,expression:"isbn"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.isbn},on:{input:function(e){e.target.composing||(t.isbn=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Trama")]),a("div",{staticClass:"control"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.trama,expression:"trama"}],staticClass:"textarea",domProps:{value:t.trama},on:{input:function(e){e.target.composing||(t.trama=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Copertina")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.thumbnail,expression:"thumbnail"}],staticClass:"input",attrs:{placeholder:"Incolla indirizzo immagine",type:"text"},domProps:{value:t.thumbnail},on:{input:function(e){e.target.composing||(t.thumbnail=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Data di pubblicazione")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.dataPubblicazione,expression:"dataPubblicazione"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.dataPubblicazione},on:{input:function(e){e.target.composing||(t.dataPubblicazione=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Seleziona Tipologia")]),a("div",{staticClass:"control"},[a("div",{staticClass:"select"},[a("select",{on:{change:t.onTipologiaChange}},[a("option",[t._v("Seleziona tipologia")]),a("option",{attrs:{value:"Cartaceo"}},[t._v("Cartaceo")]),a("option",{attrs:{value:"Ebook"}},[t._v("Ebook")]),a("option",{attrs:{value:"AudioLibro"}},[t._v("Audio libro")])])])])]),t._m(0),a("button",{staticClass:"button is-info",attrs:{disabled:"Seleziona tipologia"===t.tipologia},on:{click:t.createBook}},[t._v(" Salva")])])])]),a("section",{staticClass:"section"},[a("label",{staticClass:"label"},[t._v("Aggiungi Libro che non trovi nella ricerca")]),a("button",{staticClass:"button is-primary",on:{click:function(e){t.aggiungiModale=!0}}},[t._v("Aggiungi")]),a("div",{staticClass:"field Ricerca"},[a("label",{staticClass:"label"},[t._v("Ricerca per Autore")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.ricercaAutore,expression:"ricercaAutore"}],staticClass:"input",attrs:{type:"text",placeholder:"es. Donato Carrisi"},domProps:{value:t.ricercaAutore},on:{input:function(e){e.target.composing||(t.ricercaAutore=e.target.value)}}})]),a("label",{staticClass:"label"},[t._v("Ricerca per Titolo")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.ricercaTitolo,expression:"ricercaTitolo"}],staticClass:"input",attrs:{type:"text",placeholder:"es. La ragazza nella nebbia"},domProps:{value:t.ricercaTitolo},on:{input:function(e){e.target.composing||(t.ricercaTitolo=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Filtra per Tipologia")]),a("div",{staticClass:"control"},[a("div",{staticClass:"select"},[a("select",{on:{change:t.onOptionChange}},[a("option",{attrs:{value:"All"}},[t._v("Tutti")]),t._l(t.options,(function(e){return a("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.label))])}))],2)])])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Filtra per Letti o Non Letti")]),a("div",{staticClass:"control"},[a("div",{staticClass:"select"},[a("select",{on:{change:t.onReadOptionChange}},[a("option",{attrs:{value:"All"}},[t._v("Tutti")]),t._l(t.optionsread,(function(e){return a("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.label))])}))],2)])])]),a("div",{staticClass:"modal",class:{"is-active":t.confermaModal}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-card"},[a("section",{staticClass:"modal-card-body",class:{conferma:t.libroSuccesso,presente:t.libroGiaPresente}},[a("h1",{staticClass:"presenzaLibro"},[t._v(t._s(t.libroPresente))]),a("button",{staticClass:"button okbutton",on:{click:function(e){t.confermaModal=!1}}},[a("p",{staticClass:"subtitle"},[t._v("OK")])])])])]),t.libriFiltrati.length>0?a("div",{staticClass:"columns is-multiline"},t._l(t.libriFiltrati,(function(e){return a("div",{key:e.id,staticClass:"column is-6"},[a("my-book",{attrs:{book:e},on:{deleteBook:function(e){return t.onDeleteBook(e)},updateBook:function(e){return t.onUpdateBook(e)},readBook:function(e){return t.onReadBook(e)}}})],1)})),0):a("h2",{staticClass:"title is-2"},[t._v("Nessun libro trovato.")])])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{staticClass:"checkbox"},[a("input",{attrs:{id:"letto2",type:"checkbox"}}),t._v(" Libro letto ")])])}],M=(a("159b"),a("4de4"),a("caad"),a("2532"),a("b64b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.book?a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[t.book.thumbnail?a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-128x128"},[a("img",{staticClass:"immagine",attrs:{src:t.book.thumbnail,alt:t.book.titolo}})])]):t._e(),a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-6"},[t._v(t._s(t.book.titolo))]),t.book.autori?a("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.book.autori))]):t._e(),a("button",{staticClass:"button is-small is-info is-outlined",on:{click:function(e){t.tramaModalLibrary=!0}}},[t._v("Trama")])])]),a("div",{staticClass:"content"},[a("strong",[t._v("Editore:")]),t._v(" "+t._s(t.book.editore)),a("br"),a("strong",[t._v("Pubblicato il")]),t._v(" "+t._s(new Date(t.book.dataPubblicazione).toLocaleDateString())),a("br"),a("strong",[t._v("ISBN:")]),t._v(" "+t._s(t.book.isbn)),a("br"),a("strong",[t._v("Formato:")]),t._v(" "+t._s(t.book.tipologia)),a("br"),a("div",{attrs:{id:"bottoneLetto"}},[a("div",[a("strong",[t._v("Letto:")]),t._v(" "+t._s(t.book.letto))]),"No"===t.book.letto?a("button",{staticClass:"button is-small is-success is-outlined",on:{click:function(e){return t.readBook()}}},[t._v("Segna come letto")]):t._e(),a("br")])]),a("div",{staticClass:"cardButton"},[a("button",{staticClass:"button is-primary is-info",on:{click:function(e){t.modificaModale=!0}}},[t._v("Modifica")]),a("button",{staticClass:"button is-primary is-focused",on:{click:function(e){t.confermaDelete=!0}}},[t._v("Elimina")])]),a("div",{staticClass:"modal",class:{"is-active":t.tramaModalLibrary}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Trama")]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.tramaModalLibrary=!1}}})]),a("section",{staticClass:"modal-card-body"},[a("div",{staticClass:"title is-6"},[t._v(t._s(t.book.titolo))]),a("span",[t._v(t._s(t.getTrama(t.book)))])])])]),a("div",{staticClass:"modal",class:{"is-active":t.modificaModale}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Modifica")]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.modificaModale=!1}}})]),a("section",{staticClass:"modal-card-body"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Titolo")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.book.titolo,expression:"book.titolo"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.book.titolo},on:{input:function(e){e.target.composing||t.$set(t.book,"titolo",e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Autore/i")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.book.autori,expression:"book.autori"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.book.autori},on:{input:function(e){e.target.composing||t.$set(t.book,"autori",e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Editore")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.book.editore,expression:"book.editore"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.book.editore},on:{input:function(e){e.target.composing||t.$set(t.book,"editore",e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("ISBN")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.book.isbn,expression:"book.isbn"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.book.isbn},on:{input:function(e){e.target.composing||t.$set(t.book,"isbn",e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Trama")]),a("div",{staticClass:"control"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.book.trama,expression:"book.trama"}],staticClass:"textarea",domProps:{value:t.book.trama},on:{input:function(e){e.target.composing||t.$set(t.book,"trama",e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Copertina")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.book.thumbnail,expression:"book.thumbnail"}],staticClass:"input",attrs:{placeholder:"Incolla indirizzo immagine",type:"text"},domProps:{value:t.book.thumbnail},on:{input:function(e){e.target.composing||t.$set(t.book,"thumbnail",e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Libro Letto?")]),a("div",{staticClass:"control"},[a("div",{staticClass:"select"},[a("select",{on:{change:t.onLettoChange}},[a("option",{attrs:{selected:"",disabled:"",hidden:""}},[t._v("Seleziona")]),a("option",{attrs:{value:"Sì"}},[t._v("Sì")]),a("option",{attrs:{value:"No"}},[t._v("No")])])])])]),a("button",{staticClass:"button is-info",on:{click:t.updateBook}},[t._v("Salva")])])])]),a("div",{staticClass:"modal",class:{"is-active":t.confermaDelete}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-card"},[a("section",{staticClass:"modal-card-body deleteModal"},[a("h1",{staticClass:"eliminaLibro"},[t._v("Sei sicuro/a di voler eliminare il libro?")]),a("div",{staticClass:"deleteButton"},[a("button",{staticClass:"button is-danger",on:{click:function(e){t.confermaDelete=!1}}},[t._v("ANNULLA")]),a("button",{staticClass:"button is-success",on:{click:function(e){t.deleteBook(),t.confermaDelete=!1}}},[t._v("CONFERMA")])])])])])])]):t._e()}),j=[],z={props:{book:[]},data:function(){return{tramaModalLibrary:!1,confermaDelete:!1,modificaModale:!1}},methods:{onLettoChange:function(t){this.book.letto=t.target.value},deleteBook:function(){this.$emit("deleteBook",this.book)},getTrama:function(t){var e="Trama non disponibile";return t.trama&&(e=t.trama),e},updateBook:function(){this.$emit("updateBook",this.book),this.modificaModale=!1},readBook:function(){this.book.letto="Sì",this.$emit("readBook",this.book)}}},R=z,$=(a("be64"),Object(v["a"])(R,M,j,!1,null,null,null)),D=$.exports,G={components:{MyBook:D},name:"Libreria",mounted:function(){localStorage.getItem("token")||this.$router.push("/login")},data:function(){return{books:[],options:[{value:"Ebook",label:"EBook"},{value:"Cartaceo",label:"Cartaceo"},{value:"AudioLibro",label:"Audio libro"}],optionsread:[{value:"Sì",label:"Letti"},{value:"No",label:"Non Letti"}],optionSelected:null,optionSelectedread:null,ricercaAutore:"",ricercaTitolo:"",token:localStorage.getItem("token"),aggiungiModale:!1,titolo:null,autori:null,trama:null,thumbnail:null,dataPubblicazione:null,editore:null,isbn:null,tipologia:null,letto:null,confermaModal:!1,libroPresente:"",libroGiaPresente:!1,libroSuccesso:!1}},created:function(){this.getbooks()},computed:{libriFiltrati:function(){var t=this,e=[];return null!==this.optionSelected&&"All"!==this.optionSelected?this.books.forEach((function(a){a.tipologia===t.optionSelected&&e.push(a)})):e=this.books,null!==this.optionSelectedread&&"All"!==this.optionSelectedread&&(e=e.filter((function(e){return e.letto.includes(t.optionSelectedread)}))),""!==this.ricercaAutore&&(e=e.filter((function(e){return e.autori.toLowerCase().includes(t.ricercaAutore.toLowerCase())}))),""!==this.ricercaTitolo&&(e=e.filter((function(e){return e.titolo.toLowerCase().includes(t.ricercaTitolo.toLowerCase())}))),e.sort((function(t,e){var a=t.titolo.toUpperCase(),o=e.titolo.toUpperCase();return a<o?-1:a>o?1:0}))}},methods:{onReadOptionChange:function(t){this.optionSelectedread=t.target.value},onTipologiaChange:function(t){this.tipologia=t.target.value},onOptionChange:function(t){this.optionSelected=t.target.value},getbooks:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(c+"/user/me",{method:"GET",headers:{Authorization:"Bearer "+t.token}});case 3:return a=e.sent,e.next=6,a.json();case 6:o=e.sent,"Non Autorizzato!!!"!==o.message?t.books=o.book:(alert("SESSIONE SCADUTA"),localStorage.removeItem("token"),t.$router.replace("/login")),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log("errore: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},onUpdateBook:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(c+"/"+t.id,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.token},body:JSON.stringify(t)});case 3:return o=a.sent,a.next=6,o.json();case 6:e.getbooks(),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),console.log("errore: ",a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},onReadBook:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(c+"/"+t.id,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.token},body:JSON.stringify(t)});case 3:return o=a.sent,a.next=6,o.json();case 6:e.getbooks(),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),console.log("errore: ",a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},onDeleteBook:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(c+"/"+t.id,{method:"DELETE",headers:{Authorization:"Bearer "+e.token}});case 3:return o=a.sent,a.next=6,o.json();case 6:e.getbooks(),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),console.log("errore: ",a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},createBook:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,o,i,s,n,r,l,u,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=document.getElementById("letto2"),a.checked?t.letto="Sì":t.letto="No",o={titolo:t.titolo,autori:t.autori,trama:t.trama,thumbnail:t.thumbnail,dataPubblicazione:t.dataPubblicazione,editore:t.editore,isbn:t.isbn,tipologia:t.tipologia,letto:t.letto},i=!0,e.next=6,fetch(c+"/user/me",{method:"GET",headers:{Authorization:"Bearer "+t.token}});case 6:return s=e.sent,e.next=9,s.json();case 9:for(n=e.sent,r=0;r<n.book.length;r++)n.book[r].titolo===o.titolo&&n.book[r].autore===o.autore&&n.book[r].tipologia===o.tipologia&&(t.confermaModal=!0,t.libroGiaPresente=!0,t.libroSuccesso=!1,t.libroPresente="Libro già presente in libreria",i=!1);if(!i){e.next=19;break}return e.next=14,fetch(c,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.token},body:JSON.stringify(o)});case 14:return l=e.sent,e.next=17,l.json();case 17:if(u=e.sent,"Success Operation"!==u.messages)for(d=0;d<Object.keys(u.error).length;d++)"Titolo Maggiore di 3 caratteri"==u.error[d].msg&&(t.confermaModal=!0,t.libroGiaPresente=!0,t.libroSuccesso=!1,t.libroPresente="Titolo obbligatorio"),"tipologia non vuota"==u.error[d].msg&&(t.confermaModal=!0,t.libroGiaPresente=!0,t.libroSuccesso=!1,t.libroPresente="Scegliere tipologia");else t.confermaModal=!0,t.libroSuccesso=!0,t.libroGiaPresente=!1,t.libroPresente="Libro aggiunto in libreria con successo",t.aggiungiModale=!1,t.getbooks();case 19:case"end":return e.stop()}}),e)})))()}}},U=G,q=(a("43fe"),Object(v["a"])(U,B,A,!1,null,null,null)),F=q.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"section"},[t.validationErrors.length?a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[t.validationErrors.length?a("div",{staticClass:"notification is-danger is-light"},[a("button",{staticClass:"delete",on:{click:function(e){return t.resetError()}}}),a("div",{staticClass:"content"},[t._v(" Risolvi i seguenti errori prima di procedere: "),a("ul",{staticStyle:{"margin-top":"0.3em","margin-left":"1em"}},t._l(t.validationErrors,(function(e,o){return a("li",{key:"error-"+o,domProps:{innerHTML:t._s(e)}})})),0)])]):t._e()])]):t._e(),a("div",{staticClass:"field"},[a("p",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(0)])]),a("div",{staticClass:"field"},[a("p",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input",attrs:{type:"username",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._m(1)])]),a("div",{staticClass:"field"},[a("p",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(2)])]),a("div",{staticClass:"field"},[a("p",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirm,expression:"passwordConfirm"}],staticClass:"input",attrs:{type:"password",placeholder:"Conferma Password"},domProps:{value:t.passwordConfirm},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signup.apply(null,arguments)},input:function(e){e.target.composing||(t.passwordConfirm=e.target.value)}}}),t._m(3)])]),a("div",{staticClass:"field"},[a("p",{staticClass:"control"},[a("button",{staticClass:"button is-success",on:{click:t.signup}},[t._v(" REGISTRATI ")])])]),t._m(4)])])},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-lock"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-lock"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Se sei già registrato effettua "),a("a",{attrs:{href:"/login"}},[t._v("qui")]),t._v(" l'accesso")])}],K={name:"Signup",data:function(){return{email:null,username:null,password:null,passwordConfirm:null,validationErrors:[]}},methods:{resetError:function(){this.validationErrors=[]},signup:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var o,i,s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,e.resetError(),t.preventDefault(),e.password!==e.passwordConfirm){a.next=15;break}return o={email:e.email,username:e.username,password:e.password},a.next=7,fetch(u+"/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)});case 7:return i=a.sent,a.next=10,i.json();case 10:if(s=a.sent,"Success Operation"===s.messages&&e.$router.replace("/login"),"Errore input"===s.message)for(n=0;n<Object.keys(s.error).length;n++)"Inserire email valida"==s.error[n].msg&&e.validationErrors.push("Inserire <strong>E-mail</strong> valida"),"Password almeno di 8 caratteri"==s.error[n].msg&&e.validationErrors.push("Inserire <strong>Password</strong> di almeno 8 caratteri"),"Email già esistente!!!"==s.error[n].msg&&e.validationErrors.push("<strong>E-mail</strong> già esistente"),"Inserisci Username"==s.error[n].msg&&e.validationErrors.push("Inserire <strong>Username</strong>"),"Username già esistente!!!"==s.error[n].msg&&e.validationErrors.push("<strong>Username</strong> già esistente");a.next=16;break;case 15:e.validationErrors.push("le <strong>Password</strong> non corrispondono!!!");case 16:a.next=21;break;case 18:a.prev=18,a.t0=a["catch"](0),console.log("errore: ",a.t0);case 21:case"end":return a.stop()}}),a,null,[[0,18]])})))()}}},Q=K,V=Object(v["a"])(Q,J,H,!1,null,null,null),W=V.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"section"},[t.validationErrors.length?a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[t.validationErrors.length?a("div",{staticClass:"notification is-danger is-light"},[a("button",{staticClass:"delete",on:{click:function(e){return t.resetError()}}}),a("div",{staticClass:"content"},[t._v(" Risolvi i seguenti errori prima di procedere: "),a("ul",{staticStyle:{"margin-top":"0.3em","margin-left":"1em"}},t._l(t.validationErrors,(function(e,o){return a("li",{key:"error-"+o,domProps:{innerHTML:t._s(e)}})})),0)])]):t._e()])]):t._e(),a("div",{staticClass:"field"},[a("p",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(0)])]),a("div",{staticClass:"field"},[a("p",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signin.apply(null,arguments)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(1)])]),a("div",{staticClass:"field"},[a("p",{staticClass:"control"},[a("button",{staticClass:"button is-success",on:{click:t.signin}},[t._v(" ACCEDI ")])]),t._m(2)])])])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-lock"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Se non sei ancora registrato crea il tuo profilo "),a("a",{attrs:{href:"/registrazione"}},[t._v("qui")])])}],Z={name:"Signin",data:function(){return{email:null,password:null,validationErrors:[]}},methods:{resetError:function(){this.validationErrors=[]},signin:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var o,i,s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.resetError(),t.preventDefault(),o={email:e.email,password:e.password},a.next=5,fetch(u+"/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 5:return i=a.sent,a.next=8,i.json();case 8:if(s=a.sent,"Sei Loggato"===s.messages&&(localStorage.setItem("token",s.token),e.$router.replace("/books"),window.location.reload()),"Email errata!!!"===s.message&&e.validationErrors.push("<strong>E-mail</strong> errata"),"Password errata"===s.message&&e.validationErrors.push("<strong>Password</strong> errata"),"Errore input"===s.message)for(n=0;n<Object.keys(s.error).length;n++)"Inserire email valida"==s.error[n].msg&&e.validationErrors.push("Inserire <strong>E-mail</strong> valida"),"Password almeno di 8 caratteri"==s.error[n].msg&&e.validationErrors.push("Inserire <strong>Password</strong> di almeno 8 caratteri");case 13:case"end":return a.stop()}}),a)})))()}}},tt=Z,et=Object(v["a"])(tt,X,Y,!1,null,null,null),at=et.exports;o["a"].use(k["a"]);var ot=[{path:"/",component:N},{path:"/books",component:F},{path:"/registrazione",component:W},{path:"/login",component:at}],it=new k["a"]({mode:"history",routes:ot});o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(h)},router:it}).$mount("#app")},"5c72":function(t,e,a){},"5d3e":function(t,e,a){},"6dd2":function(t,e,a){},"85ec":function(t,e,a){},a862:function(t,e,a){t.exports=a.p+"img/HOME'S BOOKS2.06b87399.png"},be64:function(t,e,a){"use strict";a("5c72")},d3b4:function(t,e,a){}});
//# sourceMappingURL=app.3f424c25.js.map