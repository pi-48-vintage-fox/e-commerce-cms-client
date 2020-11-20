<template>
  <div class=" d-flex justify-content-center align-content-lg-center container">
 <Navbar/>
  <form @submit.prevent="editProduct">
    <div class="body"></div>
      <div class="login">
        <input type="text"
        v-model="dataEdit.name"
        placeholder="name"  /><br />
        <input type="text"
        v-model="dataEdit.image_url"
        placeholder="imagerUrl"  /><br />
        <input type="number"
        v-model="dataEdit.price"
        placeholder="Price"  /><br />
        <input type="number"
        v-model="dataEdit.stock"
        placeholder="Stock" /><br />
        <input type="submit" value="Edit" />
      </div>
    </form>

</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'editProduct',
  components: {
    Navbar
  },
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
      this.$store.dispatch('editPage', payload)
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
