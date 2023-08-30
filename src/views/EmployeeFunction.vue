<template>
    <div class="table--dropdown">
        <a href="#">Nhân bản</a>
        <a href="#" @click="openDeleteDialog">Xóa</a>
        <DeleteDialog v-if="showDeleteDialog" @close="closeDeleteDialog()"></DeleteDialog>
        <a href="#">Ngừng sử dụng</a>
    </div>
</template>
  
<script>
import DeleteDialog from './Dialog/DeleteDialog.vue';
export default {
    name: 'EmployeeFunction',
    components: {
        DeleteDialog
    },
    data() {
        return {
            showDeleteDialog: false,
        };
    },
    methods: {
    openDeleteDialog() {
      this.showDeleteDialog = true;
    },
    closeDeleteDialog() {
      this.showDeleteDialog  = false;
    },
  },
};
</script>

<style scoped>
@import url('../css/view/employee-function.css');
</style>
  