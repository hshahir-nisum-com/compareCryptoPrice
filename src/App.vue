<template>
<div class="grid  grid-flow-row auto-rows-max gap-4">
  
    <Header />
  
     <CryptoList />
   </div>
  
</template>

<script>
import Header from "./components/header";
import CryptoList from "./components/cryptoList";
export default {
  name: "App",
  components: {
    Header,
    CryptoList,
  },
};
</script>


<style>
</style>
