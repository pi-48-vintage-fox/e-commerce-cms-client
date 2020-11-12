<template>
  <div id="products">
      <div class="row mt-3" >
        <div class="col-3 mb-4" v-for="product in products" :key="product.id">
          <div class="card h-100 bg-dark">
            <img
              :src="product.image_url"
              class="card-img-top"
              :alt="product.name"
            />
            <div class="card-body">
              <h5 class="card-title">{{product.name}}</h5>
              <table
                class="table table-bordered table-dark text-primary display-5"
              >
                <tbody>
                  <tr>
                    <td>Price</td>
                    <td>Rp. {{product.price.toLocaleString('id')}}</td>
                  </tr>
                  <tr>
                    <td>Stock</td>
                    <td>{{product.stock}}</td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>{{product.category}}</td>
                  </tr>
                </tbody>
              </table>
              <div class="icon mx-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-pencil-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  type="button"
                  @click="editProduct(product.id)"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                  />
                </svg>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-trash-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  type="button"
                  @click="deleteProduct(product.id)"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    },
    editProduct (id) {
      this.products.forEach(el => {
        if (el.id === id) {
          this.$store.commit('EDIT_PRODUCT', el)
        }
      })
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>
.display-5 {
  font-size: smaller;
}
.icon {
    display: flex;
    justify-content: space-between;
}
</style>
