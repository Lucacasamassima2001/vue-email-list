// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.














// Tramite una chiamata ad una API, stampiamo a schermo un numero casuale.

const app = Vue.createApp({
	data() {
		return {
			randomMail:  [

            ],
		}
	},
	methods: {
            getRandomEmail(){
            for (let i = 0; i < 10 ; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(serverRandom => this.randomMail.push(serverRandom.data.response))
            }          
            } 
	},
	created() {
		this.getRandomEmail();
	},
});

app.mount('#app');