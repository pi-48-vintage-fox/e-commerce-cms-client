<template>
<div id="landing-page" class="grid fullpage" :active="active">
  <vs-row class="fullpage" justify="center" align="center" >
    <!-- <vs-col> -->
      <vs-card type="3">
        <template #title>
          <h4 class="not-margin">
            E-commerce CMS <b>Admin</b>
          </h4>
        </template>
        <template #img>
          <!-- <img src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt=""> -->
          <img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=80" alt="">
        </template>
        <template #text>
            <form class="con-form" @submit.prevent="submitLoginForm">
              <div class="input-group">
                <vs-input v-model="email" border  placeholder="admin@mail.com">
                  <template #icon>
                    @
                  </template>
                </vs-input>
                <vs-input type="password" v-model="password" border placeholder="1234">
                  <template #icon>
                    <!-- <i class='bx bxs-lock'></i> -->
                    <i class='material-icons md-16 bx bxs-lock'>lock</i>
                  </template>
                </vs-input>
              </div>

            <div class="footer-dialog">
              <vs-button block>
                Sign In
              </vs-button>
            </div>
            </form>

        </template>

      </vs-card>
    <!-- </vs-col> -->
  </vs-row>
</div>

</template>

<script>

export default {
  data () {
    return {
      name: 'Login',
      active: false,
      email: '',
      password: '',
      errors: {
        email: [],
        password: []
      },
      errorBanner: null
    }
  },
  mounted () {
    this.active = true
  },

  methods: {
    submitLoginForm () {
      const { email, password, errors } = this
      console.log({ email, password, errors })

      if (this.validateLogin()) {
        for (const key in this.errors) {
          this.errors[key] = []
        }
        this.errorBanner = null

        console.log('submit login form')

        this.$store.dispatch('submitLoginForm', {
          email, password
        })
          .then(({ data }) => {
            this.email = ''
            this.password = ''
            console.log('berhasil login', data)
            if (data.access_token) {
              console.log('saving access token')
              localStorage.setItem('access_token', data.access_token)
              this.$store.commit('setUser', data)
            }
            this.$router.push('/products')
          })
          .catch(err => {
            this.email = ''
            this.password = ''
            console.log(err.response)
            this.$toasted.global.errrorMessage(err.response.data)
          })
      }
    },
    validateLogin () {
      for (const key in this.errors) {
        this.errors[key] = []
      }
      console.log('validating login form')
      if (!this.email) {
        this.errors.email.push('Email address is required')
      }
      if (!this.password) {
        this.errors.password.push('Password is required')
      }
      console.log('errors:', JSON.stringify(this.errors, null, 2))

      for (const key in this.errors) {
        if (this.errors[key].length > 0) {
          console.log('validation pass fail')
          return false
        }
      }

      console.log('validation pass success')

      return true
    },
    toggleLoginForm () {
      this.$emit('toggleLoginForm')
    }
  }
}

</script>

<style lang="stylus" >
  getColor(vsColor, alpha = 1)
      unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
  getVar(var)
      unquote("var(--vs-"+var+")")
  #landing-page
    background-color #553F83
  .fullpage
      height 100vh
  .fullheight
      height 100%
  .vs-card-content
    width 500px
    max-width 500px
  .vs-card-content.type-3 .vs-card
    max-width 500px !important
    min-width 450px !important
  .vs-card__img
    max-height 300px
    background-size cover
  .vs-card__text
    max-height 300px
    width 100%
    display flex
    flex-direction column
    justify-content flex-start
  .input-group
    margin 1rem 0
  .not-margin
    margin 0px
    font-weight normal
    padding 10px
  .con-form
    width 100%
    .flex
      display flex
      align-items center
      justify-content space-between
      a
        font-size .8rem
        opacity .7
        &:hover
          opacity 1
    .vs-checkbox-label
      font-size .8rem
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
    .vs-input-parent
      margin-bottom 1rem !important
  </style>
