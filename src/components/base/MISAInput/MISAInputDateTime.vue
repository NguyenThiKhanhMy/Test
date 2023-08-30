<template>
    <!-- Input DateTime -->
    <input
        class="input__datetime"
        type="date"
        id="datetime"
        v-model="datetime"
      />
</template>
  
<script>
    export default {
        name: 'MISAInputDateTime',
    };
</script>
<style scoped>
@import url('../../../css/base/input.css');
</style>
  