import axios from  'axios';

const Http = class {
    constructor(url) {
        this.validateUrl();
        this.url = url;
    }

    validateUrl = (url) => {
        if(!url && typeof url != 'string') throw new Error('Invalid url defined');
    }

    request = async ({
        method = 'get',
        path = '',
        urlParams = {},
        body = {},
    }) => {
        return new Promise(async (resolve) => {
            await axios.request({
                method,
                baseURL: this.url,
                url: path,
                params: urlParams,
                data: body
            })
        });
    }
}

export default Http = Http;