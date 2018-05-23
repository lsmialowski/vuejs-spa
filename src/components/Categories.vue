<template>
    <div class="hello">
        <router-link to="/categories/add" class="btn btn-success">Dodaj kategorię</router-link>
        <table class="table table-hover">
            <tr>
                <th>Id</th>
                <th>Nazwa</th>
                <th>Edycja</th>
                <th>Usuwanie</th>
            </tr>
            <tr v-for="category in categories.data['hydra:member']" :key="category.id">
                <td>{{category.id}}</td>
                <td>{{category.name}}</td>
                <td><router-link v-bind:to="'/categories/'+category.id+'/edit'" class="btn btn-success">Edytuj</router-link></td>
                <td>delete</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  data () {
    return {
      categories: ''
    }
  },
  methods: {
    fetchCategories () {
      this.axios.get('http://localhost/api/categories').then((response) => {
        this.categories = response
      })
    }
  },
  created: function () {
    this.fetchCategories()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
