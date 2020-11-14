<template>
  <div>
    <div class="banner">
      <div class="col-1">
        <div class="banner-property banner-num">{{no}}</div>
      </div>
      <div class="col-4">
        <div class="banner-property banner-image"><img id="banner-image" :src="banner.image_url"></div>
      </div>
      <div class="col-3">
        <div class="banner-property banner-name">{{banner.title}}</div>
      </div>
      <div class="col-2">
        <div class="banner-property banner-stock" id="banner-stock">{{banner.status}}</div>
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
  name: 'Banner',
  props: ['banner', 'counter'],
  computed: {
    no () {
      return this.counter + 1
    }
  }
}
</script>

<style scoped>
#banner-image {
  border-radius: 5px;
  width: 100%;
  height: auto;
}

.icon:hover {
  color: #42b983;
  transition: 300ms;
}

.banner {
  align-items: center;
  background-color: #006666;
  display: flex;
  font-size: 2em;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
  width: 100%;
}

.product-property {
  font-size: 2rem !important;
  color: #42b983;
}
</style>
