<template>
  <div class="container">
    <div class="page-header">
      <i class="fas fa-arrow-left"></i>
      <h2>Products</h2>
    </div>
    <div class="card mb-1">
      <a href="#" class="btn washed-success mb-1" @click="toggleAddModal" >Add new product</a>
    </div>
    <div class="card">
      <table class="table">
        <thead>
          <th class="text-left">Product Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>
              <div class="product-item">
                <img :src=product.image_url class="mr-1">
                {{product.name}}
              </div>
            </td>
            <td>Rp. {{product.price}}</td>
            <td>{{product.stock}}</td>
            <td>
              <a href="#" class="btn washed-primary mr-1" @click.prevent='editProduct(product)'><i class="far fa-edit"></i> Edit</a>
              <a href="#" class="btn washed-danger" @click.prevent='deleteProduct(product.id)'><i class="far fa-trash-alt"></i> Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <transition name="fade">
      <Modal title="Add new product" v-if="addModal" @close="toggleAddModal">
        <form>
          <div class="form-input">
            <label for="">Product Name</label>
            <input type="text" v-model="newProduct.name">
          </div>
          <label for="">Product Image</label>
          <div class="form-input image-upload">
            <div class="image-preview" v-if="isInsertProductImagePreview">
              <img :src="insertProductImage">
            </div>
            <div class="upload-image-btn" @click="uploadImage('insert')">
              Upload image
            </div>
          </div>
          <div class="form-input">
            <label for="">Price</label>
            <money class="input" v-model="newProduct.price"></money>
          </div>
          <div class="form-input">
            <label for="">Stock</label>
            <input type="text" v-mask="'#############'" placeholder="enter with number" v-model="newProduct.stock">
          </div>
          <div class="form-input">
            <label for="">Descriptions</label>
            <textarea name="" id="" cols="30" rows="5" v-model="newProduct.descriptions">
            </textarea>
          </div>
          <div class="form-input">
            <a href="#" class="btn btn-primary" @click.prevent="insertProduct">Save</a>
          </div>
        </form>
      </Modal>
    </transition>
    <transition name="fade">
      <Modal title="Edit product" v-if="editModal" @close="toggleEditModal">
        <form>
          <div class="form-input">
            <label for="">Product Name</label>
            <input type="text" v-model="editedProduct.name">
          </div>
          <label for="">Product Image</label>
          <div class="form-input image-upload">
            <div class="image-preview" v-if="isEditProductImagePreview">
              <img :src="editProductImage">
            </div>
            <div class="upload-image-btn" @click="uploadImage('edit')">
              Upload image
            </div>
          </div>
          <div class="form-input">
            <label for="">Price</label>
            <money class="input" v-model="editedProduct.price"></money>
          </div>
          <div class="form-input">
            <label for="">Stock</label>
            <input type="text" v-mask="'#############'" placeholder="enter with number" v-model="editedProduct.stock">
          </div>
          <div class="form-input">
            <label for="">Descriptions</label>
            <textarea name="" id="" cols="30" rows="5" v-model="editedProduct.descriptions">
            </textarea>
          </div>
          <div class="form-input">
            <a href="#" class="btn btn-primary" @click.prevent="saveProduct">Save</a>
          </div>
        </form>
      </Modal>
    </transition>
  </div>
</template>

<script>
import Modal from '../components/Modal'
export default {
  name: 'Product',
  components: {
    Modal
  },
  data () {
    return {
      isInsertProductImagePreview: false,
      insertProductImage: 'https://via.placeholder.com/150',
      isEditProductImagePreview: true,
      editProductImage: 'https://via.placeholder.com/150',
      newProduct: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0,
        descriptions: ''
      },
      editedProduct: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0,
        descriptions: ''
      }
    }
  },
  methods: {
    uploadImage (origin) {
      window.cloudinary.openUploadWidget(
        {
          cloud_name: 'mochaacloud',
          upload_preset: 'yoqa3uhq'
        },
        (error, result) => {
          if (!error && result && result.event === 'success') {
            if (origin === 'add') {
              this.isInsertProductImagePreview = true
              this.insertProductImage = result.info.url
              this.newProduct.image_url = result.info.url
            } else {
              this.iseditProductImagePreview = true
              this.editProductImage = result.info.url
              this.editedProduct.image_url = result.info.url
            }
          }
        }).open()
    },
    toggleEditModal () {
      this.$store.commit('TOGGLE_EDIT_MODAL')
    },
    toggleAddModal () {
      this.$store.commit('TOGGLE_ADD_MODAL')
    },
    insertProduct () {
      this.$store.dispatch('insertProduct', this.newProduct)
      this.newProduct = {
        name: '',
        image_url: '',
        price: 0,
        stock: 0,
        descriptions: ''
      }
      this.insertProductImage = 'https://via.placeholder.com/150'
    },
    editProduct (product) {
      this.editedProduct = product
      this.editProductImage = product.image_url
      this.toggleEditModal()
    },
    saveProduct () {
      const payload = {
        id: this.editedProduct.id,
        data: {
          name: this.editedProduct.name,
          image_url: this.editedProduct.image_url,
          price: this.editedProduct.price,
          stock: this.editedProduct.stock,
          descriptions: this.editedProduct.descriptions
        }
      }
      this.$store.dispatch('editProduct', payload)
      this.insertProductImage = 'https://via.placeholder.com/150'
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    }
  },
  computed: {
    editModal () {
      return this.$store.state.editModal
    },
    addModal () {
      return this.$store.state.addModal
    },
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchproducts')
  }
}
</script>
