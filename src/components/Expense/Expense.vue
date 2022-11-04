<template>
  <form @submit.prevent="handleSubmit">
    <h3>Add Expense</h3>
    <div class="form-group">
      <label for="name">Expense name</label>
      <input type="text" class="form-control" v-model="name" id="name" placeholder="Expense name">
    </div>
    <div class="form-group">
      <label for="parentCategory">Add Root category</label>
      <select class="form-control" v-model="selectedValue" name="parentCategory">
        <option v-for="n in JSON.parse(JSON.stringify(parentCategories))" :key="n.id" :value="n.id">{{n.name}}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="amount">Enter amount</label>
      <input type="number" class="form-control" v-model="amount" id="amount" placeholder="Amount">
    </div>
    <div class="form-group">
      <label for="description">Enter Description</label>
      <input type="text" class="form-control" v-model="description" id="description" placeholder="Enter description">
    </div>

    <button type="submit" class="btn btn-primary">Add</button>
  </form>
</template>

<script>
import CategoryService from "@/services/CategoryService";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Expense',
  data() {
    return {
      "name": "",
      "parentCategories": [],
      "selectedValue" : null,
      "amount": 0,
      "description": ""
    }
  },
  mounted() {
    CategoryService.getCategories().then(response => {
      this.parentCategories = response.data;
    }).catch(err => {
      console.log(err);
    });
  },
  methods: {
    handleSubmit() {
      const model_data = {
        "name": this.name,
        "parentCategoryId": this.selectedValue,
        "type": "",
        "amount": this.amount,
        "description": this.description
      }
      if (this.amount >= 0) model_data.type = "INCOME";
      else model_data.type = "EXPENSE";

      CategoryService.addExpense(model_data).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err);
      });
    }
  }
}
</script>