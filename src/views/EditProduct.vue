<template>
  <div class="container" id="editProduct">
        <form @submit.prevent="editProduct" >
          <div style="width: 50%; margin: 200px auto;">
            <h1>Edit</h1>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" v-model="dataEdit.name" class="form-control" id="edit-name"><br/>
              <label for="image_url">image url</label>
              <input type="text" v-model="dataEdit.image_url" class="form-control" id="edit-image_url"><br/>
              <label for="price">Price</label>
              <input type="text" v-model="dataEdit.price" class="form-control" id="edit-price"><br/>
              <label for="stock">Stock</label>
              <input type="text" v-model="dataEdit.stock" class="form-control" id="edit-stock"><br/>
            </div>
            <div class="row">
              <div class="col">
                <button type="submit" class="btn btn-primary form-control">Edit</button>
              </div>
          </div>
          </div>
        </form>
      </div>
</template>

<script>
export default {
  name: 'editProduct',
  computed: {
    dataEdit () {
      return this.$store.state.dataEdit
    }
  },
  methods: {
    editProduct () {
      const payload = {
        id: this.$route.params.id,
        name: this.dataEdit.name,
        image_url: this.dataEdit.image_url,
        price: this.dataEdit.price,
        stock: this.dataEdit.stock
      }
      console.log(payload)
      this.$store.dispatch('editProduct', payload)
        .then(({ data }) => {
          this.$router.push({ path: '/Product' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
