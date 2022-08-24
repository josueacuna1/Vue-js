const app = Vue.createApp({
    data(){
        return{
            courseGoal: 'Finalizamos el curso d Vue ',
            vueLink: 'https://vuejs.org/'
        }
    }
});

app.mount('#user-goal');