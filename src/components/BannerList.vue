<template>
  <tr>
    <td>{{ banner.id }}</td>
    <td>{{ banner.name }}</td>
    <td>{{ banner.image_url }}</td>
    <td><a href="" class="fas fa-trash"></a> | <a href="" class="fas fa-edit"></a></td>
  </tr>
</template>

<script>
export default {
  name: 'BannerList',
  props: ['banner']
}
</script>

<style>

</style>
