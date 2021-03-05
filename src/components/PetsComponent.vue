<template>
    <div>
        <h1>Pets Component</h1>
        <h3>{{$route.params.species}}-{{$route.params.id}}</h3>
    </div>
</template>

<script>
export default {
    name: "PetsComponent"
}
</script>