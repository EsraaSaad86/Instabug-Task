<template>
  <div class="c-filters_wrapper">
    <span>Start date: </span>
    <input type="date" v-on:change="updateChartData" v-model="startDate" placeholder="YYYY-MM-DD" required />
  
    <span>End date: </span>
    <input type="date" v-on:change="updateChartData" v-model="endDate" placeholder="YYYY-MM-DD" required />
    </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "ChartFilterComponent",

  data() {
    return {
      startDate: "",
      endDate: "",
    };
  },

 methods: {
    updateChartData: _.debounce(function() {
      if(this.startDate && this.endDate)
        this.$emit("update-chart-data", this.startDate, this.endDate)
      }, 500)
  },
};
</script>
