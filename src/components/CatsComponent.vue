<template>
    <div>
        <h1>CatsComponent</h1>
        <!-- 
            name: 'Fish',
    breed: 'tuxedo',
    species: 'cat',
    gender: 'male',
    age: 20,
    color: 'black/white',
    weight: 13,
    location: 'fourside',
    notes: 'Sweet kitty. He loves getting his belly rubbed.'
        -->
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
            <tr v-for="(cat, index) in cats" :key="index">
                <td>{{cat.name}}</td>
                <td>{{cat.breed}}</td>
                <td>{{cat.species}}</td>
                <td>{{cat.gender}}</td>
                <td>{{cat.age}}</td>
                <td>{{cat.color}}</td>
                <td>{{cat.weight}}</td>
                <td>{{cat.location}}</td>
                <td>{{cat.notes}}</td>
                <td>
                    <router-link :to="`pets/${cat.species}/${index}`">{{cat.species}}-{{index}}</router-link>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import cats from '@/data/cats';

export default {
    name: "CatsComponent",
    data() {
        return {
            cats
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