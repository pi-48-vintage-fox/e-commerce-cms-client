<template>
  <div class="">

  <div class="main-view-header">
    <vs-button success @click="addBanner" style="float:right">
      <i class="material-icons">add_circle_outline</i>
      Add Banner</vs-button>
      <h1>Banners List</h1>
      <h3 v-if="$route.query.category">{{route.query.category}}</h3>
  </div>
    <!-- <vs-table
      v-model="selected"
      > -->
      <vs-table v-if="banners" striped>
      <template #thead>
        <vs-tr>
          <vs-th>
            <!-- <vs-checkbox
              :indeterminate="selected.length == banners.length" v-model="allCheck"
              @change="selected = $vs.checkAll(selected, banners)"
            /> -->
            No
          </vs-th>
          <vs-th>Title</vs-th>
          <vs-th>Status</vs-th>
          <vs-th>Picture</vs-th>
          <vs-th>Actions</vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <!-- <vs-tr
          :key="i"
          v-for="(tr, i) in banners"
          :data="tr"
          :is-selected="!!selected.includes(tr)"
        > -->
        <vs-tr
          :key="i"
          v-for="(tr, i) in banners"
          :data="tr"
        >
          <vs-td checkbox>
            <!-- <vs-checkbox :val="tr" v-model="selected" /> -->
            {{i+1}}
          </vs-td>
          <vs-td>{{ tr.title }}</vs-td>
          <vs-td>{{ tr.status }}</vs-td>
          <vs-td><img :src="tr.imageUrl" class="img-preview-sm" /></vs-td>
          <vs-td>
            <vs-row justify="center">
              <vs-button
                flat
                icon
                @click="editBanner(tr.id)"
              >
                <i class="material-icons">edit</i>
              </vs-button>
              <vs-button
                icon
                flat
                danger
                @click="deleteBanner(tr.id)"
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
                Are you sure you want to delete this banner?
              </p>
            </div>

            <template #footer>
              <div class="con-footer">
                <vs-button @click="showConfirmDelete=false" dark transparent>
                  Cancel
                </vs-button>
                <vs-button id="deleteBanner" @click="deleteBanner(tr.id)" transparent>
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
  name: 'Banners',
  data: () => ({
    selected: [],
    allCheck: false,
    showConfirmDelete: false,
    isFetching: false,
    isDeleting: false
  }),

  methods: {
    addBanner () {
      this.$router.push('/banners/add')
    },
    deleteBanner (id) {
      this.showConfirmDelete = false
      console.log('delete', id)
      this.$store.dispatch('deleteBanner', id)
        .then((result) => {
          console.log(result, '<<< result delete banner')
          this.$store.dispatch('fetchBanners')
        })
        .catch(err => {
          console.log(err.response, '<<< err delete banner')
          this.$toasted.global.errorMessage(err.response.data.msg)
        })
    },
    editBanner (id) {
      console.log('edit', id)
      this.$router.push('/banners/edit/' + id)
    }
  },
  created () {
    this.$store.dispatch('fetchBanners')
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  }
}
</script>

<style lang="stylus">

  getColor(vsColor, alpha = 1)
      unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
  getVar(var)
      unquote("var(--vs-"+var+")")
  .img-preview-sm
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
