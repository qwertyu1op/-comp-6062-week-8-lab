console.log("JS Loaded!");

const app = Vue.createApp({
    data(){
        return{
            mainHeading: 'Welcome to Vue.js!',
            message:'This message is displayed based on a boolean property.',
            showMessage: false
        };
    }
});

app.mount('#app');