<template>
    <!-- Input Checkbox -->
    <input
    type="checkbox"
    :id="id"
    class="input__checkbox"
    :checked="isChecked"
    @click="toggleCheckbox"
  />
</template>
  
<script>
export default {
    name: 'MISAInputCheckbox',
    props: {
      isChecked: Boolean,
      id: String
  },
  methods: {
    toggleCheckbox() {
      this.$emit('input', !this.isChecked);
    }
  }
};
</script>

<style scoped>
@import url('../../../css/base/input.css');
</style>
  