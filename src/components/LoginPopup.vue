<template>
    <div class="backdrop" @click.self="closePopup">
        <div class="popup">
            <form @submit.prevent="handleSubmit">
                <label for ="login"> Login: </label><br>
                <input type ="login" v-model="login"><br>
                <label for = "password">Password:</label><br>
                <input type="password" v-model="password"><br>
                <button class="action-button">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'LoginPopup',
    data(){
        return{
        login: '',
        password: '',
    }
},
    methods: {
        closePopup(){
            this.$emit('close')
        }
    },
        handleSubmit(){
            const data = {
            login: this.login,
            password: this.password
        }
        console.log('login submitted')

        axios.post('http://localhost:3030/register', data)
            .then(
                res => {
                    console.log(res)
                }
            ).catch(
                err => {
                    console.log(err)
                }
            )
    }
   
    // mounted(){
    //     if (this.password != passwords){
    //         this.message = 'wrong'
    //     } else {
    //         this.message = 'logged in'
    //     }
    // }
  }
</script>

<style>
    .popup{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
        z-index: -1;
    }

    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
</style>