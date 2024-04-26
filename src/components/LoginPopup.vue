<template>
    <div class="backdrop" @click.self="closePopup">
        <div class="popup">
            <form action = "/login-submit">
                <label for ="login"> Login: </label><br>
                <input type = "text" id = "login" name="login" value=""><br>
                <label for = "password">Password:</label><br>
                <input type="text" id = "password" name="password" value=""><br>
                <button class="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'LoginPopup',
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