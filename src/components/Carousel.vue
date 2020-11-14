<template>
  <div class="banner">
    <div class="container pt-5">
    <div class="row">
      <div class="col-6">
        <div class="jumbotron jumbotron-fluid bg-transparent">
            <h1>{{ title }}</h1>
            <p class="col-10 mt-5 text-justify d-none d-lg-block"></p>
        </div>
      </div>
      <div class="col-6">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="../assets/banner.jpg" alt="Second slide">
              </div>
              <div v-for="banner in banners" :key="banner.id" class="carousel-item">
                <img class="d-block w-100" :src="banner.image_url" alt="First slide">
              </div>
              <!-- <div class="carousel-item">
                <img class="d-block w-100" src="https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2017/09/Blog-Banner-900x344.jpg" alt="Third slide">
              </div> -->
            </div>
            <div class="container">
              <div class="row mx-auto">
                <div class="col-1">
                  <div class="button-slide">
                    <div class="carousel-control">
                      <a class="carousel-control-prev d-flex align-items-end ml-3" href="#carouselExampleControls" role="button" data-slide="prev">
                          <span class="fas fa-angle-left" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next d-flex align-items-end mr-3" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="fas fa-angle-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  methods: {
    fetchBanner () {
      this.$store.dispatch('fetchBanner')
    }
  },
  computed: {
    title () {
      return this.$store.state.title
    },
    banners () {
      return this.$store.state.banners
    }
  },
  created () {
    return this.fetchBanner()
  }
}
</script>

<style scoped>
  .banner{
    background-color: #ecf0f1;
  }
  .fa-angle-left,
  .fa-angle-right {
    color: white;
    height: 50px;
    width: 50px !important;
    padding: 15px;
  }
  .button-slide {
    width: 70px;
    height: 50px;
    background-color: #00d2d3 !important;
    position: absolute;
    bottom: 0;
    left: -15px;
  }
</style>
