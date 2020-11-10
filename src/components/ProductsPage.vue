<template>
  <div class="col-3">
    <div class="card">
      <img class="card-img-top" :src="product.image_url" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title"><a href="">{{ product.name }}</a></h5>
        <p class="card-text">
          <span class="badge badge-primary">{{ product.Category.name }}</span>
        </p>
      </div>
      <div class="card-footer">
        <p class="card-text">{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  props: ['product']
}
</script>

<style>
  img {
    height: 200px;
  }
</style>
