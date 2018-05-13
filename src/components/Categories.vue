<template>
    <div class="hello">
        <table class="table table-hover">
            <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Surname</th>
            </tr>
            <tr v-for="category in categories.data.data" :key="category.id">
                <td>{{category.id}}</td>
                <td> <img :src=category.avatar /></td>
                <td>{{category.first_name}}</td>
                <td>{{category.last_name}}</td>
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
      this.axios.get('https://reqres.in/api/users?page=2').then((response) => {
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
