// Dữ liệu mẫu câu phản hồi cho chatbot CV
const cvChatbotResponses = {
  // Phản hồi tích cực cho điểm mạnh
  strengths: [
    "CV của bạn có một mục tiêu nghề nghiệp rõ ràng và phù hợp với công việc bạn đang ứng tuyển. Điều này rất ấn tượng!",
    "Kinh nghiệm làm việc của bạn rất ấn tượng và có thể tạo ấn tượng tốt với nhà tuyển dụng.",
    "Trình bày CV của bạn rất chuyên nghiệp và dễ đọc, giúp nhà tuyển dụng nhanh chóng nắm bắt thông tin.",
    "Kỹ năng chuyên môn được liệt kê rõ ràng và phù hợp với vị trí ứng tuyển.",
    "Phần giáo dục và chứng chỉ của bạn thể hiện sự đầu tư nghiêm túc vào sự phát triển nghề nghiệp.",
    "CV của bạn có cấu trúc logic và tập trung vào những thông tin quan trọng nhất.",
    "Những thành tích bạn đã đạt được trong quá khứ cho thấy bạn là một ứng viên tiềm năng.",
    "Cách bạn mô tả các dự án trước đây thể hiện được khả năng giải quyết vấn đề của bạn."
  ],
  
  // Phản hồi góp ý cho điểm yếu
  weaknesses: [
    "CV của bạn thiếu chi tiết về các thành tích đạt được trong công việc trước đây. Bạn có thể bổ sung thêm thông tin cụ thể để làm nổi bật khả năng của mình.",
    "Có một số lỗi chính tả trong CV của bạn. Hãy chắc chắn rằng bạn kiểm tra kỹ trước khi gửi đi.",
    "CV của bạn hơi dài. Hãy cân nhắc rút gọn xuống còn 1-2 trang để tạo ấn tượng tốt hơn.",
    "Bạn nên sử dụng các động từ mạnh mẽ hơn để mô tả trách nhiệm và thành tích của mình.",
    "Phần tóm tắt nghề nghiệp chưa thực sự nổi bật được điểm mạnh của bạn.",
    "Bạn nên cá nhân hóa CV hơn nữa cho từng vị trí ứng tuyển cụ thể.",
    "Bạn nên sắp xếp các kinh nghiệm làm việc theo thứ tự thời gian từ gần nhất đến xa nhất.",
    "Một số kỹ năng được liệt kê chưa có ví dụ cụ thể để minh chứng."
  ]
};

// Hàm trợ giúp lấy phản hồi ngẫu nhiên từ một danh mục
const getRandomResponse = (category) => {
  if (!cvChatbotResponses[category] || !cvChatbotResponses[category].length) {
    return "Tôi không có phản hồi cho mục này.";
  }
  
  const responses = cvChatbotResponses[category];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};

// Export dữ liệu và hàm trợ giúp
module.exports = {
  responses: cvChatbotResponses,
  getRandomResponse
};
