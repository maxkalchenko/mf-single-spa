<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <table v-if="data.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Driver Name</th>
          <th>License Plate</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.driverName }}</td>
          <td>{{ item.licensePlate }}</td>
          <td>{{ item.status }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>Loading data...</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      data: []
    };
  },
  mounted() {
    // eslint-disable-next-line
    System.import('@maxkalchenko/utils')
      .then((utils) => {
        return utils.httpGet('vue');
      })
      .then((res) => {
        this.data = res;
      })
      .catch((err) => {
        console.error('Failed to load @maxkalchenko/utils:', err);
      });
  }
}
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

table {
  margin: 20px auto;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>
