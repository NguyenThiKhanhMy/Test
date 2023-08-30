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
                  <MISATooltip tooltip="Giúp (F1)"></MISATooltip>
                </div>
                <div
                  class="icon tooltip header__icon--quit"
                  id="icon--quit"
                  @click="openDialog"
                >
                  <MISATooltip tooltip="Đóng (ESC)"></MISATooltip>
                </div>
                <MISADialog 
                  v-if="showDialog" 
                  @close="closeDialog"
                  :title="$MISAResource[$LangCode].SaveEmployee"
                  :content="$MISAResource[$LangCode].SaveDialogText"
                  :type="'question'"
                  ></MISADialog>
              </div>
            </div>
            <div class="content">
              <div class="subcontent">
                <MISAInputText 
                  :label='$MISAResource[$LangCode].Label.Code'
                  :style="'width: 160px; margin-right: 8px'"   
                  name="code"
                  :required="true"
                  :showLabel="true"
                  :errorStyle="'margin-right: 8px'">
                </MISAInputText>
                <MISAInputText 
                  :label='$MISAResource[$LangCode].Label.FullName'
                  :style="'width: 220px; margin-right: 24px'"   
                  name="fullname"
                  :required="true"
                  :showLabel="true"
                  :errorStyle="'margin-right: 24px'">
                </MISAInputText>
                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label class="subcontent__name">{{$MISAResource[$LangCode].Label.DateOFBirth}}</label>
                  </div>
                  <div style="position: relative; display: inline-block">
                    <MISAInputDateTime style="width: 160px; margin-right: 8px;"></MISAInputDateTime>
                  </div>
                </div>
                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label class="subcontent__name" style="margin-left: 14px"
                      >{{$MISAResource[$LangCode].Label.Gender}}</label
                    >
                  </div>
                  <form class="gender">
                      <MISAInputRadio 
                        :value="$MISAEnum.Gender.Male" 
                        :label="$MISAResource[$LangCode].Gender[$MISAEnum.Gender.Male]">
                      </MISAInputRadio>
                      <MISAInputRadio 
                        :value="$MISAEnum.Gender.Female" 
                        :label="$MISAResource[$LangCode].Gender[$MISAEnum.Gender.Female]">
                      </MISAInputRadio>
                      <MISAInputRadio 
                        :value="$MISAEnum.Gender.Other" 
                        :label="$MISAResource[$LangCode].Gender[$MISAEnum.Gender.Other]"></MISAInputRadio>
                  </form>
                </div>
              </div>
              <div class="subcontent">
                <MISAInputText 
                  :label='$MISAResource[$LangCode].Label.Unit'
                  :style="'width: 400px; margin-right: 24px'"   
                  name="unit"
                  :required="true"
                  :showLabel="true"
                  :errorStyle="'margin-right: 24px'">
                </MISAInputText>
                <MISAInputText 
                  :label='$MISAResource[$LangCode].Label.IdNumber'
                  :style="'width: 225px; margin-right: 8px'"   
                  name="idnumber"
                  :showLabel="true"
                  :showTooltip="true"
                  tooltip="Số chứng minh nhân dân">
                </MISAInputText>
                <div class="subcontent__form-input">
                  <div class="subcontent__label">
                    <label class="subcontent__name">{{$MISAResource[$LangCode].Label.Date}}</label>
                  </div>
                  <div style="position: relative; display: inline-block">
                    <MISAInputDateTime style="width: 162px; margin-right: 8px;"></MISAInputDateTime>
                  </div>
                </div>
              </div>
              <div class="subcontent" style="margin-top: 24px">
                <MISAInputText 
                  :label='$MISAResource[$LangCode].Label.Position'
                  :style="'width: 400px; margin-right: 24px'"   
                  name="position"
                  :showLabel="true"
                >
                </MISAInputText>
                <MISAInputText 
                  :label='$MISAResource[$LangCode].Label.ProvideAdrress'
                  :style="'width: 405px; margin-right: 24px'"   
                  name="provideadrress"
                  :showLabel="true"
                >
                </MISAInputText>
              </div>
              <div class="subcontent">
                <MISAInputText 
                  :label='$MISAResource[$LangCode].Label.Address'
                  :style="'width: 840px; margin-right: 24px'"   
                  name="address"
                  :showLabel="true"
                >
                </MISAInputText>
              </div>

              <div class="subcontent">
                <MISAInputText 
                  :label='$MISAResource[$LangCode].Label.PhoneNumber'
                  :style="'width: 200px; margin-right: 8px'"   
                  name="phonenumber"
                  :showTooltip="true"
                  tooltip="Điện thoại di động"
                  :showLabel="true"
                >
                </MISAInputText>
                <MISAInputText 
                  :label='$MISAResource[$LangCode].Label.LandlinePhone'
                  :style="'width: 200px; margin-right: 8px'"   
                  name="landlinephone"
                  :showTooltip="true"
                  tooltip="Điện thoại cố định"
                  :showLabel="true"
                >
                </MISAInputText>
                <MISAInputText 
                  :label='$MISAResource[$LangCode].Label.Email'
                  :style="'width: 200px; margin-right: 8px'"   
                  name="email"
                  :showLabel="true"
                >
                </MISAInputText>
              </div>
              <div class="subcontent">
                <MISAInputText 
                  :label='$MISAResource[$LangCode].Label.AccountNumber'
                  :style="'width: 200px; margin-right: 8px'"   
                  name="accountnumber"
                  :showLabel="true"
                >
                </MISAInputText>
                <MISAInputText 
                  :label='$MISAResource[$LangCode].Label.BankName'
                  :style="'width: 200px; margin-right: 8px'"   
                  name="bankname"
                  :showLabel="true"
                >
                </MISAInputText>
                <MISAInputText 
                  :label='$MISAResource[$LangCode].Label.BankBranch'
                  :style="'width: 200px; margin-right: 8px'"   
                  name="bankbranch"
                  :showLabel="true"
                ></MISAInputText>
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
                <MISAButton 
                  class="btn-cancel" 
                  :class="$MISAEnum.ButtonType.Normal" 
                  :text="$MISAResource[$LangCode].CancelText" 
                  @click="closePopup"
                ></MISAButton>
              </div>
              <div class="btn--right" >
                <MISAButton 
                  class="btn--hidden" 
                  :class="$MISAEnum.ButtonType.Normal" 
                  :text="$MISAResource[$LangCode].SaveText"
                  :showTooltip="true"
                  tooltip="Cất (Ctrl + S)">
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
                <MISAButton 
                  class="btn--add" 
                  :text="$MISAResource[$LangCode].SaveAndAddTExt"
                  :showTooltip="true"
                  tooltip="Cất và thêm (Ctrl + Shift + S)">
                  ></MISAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
  
<script>
import MISAInputCheckbox from '@/components/base/MISAInput/MISAInputCheckbox.vue';

export default {
    name: 'EmployeeInfor',
    props: [],
    data() {
        return {
            showDialog: false,
            dialogIconStyle: "background-position:  -826px -456px;",
            formData: null,
            mode: null,
        };
    },
    methods: {
        /**
        * Hàm open dialog
        * CreateBy : NTKMY (20/08/2023)
        */
        openDialog() {
            this.showDialog = true;
        },
        /**
        * Hàm close dialog
        * CreateBy : NTKMY (20/08/2023)
        */
        closeDialog() {
            this.showDialog = false;
        },
        /**
        * Hàm close dialog
        * CreateBy : NTKMY (20/08/2023)
        */
        closePopup() {
            this.$emit('close');
        },
    },
    components: { MISAInputCheckbox }
}
</script>

<style scoped>
@import url('../../css/view/employee-infor.css');
.btn-cancel, .btn--hidden {
  border: 1px solid #babec5;
}
</style>
  