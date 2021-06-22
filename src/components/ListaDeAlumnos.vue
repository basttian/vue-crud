
<template>
    <div>
        <h1>Lista de alumnos</h1>
        
        <table>
            <thead>
                <th>Curso</th>
                <th>Alumno</th>
                <th>Opciones</th>
            </thead>
            <tbody>
                <tr v-for="(alumno) in documentsAlumnos" :key="alumno.id">
                    <td>
                        <select v-model="alumno.clase" @change="change" >
                            <template v-for="a in documentsAulas">
                                <option  v-if="alumno.clase === a.id" :key="a.id" :value="a.id">{{a.nombre}}</option>
                                <option  v-else :key="a.id" :value="a.id">{{a.nombre}}</option>
                            </template>
                        </select>
                    </td>
                    <td><input type="text" v-model="alumno.nombre" ></td>
                    <td>
                    <button @click="modificar(alumno)">Editar</button>
                    <button @click="eliminar(alumno)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import { db } from '../db.js';

export default{
    name: 'ListaDeAlumnos',
    data: function(){
        return {
            documentsAlumnos:[],
            documentsAulas: [],
        }
    },
    created: function(){
        console.log("Created")
    },
     firestore: {
        documentsAlumnos: db.collection('alumnos').orderBy('created', 'desc'),
        documentsAulas: db.collection('aulas')
    },
    methods:{
       change:function(event){
            console.log(event.target.value)
        },
        modificar: function(argument){      
            db.collection('alumnos').doc(argument.id)
            .update({ nombre: argument.nombre.toUpperCase(), clase: argument.clase, updated: Date.now() })
            .then(()=>{
                console.log('Registro modificado correctamente.');
            }).catch((e)=>{
                console.log('Error al intentar modificar el registro. '+ e);
            });    
        },
        eliminar: function(argument){
            db.collection('alumnos').doc(argument.id).delete().then(()=>{         
                console.log('Registro eliminado correctamente.');
            }).catch((e)=>{
                console.log('Error al intentar eliminar el registro. ' + e);
            });
        }
    },
    computed:{
        
    },
    
}
</script>