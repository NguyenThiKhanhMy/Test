<template>
    <div id="popupContainer" class="popup-container">
        <div class="popup-content">
          <div class="user-form">
            <div class="header__user">
              <div class="header__user-title">
                <div class="header__user-name">Thông tin nhân viên</div>
                <div class="header__checkbox">
                  <div class="header__checkbox--guest">
                    <MISAInputCheckbox class="checkbox-input"></MISAInputCheckbox>
                    <label for="customCheckbox" class="header__checkbox-label"
                      >Là khách hàng</label
                    >
                  </div>
                  <div class="header__checkbox--supplier">
                    <MISAInputCheckbox class="checkbox-input"></MISAInputCheckbox>
                    <label for="customCheckbox" class="header__checkbox-label"
                      >Là nhà cung cấp</label
                    >
                  </div>
                </div>
              </div>
              <div class="header__user-icon">
                <div class="icon tooltip header__icon--question">
                  <MISATooltip>Giúp (F1)</MISATooltip>
                </div>
                <div
                  class="icon tooltip header__icon--quit"
                  id="icon--quit"
                  @click="openDialog"
                >
                  <MISATooltip>Đóng (ESC)</MISATooltip>
                </div>
                <WarningDialog v-if="showDialog" @close="closeDialog"></WarningDialog>
              </div>
            </div>
            <div class="content">
              <div class="subcontent">
                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label class="subcontent__name">
                      Mã
                      <span class="subcontent__required">*</span>
                    </label>
                  </div>
                  <MISAInputText 
                    style="width: 140px; margin-right: 8px">
                  </MISAInputText>
                </div>
                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label class="subcontent__name"
                      >Tên<span class="subcontent__required">*</span></label
                    >
                  </div>
                  <MISAInputText 
                    style="width: 240px; margin-right: 24px">
                  </MISAInputText>
                </div>
                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label class="subcontent__name">Ngày sinh</label>
                  </div>
                  <div style="position: relative; display: inline-block">
                    <MISAInputDateTime style="width: 160px; margin-right: 8px;"></MISAInputDateTime>
                  </div>
                </div>
                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label class="subcontent__name" style="margin-left: 14px"
                      >Giới tính</label
                    >
                  </div>
                  <form class="gender">
                    <div class="gender__checkbox">
                      <MISAInputRadio value="Nam"></MISAInputRadio>
                      <div class="gender__name">Nam</div>
                    </div>
                    <div class="gender__checkbox">
                      <MISAInputRadio value="Nữ"></MISAInputRadio>
                      <div class="gender__name">Nữ</div>
                    </div>
                    <div class="gender__checkbox">
                      <MISAInputRadio value="Khác"></MISAInputRadio>
                      <div class="gender__name">Khác</div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="subcontent">
                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label class="subcontent__name"
                      >Đơn vị<span class="subcontent__required">*</span></label
                    >
                  </div>
                  <MISAInputText
                    style="width: 400px; margin-right: 24px">
                  </MISAInputText>
                </div>
                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label
                      class="tooltip subcontent__name"
                      style="width: 431px; margin-right: 12px"
                      >Số CMND<span class="tooltiptext"
                        >Số chứng minh nhân dân</span
                      ></label
                    >
                  </div>
                  <MISAInputText 
                    style="width: 225px; margin-right: 8px">
                  </MISAInputText>
                </div>
                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label class="subcontent__name">Ngày cấp</label>
                  </div>
                  <div style="position: relative; display: inline-block">
                    <MISAInputDateTime style="width: 160px; margin-right: 8px;"></MISAInputDateTime>
                  </div>
                </div>
              </div>
              <div class="subcontent" style="margin-top: 24px">
                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label class="subcontent__name">Chức danh</label>
                  </div>
                  <MISAInputText 
                    style="width: 400px; margin-right: 24px"
                  >
                  </MISAInputText>
                </div>
                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label class="subcontent__name">Nơi cấp</label>
                  </div>
                  <MISAInputText 
                    style="width: 405px; margin-right: 24px"
                  >
                  </MISAInputText>
                </div>
              </div>
              <div class="subcontent">
                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label class="subcontent__name">Địa chỉ</label>
                  </div>
                  <MISAInputText 
                    style="width: 840px; margin-right: 24px"
                  >
                  </MISAInputText>
                </div>
              </div>

              <div class="subcontent">
                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label class="tooltip subcontent__name">
                      ĐT di động
                      <MISATooltip>Điện thoại di động</MISATooltip>
                      </label
                    >
                  </div>
                  <MISAInputText 
                    style="width: 200px; margin-right: 8px"
                  >
                  </MISAInputText>
                </div>
                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label class="tooltip subcontent__name"
                      >ĐT cố định<span class="tooltiptext"
                        >Điện thoại cố định</span
                      ></label
                    >
                  </div>
                  <MISAInputText 
                    style="width: 200px; margin-right: 8px"
                  >
                  </MISAInputText>
                </div>
                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label class="subcontent__name">Email</label>
                  </div>
                  <MISAInputText
                    placeholder="khanhmy@gmail.com"
                    style="width: 200px; margin-right: 8px"
                  >
                  </MISAInputText>
                </div>
              </div>
              <div class="subcontent">
                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label class="subcontent__name">Tài khoản ngân hàng</label>
                  </div>
                  <MISAInputText 
                    style="width: 200px; margin-right: 8px"
                  >
                  </MISAInputText>
                </div>
                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label class="subcontent__name">Tên ngân hàng</label>
                  </div>
                  <MISAInputText 
                    style="width: 200px; margin-right: 8px"
                  >
                  </MISAInputText>
                </div>

                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label class="subcontent__name">Chi nhánh</label>
                  </div>
                  <MISAInputText 
                  style="width: 200px; margin-right: 8px"
                  >
                  </MISAInputText>
                </div>
              </div>
            </div>
            <hr style="
              margin: 32px 24px 32px 24px;
              background-color: #babec5; 
              height: 1px; 
              border: 0;
          }"/>
            <div class="btn">
              <div class="btn--left">
                <MISAButton style="border: 1px solid #babec5" class="btn-normal btn-cancel" @click="closePopup">
                  Hủy
                </MISAButton>
              </div>
              <div class="btn--right">
                <MISAButton class="tooltip btn-normal btn--hidden">
                  Cất
                  <span class="tooltiptext">Cất (Ctrl + S)</span>
                </MISAButton>
                <div
                  id="warning-nameContainer"
                  class="popup-container"
                  style="display: none"
                >
                  <div class="popup-content">
                    <div class="warning">
                      <div class="warning__content">
                        <div class="warning__icon"></div>
                        <span class="warning__name">Tên không được để trống</span>
                      </div>
                      <hr />
                      <div class="warning__button">
                        <button class="btn-success" @click="closePopup">
                          Đóng
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <MISAButton class="tooltip btn--add">
                  Cất và Thêm
                  <span class="tooltiptext">Cất và thêm (Ctrl + Shift + S)</span>
                </MISAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
  
<script>
import WarningDialog from '../views/Dialog/WarningDialog.vue';
export default {
    name: 'EmployeeInfor',
    components: {
      WarningDialog
    },
    props: [],
    data() {
      return {
        showDialog: false,
        formMode: 1,
      };
    },
    methods: {
    openDialog() {
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
    closePopup() {
      this.$emit('close');
    },
  },
}
</script>

<style scoped>
@import url('../css/view/employee-infor.css');
.btn-cancel, .btn--hidden {
  border: 1px solid #babec5;
}
</style>
  