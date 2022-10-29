<template>
  <div class = "container">

    <h1 class = "text-center"> Category List</h1>

    <table class = "table table-striped">
      <thead>
      <tr>
        <th> Category Id</th>
        <th> Category Name</th>
        <th> Category Description</th>
      </tr>

      </thead>
      <tbody>
      <tr v-for="category in categories" v-bind:key="category.id">
        <td> {{category.id }}</td>
        <td> {{category.name }}</td>
        <td> {{category.description}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import CategoryService from "@/services/CategoryService";

export default {
  name: 'CategoryList',
  data(){
    return {
      categories: []
    }
  },

  methods: {
    getCategories(){
      CategoryService.getCategories().then((response) => {
        console.log(response);
        this.categories = response.data;
      });
    }
  },
  created() {
    this.getCategories();
  }
}
</script>