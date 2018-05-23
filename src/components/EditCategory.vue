<template>
    <div class="form">
        <div class="form-group">
            <label for="name">Nazwa kategorii</label>
            <input v-model="category.name" class="form-control" type="text" id="name" name="name">
        </div>
        <div class="form-group">
            <button @click="saveCategory" class="btn btn-primary">Zapisz</button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      category: ''
    }
  },
  methods: {
    getCategory (id) {
      this.axios.get('http://localhost/api/categories/' + id).then((response) => {
        this.category = response.data
      })
    },
    saveCategory () {
      this.axios.put('http://localhost/api/categories/' + this.category.id, {name: this.category.name})
    }
  },
  created: function () {
    this.getCategory(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
