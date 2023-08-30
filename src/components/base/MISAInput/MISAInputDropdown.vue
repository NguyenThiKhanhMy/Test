<template>
    <!-- InputDateTime -->
    <input
        class="input__datetime"
        type="date"
        id="datetime"
        v-model="dropdown"
      />
</template>
  
<script>
    export default {
        name: 'MISAInputDropdown',
    };
</script>
<style scoped>
@import url('../../../css/base/input.css');
</style>
  