let domain = 'http://www.huyangyang.cn:80/'; // 正式域名
if (process.env.NODE_ENV === 'development') {
  // 开发环境下，本地地址
  domain = 'http://localhost:3001/';
}
export default domain;
