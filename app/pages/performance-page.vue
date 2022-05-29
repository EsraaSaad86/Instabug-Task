<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <chart-filter-component @update-chart-data="updateChartData"/>
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component :updatedChartData="chartData"/>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import chart from "../services/chart.service.js";
import ChartFilterComponent from "../components/vue-components/chart.filter.vue";
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
export default {
  name: "AboutPageComponent",

  data() {
    return {
      chartData: [],
    }
  },

  mounted () {
    chart.ChartDataService()
      .then(({ data }) => {
        this.chartData = data;
      })
  },

  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },

    updateChartData(startDate, endDate) {
      if(!startDate || !endDate) {
        alert("Please enter start date and end date");
      }
      if(this.formatDate(startDate) > this.formatDate(endDate)) {
        alert("Starting date is older than the ending data");
      } else {
        this.chartData = this.chartData.filter((item) => {
          return this.formatDate(item.date_ms) >= this.formatDate(startDate) &&
                  this.formatDate(item.date_ms) <= this.formatDate(endDate);
          });
      }
    },
  },

  components: {
    PerformanceChartComponent,
    ChartFilterComponent,
  },
};
</script>
