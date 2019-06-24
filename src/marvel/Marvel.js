import config from './config';
import axios from 'axios';
import md5 from 'js-md5';

class Marvel {
	async apiCall() {
		const timestamp = new Date().getTime();
		return await axios.get(config.url + '/characters', {
			params: {
				apikey: config.publicKey,
				ts: timestamp,
				hash: md5(timestamp + config.privateKey + config.publicKey).toString()
			}
		});
	}
}

export default new Marvel();
