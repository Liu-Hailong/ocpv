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

export const getwareslist = (res) => {
    utils.axiosMethod({
        method: 'POST',
        url: '/product/getwarename',
        callback: res
    })
}

export const getproinfo = (form, res) => {
    utils.axiosMethod({
        method: 'POST',
        url: '/product/proList',
        params: form,
        callback: res
    })
}

export const chosedpro = (form, res) => {
    utils.axiosMethod({
        method: 'POST',
        url: '/porder/chosedpro',
        params: form,
        callback: res
    })
}

export const getchosedpro = (form, res) => {
    utils.axiosMethod({
        method: 'POST',
        url: '/porder/getchosedpro',
        params: form,
        callback: res
    })
}

export const addpro = (form, res) => {
    utils.axiosMethod({
        method: 'POST',
        url: '/product/add',
        params: form,
        callback: res
    })
}

export const deletepro = (form, res) => {
    utils.axiosMethod({
        method: 'POST',
        url: '/porder/delpro',
        params: form,
        callback: res
    })
}

export const clearchosedpro = (form, res) =>{
    utils.axiosMethod({
        method: 'POST',
        url: '/porder/clearchosedpro',
        params: form,
        callback: res
    })
}

export const submitwholesalepurchase = (form, res) => {
    utils.axiosMethod({
        method: 'POST',
        url: '/porder/SubmitWholesaleOrder',
        params: form,
        callback: res
    })
}

export const SubmitStockUpOrder = (form, res) => {
    utils.axiosMethod({
        method: 'POST',
        url: '/porder/SubmitStockUpOrder',
        params: form,
        callback: res
    })
}

export const getPendorder = (form, res) => {
    utils.axiosMethod({
        method: 'POST',
        url: '/porder/getporderInfo',
        params: form,
        callback: res
    })
}

export const updateordersts = (form, res) => {
    utils.axiosMethod({
        method: 'POST',
        url: '/porder/updateordersts',
        params: form,
        callback: res
    })
}

export const getorderdetail = (form, res) => {
    utils.axiosMethod({
        method: 'POST',
        url: '/porder/getorderdetail',
        params: form,
        callback: res
    })
}