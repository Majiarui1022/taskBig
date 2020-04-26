import axios from 'axios';


export default {    
    /**
     * POST请求
     * @param {string} url 接口地址
     * @param {object} request 请求参数
     * @param {Boolean} isUploadImg 是否上传图片,非必传参数，默认为false
     */
    post(url, request, isUploadImg) {
        const headers = {
            headers: {
                'Content-Type': isUploadImg ? 'multipart/form-data' : "application/json;charset=UTF-8",
                "Authorization":localStorage.getItem('jp_token') ?  'JWT ' +  localStorage.getItem('jp_token') : '',
            }
        }
        return new Promise((resolve, reject) => {
            axios.post(url , request, headers).then((response) => {
                resolve(response)
            }, (error) => {
                reject(error)
            });
        });
    },
    /**
     * GET请求
     * @param {string} url 接口地址
     * @param {object} request 请求参数
     */
    get(url, request) {
        const headers = {
            headers: {
                "content-type": "application/json;charset=UTF-8",
                "Authorization": localStorage.getItem('jp_token') ?  'JWT ' +  localStorage.getItem('jp_token') : '',
            }
        }
        return new Promise((resolve, reject) => {
            axios.get(url, headers, {
                params: request
            }).then((response) => {
                resolve(response)
            }, (error) => {
                reject(error)
            });
        });
    },
    /**
     * DELETE 请求
     * @param {string} url 接口地址
     * @param {object} request 请求参数
     */
    delete(url, request) {
        const headers = {
            headers: {
                "content-type": "application/json;charset=UTF-8",
                "Authorization": localStorage.getItem('jp_token') ?  'JWT ' +  localStorage.getItem('jp_token') : '',
            }
        }
        return new Promise((resolve, reject) => {
            axios.delete(url, headers, { params: request}).then((response) => {
                resolve(response)
            }, (error) => {
                reject(error)
            });
        });
    },
    /**
     * PUT请求
     * @param {string} url 接口地址
     * @param {object} request 请求参数
     * @param {Boolean} isUploadImg 是否上传图片,非必传参数，默认为false
     */
    put(url, request, isUploadImg) {
        const headers = {
            headers: {
                "content-type":  isUploadImg ? 'multipart/form-data' : "application/json;charset=UTF-8",
                "Authorization":localStorage.getItem('jp_token') ?  'JWT ' +  localStorage.getItem('jp_token') : '',
            }
        }
        return new Promise((resolve, reject) => {
            axios.put(url , request, headers).then((response) => {
                resolve(response)
            }, (error) => {
                reject(error)
            });
        });
    },
    

    install(Vue) {
        Object.defineProperty(Vue.prototype, '$http', {
            value: {
                post: this.post,
                get: this.get,
                delete: this.delete,
                put: this.put
            }
        })
    }
}
