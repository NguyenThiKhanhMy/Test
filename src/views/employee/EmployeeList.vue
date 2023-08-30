<template>
        <!-- Title -->
        <div class="content__title">
            <div class="content__name">Nhân viên</div>
            <MISAButton 
              class="btn__add-user" 
              :text="$MISAResource[$LangCode].AddEmployee" 
              @click="openPopup"
              ></MISAButton>
            <EmployeeInfor  
              v-if="showPopup" 
              @close="closePopup"
            ></EmployeeInfor>
          </div>

          <!-- Container -->
          <div class="content__table">
            <div class="content__search">
              <div class="">
                <button class="btn-normal btn__execution">Thực hiện hàng loạt</button>
              </div>
              <div class="content__search--input">
                <div class="content__input">
                  <input
                    class="search__input"
                    placeholder="Tìm theo mã, tên nhân viên"/>
                </div>
                <div class="content__sreach-icon"></div>
                <div class="icon content__repeat tooltip">
                  <MISATooltip>Lấy lại dữ liệu</MISATooltip>
                </div>
              </div>
            </div>
            
            <!-- Table -->
            <div class="content__main-table">
              <div class="content__table-content">
                <table>
                  <tr>
                    <th class="table__checkbox">
                      <MISAInputCheckbox class="table__checkbox-input"></MISAInputCheckbox>
                    </th>
                    <th class="table__id">Mã nhân viên</th>
                    <th class="table__name">Tên nhân viên</th>
                    <th class="table__gender">Giới tính</th>
                    <th class="table__dob">Ngày sinh</th>
                    <th class="table_idnumber">Số CMND</th>
                    <th class="table__position">Chức danh</th>
                    <th class="table__unitname">Tên đơn vị</th>
                    <th class="table__account-number">Số tài khoản</th>
                    <th class="table__bank-name">Tên ngân hàng</th>
                    <th class="table__bank-branch">Chi nhánh ngân hàng</th>
                    <th class="table__function">Chức năng</th>
                  </tr>
                  <tr v-for="employee in employees" :key="employee.EmployeeId">
                    <td><MISAInputCheckbox class="checkbox-input"></MISAInputCheckbox></td>
                    <td>{{employee.EmployeeCode}}</td>
                    <td>{{employee.EmployeeFullName}}</td>
                    <td>{{employee.EmployeeGender}}</td>
                    <td>{{employee.EmployeeDateOfBirth}}</td>
                    <td>{{employee.EmployeeIdNumber}}</td>
                    <td>{{employee.EmployeePosition}}</td>
                    <td>{{employee.EmpoyeeUnitName}}</td>
                    <td>{{employee.EmployeeAccountNumber}}</td>
                    <td>{{employee.EmployeeBankName}}</td>
                    <td>{{employee.EmployeeBankBranch}}</td>
                    <td class="table__action">
                      <div class="table__action-button">
                        <span class="table__action-name">Sửa</span>
                        <div class="table__icon-check">
                          <div class="table__icon"  @click="showEmployeeDropdown(employee)"></div>
                          <EmployeeFunction  v-if="employee.isDropdownVisible"></EmployeeFunction>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              <hr style="margin: 12px 0px 20px 0px;  
              background-color: #E0E0E0; 
              height: 1px; 
              border: 0">
              <!-- Paging -->
              <div class="table__detail">
                <div class="table__detail--sum">Tổng số: <b>1035</b> bản ghi</div>
                <MISAPaging></MISAPaging>
              </div>
            </div>
          </div>
</template>
  
<script>
import EmployeeInfor from './EmployeeInfor.vue';
import EmployeeFunction from './EmployeeFunction.vue';
import MISAButton from '@/components/base/MISAButton.vue';
export default {
    name: 'EmployeeList',
    components: {
    EmployeeFunction, EmployeeInfor,
    MISAButton
},
    created() {
      // fetch("https:cukcuk.manhnv.net/api/v1/customers")
      // .then((res) =>res.json())
      // .then((data) => {
      //   this.employees = data;
      // });
    },
    data() {
      return {
        showPopup: false,
        isDropdownVisible: false,
        selectAllChecked: false,
        employees: [
          {
            EmployeeCode: "NV0001",
            EmployeeFullName: "Nguyễn Văn Liệt",
            EmployeeGender: "Nam",
            EmployeeDateOfBirth: "31/12/2022",
            EmployeeIdNumber: "12345678",
            EmployeePosition: "Trưởng nhóm",
            EmpoyeeUnitName: "Xay keo - phối trộn",
            EmployeeAccountNumber: "",
            EmployeeBankName: "",
            EmployeeBankBranch:"",
          },
          {
            EmployeeCode: "NV0002",
            EmployeeFullName: "Lương Thị Hương",
            EmployeeGender: "Nữ",
            EmployeeDateOfBirth: "",
            EmployeeIdNumber: "01892827328",
            EmployeePosition: "Nhân viên",
            EmpoyeeUnitName: "Xay keo - phối trộn",
            EmployeeAccountNumber: "",
            EmployeeBankName: "",
            EmployeeBankBranch:"",
          },
          {
            EmployeeCode: "NV0003",
            EmployeeFullName: "Nguyễn Văn Dũng",
            EmployeeGender: "Nam",
            EmployeeDateOfBirth: "1/12/1985",
            EmployeeIdNumber: "",
            EmployeePosition: "Nhân viên",
            EmpoyeeUnitName: "Xay keo - phối trộn",
            EmployeeAccountNumber: "123456789",
            EmployeeBankName: "",
            EmployeeBankBranch:"",
          },
          {
            EmployeeCode: "000012",
            EmployeeFullName: "Nguyễn Văn Liệt",
            EmployeeGender: "Nam",
            EmployeeDateOfBirth: "31/12/2022",
            EmployeeIdNumber: "12345678",
            EmployeePosition: "Trưởng nhóm",
            EmpoyeeUnitName: "Xay keo - phối trộn",
            EmployeeAccountNumber: "",
            EmployeeBankName: "",
            EmployeeBankBranch:"",
          },
          {
            EmployeeCode: "NH11155",
            EmployeeFullName: "Nguyễn Văn Liệt",
            EmployeeGender: "Nam",
            EmployeeDateOfBirth: "31/12/2022",
            EmployeeIdNumber: "12345678",
            EmployeePosition: "Trưởng nhóm",
            EmpoyeeUnitName: "Xay keo - phối trộn",
            EmployeeAccountNumber: "",
            EmployeeBankName: "",
            EmployeeBankBranch:"",
          },          {
            EmployeeCode: "NV0001",
            EmployeeFullName: "Nguyễn Văn Liệt",
            EmployeeGender: "Nam",
            EmployeeDateOfBirth: "31/12/2022",
            EmployeeIdNumber: "12345678",
            EmployeePosition: "Trưởng nhóm",
            EmpoyeeUnitName: "Xay keo - phối trộn",
            EmployeeAccountNumber: "",
            EmployeeBankName: "",
            EmployeeBankBranch:"",
            isDropdownVisible: false,
          }
        ]
      };
  },
  methods: {
      /**
       * Hàm open dropdown
       * CreateBy : NTKMY (20/08/2023)
      */
    showEmployeeDropdown(employee) {
      employee.isDropdownVisible = !employee.isDropdownVisible;
    },

    /**
       * Hàm open popup
       * CreateBy : NTKMY (20/08/2023)
    */
    openPopup() {
      this.showPopup = true;
    },

    /**
       * Hàm đóng popup
       * CreateBy : NTKMY (20/08/2023)
    */
    closePopup() {
      this.showPopup = false;
    },
  },
}
</script>

<style scoped>
@import url('../../css/view/employee-list.css');
</style>
  