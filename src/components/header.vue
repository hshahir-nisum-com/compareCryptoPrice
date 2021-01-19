<template>
  <div class="shadow-md mb-2 lg:pt-6 p-2 lg:col-span-12">
    <h1 class="text-4xl text-center">Crypto Compare</h1>
    <div class="col-span-1 lg:col-span-6">
      <p class="mt-3 subpixel-antialiased text-center">
        This webApp list down the top 10 cryptocurrencies and gives you easy way
        to cryptocurrency performance and their ranking of current time.
      </p>
    </div>
  </div>
  <CryptoList />
</template>

<script>
import CryptoList from "./cryptoList";

export default {
  name: "header",
  components: {
    CryptoList,
  },
};
</script>