<template>
  <div>
    <div class="product">
      <div class="col-1">
        <div class="product-property product-num">{{no}}</div>
      </div>
      <div class="col-3">
        <div class="product-property product-image"><img id="product-image" :src="product.image_url" width="400px" height="200px"></div>
      </div>
      <div class="col-2">
        <div class="product-property product-name">{{product.name}}</div>
      </div>
      <div class="col-2">
        <div class="product-property product-price" id="product-price">{{priceInRupiah}}</div>
      </div>
      <div class="col-2">
        <div class="product-property product-stock" id="product-stock">{{product.stock}}</div>
      </div>
      <div class="col-1">
        <button class="btn">
          <svg width="2em" height="2em" viewBox="0 0 16 16" class="icon bi bi-pencil-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
          </svg>
        </button>
      </div>
      <div class="col-1">
        <button class="btn">
          <svg width="2em" height="2em" viewBox="0 0 16 16" class="icon bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product', 'counter'],
  computed: {
    no () {
      return this.counter + 1
    },
    priceInRupiah () {
      var rupiah = ''
      var angkarev = this.product.price.toString().split('').reverse().join('')
      for (var i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.'
      return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('')
    }
  }
}
</script>

<style scoped>
#product-image {
  border-radius: 5px;
}

.icon:hover {
  color: #42b983;
  transition: 300ms;
}

.product {
  align-items: center;
  background-color: #006666;
  display: flex;
  font-size: 2em;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
}

.product-property {
  font-size: 2rem !important;
}

</style>
