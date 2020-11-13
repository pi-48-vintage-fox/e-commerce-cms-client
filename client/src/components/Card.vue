<template>
  <div>
    <div class="col-3 mt-5">
      <div class="card-container">
        <div class="img">
          <img :src="product.image_url" width="250" height="250">
        </div>
        <div class="title-text ml-3">
            {{product.name}}
        </div>
        <div class="price mt-3 ml-3">
          Price: Rp {{product.price.toLocaleString('id-ID')}}
        </div>
        <div class="stock mt-3 ml-3">
          Stock: {{product.stock}}
        </div>
        <div class="icon">
          <font-awesome-icon icon="pen-square" class="mr-3" @click="getOne"></font-awesome-icon>
          <font-awesome-icon icon="trash-alt" @click="deleteProduct"></font-awesome-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: ['product', 'fetchProducts'],
  methods: {
    getOne () {
      const id = this.product.id
      const payload = {
        id
      }
      this.$store.dispatch('getById', payload)
        .then(() => {
          this.$router.push(`/edit/${id}`)
        })
    },
    deleteProduct () {
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            const id = this.product.id
            const payload = {
              id
            }
            this.$store.dispatch('deleteProductById', payload)
              .then(() => {
                return this.$store.dispatch('fetchProducts')
              })
              .then(() => {
                this.$swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              })
              .catch((err) => {
                console.log(err.response)
                this.$swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!'
                })
              })
          }
        })
    }
  }
}
</script>
<style>
.card-container {
  width:  300px;
  height: 400px;
  border: 1px solid black;
}
.title-text {
  text-align: justify;
}
.price {
  text-align: justify;
}
.stock {
  text-align: justify
}
.icon {
  cursor: pointer;
}
</style>
