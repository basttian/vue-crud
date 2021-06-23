<template>
  <section>
    <h2>Hi {{name}}</h2>
    <button @click="signOut">Sign out</button>
  </section>
</template>

<script>
import { firebase } from '@/db.js';
export default {
  created(){
    this.name = firebase.auth().currentUser.displayName;
  },
  data(){
    return{
      name: ''
    }
  },
  methods: {
    signOut(){
      firebase.auth().signOut();
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
span{
  text-transform: uppercase;
  font-weight: bold;
  background: orangered;
  color: white;
  padding: 10px;
  font-size: 1.5em;
  transform: skew(20deg);
}
</style>