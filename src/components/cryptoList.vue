<template>
  <div class="grid">
    <div class="grid grid-cols-12">
      <div></div>
      <table class="col-span-10 text-center">
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
      <input
        type="button"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 lg:col-start-11 lg:col-end-12 sm:col-start-1 sm:col-end-4"
        value="Refresh"
        @click="apiCall()"
      />

    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  name: "CryptoList",

  methods: {
    ...mapActions("fromApi", ["getData"]),
    async apiCall() {
      await this.getData();
    },
  },

  async created() {
    await this.apiCall();
  },
  computed: {
    ...mapState(["fromApi"]),
  },
};
</script>