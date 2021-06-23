<template lang="html">
  <section>
    <h1>Sign up if you are cool</h1>
    <div id="firebaseui-auth-container"></div>
  </section>
</template>

<script>
import { firebase } from '../db.js';
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import "firebase/auth";


const ui = new firebaseui.auth.AuthUI(firebase.auth());
const uiConfig = {
  //signInFlow: 'popup',
  signInSuccessUrl: "/dashboard",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};


export default {
  name: 'HelloWorld',
  mounted() {
    ui.start("#firebaseui-auth-container", uiConfig);
  }
}

</script>