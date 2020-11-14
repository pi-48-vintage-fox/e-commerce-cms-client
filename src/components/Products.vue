<template>
  <div class="">

  <div class="main-view-header">
      <h1>Products List</h1>
      <h3 v-if="$route.query.category">{{route.query.category}}</h3>
  </div>
    <!-- <vs-table
      v-model="selected"
      > -->
      <vs-table v-if="products" striped>
      <template #thead>
        <vs-tr>
          <vs-th>
            <!-- <vs-checkbox
              :indeterminate="selected.length == products.length" v-model="allCheck"
              @change="selected = $vs.checkAll(selected, products)"
            /> -->
            No
          </vs-th>
          <vs-th>
            Name
          </vs-th>
          <vs-th>
            Category
          </vs-th>
          <vs-th>
            Price
          </vs-th>
          <vs-th>
            Stock
          </vs-th>
          <vs-th>
            Picture
          </vs-th>
          <vs-th>
            Actions
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <!-- <vs-tr
          :key="i"
          v-for="(tr, i) in products"
          :data="tr"
          :is-selected="!!selected.includes(tr)"
        > -->
        <vs-tr
          :key="i"
          v-for="(tr, i) in products"
          :data="tr"
        >
          <vs-td checkbox>
            <!-- <vs-checkbox :val="tr" v-model="selected" /> -->
            {{i+1}}
          </vs-td>
          <vs-td>
            {{ tr.name }}
          </vs-td>
          <vs-td v-if="tr.ProductCategory">
            {{ tr.ProductCategory.name }}
          </vs-td>
          <vs-td>
          {{ tr.price }}
          </vs-td>
          <vs-td>
          {{ tr.stock }}
          </vs-td>
          <vs-td>
          <img :src="tr.imageUrl" class="img-product" />
          </vs-td>
          <vs-td>
            <vs-row justify="center">
              <vs-button
                flat
                icon
                @click="editProduct(tr.id)"
              >
                <i class="material-icons">edit</i>
              </vs-button>
              <vs-button
                icon
                flat
                danger
                @click="deleteProduct(tr.id)"
              >
                <i class="material-icons">delete_outline</i>
              </vs-button>
            </vs-row>
          </vs-td>
          <vs-dialog width="550px" not-center v-model="showConfirmDelete">
            <template #header>
              <h4 class="not-margin" >
                Confirm delete
              </h4>
            </template>
            <div class="con-content">
              <p>
                Are you sure you want to delete this product?
              </p>
            </div>

            <template #footer>
              <div class="con-footer">
                <vs-button @click="showConfirmDelete=false" dark transparent>
                  Cancel
                </vs-button>
                <vs-button id="deleteProduct" @click="deleteProduct(tr.id)" transparent>
                  Ok
                </vs-button>
              </div>
            </template>
          </vs-dialog>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data: () => ({
    selected: [],
    allCheck: false,
    showConfirmDelete: false
  }),

  methods: {
    deleteProduct (id) {
      this.showConfirmDelete = false
      console.log('delete', id)
      this.$store.dispatch('deleteProduct', id)
        .then((result) => {
          console.log(result, '<<< result delete product')
          this.$store.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err.response, '<<< err delete product')
          this.$toasted.global.errorMessage(err.response.data)
        })
    },
    editProduct (id) {
      console.log('edit', id)
      this.$router.push('/editproduct/' + id)
    }
  },
  created () {
    if (!this.$route.params.categoryId) {
      console.log('no cat id')
      this.$store.dispatch('fetchProducts')
    } else {
      console.log('cat id', this.$route.params.categoryId)
      this.$store.dispatch('fetchProductsByCategory', this.$route.params.categoryId)
    }
  },
  computed: {
    products () {
      return this.$route.params.categoryId ? this.$store.state.filteredProducts : this.$store.state.products
    }
  }
}
</script>

<style lang="stylus">

  getColor(vsColor, alpha = 1)
      unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
  getVar(var)
      unquote("var(--vs-"+var+")")
  .img-product
    height 50px
    width auto

  table
    table-layout auto
    border-collapse collapse
    width 100%

  th, td
    white-space nowrap
    width 1px
    text-align left

  .con-footer
    display flex
    align-items center
    justify-content flex-end
    .vs-button
      margin 0px
      .vs-button__content
        padding 10px 30px
      ~ .vs-button
        margin-left 10px
  .not-margin
    margin 0px
    font-weight normal
    padding 10px
    padding-bottom 0px
  .con-content
    width 100%
    p
      font-size .8rem
      padding 0px 10px
    .vs-checkbox-label
      font-size .8rem
    .vs-input-parent
      width 100%
    .vs-input-content
      margin 10px 0px
      width calc(100%)
      .vs-input
        width 100%
  .footer-dialog
    display flex
    align-items center
    justify-content center
    flex-direction column
    width calc(100%)
    .new
      margin 0px
      margin-top 20px
      padding: 0px
      font-size .7rem
      a
        color getColor('primary') !important
        margin-left 6px
        &:hover
          text-decoration underline
    .vs-button
      margin 0px
</style>
