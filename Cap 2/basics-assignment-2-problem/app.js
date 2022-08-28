const app = Vue.createApp({
    data(){
        return{
            user:'',
            text:'',
            textComplete:''
        }
    },
    methods:{
        alerta(){
            alert('alert succesfull');
        },
        addName(event){
            this.user = event.target.value;
        },
        addText(event){
            this.text = event.target.value; 
        },
        readyText(){
            this.textComplete = this.text;
            this.text = '';
        }
    }
});

app.mount('#assignment');