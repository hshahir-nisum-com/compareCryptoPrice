<template>
<div class=" mx-auto text-center px-4 table-fixed  mt-2 lg:col-span-12 border-collapse  border-green-800" >
  <table
    class="shadow-md "
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
      <tr v-for="data in fromApi.coins" :key="data">
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
    <button class="mt-5">button</button>
    </div>

</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  name: "CryptoList",
  
  methods: {
    ...mapActions("fromApi", ["getData"]),
  },
  async created() {
    await this.getData();
  },
  computed: {
    ...mapState(["fromApi"]),
  },
};
</script>