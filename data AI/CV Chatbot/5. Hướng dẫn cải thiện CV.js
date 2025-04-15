// Module chứa các lời khuyên để cải thiện CV

const cvImprovementAdvice = [
  {
    section: "muc_tieu_nghe_nghiep",
    title: "Mục tiêu nghề nghiệp",
    advice: "Hãy cân nhắc việc làm rõ mục tiêu nghề nghiệp của bạn và làm nổi bật các kỹ năng cần thiết cho công việc này."
  },
  {
    section: "kinh_nghiem",
    title: "Kinh nghiệm làm việc",
    advice: "Nếu bạn thiếu kinh nghiệm trong lĩnh vực cụ thể, hãy thử bổ sung các khóa học hoặc dự án cá nhân để bù đắp."
  },
  {
    section: "cau_truc",
    title: "Cấu trúc CV",
    advice: "Sử dụng một cấu trúc rõ ràng hơn với các phần mục tiêu nghề nghiệp, kinh nghiệm làm việc, và kỹ năng được phân tách rõ ràng."
  }
];

/**
 * Lấy tất cả lời khuyên cải thiện CV
 * @returns {Array} Mảng chứa tất cả lời khuyên
 */
function getAllAdvice() {
  return cvImprovementAdvice;
}

/**
 * Lấy lời khuyên theo phần cụ thể của CV
 * @param {string} section - Phần của CV cần lấy lời khuyên
 * @returns {Object|null} Đối tượng chứa lời khuyên hoặc null nếu không tìm thấy
 */
function getAdviceBySection(section) {
  return cvImprovementAdvice.find(item => item.section === section) || null;
}

/**
 * Lấy tất cả lời khuyên dưới dạng văn bản thuần túy
 * @returns {Array} Mảng chứa các lời khuyên dưới dạng chuỗi văn bản
 */
function getAllAdviceText() {
  return cvImprovementAdvice.map(item => item.advice);
}

module.exports = {
  cvImprovementAdvice,
  getAllAdvice,
  getAdviceBySection,
  getAllAdviceText
};
