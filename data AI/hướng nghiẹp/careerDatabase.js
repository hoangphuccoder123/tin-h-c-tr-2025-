// Dữ liệu về ngành nghề và thông tin liên quan
const careerData = {
    // Thông tin về các ngành nghề phổ biến
    industries: [
      {
        name: "Công nghệ thông tin",
        overview: "Ngành CNTT phát triển nhanh chóng tại Việt Nam với nhu cầu nhân lực cao.",
        roles: ["Lập trình viên", "Kỹ sư phần mềm", "Chuyên gia an ninh mạng", "Quản trị dữ liệu", "Thiết kế UX/UI"],
        skills: ["Lập trình", "Giải quyết vấn đề", "Tư duy logic", "Tiếng Anh", "Làm việc nhóm"],
        salary: {
          entry: "10-15 triệu đồng/tháng",
          mid: "20-40 triệu đồng/tháng",
          senior: "40-100+ triệu đồng/tháng"
        },
        education: ["Đại học CNTT", "Khoa học máy tính", "Self-learning với các khóa học online"],
        companies: ["FPT Software", "VNG", "Momo", "Tiki", "VNPT", "Viettel"],
        growth: "Tăng trưởng 20-25% mỗi năm, dự kiến tiếp tục phát triển mạnh"
      },
      {
        name: "Tài chính - Ngân hàng",
        overview: "Lĩnh vực ổn định với nhiều cơ hội phát triển chuyên môn cao.",
        roles: ["Chuyên viên tín dụng", "Chuyên viên đầu tư", "Kế toán", "Phân tích tài chính", "Quản lý danh mục đầu tư"],
        skills: ["Phân tích số liệu", "Quản lý rủi ro", "Hiểu biết về luật", "Giao tiếp", "Tiếng Anh tài chính"],
        salary: {
          entry: "8-12 triệu đồng/tháng",
          mid: "15-30 triệu đồng/tháng",
          senior: "30-80+ triệu đồng/tháng"
        },
        education: ["Đại học Kinh tế", "Tài chính Ngân hàng", "Kế toán Kiểm toán"],
        companies: ["Vietcombank", "BIDV", "Techcombank", "MBBank", "VPBank", "Prudential"],
        growth: "Tăng trưởng ổn định 10-15% hàng năm, xu hướng số hóa mạnh mẽ"
      },
      {
        name: "Marketing - Truyền thông",
        overview: "Ngành năng động, sáng tạo với nhiều cơ hội trong thời đại số.",
        roles: ["Brand Manager", "Content Creator", "Digital Marketing", "PR Specialist", "Social Media Manager"],
        skills: ["Sáng tạo", "Kỹ năng viết", "Phân tích thị trường", "Hiểu biết người dùng", "Quản lý chiến dịch"],
        salary: {
          entry: "8-12 triệu đồng/tháng",
          mid: "15-25 triệu đồng/tháng",
          senior: "25-50+ triệu đồng/tháng"
        },
        education: ["Marketing", "Truyền thông", "Báo chí", "Quan hệ công chúng"],
        companies: ["Dentsu", "Mindshare", "Ogilvy", "Le Bros", "Publicis"],
        growth: "Phát triển nhanh trong lĩnh vực digital, tăng trưởng 15-20% mỗi năm"
      },
      {
        name: "Y tế - Dược phẩm",
        overview: "Ngành thiết yếu với nhu cầu nhân lực ổn định và phát triển lâu dài.",
        roles: ["Bác sĩ", "Dược sĩ", "Điều dưỡng", "Kỹ thuật viên y tế", "Nghiên cứu y học"],
        skills: ["Chuyên môn y khoa", "Đạo đức nghề nghiệp", "Giao tiếp", "Cập nhật kiến thức", "Làm việc dưới áp lực"],
        salary: {
          entry: "8-15 triệu đồng/tháng",
          mid: "15-40 triệu đồng/tháng",
          senior: "40-100+ triệu đồng/tháng (phụ thuộc chuyên khoa)"
        },
        education: ["Y Dược", "Điều dưỡng", "Y tế công cộng"],
        companies: ["Bệnh viện Việt Đức", "Bệnh viện Bạch Mai", "Vinmec", "Hệ thống FV Hospital"],
        growth: "Tăng trưởng 10-12% hàng năm, nhu cầu cao về nhân lực chất lượng"
      },
      {
        name: "Giáo dục - Đào tạo",
        overview: "Ngành có tác động xã hội lớn và nhu cầu ổn định.",
        roles: ["Giáo viên", "Giảng viên", "Chuyên gia phát triển giáo trình", "Quản lý giáo dục", "Tư vấn giáo dục"],
        skills: ["Chuyên môn sâu", "Kỹ năng sư phạm", "Giao tiếp", "Thấu hiểu tâm lý", "Sáng tạo"],
        salary: {
          entry: "7-12 triệu đồng/tháng",
          mid: "12-25 triệu đồng/tháng",
          senior: "25-50+ triệu đồng/tháng (tùy vị trí và loại hình trường)"
        },
        education: ["Sư phạm", "Khoa học giáo dục", "Chuyên ngành + Nghiệp vụ sư phạm"],
        companies: ["MOET", "Các trường đại học lớn", "Hệ thống Vinschool", "Các tổ chức giáo dục quốc tế"],
        growth: "Tăng trưởng ổn định, xu hướng phát triển mạnh trong giáo dục trực tuyến và các kỹ năng mới"
      }
    ],
  
    // Thông tin về kỹ năng mềm cần thiết
    softSkills: [
      {
        name: "Giao tiếp hiệu quả",
        description: "Khả năng truyền đạt thông tin rõ ràng và lắng nghe tích cực.",
        tips: [
          "Luyện tập nói trước đám đông",
          "Tham gia các khóa học về kỹ năng thuyết trình",
          "Chú ý đến ngôn ngữ cơ thể",
          "Phát triển kỹ năng lắng nghe chủ động"
        ]
      },
      {
        name: "Làm việc nhóm",
        description: "Khả năng hợp tác hiệu quả với người khác để đạt mục tiêu chung.",
        tips: [
          "Xây dựng lòng tin với đồng nghiệp",
          "Phát triển sự đồng cảm",
          "Học cách giải quyết xung đột",
          "Tôn trọng ý kiến khác biệt"
        ]
      },
      {
        name: "Quản lý thời gian",
        description: "Khả năng sắp xếp công việc hiệu quả và đúng thời hạn.",
        tips: [
          "Sử dụng công cụ lên kế hoạch như Pomodoro",
          "Phân loại công việc theo mức độ ưu tiên",
          "Tránh đa nhiệm quá mức",
          "Đặt mục tiêu SMART"
        ]
      },
      {
        name: "Giải quyết vấn đề",
        description: "Khả năng xác định, phân tích và giải quyết các thách thức một cách sáng tạo.",
        tips: [
          "Phát triển tư duy phản biện",
          "Học cách nhìn vấn đề từ nhiều góc độ",
          "Áp dụng phương pháp 5 Why",
          "Thực hành giải quyết các tình huống giả định"
        ]
      },
      {
        name: "Học tập suốt đời",
        description: "Khả năng liên tục cập nhật kiến thức và kỹ năng mới.",
        tips: [
          "Dành thời gian học tập mỗi ngày",
          "Tham gia các khóa học online",
          "Đọc sách chuyên ngành",
          "Kết nối với các chuyên gia trong lĩnh vực"
        ]
      }
    ],
  
    // Thông tin về các xu hướng nghề nghiệp
    trends: [
      {
        name: "AI và Tự động hóa",
        description: "Trí tuệ nhân tạo và tự động hóa đang thay đổi nhiều ngành nghề, tạo ra cả thách thức và cơ hội mới.",
        impact: "Nhiều công việc đơn giản, lặp lại sẽ được tự động hóa, đòi hỏi người lao động phải nâng cao kỹ năng.",
        opportunities: ["AI Engineer", "Machine Learning Specialist", "Automation Expert", "Data Scientist"]
      },
      {
        name: "Làm việc từ xa",
        description: "Xu hướng làm việc từ xa ngày càng phổ biến, đặc biệt sau đại dịch COVID-19.",
        impact: "Tăng tính linh hoạt, cân bằng công việc-cuộc sống, nhưng cũng đòi hỏi kỷ luật tự giác cao.",
        opportunities: ["Remote Project Manager", "Virtual Assistant", "Online Educator", "Digital Marketing Specialist"]
      },
      {
        name: "Kinh tế xanh",
        description: "Phát triển bền vững và bảo vệ môi trường đang tạo ra nhiều ngành nghề mới.",
        impact: "Các doanh nghiệp ngày càng chú trọng đến phát triển bền vững, tạo cơ hội việc làm trong lĩnh vực xanh.",
        opportunities: ["Environmental Consultant", "Sustainable Development Manager", "Renewable Energy Engineer", "Green Building Architect"]
      },
      {
        name: "Kỹ năng đa ngành",
        description: "Người lao động cần phát triển kỹ năng ở nhiều lĩnh vực khác nhau để thích ứng với thị trường việc làm.",
        impact: "Ranh giới giữa các ngành nghề đang mờ dần, đòi hỏi người lao động phải linh hoạt và đa năng hơn.",
        opportunities: ["Full-stack Developer", "Growth Hacker", "Product Manager", "Creative Technologist"]
      }
    ],
  
    // Thông tin về các trường đại học và ngành học
    education: [
      {
        name: "Đại học Quốc gia Hà Nội",
        location: "Hà Nội",
        specializations: ["Công nghệ thông tin", "Kinh tế", "Luật", "Y khoa", "Ngôn ngữ học"],
        rating: 5,
        website: "https://www.vnu.edu.vn/"
      },
      {
        name: "Đại học Bách khoa Hà Nội",
        location: "Hà Nội",
        specializations: ["Kỹ thuật", "Điện tử", "Cơ khí", "IT", "Tự động hóa"],
        rating: 5,
        website: "https://www.hust.edu.vn/"
      },
      {
        name: "Đại học Quốc gia TP.HCM",
        location: "TP. Hồ Chí Minh",
        specializations: ["Công nghệ thông tin", "Kinh tế", "Khoa học xã hội", "Kỹ thuật"],
        rating: 5,
        website: "https://vnuhcm.edu.vn/"
      },
      {
        name: "Đại học FPT",
        location: "Hà Nội, TP.HCM, Đà Nẵng, Cần Thơ",
        specializations: ["Công nghệ thông tin", "Kinh doanh quốc tế", "Truyền thông đa phương tiện"],
        rating: 4,
        website: "https://daihoc.fpt.edu.vn/"
      },
      {
        name: "Đại học Kinh tế TP.HCM",
        location: "TP. Hồ Chí Minh",
        specializations: ["Tài chính - Ngân hàng", "Kế toán", "Quản trị kinh doanh", "Marketing"],
        rating: 4,
        website: "https://www.ueh.edu.vn/"
      }
    ],
  
    // Thông tin về thị trường lao động
    laborMarket: {
      overview: "Thị trường lao động Việt Nam đang phát triển nhanh chóng với nhiều cơ hội trong các ngành mới.",
      highDemandSectors: ["Công nghệ thông tin", "Kỹ thuật phần mềm", "Digital Marketing", "Logistics", "E-commerce"],
      challenges: ["Khoảng cách kỹ năng", "Cạnh tranh cao", "Thích ứng với công nghệ mới", "Yêu cầu ngoại ngữ"],
      futureOutlook: "Việt Nam đang chuyển dịch từ lao động giá rẻ sang lao động trình độ cao, tập trung vào đổi mới sáng tạo và công nghệ."
    },
  
    // Lời khuyên cho người mới đi làm
    careerAdvice: [
      {
        title: "Xây dựng mạng lưới quan hệ",
        description: "Mở rộng kết nối chuyên môn thông qua networking, tham gia các sự kiện ngành và kết nối online.",
        tips: [
          "Tham gia các hội thảo chuyên ngành",
          "Kết nối với đồng nghiệp cũ và mới",
          "Sử dụng LinkedIn để xây dựng hình ảnh chuyên nghiệp",
          "Tìm mentor trong lĩnh vực bạn quan tâm"
        ]
      },
      {
        title: "Phát triển kỹ năng chuyên môn",
        description: "Liên tục cập nhật và nâng cao kỹ năng để đáp ứng yêu cầu công việc ngày càng cao.",
        tips: [
          "Tham gia các khóa học online và chứng chỉ chuyên môn",
          "Đọc sách, báo, nghiên cứu trong lĩnh vực của bạn",
          "Áp dụng kiến thức vào các dự án thực tế",
          "Tham gia các cộng đồng chuyên môn"
        ]
      },
      {
        title: "Cân bằng công việc - cuộc sống",
        description: "Duy trì sự cân bằng giữa sự nghiệp và đời sống cá nhân để phát triển bền vững.",
        tips: [
          "Thiết lập ranh giới rõ ràng giữa công việc và thời gian cá nhân",
          "Học cách từ chối khi cần thiết",
          "Chăm sóc sức khỏe thể chất và tinh thần",
          "Dành thời gian cho sở thích và người thân"
        ]
      },
      {
        title: "Quản lý tài chính cá nhân",
        description: "Xây dựng thói quen tài chính lành mạnh ngay từ đầu sự nghiệp.",
        tips: [
          "Lập ngân sách và theo dõi chi tiêu",
          "Bắt đầu tiết kiệm sớm, ngay cả với số tiền nhỏ",
          "Tìm hiểu về đầu tư dài hạn",
          "Xây dựng quỹ khẩn cấp tương đương 3-6 tháng chi tiêu"
        ]
      }
    ],
  
    // Thông tin về lộ trình phát triển cho một số nghề phổ biến
    careerPaths: [
      {
        profession: "Lập trình viên",
        path: [
          { level: "Junior Developer", yearsExperience: "0-2 năm", skills: ["Cơ bản về ngôn ngữ lập trình", "Git", "Debugging"] },
          { level: "Mid-level Developer", yearsExperience: "2-5 năm", skills: ["Framework chuyên sâu", "Testing", "Code optimization"] },
          { level: "Senior Developer", yearsExperience: "5-8 năm", skills: ["System design", "Mentoring", "Technical decisions"] },
          { level: "Tech Lead", yearsExperience: "8+ năm", skills: ["Project management", "Architecture design", "Team leadership"] },
          { level: "Software Architect/CTO", yearsExperience: "10+ năm", skills: ["Strategic planning", "Enterprise architecture", "Business alignment"] }
        ]
      },
      {
        profession: "Chuyên viên Marketing",
        path: [
          { level: "Marketing Assistant", yearsExperience: "0-2 năm", skills: ["Content creation", "Social media", "Basic analytics"] },
          { level: "Marketing Executive", yearsExperience: "2-4 năm", skills: ["Campaign management", "SEO/SEM", "Market research"] },
          { level: "Marketing Manager", yearsExperience: "4-7 năm", skills: ["Strategy development", "Budget management", "Team leadership"] },
          { level: "Marketing Director", yearsExperience: "7-10 năm", skills: ["Branding", "Cross-department collaboration", "ROI optimization"] },
          { level: "CMO", yearsExperience: "10+ năm", skills: ["Corporate strategy", "Business development", "Executive leadership"] }
        ]
      },
      {
        profession: "Chuyên viên Tài chính",
        path: [
          { level: "Financial Analyst", yearsExperience: "0-2 năm", skills: ["Financial reporting", "Excel", "Basic modeling"] },
          { level: "Senior Financial Analyst", yearsExperience: "2-5 năm", skills: ["Advanced financial modeling", "Forecasting", "Business partnering"] },
          { level: "Finance Manager", yearsExperience: "5-8 năm", skills: ["Team management", "Strategic planning", "Process improvement"] },
          { level: "Finance Director", yearsExperience: "8-12 năm", skills: ["Corporate finance", "Risk management", "Stakeholder management"] },
          { level: "CFO", yearsExperience: "12+ năm", skills: ["Strategic leadership", "M&A", "Board reporting"] }
        ]
      }
    ],
  
    // Câu hỏi thường gặp
    faqs: [
      {
        question: "Làm thế nào để xác định nghề nghiệp phù hợp với bản thân?",
        answer: "Hãy đánh giá sở thích, giá trị, kỹ năng và điểm mạnh của bạn. Tìm hiểu về các ngành nghề khác nhau và thực hiện các bài kiểm tra hướng nghiệp. Trò chuyện với người đang làm trong lĩnh vực bạn quan tâm và thử thực tập để có trải nghiệm thực tế."
      },
      {
        question: "Tôi nên ưu tiên lương cao hay công việc phù hợp sở thích?",
        answer: "Cả hai yếu tố đều quan trọng. Lý tưởng nhất là tìm được công việc vừa phù hợp sở thích vừa có mức lương tốt. Tuy nhiên, nếu phải lựa chọn, hãy cân nhắc mục tiêu dài hạn của bạn. Công việc phù hợp sở thích thường mang lại động lực và cơ hội phát triển bền vững hơn."
      },
      {
        question: "Làm sao để chuyển ngành nghề hiệu quả?",
        answer: "Xác định kỹ năng chuyển đổi được từ ngành cũ sang ngành mới. Học thêm kỹ năng cần thiết qua khóa học hoặc chứng chỉ. Xây dựng mạng lưới trong ngành mới, tham gia các dự án nhỏ hoặc tình nguyện để tích lũy kinh nghiệm, và điều chỉnh CV để nhấn mạnh kỹ năng liên quan đến ngành mới."
      },
      {
        question: "Nên học đại học hay đi làm sớm?",
        answer: "Phụ thuộc vào ngành nghề và mục tiêu cá nhân. Một số ngành như y tế, luật đòi hỏi bằng cấp chính quy. Ngành kỹ thuật, CNTT có thể tự học hoặc theo các khóa ngắn hạn. Cân nhắc chi phí học tập, thời gian, và cơ hội việc làm sau khi tốt nghiệp để quyết định phù hợp."
      },
      {
        question: "Làm thế nào để chuẩn bị cho phỏng vấn xin việc?",
        answer: "Nghiên cứu kỹ về công ty và vị trí ứng tuyển. Chuẩn bị câu trả lời cho các câu hỏi phỏng vấn phổ biến và câu hỏi liên quan đến chuyên môn. Thực hành trả lời và ngôn ngữ cơ thể. Chuẩn bị portfolio, CV cập nhật và câu hỏi để hỏi nhà tuyển dụng. Đến sớm và ăn mặc phù hợp với văn hóa công ty."
      }
    ]
  };
  
// Thêm API key của Gemini
const GEMINI_API_KEY = 'AIzaSyAXZGbJsHN_CJpbBmdDx18u-dBH3JsuBkQ';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

// Hàm gọi Gemini API để tư vấn nghề nghiệp
async function getCareerAdviceFromAI(userQuery) {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Dựa trên dữ liệu nghề nghiệp sau: ${JSON.stringify(careerData)}, 
                   hãy tư vấn cho câu hỏi: ${userQuery}`
          }]
        }]
      })
    });

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return 'Xin lỗi, hiện tại không thể kết nối với AI tư vấn. Vui lòng thử lại sau.';
  }
}
// Mở rộng hàm searchCareerData để tích hợp AI
async function searchCareerData(query, useAI = false) {
  if (useAI) {
    const aiAdvice = await getCareerAdviceFromAI(query);
    return [{
      type: "AI Tư vấn",
      items: [{
        name: "Gemini AI",
        desc: aiAdvice
      }]
    }];
  }
  
  query = query.toLowerCase();
  let results = [];
  
  // Tìm trong ngành nghề
  const industryMatches = careerData.industries.filter(industry => 
    industry.name.toLowerCase().includes(query) || 
    industry.roles.some(role => role.toLowerCase().includes(query))
  );
  
  if (industryMatches.length > 0) {
    results.push({
      type: "Ngành nghề",
      items: industryMatches.map(i => ({name: i.name, desc: i.overview}))
    });
  }
  
  // Tìm trong kỹ năng mềm
  const skillMatches = careerData.softSkills.filter(skill => 
    skill.name.toLowerCase().includes(query)
  );
  
  if (skillMatches.length > 0) {
    results.push({
      type: "Kỹ năng mềm",
      items: skillMatches.map(s => ({name: s.name, desc: s.description}))
    });
  }
  
  // Tìm trong xu hướng nghề nghiệp
  const trendMatches = careerData.trends.filter(trend => 
    trend.name.toLowerCase().includes(query) ||
    trend.opportunities.some(opp => opp.toLowerCase().includes(query))
  );
  
  if (trendMatches.length > 0) {
    results.push({
      type: "Xu hướng nghề nghiệp",
      items: trendMatches.map(t => ({name: t.name, desc: t.description}))
    });
  }
  
  // Tìm trong giáo dục
  const eduMatches = careerData.education.filter(edu => 
    edu.name.toLowerCase().includes(query) ||
    edu.specializations.some(spec => spec.toLowerCase().includes(query))
  );
  
  if (eduMatches.length > 0) {
    results.push({
      type: "Cơ sở đào tạo",
      items: eduMatches.map(e => ({name: e.name, desc: `Chuyên ngành: ${e.specializations.join(', ')}`}))
    });
  }
  
  return results;
}

// Export dữ liệu và hàm tìm kiếm để sử dụng trong ứng dụng
export { careerData, searchCareerData, getCareerAdviceFromAI };