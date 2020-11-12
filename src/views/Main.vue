<template>
  <div class="main">
    <div class="main-web">
      <div v-if="navOpen" class="main-nav col-1.5">
        <h3><a href="#" @click.prevent="resetCategory">Home</a></h3>
        <div class="space categories-space">
          <h3><b>Categories</b></h3>
          <ul>
            <Category
              v-for="category in categories"
              :key="category.id"
              :category="category"
              @chose="choseCategory"
            />
          </ul>
        </div>
        <div class="action-category">
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
          <h3><a href="#"><b>Banners</b></a></h3>
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
              <div class="delete-banner">
                <button class="btn btn-action" @click="deleteBanner">
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
                  <small> Delete Banner</small>
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
          <Product
            v-for="(product, i) in products"
            :key="i"
            :product="product"
            :counter="i"
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
export default {
  name: 'Main',
  data () {
    return {
      navOpen: false,
      chosenCategory: '',
      addCategoryPayload: {
        name: ''
      },
      categoriesList: ''
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
              this.$store.dispatch('addCategory', this.addCategoryPayload)
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    deleteCategory () {
      const objCategories = {}
      this.categories.forEach((element) => {
        objCategories[element.id] = element.name
      })
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
        .then(result => {
          if (result.isConfirmed) {
            this.$store.dispatch('deleteCategory', result.value)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    addBanner () {

    },
    deleteBanner () {

    }
  },
  components: {
    Product,
    Category
  },
  computed: {
    products () {
      if (this.chosenCategory) {
        return this.$store.state.products.filter(
          (element) => element.CategoryId === this.chosenCategory.id
        )
      } else {
        return this.$store.state.products
      }
    },
    categories () {
      return this.$store.state.categories
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
}

.content-category {
  margin-right: 10px;
}

.content-nav {
  align-items: center;
  background-color: #42b983;
  border-radius: 5px;
  box-shadow: 1px 1px 15px 5px rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: space-between;
  width: 90vw;
  height: 3rem;
}

.container-fluid {
  transition: all 0.5s ease-in-out;
}

.main-content {
  display: flex;
  flex-direction: column;
  z-index: 10;
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

/* .main-nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
