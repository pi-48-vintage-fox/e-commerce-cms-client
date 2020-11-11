<template>
  <div class="category-list">
      <li class="list-group-item"> <a href="">{{ category.name }}</a></li>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  props: ['category']
}
</script>

<style>

</style>
