<template>
  <div class="hello">
    <div class="container" id="banner">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
          <div class="item active">
            <img src="https://houseofbamboo.com.au/wp-content/uploads/2016/10/Banner-E-commerce-launch.jpg" id="slide-banner">
          </div>

          <div class="item">
            <img src="https://cdn.artboard.co/private/Google_113596245918522199101/projects/5c543cf603044f001ff77890/preview.png?ver=1549025609109" id="slide-banner">
          </div>

          <div class="item">
            <img src="https://blog.3dcart.com/hs-fs/hubfs/image4-2.png?width=1413&height=299&name=image4-2.png" alt="New york" id="slide-banner">
          </div>
        </div>

        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
