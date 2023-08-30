<template>
    <div class="table--dropdown">
        <a href="#">Nhân bản</a>
        <a href="#" @click="openDeleteDialog()">Xóa</a>
        <MISADialog 
        v-if="showDeleteDialog"
        @close="closeDeleteDialog()"
        :title="$MISAResource[$LangCode].DeleteEmployee"
        :content="$MISAResource[$LangCode].DeleteEmployeeText"
        :type="'warning'"
        ></MISADialog>
        <a href="#">Ngừng sử dụng</a>
    </div>
</template>
  
<script>
export default {
    name: 'EmployeeFunction',
    data() {
        return {
            showDeleteDialog: false,
        };
    },
    methods: {

    /**
     * Hàm mở dialog xóa nhân viên
     * CreateBy : NTKMY (24/08/2023)
     */
    openDeleteDialog() {
      this.showDeleteDialog = true;
    },

    /**
     * Hàm đóng dialog xóa nhân viên
     * CreateBy : NTKMY (24/08/2023)
     */
    closeDeleteDialog() {
      this.showDeleteDialog  = false;
    },
  },
};
</script>

<style scoped>
@import url('../../css/view/employee-function.css');
</style>
  