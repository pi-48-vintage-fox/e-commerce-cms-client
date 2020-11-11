<template>
  <div class="container">
    <div class="page-header">
      <i class="fas fa-arrow-left"></i>
      <h2>Products</h2>
    </div>
    <div class="card mb-1">
      <a href="#" class="btn washed-success mb-1">Add new product</a>
    </div>
    <div class="card">
      <table class="table">
        <thead>
          <th class="text-left">Product Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="product-item">
                <img src="https://via.placeholder.com/64" class="mr-1">
                Sepokat hitam
              </div>
            </td>
            <td>Rp. 100.000</td>
            <td>5</td>
            <td>
              <a href="#" class="btn washed-primary mr-1"><i class="far fa-edit"></i> Edit</a>
              <a href="#" class="btn washed-danger"><i class="far fa-trash-alt"></i> Delete</a>
            </td>
          </tr>
          <tr >
            <td>
              <div class="product-item">
                <img src="https://via.placeholder.com/64" class="mr-1">
                Sepokat hitam
              </div>
            </td>
            <td>Rp. 100.000</td>
            <td>5</td>
            <td>
              <a href="#" class="btn washed-primary mr-1"><i class="far fa-edit"></i> Edit</a>
              <a href="#" class="btn washed-danger"><i class="far fa-trash-alt"></i> Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product'
}
</script>
