<template>
    <div>
        <h1>Dogs Component</h1>

        <table>
            <tr>
                <th>Name</th>
                <th>Breed</th>
                <th>Species</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Color</th>
                <th>Weight</th>
                <th>Location</th>
                <th>Notes</th>
            </tr>
            <tr v-for="(dog, index) in dogs" :key="index">
                <td>{{dog.name}}</td>
                <td>{{dog.breed}}</td>
                <td>{{dog.species}}</td>
                <td>{{dog.gender}}</td>
                <td>{{dog.age}}</td>
                <td>{{dog.color}}</td>
                <td>{{dog.weight}}</td>
                <td>{{dog.location}}</td>
                <td>{{dog.notes}}</td>
                <td>
                    <router-link :to="`pets/${dog.species}/${index}`">{{dog.species}}-{{index}}</router-link>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import dogs from '@/data/dogs.js';
export default {
    name: "DogsComponent",
    data() {
        return {
            dogs
        }
    }
}
</script>

<style scoped>
table {
  width: 90%;
  margin: 0px 50px;
}

tr:nth-child(even) 
{
  background-color: #f2f2f2;
}

tr:hover {
  background: #f2f2f2;
}

td, th {
  text-align: left;
  padding: 5px;
}
</style>