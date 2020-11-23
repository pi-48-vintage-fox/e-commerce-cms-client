<template>
  <div class="d-flex justify-content-center align-content-lg-center container">
    <Navbar />
    <form @submit.prevent="addProduct">
      <div class="body"></div>
      <div class="header">
        <div class="bg-dark">Add<span>Stock</span></div>
      </div>
      <div class="login">
        <input type="text"
        v-model="name"
        placeholder="name" /><br />
        <input type="text"
        v-model="image_url"
        placeholder="imagerUrl" /><br />
        <input type="number"
        v-model="price"
        placeholder="Price" /><br />
        <input type="number"
        v-model="stock"
        placeholder="Stock" /><br />
        <input type="submit" value="Add" />
      </div>
    </form>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "addProduct",
  components: {
    Navbar,
  },
  data() {
    return {
      name: "",
      image_url: "",
      price: "",
      stock: "",
    };
  },
  methods: {
    addProduct() {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
      };
      this.$store
        .dispatch("addProduct", payload)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
