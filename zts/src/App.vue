<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <ZeroTrustScoreWidget :companyData="companyData" />
  </div>
</template>

<script>
import ZeroTrustScoreWidget from '@/components/ZeroTrustScoreWidget.vue';
import companyData from '@/assets/companyData.json'; // Import the JSON file

export default {
  name: 'App',
  components: {
    ZeroTrustScoreWidget
  },
  data() {
    return {
      companyData // Assign imported JSON data to a data property
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
