<template>
  <div>
   <h1>Alumnos</h1>
   
<form v-on:submit.prevent="agregarAlumno" id="formAlumnos">

    <p><select v-model="data_alumnos.clase">
     <option disabled value="">Seleccione el aula</option>
     <option v-for="aula in documentsAulas" v-bind:key="aula.id" v-bind:value="aula.id" > {{ aula.nombre }} </option>
   </select></p>
  <input type="text" v-model="data_alumnos.nombre" placeholder="Nombre del alumno" >
  <p><button type="submit" v-bind:disabled="!validarEntradas(data_alumnos)" > Agregar Alumno </button> </p>
</form>
  <hr>
  <ListaDeAlumnos />
  </div>
</template>

<script>
import { db } from '../db.js';
import ListaDeAlumnos from './ListaDeAlumnos.vue';

export default {
  name: 'Alumnos',
  props: {},
  components: {
    ListaDeAlumnos
  },
  data: function () {
    return {
      data_alumnos:{
        create: Date.now(),
        update: Date.now(),
        nombre:'',
        clase: ''
      },
      documentsAlumnos: [],
      documentsAulas: [],
    }
  },
  firestore: {
    documentsAlumnos: db.collection('alumnos'),
    documentsAulas: db.collection('aulas').orderBy('nombre')
  },
  methods: {
    agregarAlumno: function() {
      let that = this;
      db.collection('alumnos').add({
          clase: that.data_alumnos.clase,
          created: that.data_alumnos.create,
          updated: that.data_alumnos.update,
          nombre: that.data_alumnos.nombre.toUpperCase()
        }).then(()=>{
          console.log("Registro agregado con éxito");
          document.getElementById("formAlumnos").reset();
        }).catch((e)=>{
          console.log(e)
        })
    },
    validarEntradas: function(items){
      return(
        items.nombre.split(" ").join("") != "" &&
        items.clase.split(" ").join("") != ""
      )
    }
  },
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
