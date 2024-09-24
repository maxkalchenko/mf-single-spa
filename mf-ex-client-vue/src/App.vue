<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" height="100px">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <table v-if="data.length" class="vue">
      <thead>
        <tr>
          <th class="vue">ID</th>
          <th class="vue">Name</th>
          <th class="vue">License</th>
          <th class="vue">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td class="vue">{{ item.id }}</td>
          <td class="vue">{{ item.name }}</td>
          <td class="vue">{{ item.number }}</td>
          <td class="vue">{{ item.status }}</td>
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
table.vue {
  margin: 20px auto;
  border-collapse: collapse;
  width: 100%;
}

th.vue, td.vue {
  border: 1px solid #ddd;
  padding: 8px;
}

th.vue {
  background-color: #f2f2f2;
}
</style>
