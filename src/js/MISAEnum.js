const MISAEnum = {
    FormMode: {
        Add: 1,
        Edit: 2,    
    },
    Gender: {
        Male: 1,
        Female: 0,
        Other: 2,
    },
    ButtonType: {
        Success: "btn-success",
        Normal: "btn-normal"
    },
    ToastMode: {
        Success: { 
            typeIcon: "icon--success",
            typeText: "text--suscess",
            title: "Thành công!",
        },
        Warning: { 
            typeIcon: "icon--warning",
            typeText: "text--warning",
            title: "Cảnh báo!" 
        },
        Info: { 
            typeIcon: "icon--info", 
            typeText: "text--info",
            title: "Thông tin!" 
        },
        Error: { 
            typeIcon: "icon-error",
            typeText: "text--error",
            title: "Lỗi!" 
        },
    }
}

export default MISAEnum;