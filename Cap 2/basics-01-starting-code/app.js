const app = Vue.createApp({
    data(){
        return{
            courseGoal: 'Finalizamos el curso d Vue ',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal(){
            const RandomNumber = Math.random();
            if (RandomNumber < 0.5){
                return 'aprende vue';
            }else{
                return 'Vue aprendido'
            }
        }
    }
});

app.mount('#user-goal');