<template>
  <div class="modal">
    <div class="backdrop" @click="$emit('close')"></div>
  <!-- Modal content -->
    <div class="modal-content modal-sm">
      <div class="modal-header">
        <h4>{{title}}</h4>
        <span class="close" @click="$emit('close')">&times;</span>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['title']
}
</script>

<style>
/* The Modal (background) */
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  font-family: 'Lato', sans-serif;
}
.backdrop{
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  font-family: 'Lato', sans-serif;
}
/* Modal Content/Box */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: 5% auto; /* 15% from the top and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  border-radius:10px;
  z-index: 20;
}
.modal-sm{
  width:30%;
}
.modal-header{
  padding:0.5rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
}
.modal-body{
  padding:0.5rem 1rem;
}
/* The Close Button */
.close {
  margin-left: auto;
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
