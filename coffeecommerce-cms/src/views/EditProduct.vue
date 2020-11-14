<template>
   <div class="mt-3">
    <h1 class="text-white">Edit Product Detail</h1>
    <EditForm :product="$store.state.filtered[0]"></EditForm>
  </div>
</template>

<script>
import EditForm from '../components/EditProductForm'
export default {
  name: 'EditProduct',
  components: {
    EditForm
  }

}
</script>

<style>

</style>
