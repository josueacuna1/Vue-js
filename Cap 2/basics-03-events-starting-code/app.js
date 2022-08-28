
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmName: '',
      name01:''
    };
  },
  methods:{
    add(num){
      this.counter = this.counter + num;
    },
    remove(num){
      this.counter = this.counter - num;
    },
    setName(event){
      this.name = event.target.value;
    },
    nameSubmit(event){
      this.name01 = event.target.value;
    },
    submitForm(){
      alert('submitted :)' + ' '+ this.name01);
    },
    confirm(){
      this.confirmName = this.name;
      this.name = '';
    }
  }
});

app.mount('#events');
