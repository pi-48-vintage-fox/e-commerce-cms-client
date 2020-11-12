<template>
  <tr>
      <td>{{ product.id }}</td>
      <td>{{ product.name }}</td>
      <td><img :src="product.image_url" alt=""></td>
      <td>{{ product.price }}</td>
      <td>{{ product.stock }}</td>
      <td>{{ product.Category.name }}</td>
      <td><a href="" class="fas fa-trash"></a> | <a href="" class="fas fa-edit"></a></td>
  </tr>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['product']
}
</script>

<style>

</style>
