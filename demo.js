const axios = require('axios');
const cheerio = require('cheerio');

// URL của trang web mà bạn muốn lấy dữ liệu
const url = 'https://www.w3schools.com/nodejs/nodejs_modules.asp';

// Gửi yêu cầu GET tới trang web
axios.get(url)
  .then(response => {
    // Lấy nội dung HTML từ phản hồi
    const html = response.data;

    // Sử dụng cheerio để phân tích cú pháp HTML
    const $ = cheerio.load(html);

    // Ví dụ: Lấy tất cả các tiêu đề từ trang web
    const titles = [];
    $('h1').each((index, element) => {
      titles.push($(element).text());
    });

    // In ra các tiêu đề
    console.log(titles);
  })
  .catch(error => {
    // Xử lý lỗi nếu có
    console.error('Error fetching data:', error);
  });