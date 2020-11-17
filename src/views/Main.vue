<template>
  <div class="main">
    <div class="main-web">
      <div v-if="navOpen" class="main-nav col-1.5">
        <h3><a href="#" @click.prevent="resetCategory">Home</a></h3>
        <div class="space categories-space">
          <h3><b>Categories</b></h3>
          <ul class="overflow-auto">
            <Category
              v-for="category in categories"
              :key="category.id"
              :category="category"
              @showProducts="showProducts"
              @chose="choseCategory"
            />
          </ul>
        </div>
        <div class="action-product">
          <div class="add-product">
            <button class="btn btn-action" @click="addProduct">
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                class="bi bi-file-earmark-plus-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V11a.5.5 0 0 0 1 0V9.5H10a.5.5 0 0 0 0-1H8.5V7z"
                />
              </svg>
              <small> Add Product</small>
            </button>
          </div>
          <div class="add-category">
            <button class="btn btn-action" @click="addCategory">
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                class="bi bi-file-earmark-plus-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V11a.5.5 0 0 0 1 0V9.5H10a.5.5 0 0 0 0-1H8.5V7z"
                />
              </svg>
              <small> Add Category</small>
            </button>
          </div>
          <div class="delete-category">
            <button class="btn btn-action" @click="deleteCategory">
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                class="bi bi-file-earmark-x-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.854 7.146a.5.5 0 1 0-.708.708L7.293 9l-1.147 1.146a.5.5 0 0 0 .708.708L8 9.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 9l1.147-1.146a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146z"
                />
              </svg>
              <small> Delete Category</small>
            </button>
          </div>
        </div>
        <div class="space banners-space">
          <h3>
            <a href="#" @click.prevent="showBanners"><b>Banners</b></a>
          </h3>
          <div class="action-banner">
            <div class="add-banner">
              <button class="btn btn-action" @click="addBanner">
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  class="bi bi-file-earmark-plus-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V11a.5.5 0 0 0 1 0V9.5H10a.5.5 0 0 0 0-1H8.5V7z"
                  />
                </svg>
                <small> Add Banner</small>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="main-content col-14">
        <div class="content-nav">
          <button class="btn" @click="openNav">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-three-dots"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
              />
            </svg>
          </button>
          <div class="user-email">{{ userEmail }}</div>
          <div class="content-category">{{ chosenCategory.name }}</div>
        </div>
        <div class="content">
          <div class="content-header" v-show="show==='products'" v-if="products">
            <div class="content-header-text col-1">No.</div>
            <div class="content-header-text col-3">Image</div>
            <div class="content-header-text col-3">Name</div>
            <div class="content-header-text col-2">Price</div>
            <div class="content-header-text col-1">Stock</div>
          </div>
          <div class="empty-message" v-else-if="!products">
            <h1>It's Empty here</h1>
          </div>
          <Product
              v-show="show==='products'"
              v-for="(product, i) in products"
              :key="i"
              :product="product"
              :counter="i"
              :categories="categories"
          />
          <div class="content-header" v-show="show==='banners'" v-if="banners">
            <div class="content-header-text col-1">No.</div>
            <div class="content-header-text col-5">Image</div>
            <div class="content-header-text col-3">Title</div>
            <div class="content-header-text col-1">Status</div>
          </div>
          <Banner
              v-show="show==='banners'"
              v-for="(banner, x) in banners"
              :key="x"
              :banner="banner"
              :counter="x"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import Product from '../components/Product.vue'
import Category from '../components/Category.vue'
import Banner from '../components/Banner.vue'
export default {
  name: 'Main',
  data () {
    return {
      navOpen: false,
      chosenCategory: '',
      addProductPayload: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      },
      addCategoryPayload: {
        name: ''
      },
      addBannerPayload: {
        title: '',
        image_url: ''
      },
      categoriesList: '',
      show: 'products',
      showEditProduct: false
    }
  },
  methods: {
    openNav () {
      if (this.navOpen) {
        this.navOpen = false
      } else {
        this.navOpen = true
      }
    },
    choseCategory (payload) {
      this.chosenCategory = payload
    },
    resetCategory () {
      this.chosenCategory = ''
      this.show = 'products'
    },
    showBanners () {
      this.show = 'banners'
    },
    addProduct () {
      if (this.$store.state.loggedIn) {
        const objCategories = {}
        this.categories.forEach((element) => {
          objCategories[element.id] = element.name
        })
        Swal.fire({
          title: 'Product Identity',
          html:
          '<input id="swal-input1" class="swal2-input" placeholder="Image URL">' +
          '<input id="swal-input2" class="swal2-input" placeholder="Product Name">' +
          '<input id="swal-input3" class="swal2-input" placeholder="Product Price">' +
          '<input id="swal-input4" class="swal2-input" type="number" min="0" placeholder="Product Stock">',
          focusConfirm: false,
          preConfirm: () => {
            return [
              document.getElementById('swal-input1').value,
              document.getElementById('swal-input2').value,
              document.getElementById('swal-input3').value,
              document.getElementById('swal-input4').value
            ]
          }
        })
          .then(result => {
            if (result.isConfirmed) {
              this.addProductPayload = {
                name: result.value[1],
                image_url: result.value[0],
                price: result.value[2],
                stock: result.value[3]
              }
              return Swal.fire({
                title: 'Select Category !',
                input: 'select',
                inputOptions: objCategories,
                inputPlaceholder: 'Select a category',
                showCancelButton: true,
                inputValidator: (value) => {
                  return new Promise((resolve) => {
                    if (!value) {
                      resolve('You need to select category')
                    } else {
                      resolve()
                    }
                  })
                }
              })
            }
          })
          .then(result => {
            if (result.isConfirmed) {
              this.addProductPayload.CategoryId = result.value
              return this.$store.dispatch('addProduct', this.addProductPayload)
            }
          })
          .then(() => {
            this.$store.dispatch('getProducts')
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.response.data.message + '!'
            })
          })
      } else {
        Swal.fire('Please login first')
      }
    },
    addCategory () {
      if (!this.$store.state.loggedIn) {
        Swal.fire('Please login first')
      } else {
        Swal.fire({
          title: 'Enter New Category name !',
          input: 'text',
          inputLabel: 'Category name',
          showCancelButton: true,
          inputValidator: (value) => {
            if (!value) {
              return 'You need to write something!'
            }
          }
        })
          .then((result) => {
            if (result.isConfirmed) {
              this.addCategoryPayload.name = result.value
              return this.$store.dispatch('addCategory', this.addCategoryPayload)
            }
          })
          .then(() => {
            this.$store.dispatch('getCategories')
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.response.data.message + '!'
            })
          })
      }
    },
    deleteCategory () {
      const objCategories = {}
      this.categories.forEach((element) => {
        objCategories[element.id] = element.name
      })
      if (!this.$store.state.loggedIn) {
        Swal.fire('Please login first')
      } else {
        Swal.fire({
          title: 'Select Category !',
          input: 'select',
          inputOptions: objCategories,
          inputPlaceholder: 'Select a category',
          showCancelButton: true,
          inputValidator: (value) => {
            return new Promise((resolve) => {
              if (!value) {
                resolve('You need to select category')
              } else {
                resolve()
              }
            })
          }
        })
          .then((result) => {
            if (result.isConfirmed) {
              return this.$store.dispatch('deleteCategory', result.value)
            }
          })
          .then(() => {
            this.$store.dispatch('getCategories')
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.response.data.message + '!'
            })
          })
      }
    },
    addBanner () {
      if (this.$store.state.loggedIn) {
        Swal.fire({
          title: 'Enter banner title !',
          input: 'text',
          inputLabel: 'Banner title',
          showCancelButton: true,
          inputValidator: (value) => {
            if (!value) {
              return 'You need to write something!'
            }
          }
        })
          .then((result) => {
            this.addBannerPayload.title = result.value
            if (result.isConfirmed) {
              Swal.fire({
                title: 'Enter banner image_url !',
                input: 'text',
                inputLabel: 'Banner image',
                showCancelButton: true,
                inputValidator: (value) => {
                  if (!value) {
                    return 'You need to write something!'
                  }
                }
              })
                .then(result => {
                  if (result) {
                    this.addBannerPayload.image_url = result.value
                  }
                  if (result.isConfirmed) {
                    this.$store.dispatch('addBanner', this.addBannerPayload)
                  }
                })
                .catch((err) => {
                  console.log(err)
                })
            }
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        Swal.fire('Please login first')
      }
    },
    showProducts () {
      this.show = 'products'
    }
  },
  components: {
    Product,
    Category,
    Banner
  },
  computed: {
    products () {
      if (this.chosenCategory) {
        return this.$store.state.products.filter(
          element => element.CategoryId === this.chosenCategory.id
        )
      } else {
        return this.$store.state.products
      }
    },
    categories () {
      return this.$store.state.categories
    },
    banners () {
      return this.$store.state.banners
    },
    userEmail () {
      if (this.$store.state.loggedIn) {
        return localStorage.getItem('user')
      } else {
        return ''
      }
    }
  },
  created () {
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getBanners')
    if (localStorage.getItem('token')) {
      this.$store.commit('isLogin', true)
    } else {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.btn {
  background-color: #42b983;
  text-decoration: none;
  width: 3rem;
  height: 3rem;
  text-align: start;
}

.btn:hover {
  background-color: #2c3e50;
  color: #42b983;
}

.btn-action {
  width: 10rem !important;
  height: 3rem !important;
}

.content {
  display: flex;
  flex-direction: column;
  max-width: 99%;
}

.content-category {
  margin-right: 10px;
}

.content-header {
  display: flex;
  margin-top: 10px;
}

.content-header-text {
  color: #42b983;
}

.content-nav {
  align-items: center;
  background-color: #42b983;
  border-radius: 5px;
  box-shadow: 1px 1px 15px 5px rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
}

.container-fluid {
  transition: all 0.5s ease-in-out;
}

.main-content {
  display: flex;
  flex-direction: column;
  z-index: 10;
  width: 100%;
}

.main-web {
  display: flex;
}

.main-nav {
  align-items: flex-start;
  background-color: #42b983;
  box-shadow: 1px 1px 15px 5px rgba(0, 0, 0, 0.65);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-right: 12px;
  height: 80%;
}

.main-nav a {
  font-size: 1em;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.main-nav a:hover {
  color: #006666;
  transition: 300ms;
}

.main-web {
  height: 100vh;
}

.overflow-auto {
  height: 200px;
  width: 100%;
}

.product-card {
  background-color: #42b983;
}

.space {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.space ul {
  margin-left: 20px;
  align-items: flex-start;
  text-align: start;
}
</style>
