import wepy from 'wepy';
import tip from './tip'

const wxRequest = async(params = {}, url) => {
    tip.loading();
    let data = params.query || {};
    let res = await wepy.request({
        url: url,
        method: params.method || 'POST',
        data: data,
        header: {'content-type': 'application/x-www-form-urlencoded'},
    });
    tip.loaded();
    return res;
};

module.exports = {
    wxRequest
}
