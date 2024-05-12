<template>
    <div class="login">
            <form @submit.prevent="handleSubmit">
                <label for ="login"> Login: </label><br>
                <input type ="login" v-model="login"><br>
                <label for = "password">Password:</label><br>
                <input type="password" v-model="password"><br>
                <button class="action-button" type="submit">Submit</button>
            </form>
        </div>
</template>

<script>
import axios from 'axios'
import {ref} from "vue";

export default {
    name: 'LoginPage',
  setup() {

    const data = ref({
      login: '',
      password: ''
    });

    function handleSubmit() {
      axios.post('register', Object.values(data.value))
        .then((res) => {
          console.log(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
        }

    return {
      data,
      handleSubmit
    }
    }
}
</script>

<style>
    .login{
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