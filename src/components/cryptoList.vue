<template>
  <table
    class="container mx-auto text-center px-4 table-fixed shadow-md mt-2 lg:col-span-12 border-collapse border border-green-800"
  >
    <thead>
      <tr>
        <th class="border border-green-600">Rank</th>
        <th class="border border-green-600">Name</th>
        <th class="border border-green-600">Symbol</th>
        <th class="border border-green-600">Price {USD}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in coins" :key="data">
        <td class="border hover:bg-indigo-50 border-green-600">
          {{ data.cmc_rank }}
        </td>
        <td class="border hover:bg-indigo-50 border-green-600">
          {{ data.name }}
        </td>
        <td class="border hover:bg-indigo-50 border-green-600">
          {{ data.symbol }}
        </td>
        <td class="border hover:bg-indigo-50 border-green-600">
          {{ data.quote.USD.price }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  name: "CryptoList",
  data() {
    return {
      coinData: [],
    };
  },

  methods: {
    ...mapActions(["fromApi/getData"]),
    
  },
  async update() {
    await this.getData();
    
    console.log(this.fromApi)
  },
  computed:{ 
    ...mapState(['fromApi'])},
};
</script>