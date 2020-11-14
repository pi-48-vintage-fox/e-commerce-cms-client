<template>
  <tr>
    <th scope="row">{{product.id}}</th>
    <td>
      <img class="img-fluid"
        :src="product.image_url"
        alt=""
        style="max-width: 60%"
      />
    </td>
    <td>{{product.name}}</td>
    <td>{{product.price}}</td>
    <td>{{product.stock}}</td>
    <td>
      <button class="btn btn-warning m-2">Edit</button>
      <button class="btn btn-danger m-2">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
    name: 'ProductList',
    props: ['product'],
};
</script>

<style>
</style>