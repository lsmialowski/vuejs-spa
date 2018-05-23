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
      category: {
        name: ''
      }
    }
  },
  methods: {
    saveCategory () {
      this.axios.post('http://localhost/api/categories', {name: this.category.name})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
