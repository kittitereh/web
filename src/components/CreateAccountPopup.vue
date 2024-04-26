<template>
    <div class="backdrop" @click.self="closePopup">
        <div  class="popup" id="createAccForm"> 
            <form action = "/create-account">
                <label for ="full_name"> Full Name: </label><br>
                <input type = "text" id = "full_name" name="username" value=""><br>
                <label for = "password">Password:</label><br>
                <input type="text" id = "password" name="password" value=""><br>
                <label for = "email">Email:</label><br>
                <input type="text" id = "email" name="email" value=""><br>
                <label for = "Country">Country:</label><br>
                <input type="text" id = "country" name="country" value=""><br>
                <label for = "is_guide">Password:</label><br>
                <input type="is_guide" id = "is_guide" name="is_guide" value="True"><br>
                <button v-on:click="">Submit</button>
            </form>
        </div> 
    </div>
</template>

<script>
    export default {
    name: 'CreateAccountPopup',
    data(){
        
    },
    methods: {
        closePopup(){
            this.$emit('close')
        }
    }
  }
</script>

<style>
    .popup{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }

    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
</style>