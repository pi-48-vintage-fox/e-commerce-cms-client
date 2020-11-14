<template>
  <div>
    <form @submit.prevent="addproduct" class="box p-3">
      <h1>Add Product</h1>
      <label for="name">Product Name :</label>
      <input v-model="name" id="name" type="text" placeholder="Product Name" required />
      <label for="image_url">Image URL :</label>
      <input v-model="image_url" id="image_url" type="text" placeholder="Image URL" required />
      <label for="price">Price :</label>
      <input v-model="price" id="price" type="number" min="0" placeholder="Price" required />
      <label for="stock">Stock :</label>
      <input v-model="stock" id="stock" type="number" min="0" placeholder="Stock" required />
      <button type="submit">Add Product</button>
    <button @click="cancelBtn" type="button">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
  data(){
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    }
  },
  methods:{
    addproduct(){
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addproduct',payload)
      .then(({data})=>{
        console.log(data);
        this.$router.push('/')
      })
      .catch(err=>{
        console.log(err);
      })
    },
    cancelBtn(){
        this.$router.push('/')
    }
  }
};
</script>

<style>
.box input[type="text"],
.box input[type="number"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 10px 10px;
  width: 250px;
  outline: none;
  color: white;
  border-radius: 10px;
  transition: 0.25s;
}


.box input[type="text"]:focus,
.box input[type="number"]:focus {
  width: 300px;
  border-color: #2ecc71;
}

.box button[type="submit"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 10px;
  transition: 0.25s;
  cursor: pointer;
}

.box button[type="button"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #df2c2c;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 10px;
  transition: 0.25s;
  cursor: pointer;
}

.box button[type="submit"]:hover {
  background: #2ecc71;
}

.box button[type="button"]:hover {
  background: #df2c2c;
}
</style>
