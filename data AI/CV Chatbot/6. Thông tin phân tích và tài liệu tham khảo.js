// Module chứa thông tin phân tích và tài liệu tham khảo cho việc viết CV

// Dữ liệu về các ngành nghề và vị trí công việc phổ biến
const jobFieldsData = [
  {
    field: "Công nghệ thông tin",
    positions: ["Lập trình viên", "Kỹ sư phần mềm", "Chuyên viên an ninh mạng", "Kỹ sư dữ liệu", "Chuyên viên AI/Machine Learning"],
    description: "Ngành CNTT đang phát triển nhanh chóng với nhu cầu cao về nhân lực có kỹ năng kỹ thuật và khả năng giải quyết vấn đề."
  },
  {
    field: "Tài chính - Ngân hàng",
    positions: ["Chuyên viên tài chính", "Kế toán viên", "Chuyên viên phân tích đầu tư", "Chuyên viên ngân hàng"],
    description: "Lĩnh vực đòi hỏi sự chính xác cao, hiểu biết về quy định pháp luật và khả năng phân tích số liệu."
  },
  {
    field: "Marketing",
    positions: ["Chuyên viên marketing", "Quản lý thương hiệu", "Chuyên viên tiếp thị số", "Chuyên viên truyền thông"],
    description: "Ngành nghề đòi hỏi sự sáng tạo, hiểu biết về thị trường và khả năng giao tiếp tốt."
  }
];

// Yêu cầu phổ biến của nhà tuyển dụng
const employerRequirements = [
  {
    category: "Kỹ năng chuyên môn",
    requirements: [
      "Kiến thức chuyên môn sâu về lĩnh vực ứng tuyển",
      "Chứng chỉ nghề nghiệp liên quan",
      "Khả năng áp dụng kiến thức vào thực tiễn"
    ]
  },
  {
    category: "Kỹ năng mềm",
    requirements: [
      "Kỹ năng giao tiếp và làm việc nhóm",
      "Khả năng giải quyết vấn đề",
      "Tư duy phản biện và sáng tạo",
      "Quản lý thời gian hiệu quả"
    ]
  },
  {
    category: "Kinh nghiệm",
    requirements: [
      "Kinh nghiệm thực tế trong lĩnh vực liên quan",
      "Thành tích và kết quả đạt được trong công việc trước đây",
      "Khả năng thích nghi với môi trường làm việc mới"
    ]
  }
];

// Tài liệu tham khảo về viết CV
const referenceResources = [
  {
    category: "Websites việc làm",
    resources: [
      {
        name: "LinkedIn",
        description: "Mạng xã hội chuyên nghiệp với nhiều mẫu CV và lời khuyên từ chuyên gia nhân sự.",
        url: "https://www.linkedin.com"
      },
      {
        name: "Glassdoor",
        description: "Cung cấp thông tin về công ty và yêu cầu tuyển dụng thực tế.",
        url: "https://www.glassdoor.com"
      },
      {
        name: "Indeed",
        description: "Trang web tìm kiếm việc làm với nhiều tài nguyên về viết CV hiệu quả.",
        url: "https://www.indeed.com"
      }
    ]
  },
  {
    category: "Sách hướng dẫn viết CV",
    resources: [
      {
        name: "Knock 'em Dead Resumes",
        author: "Martin Yate",
        description: "Hướng dẫn cách tạo CV gây ấn tượng với nhà tuyển dụng."
      },
      {
        name: "The Resume Writing Guide",
        author: "Lisa McGrimmon",
        description: "Các chiến lược và mẫu CV hiệu quả cho nhiều ngành nghề."
      }
    ]
  },
  {
    category: "Bài viết về lỗi thường gặp",
    resources: [
      {
        name: "10 lỗi phổ biến trong CV và cách tránh",
        source: "TopCV",
        url: "https://topcv.vn"
      },
      {
        name: "Những sai lầm cần tránh khi viết CV xin việc",
        source: "VietnamWorks",
        url: "https://vietnamworks.com"
      }
    ]
  }
];

/**
 * Lấy thông tin về các ngành nghề và vị trí công việc
 * @returns {Array} Dữ liệu về ngành nghề và vị trí công việc
 */
function getJobFieldsData() {
  return jobFieldsData;
}

/**
 * Lấy thông tin về các yêu cầu của nhà tuyển dụng
 * @returns {Array} Dữ liệu về yêu cầu của nhà tuyển dụng
 */
function getEmployerRequirements() {
  return employerRequirements;
}

/**
 * Lấy thông tin về các tài liệu tham khảo
 * @param {string} category - Danh mục tài liệu (không bắt buộc)
 * @returns {Array} Danh sách tài liệu tham khảo
 */
function getReferenceResources(category) {
  if (category) {
    const categoryData = referenceResources.find(item => item.category === category);
    return categoryData ? categoryData.resources : [];
  }
  return referenceResources;
}

module.exports = {
  jobFieldsData,
  employerRequirements,
  referenceResources,
  getJobFieldsData,
  getEmployerRequirements,
  getReferenceResources
};
