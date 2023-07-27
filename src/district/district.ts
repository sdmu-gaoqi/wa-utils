import Request from '../axios/axios';
import { isEmpty } from '../index';

const addressKey = 'cd0a8016f70d36c1a686d9af7042db97';

const axios = new Request({
  baseUrl: 'https://restapi.amap.com/v3/config/district',
}).instence;

class District {
  districtData = [];
  constructor() {
    if (isEmpty(this.districtData)) {
      this.getDistrict();
    }
  }
  async getDistrict() {
    try {
      const data = await axios.get('/v3/config/district', {
        params: {
          key: addressKey,
          subdistrict: 3,
        },
      });
      console.log(data);
    } catch (err) {
      console.error('获取地址信息失败', err);
    }
  }
}

export default District;
