<template>
  <li><a id="category" href="#" @click.prevent="chose">{{category.name}}</a></li>
</template>

<script>
export default {
  name: 'Category',
  methods: {
    chose () {
      this.$emit('chose', this.category)
    }
  },
  props: ['category']
}
</script>

<style scoped>
a {
  font-size: 1em;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

a:hover {
  color: #006666;
  transition: 300ms;
  text-decoration: none;
}
</style>
