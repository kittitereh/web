<template>
    <div class="backdrop" @click.self="closePopup">
        <div  class="popup" id="createAccForm"> 
            <form @submit.prevent="handleCreateAccount">
                <label for ="full_name"> Full Name: </label>
                <input type = "full_name" required v-model="full_name">
                <label for ="login"> Login: </label>
                <input type = "login" required v-model="login">
                <label for = "password">Password:</label>
                <input type="password" required v-model="password">
                <div v-if="passwordError" class="error">{{ passwordError }}</div>
                <label for = "email">Email:</label>
                <input type="email" v-model="email">
                <label for = "country" required >Country:</label>
                <select type="country" required>
                    <option value="Russia"> Russia </option>
                    <option value="China"> China </option>
                </select>
                <label for = "is_guide">Role:</label>
                <select type="is_guide" required>
                    <option value="guide"> Guide </option>
                    <option value="tourist"> Tourist</option>
                </select>

                <div>
                    <input type="checkbox" required v-model="terms">
                    <label>Accept terms and conditions</label>
                </div>

                <div class="submit">
                    <button type="submit" class="action-button">Careate as Account</button>
                </div>
            </form>
        </div> 
    </div>
</template>

<script>
    export default {
    name: 'CreateAccountPopup',
    data(){
        return{
            full_name: '',
            login: '',
            email: '',
            password: '',
            country: '',
            role: 'Tourist',
            terms: false,
            passwordError: ''
        }
        
    },
    methods: {
        closePopup(){
            this.$emit('close')
        },
        handleCreateAccount(){
            this.passwordError = this.password.length > 5 ? 
            '': 'Password must be over 5 chars long'
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

    label{
        display: inline-block;
        margin: 25px 0 15px;
    }

    input, select {
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 6px;
    }

    input[type="checkbox"] {
        display: inline-block;
        margin-right: 5px;
        margin-left: 20px;
        position: relative;
        width: 16px;
    }

    .error{
        color: red;
        font-size: 0.9em;
        font-weight: bold;
    }
</style>