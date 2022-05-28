<template>
  <div class="c-filters_wrapper">
    <input
      type="input"
      placeholder="Search"
      v-model="searchTerm"
      v-on:input="updateSearchTerm"
    />
    <button class="c-filters_button" v-on:click="clearSearchTerm">Clear</button>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",

  data() {
    return {
      searchTerm: "",
      inputChanged: false,
    };
  },

  created() {
    let qp = new URLSearchParams(window.location.search);
	  let f = qp.get('filter');
	  if(f) {
      this.searchTerm = qp.get('filter');
      this.inputChanged = true;
      this.updateSearchTerm();
    }

    this.$watch(
      () => this.searchTerm,
      (newSearchTerm) => {
        this.inputChanged = true;
      }
    );
  },

  methods: {
    updateSearchTerm() {
      this.$emit("update-search-term", this.searchTerm, this.inputChanged);
    },

    clearSearchTerm() {
      this.searchTerm = "";
      this.$emit("clear-search-term");
    },
  },
};
</script>
