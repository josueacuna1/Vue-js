const app = Vue.createApp({
    data(){
        return{
            courseGoalA: 'Empezamos el curso d Vue ',
            courseGoalB: 'Finalizamos el curso d Vue ',
            htmlInsert: '<h3>Hola buenas tardes</h3>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal(){
            const RandomNumber = Math.random();
            if (RandomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');