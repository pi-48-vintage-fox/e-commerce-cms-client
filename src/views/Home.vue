<template>
  <section id="home-page">
    <div class="wrapper">
      <!-- Sidebar -->
      <nav :class="{active: menuOpen}" id="sidebar">
        <div class="sidebar-header">
          <h3>FRISH</h3>
          <p style="color: cornsilk">Fresh Fish on Sale</p>
        </div>

        <ul class="list-unstyled components">
          <p>Admin's Corner</p>
          <li class="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
              >Dashboard</a
            >
            <ul class="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a v-on:click.prevent="showAddForm()" style="cursor: pointer;">Add Products</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
              >Advertisement</a
            >
            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#">Banner</a>
              </li>
              <li>
                <a href="#">Add Banner</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <hr />
          <li>
            <h4>
              <a class="nav-link" @click.prevent="logout" style="cursor: pointer"
                >Logout</a
              >
            </h4>
          </li>
        </ul>
      </nav>

      <!-- Page Content -->
      <div id="content">
        <nav
          class="navbar navbar-expand-lg navbar-light bg-light"
          style="margin-bottom: 50px"
        >
          <div class="container-fluid">
            <button :class="{active: menuOpen}" @click="menuOpen = !menuOpen" type="button" id="sidebarCollapse" class="navbar-btn">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button
              class="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-align-justify"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav navbar-nav ml-auto">
                <li class="nav-item active">
                  <h2 style="margin-left: 10px; margin-top: 5px">Dashboard</h2>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="container">
          <Product v-for="product in products"
            :key="product.id"
            :product="product">
          </Product>
        </div>
      </div>

      <!-- add Form -->
      <div v-show="!changer" class="container-xl" style="background-color: white; z-index: 10">
        <form @submit.prevent="addProducts">
          <div class="form-group" style="margin-top: 100px">
            <h3>Add Product</h3>
            <label for="addName_input">Product's Name</label>
            <input
              type="text"
              class="form-control"
              v-model="addName"
            />
          </div>
          <div class="form-group">
            <label for="addImageUrl_input">Image URL</label>
            <input
              type="text"
              class="form-control"
              v-model="addImageUrl"
            />
            <small id="emailHelp" class="form-text text-muted"
              >Please fill it with URL</small
            >
          </div>
          <div class="form-group">
            <label for="addPrice_input">Price</label>
            <input
              type="number"
              class="form-control"
              v-model="addPrice"
            />
            <small id="emailHelp" class="form-text text-muted"
              >You can't fill with negative value</small
            >
          </div>
          <div class="form-group">
            <label for="addStock_input">Stock</label>
            <input
              type="number"
              class="form-control"
              v-model="addStock"
            />
            <small id="emailHelp" class="form-text text-muted"
              >You can't fill with negative value</small
            >
          </div>
          <div class="form-group">
            <label for="addCategory_input">Tag</label>
            <select
              class="form-control"
              v-model="addCategory"
            >
              <option value="Frozen">Frozen</option>
              <option value="Fillet">Fillet</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>

      <!-- edit Form -->
      <div v-show="!editForm" class="container-xl" style="background-color: white; z-index: 10">
        <form @submit.prevent="editProducts">
          <div class="form-group" style="margin-top: 100px">
            <h3>Edit Product</h3>
            <label for="addName_input">Product's Name</label>
            <input
              type="text"
              class="form-control"
              v-model="editInput.name"
            />
          </div>
          <div class="form-group">
            <label for="addImageUrl_input">Image URL</label>
            <input
              type="text"
              class="form-control"
              v-model="editInput.image_url"
            />
            <small id="emailHelp" class="form-text text-muted"
              >Please fill it with URL</small
            >
          </div>
          <div class="form-group">
            <label for="addPrice_input">Price</label>
            <input
              type="number"
              class="form-control"
              v-model="editInput.price"
            />
            <small id="emailHelp" class="form-text text-muted"
              >You can't fill with negative value</small
            >
          </div>
          <div class="form-group">
            <label for="addStock_input">Stock</label>
            <input
              type="number"
              class="form-control"
              v-model="editInput.stock"
            />
            <small id="emailHelp" class="form-text text-muted"
              >You can't fill with negative value</small
            >
          </div>
          <div class="form-group">
            <label for="addCategory_input">Tag</label>
            <select
              class="form-control"
              v-model="editInput.category"
            >
              <option value="Frozen">Frozen</option>
              <option value="Fillet">Fillet</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Product from '@/components/Product.vue'
import Swal from 'sweetalert2'
export default {
  name: 'Home',
  data () {
    return {
      changer: true,
      menuOpen: true,
      addName: '',
      addImageUrl: '',
      addPrice: '',
      addStock: '',
      addCategory: ''
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      Swal.fire({
        title: 'Good Bye!',
        text: 'See you later',
        imageUrl: 'https://c1.wallpaperflare.com/preview/18/673/287/goodbye-farewell-end-hessian.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image'
      })
      this.$router.push({ path: '/login' })
    },
    showAddForm () {
      if (this.changer === true) {
        this.changer = false
      } else if (this.changer === false) {
        this.changer = true
      }
    },
    addProducts () {
      const payload = {
        name: this.addName,
        image_url: this.addImageUrl,
        price: this.addPrice,
        stock: this.addStock,
        category: this.addCategory
      }
      this.changer = true
      this.$store.dispatch('addProducts', payload)
      this.addName = ''
      this.addImageUrl = ''
      this.addPrice = ''
      this.addStock = ''
      this.addStock = ''
    },
    editProducts () {
      const payload = {
        id: this.$store.state.currentProductData.id,
        name: this.editInput.name,
        image_url: this.editInput.image_url,
        price: this.editInput.price,
        stock: this.editInput.stock,
        category: this.editInput.category
      }
      this.$store.commit('SET_EDIT_FORM')
      this.$store.dispatch('editProducts', payload)
    }
  },
  components: {
    Product
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    editForm () {
      return this.$store.state.showEditForm
    },
    editInput () {
      return this.$store.state.currentProductData
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>
/*
    ADDITIONAL DEMO STYLE, NOT IMPORTANT TO MAKE THINGS WORK BUT TO MAKE IT A BIT NICER :)
*/
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

body {
  font-family: "Poppins", sans-serif;
  background: #fafafa;
}

p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

#sidebar {
  /* don't forget to add all the previously mentioned styles here too */
  background: #7386d5;
  color: #fff;
  transition: all 0.3s;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #6d7fcc;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}
#sidebar ul li a:hover {
  color: #7386d5;
  background: #fff;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #6d7fcc;
}
ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
}
.wrapper {
  display: flex;
  align-items: stretch;
}

#sidebar {
  min-width: 250px;
  max-width: 250px;
}

#sidebar.active {
  margin-left: -250px;
}
#sidebar {
  min-width: 250px;
  max-width: 250px;
  min-height: 100vh;
}
a[data-toggle="collapse"] {
  position: relative;
}
.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
}

#sidebarCollapse {
  width: 40px;
  height: 40px;
  background: #f5f5f5;
  cursor: pointer;
}

#sidebarCollapse span {
  width: 80%;
  height: 2px;
  margin: 0 auto;
  display: block;
  background: #555;
  transition: all 0.8s cubic-bezier(0.81, -0.33, 0.345, 1.375);
  transition-delay: 0.2s;
}

#sidebarCollapse span:first-of-type {
  transform: rotate(45deg) translate(2px, 2px);
}
#sidebarCollapse span:nth-of-type(2) {
  opacity: 0;
}
#sidebarCollapse span:last-of-type {
  transform: rotate(-45deg) translate(1px, -1px);
}
#sidebarCollapse.active span {
  transform: none;
  opacity: 1;
  margin: 5px auto;
}
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
