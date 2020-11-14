<template>
  <div id="sidebar" class="hidden">
    <vs-sidebar
      absolute
      v-model="active"
      open
      background="dark"
      textWhite
      >
        <template #logo>
          <!-- <vs-avatar>
            <img src="https://lustria.g5plus.net/wp-content/uploads/2018/12/product-07.jpg" />
          </vs-avatar> -->
          <vs-button
            @click="addProduct"
          >
            <i class="material-icons">add_circle_outline</i>Add Product
          </vs-button>
        </template>

          <!-- <vs-sidebar-item id="home">
            <template #icon>
              <i class='material-icons'>home</i>
            </template>
            <span @click="gotoHome" >Home</span>
          </vs-sidebar-item> -->

          <vs-sidebar-item id="products">
            <template #icon>
              <i class="material-icons">view_list</i>
            </template>
            <span @click="gotoProducts" >All Products</span>
          </vs-sidebar-item>

          <!-- <vs-sidebar-group> -->
            <!-- <template #header> -->
              <vs-sidebar-item >
                <template #icon>
                  <i class='material-icons not-click'>category</i>
                </template>
                CATEGORIES
              </vs-sidebar-item>
            <!-- </template> -->

            <vs-sidebar-item
              v-for="cat in categories"
              :key="cat.id"
              :id="String(cat.id)"
              >
            <template #icon>
              <i class="material-icons md-16"></i>
            </template>
            <span @click="gotoCategory(cat.id)">
            {{cat.name}}
            </span>
          </vs-sidebar-item>
        <!-- </vs-sidebar-group> -->

        <template #footer>
          <!-- <vs-row class="center"> -->
             <vs-button
                transparent
                @click="signOut"
              >
            <i class="material-icons">exit_to_app</i> Sign Out
          </vs-button>
          <!-- </vs-row> -->
        </template>
      </vs-sidebar>
    </div>
</template>

<script>
export default {
  name: 'TheSidebar',
  data () {
    return {
      active: 'products'
    }
  },
  props: ['user', 'categories'],
  methods: {
    addProduct () {
      console.log('goto add product')
      this.$router.push('/addproduct')
    },
    signOut () {
      console.log('sign out')
      localStorage.removeItem('access_token')
      this.$router.push('/login')
    },
    gotoCategory (id) {
      console.log('category', id)
      this.$router.push(`/products/${id}`)
    },
    gotoHome () {
      console.log('goto home')
      if (this.$route.name !== 'Dashboard') {
        this.$router.push('/')
      }
    },
    gotoProducts () {
      console.log('goto products')
      if (this.$route.name !== 'Products') {
        this.$router.push('/products')
      }
    },
    gotoCategories () {
      console.log('goto categories')
      if (this.$route.name !== 'Categories') {
        this.$router.push('/categories')
      }
    }
  }
}
</script>

<style lang="stylus">
  getColor(colorx, alpha = 1)
    unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
  getVar(var)
    unquote("var(--vs-"+var+")")
  #sidebar
    min-height 100vh
  .not-click
    cursor default !important
</style>
