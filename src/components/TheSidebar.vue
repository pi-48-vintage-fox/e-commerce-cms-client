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
          <div class="center con-avatars">
            <vs-avatar circle size="70">
              <img src="https://images.generated.photos/FBrtfWRfPF9ZIcunzOyvRKDL4wHCFxahh1RcOHMjWtI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yy/L3YyXzAzNDY4NDgu/cG5n.png" />
            </vs-avatar>
          </div>

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
            <span @click="gotoProducts" >PRODUCTS</span>
          </vs-sidebar-item>

          <vs-sidebar-item id="banners">
            <template #icon>
              <i class="material-icons">view_list</i>
            </template>
            <span @click="gotoBanners" >BANNERS</span>
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
                danger
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
    gotoBanners () {
      console.log('goto banners')
      this.$router.push('/banners')
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

  .vs-sidebar-content .vs-sidebar__logo img
    max-width 120px !important
    max-height 120px !important
</style>
