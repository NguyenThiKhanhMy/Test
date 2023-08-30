<template>
    <!-- Toast -->
    <div class="toast">
        <div class="icon" :class="typeIcon"></div>
        <div class="toast__title" :class="typeText">{{title}}</div>
        <div class="icon toast__close"></div>
    </div>
</template>
  
<script>
export default {
    name: 'MISAToast',
    props: {
        type: String,
    },
    data() {
        return {
            title: '',
            typeIcon: '',
            typeText: '',
        };
    },
    created() {
        const toastConfig = this.$MISAEnum.ToastMode[this.type];
        if (toastConfig) {
            this.title = toastConfig.title;
            this.typeIcon = toastConfig.typeIcon;
            this.typeText = toastConfig.typeText;
        }
    },

//     created() {
//         if (this.type === this.$enums.ToastMode.Success) {
//             this.title = this.$MISAEnum.ToastMode.Success.title
//             this.typeIcon = this.$MISAEnum.ToastMode.Success.typeIcon;
//             this.typeText = this.$MISAEnum.ToastMode.Success.typeText;
//         } else if (this.type === this.$enums.ToastMode.Warning) {
//             this.title = this.$MISAEnum.ToastMode.Warning.title
//             this.typeIcon = this.$MISAEnum.ToastMode.Warning.typeIcon;
//             this.typeText = this.$MISAEnum.ToastMode.Warning.typeText;
//         } else if (this.type === this.$enums.ToastMode.Info) {
//             this.title = this.$MISAEnum.ToastMode.Info.title
//             this.typeIcon = this.$MISAEnum.ToastMode.Info.typeIcon;
//             this.typeText = this.$MISAEnum.ToastMode.Info.typeText;
//         } else if (this.type === this.$enums.ToastMode.Error) {
//             this.title = this.$MISAEnum.ToastMode.Error.title
//             this.typeIcon = this.$MISAEnum.ToastMode.Error.typeIcon;
//             this.typeText = this.$MISAEnum.ToastMode.Error.typeText;
//         }
//   },
};
</script>

<style scoped>
@import url('../../css/base/toast.css');
@import url('../../css/base/icon.css');
</style>
  