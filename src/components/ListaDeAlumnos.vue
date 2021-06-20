
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
                        <select v-model="update_data.curso[alumno.id]" >
                            <template v-for="a in documentsAulas">
                                <option  v-if="alumno.clase === a.id" :key="a.id" :value="a.id">{{a.nombre}}</option>
                                <option  v-else :key="a.id" :value="a.id">{{a.nombre}}</option>
                            </template>
                        </select>
                    </td>
                    <td>{{alumno.nombre}}</td>
                    <td></td>
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
            update_data:{
                alumno: String,
                update: Date.now(),
                curso: String 
            },
            documentsAlumnos:[],
            documentsAulas: [],
        }
    },
    created: function(){
        //return this.update_data.curso['bYJ2LsExOQZiWBxz4nMJ'] = 'Ezm28rKDTpWHiqKSASQC';
    },
     firestore: {
        documentsAlumnos: db.collection('alumnos').orderBy('created', 'desc'),
        documentsAulas: db.collection('aulas')
    },
    methods:{
    },
    computed:{
    },
    
}
</script>