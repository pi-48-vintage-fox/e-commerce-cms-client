<template>
  <div class="col-3 mt-2">
    <div class="card">
        <img src="" class="card-img-top" alt="...">
            <div class="card-body">
                <h5  class="card-title">{{  }}</h5>
                <p class="card-text">Rp. {{  }},-</p>
                <p class="card-text">Category : {{  }}</p>
                <a href="#" @click.prevent="updateProduct(dataProduct.id)">Edit</a>
                ||
                <a href="#" @click.prevent="deleteProduct(dataProduct.id)">Delete</a>
            </div>
       </div>
   </div>
</template>

<script>
export default {
  props: ['inProduct']

}
</script>

<style>

</style>
