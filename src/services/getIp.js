import axios from 'axios'
const getIp = async () => {
    const URL = `http://api.ipstack.com/check?access_key=678a04a58d498c1c511493354ec6a87e`;
    const res = await axios(URL)
    return res
}
export default getIp