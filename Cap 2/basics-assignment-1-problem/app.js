const app = Vue.createApp({
    data(){
        return {
            name: 'Josue Alejandro Acuña Alcaraz',
            age: 19,
            link: 'https://imborrable.com/wp-content/uploads/2021/04/fotos-gratis-de-stock-1.jpg',
        };
    },
    methods: {
        randomNumber(){
            const number = Math.random();
            return number;
        },
        ageYeasr(){
            return this.age + 5;
        },
        
    }
});

app.mount('#assignment');