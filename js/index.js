const { createApp } = Vue

createApp({
    data() {
        return {

            mails: [],
            booleanMails: 'https://flynn.boolean.careers/exercises/api/random/mail',
            risposta: null
        }
    },
    mounted() {
    

        for (let i = 0; i < 10; i++) {   
        axios.get( this.booleanMails ).then((risposta) => {
                this.risposta = risposta.data.response;
                this.mails.push(risposta.data.response);
        });
    }}
}).mount('#app')