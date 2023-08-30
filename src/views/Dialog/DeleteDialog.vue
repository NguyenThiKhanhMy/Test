<template>
    <div id="popupContainer" class="popup-container"> 
        <div class="popup-container">
          <div class="warning">
            <div class="Warning__title-dialog">
              <div class="warning__title">Xóa nhân viên</div>
              <div class="icon warning__close" @click="closeDeleteDialog"></div>
            </div>
            <div class="warning__content">
              <div
                class="warning__icon"
              ></div>
              <span class="warning__name"
                >Bạn có thực sự muốn xóa Nhân viên &lt;00579&gt; không?
              </span>
            </div>
            <div
              class="warning__button">
                <MISAButton class="btn-normal btn-cancel"  @click="closeDeleteDialog">Hủy bỏ</MISAButton>
                <MISAButton class="btn-success">Xóa</MISAButton>
            </div>
          </div>
        </div>
      </div>
</template>
  
<script>
import MISAButton from '../../components/base/MISAButton.vue';
export default {
    name: 'DeleteDialog',
    components: {
      MISAButton
    },
    methods: {
      closeDeleteDialog() {
      this.$emit('close');
    },
    }
};


</script>

<style scoped>
@import url('../../css/base/dialog.css');
@import url('../../css/base/icon.css');
.warning__icon {
  background-position: -596px -463px;
  margin-top: 8px;
}

</style>
  