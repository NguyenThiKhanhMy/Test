<template>
    <div id="popupContainer" class="popup-container"> 
        <div class="popup-container">
          <div class="warning" style="width: 450px">
            <div class="Warning__title-dialog">
              <div class="warning__title">Lưu nhân viên</div>
              <div class="icon warning__close" @click="closeDialog"></div>
            </div>
            <div class="warning__content" style="gap:10px">
              <div
                class="warning__icon"
                style="background-position: -830px -456px"
              ></div>
              <span class="warning__name"
                >Dữ liệu đã bị thay đổi. Bạn có muốn cất không?
              </span>
            </div>
            <div class="warning__button">
              <MISAButton class="btn-normal btn-cancel" @click="closeDialog">Hủy</MISAButton>
              <MISAButton class="">Có</MISAButton>
            </div>
          </div>
        </div>
      </div>
</template>
  
<script>
import MISAButton from '../../components/base/MISAButton.vue';
export default {
    name: 'WarningDialog',
    components: {
      MISAButton
    },
    methods: {
      closeDialog() {
        this.$emit('close');
      },
    },
};


</script>

<style scoped>
@import url('../../css/base/dialog.css');
</style>
  