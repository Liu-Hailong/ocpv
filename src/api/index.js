import utils from "@/utils/utils";

export const login = (form, res) => {
    utils.axiosMethod({
        method: 'POST',
        url: '/user/login',
        /*data: this.ruleForm,*/
        params: form,
        callback: res,
    })
}

export const regist = (form, res) => {
    utils.axiosMethod({
        method: 'POST',
        url: '/user/register',
        /*data: this.ruleForm,*/
        params: form,
        callback: res,
    })
}

export const getdlrinfo = (form, res) => {
    utils.axiosMethod({
        method: 'POST',
        url: '/user/userInfo',
        /*data: this.ruleForm,*/
        params: form,
        callback: res,
    })
}