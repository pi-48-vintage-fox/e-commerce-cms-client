<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="jumbotron jumbotron-fluid bg-transparent">
            <h1>E-Commerce CMS</h1>
            <p class="col-10 mt-5 text-justify d-none d-lg-block"></p>
        </div>
      </div>
      <div class="col-6">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="https://ecs7.tokopedia.net/img/blog/seller/2018/03/personalisasi-tampilan-toko-anda-agar-unik-dan-menarik.jpg" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGK0CbfYTcBd8xwnXxyDHrJss3pG5AflS-2A&usqp=CAU" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2017/09/Blog-Banner-900x344.jpg" alt="Third slide">
              </div>
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
</template>

<script>
export default {
  name: 'Carousel'
}
</script>

<style>
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
