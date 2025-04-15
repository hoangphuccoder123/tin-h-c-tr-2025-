// API Configuration
const apiConfig = {
  googleApiKey: 'AIzaSyAXZGbJsHN_CJpbBmdDx18u-dBH3JsuBkQ',
  endpoints: {
    careerAdvice: 'https://api.example.com/career-advice',
    educationPath: 'https://api.example.com/education-path'
  }
};

// data.js - Dữ liệu cá nhân hóa lời khuyên nghề nghiệp và học tập
const personalizedAdviceData = {
    // Dữ liệu về các cấp lớp
    academicLevels: {
      highSchool: {
        grade10: {
          id: "grade10",
          name: "Lớp 10",
          description: "Năm đầu cấp 3, thời điểm tập trung xây dựng nền tảng kiến thức và khám phá sở thích",
          focusAreas: ["Xây dựng thói quen học tập", "Khám phá sở thích", "Tham gia hoạt động ngoại khóa"]
        },
        grade11: {
          id: "grade11",
          name: "Lớp 11",
          description: "Năm giữa cấp 3, thời điểm quan trọng để xác định hướng đi và ôn thi",
          focusAreas: ["Xác định thế mạnh", "Lên kế hoạch nghề nghiệp", "Chuẩn bị cho kỳ thi đánh giá năng lực"]
        },
        grade12: {
          id: "grade12",
          name: "Lớp 12",
          description: "Năm cuối cấp 3, thời điểm quyết định cho tương lai học tập",
          focusAreas: ["Ôn thi tốt nghiệp", "Xác định trường/ngành", "Chuẩn bị hồ sơ xét tuyển"]
        }
      },
      university: {
        freshman: {
          id: "freshman",
          name: "Năm nhất đại học",
          description: "Năm đầu tiên tại đại học, thời điểm làm quen với môi trường mới",
          focusAreas: ["Thích nghi với cách học đại học", "Khám phá chuyên ngành", "Xây dựng mạng lưới quan hệ"]
        },
        sophomore: {
          id: "sophomore",
          name: "Năm hai đại học",
          description: "Năm thứ hai tại đại học, thời điểm đi sâu vào chuyên ngành",
          focusAreas: ["Chọn chuyên ngành chính", "Tìm kiếm cơ hội thực tập", "Tham gia nghiên cứu"]
        }
      }
    },
  
    // Dữ liệu về các môn học
    subjects: {
      math: {
        id: "math",
        name: "Toán học",
        description: "Phát triển tư duy logic, kỹ năng giải quyết vấn đề",
        relatedCareers: ["Kỹ sư", "Nhà nghiên cứu", "Nhà phân tích dữ liệu", "Giáo viên Toán", "Chuyên gia tài chính"],
        recommendedMajors: ["Toán học", "Khoa học máy tính", "Kỹ thuật", "Kinh tế", "Thống kê"],
        skillsDeveloped: ["Tư duy logic", "Phân tích", "Giải quyết vấn đề phức tạp"]
      },
      physics: {
        id: "physics",
        name: "Vật lý",
        description: "Hiểu biết về các quy luật tự nhiên và ứng dụng thực tiễn",
        relatedCareers: ["Kỹ sư", "Nhà vật lý", "Chuyên gia năng lượng", "Kỹ thuật viên"],
        recommendedMajors: ["Vật lý", "Kỹ thuật điện", "Cơ khí", "Năng lượng tái tạo", "Hàng không vũ trụ"],
        skillsDeveloped: ["Tư duy phản biện", "Kỹ năng thí nghiệm", "Mô hình hóa"]
      },
      chemistry: {
        id: "chemistry",
        name: "Hóa học",
        description: "Nghiên cứu về thành phần, cấu trúc, tính chất của vật chất",
        relatedCareers: ["Kỹ sư hóa", "Dược sĩ", "Nhà nghiên cứu", "Kỹ thuật viên phòng thí nghiệm"],
        recommendedMajors: ["Hóa học", "Dược", "Khoa học vật liệu", "Công nghệ thực phẩm", "Môi trường"],
        skillsDeveloped: ["Phân tích", "Thí nghiệm", "Tổng hợp"]
      },
      biology: {
        id: "biology",
        name: "Sinh học",
        description: "Nghiên cứu về sự sống và các sinh vật",
        relatedCareers: ["Bác sĩ", "Nhà sinh học", "Chuyên gia môi trường", "Kỹ thuật viên y tế"],
        recommendedMajors: ["Y khoa", "Sinh học", "Công nghệ sinh học", "Môi trường", "Nông nghiệp"],
        skillsDeveloped: ["Quan sát", "Phân tích", "Thực nghiệm"]
      },
      literature: {
        id: "literature",
        name: "Văn học",
        description: "Phát triển khả năng ngôn ngữ, tư duy phản biện và sáng tạo",
        relatedCareers: ["Nhà văn", "Nhà báo", "Biên tập viên", "Giáo viên Văn học", "Chuyên gia truyền thông"],
        recommendedMajors: ["Văn học", "Báo chí", "Truyền thông", "Xuất bản", "Quan hệ công chúng"],
        skillsDeveloped: ["Viết lách", "Giao tiếp", "Tư duy phản biện", "Sáng tạo"]
      },
      english: {
        id: "english",
        name: "Tiếng Anh",
        description: "Phát triển khả năng giao tiếp quốc tế và cơ hội toàn cầu",
        relatedCareers: ["Biên phiên dịch", "Giáo viên tiếng Anh", "Chuyên gia quan hệ quốc tế", "Hướng dẫn viên du lịch"],
        recommendedMajors: ["Ngôn ngữ Anh", "Quan hệ quốc tế", "Du lịch", "Thương mại quốc tế", "Truyền thông đa phương tiện"],
        skillsDeveloped: ["Giao tiếp", "Ngôn ngữ", "Hiểu biết văn hóa"]
      },
      history: {
        id: "history",
        name: "Lịch sử",
        description: "Hiểu biết về quá khứ để định hướng tương lai",
        relatedCareers: ["Nhà sử học", "Nhà nghiên cứu", "Nhà báo", "Giáo viên Lịch sử", "Chuyên gia bảo tàng"],
        recommendedMajors: ["Lịch sử", "Khảo cổ học", "Quan hệ quốc tế", "Luật", "Báo chí"],
        skillsDeveloped: ["Phân tích", "Nghiên cứu", "Tư duy phản biện", "Tổng hợp thông tin"]
      },
      geography: {
        id: "geography",
        name: "Địa lý",
        description: "Hiểu biết về không gian địa lý, môi trường và con người",
        relatedCareers: ["Nhà địa lý học", "Chuyên gia GIS", "Nhà quy hoạch đô thị", "Chuyên gia môi trường"],
        recommendedMajors: ["Địa lý", "Quy hoạch đô thị", "Môi trường", "Du lịch", "Quản lý tài nguyên"],
        skillsDeveloped: ["Phân tích không gian", "Sử dụng bản đồ", "Hiểu biết toàn cầu"]
      },
      technology: {
        id: "technology",
        name: "Công nghệ",
        description: "Phát triển kỹ năng kỹ thuật và công nghệ",
        relatedCareers: ["Lập trình viên", "Kỹ sư phần mềm", "Chuyên gia an ninh mạng", "Nhà phát triển ứng dụng"],
        recommendedMajors: ["Công nghệ thông tin", "Kỹ thuật phần mềm", "An ninh mạng", "Trí tuệ nhân tạo", "Khoa học dữ liệu"],
        skillsDeveloped: ["Lập trình", "Giải quyết vấn đề", "Sáng tạo kỹ thuật"]
      }
    },
  
    // Dữ liệu về điểm mạnh cá nhân
    personalStrengths: {
      communication: {
        id: "communication",
        name: "Giao tiếp",
        description: "Khả năng truyền đạt thông tin hiệu quả và xây dựng quan hệ",
        suitableCareers: ["Truyền thông", "Marketing", "Quan hệ công chúng", "Giáo dục", "Dịch vụ khách hàng"],
        developmentTips: ["Tham gia câu lạc bộ hùng biện", "Thực hành thuyết trình", "Luyện kỹ năng lắng nghe"]
      },
      logical: {
        id: "logical",
        name: "Tư duy logic",
        description: "Khả năng phân tích và giải quyết vấn đề theo cách có hệ thống",
        suitableCareers: ["Công nghệ thông tin", "Kỹ thuật", "Phân tích dữ liệu", "Nghiên cứu", "Tài chính"],
        developmentTips: ["Giải các bài toán logic", "Học lập trình", "Phân tích các tình huống phức tạp"]
      },
      creativity: {
        id: "creativity",
        name: "Sáng tạo",
        description: "Khả năng tạo ra ý tưởng mới và độc đáo",
        suitableCareers: ["Thiết kế", "Nghệ thuật", "Marketing", "Quảng cáo", "Phát triển sản phẩm"],
        developmentTips: ["Thực hành brainstorming", "Học các kỹ năng nghệ thuật", "Đọc sách về sáng tạo"]
      },
      technical: {
        id: "technical",
        name: "Kỹ thuật",
        description: "Khả năng làm việc với các công cụ, máy móc và hệ thống kỹ thuật",
        suitableCareers: ["Kỹ sư", "Công nghệ thông tin", "Sửa chữa điện tử", "Cơ khí", "Kiến trúc"],
        developmentTips: ["Học các kỹ năng thực hành", "Tham gia các dự án DIY", "Theo dõi các xu hướng công nghệ mới"]
      },
      teamwork: {
        id: "teamwork",
        name: "Làm việc nhóm",
        description: "Khả năng hợp tác và làm việc hiệu quả với người khác",
        suitableCareers: ["Quản lý dự án", "Nhân sự", "Dịch vụ xã hội", "Kinh doanh", "Giáo dục"],
        developmentTips: ["Tham gia các hoạt động nhóm", "Phát triển kỹ năng lãnh đạo", "Luyện kỹ năng giải quyết xung đột"]
      }
    },
  
    // Dữ liệu về sở thích ngành nghề
    careerInterests: {
      science: {
        id: "science",
        name: "Khoa học",
        description: "Khám phá, nghiên cứu và phát triển kiến thức mới",
        recommendedFields: ["Nghiên cứu cơ bản", "Phát triển công nghệ", "Y học", "Môi trường", "Vũ trụ"],
        topUniversities: ["Đại học Quốc gia Hà Nội", "Đại học Quốc gia TP.HCM", "Đại học Bách Khoa Hà Nội"]
      },
      technology: {
        id: "technology",
        name: "Kỹ thuật",
        description: "Áp dụng kiến thức khoa học để giải quyết vấn đề thực tiễn",
        recommendedFields: ["Công nghệ thông tin", "Điện tử", "Cơ khí", "Tự động hóa", "Năng lượng"],
        topUniversities: ["Đại học Bách Khoa Hà Nội", "Đại học Bách Khoa TP.HCM", "Đại học FPT"]
      },
      arts: {
        id: "arts",
        name: "Nghệ thuật",
        description: "Biểu đạt sáng tạo và phát triển thẩm mỹ",
        recommendedFields: ["Thiết kế", "Âm nhạc", "Điện ảnh", "Mỹ thuật", "Kiến trúc"],
        topUniversities: ["Đại học Kiến trúc Hà Nội", "Đại học Mỹ thuật TP.HCM", "Đại học Văn hóa Hà Nội"]
      },
      business: {
        id: "business",
        name: "Kinh doanh",
        description: "Phát triển và quản lý các hoạt động thương mại",
        recommendedFields: ["Quản trị kinh doanh", "Marketing", "Tài chính", "Kế toán", "Thương mại quốc tế"],
        topUniversities: ["Đại học Kinh tế Quốc dân", "Đại học Ngoại thương", "Đại học Kinh tế TP.HCM"]
      },
      social: {
        id: "social",
        name: "Xã hội",
        description: "Phục vụ và cải thiện xã hội và cộng đồng",
        recommendedFields: ["Giáo dục", "Công tác xã hội", "Luật", "Tâm lý học", "Quan hệ quốc tế"],
        topUniversities: ["Đại học Sư phạm Hà Nội", "Đại học Luật Hà Nội", "Đại học Khoa học Xã hội và Nhân văn"]
      },
      health: {
        id: "health",
        name: "Sức khỏe",
        description: "Chăm sóc và cải thiện sức khỏe con người",
        recommendedFields: ["Y khoa", "Dược", "Điều dưỡng", "Y tế công cộng", "Dinh dưỡng"],
        topUniversities: ["Đại học Y Hà Nội", "Đại học Y Dược TP.HCM", "Đại học Y Dược Huế"]
      }
    },
  
    // Dữ liệu về tính cách
    personalities: {
      mbti: {
        INTJ: {
          id: "INTJ",
          name: "Nhà chiến lược",
          description: "Sáng tạo và phân tích, có tầm nhìn chiến lược",
          recommendedCareers: ["Nhà khoa học", "Chiến lược gia", "Kiến trúc sư", "Kỹ sư phần mềm", "Nhà nghiên cứu"]
        },
        INTP: {
          id: "INTP",
          name: "Nhà logic",
          description: "Sáng tạo và tò mò, thích phân tích các hệ thống phức tạp",
          recommendedCareers: ["Lập trình viên", "Nhà khoa học", "Nhà phân tích", "Triết gia", "Kiến trúc sư"]
        },
        ENTJ: {
          id: "ENTJ",
          name: "Nhà chỉ huy",
          description: "Tự tin và quyết đoán, thích lãnh đạo và tổ chức",
          recommendedCareers: ["CEO", "Nhà quản lý", "Luật sư", "Chính trị gia", "Doanh nhân"]
        },
        ENTP: {
          id: "ENTP",
          name: "Người tranh luận",
          description: "Thông minh và tò mò, thích thách thức và sáng tạo",
          recommendedCareers: ["Doanh nhân", "Luật sư", "Nhà sáng tạo nội dung", "Nhà tư vấn", "Nhà đàm phán"]
        },
        INFJ: {
          id: "INFJ",
          name: "Người che chở",
          description: "Sâu sắc và trực giác, thích giúp đỡ người khác",
          recommendedCareers: ["Nhà tư vấn", "Nhà tâm lý học", "Giáo viên", "Nhà văn", "Nhà hoạt động xã hội"]
        },
        INFP: {
          id: "INFP",
          name: "Người hòa giải",
          description: "Lý tưởng và sáng tạo, luôn tìm kiếm ý nghĩa",
          recommendedCareers: ["Nhà văn", "Nghệ sĩ", "Nhà tâm lý học", "Giáo viên", "Nhà thiết kế"]
        },
        ENFJ: {
          id: "ENFJ",
          name: "Người chủ xướng",
          description: "Ấm áp và quả quyết, thích truyền cảm hứng và lãnh đạo",
          recommendedCareers: ["Giáo viên", "Nhà tư vấn", "Chính trị gia", "Nhà quản lý nhân sự", "Nhà diễn thuyết"]
        },
        ENFP: {
          id: "ENFP",
          name: "Người truyền cảm hứng",
          description: "Nhiệt tình và sáng tạo, thích các khả năng mới",
          recommendedCareers: ["Nhà marketing", "Nhà báo", "Nhà tư vấn", "Nhà tâm lý học", "Diễn viên"]
        },
        ISTJ: {
          id: "ISTJ",
          name: "Người kiểm duyệt",
          description: "Thực tế và có tổ chức, đáng tin cậy và trách nhiệm",
          recommendedCareers: ["Kế toán", "Quản lý", "Kỹ sư", "Luật sư", "Nhân viên ngân hàng"]
        },
        ISFJ: {
          id: "ISFJ",
          name: "Người bảo vệ",
          description: "Ấm áp và chu đáo, thích bảo vệ người khác",
          recommendedCareers: ["Y tá", "Giáo viên", "Nhà tư vấn", "Nhân viên xã hội", "Kế toán"]
        },
        ESTJ: {
          id: "ESTJ",
          name: "Người giám sát",
          description: "Thực tế và quyết đoán, thích tổ chức và lãnh đạo",
          recommendedCareers: ["Nhà quản lý", "Quân đội", "Luật sư", "Nhà điều hành", "Nhà tài chính"]
        },
        ESFJ: {
          id: "ESFJ",
          name: "Người quan tâm",
          description: "Ấm áp và hợp tác, thích hài hòa và hỗ trợ",
          recommendedCareers: ["Y tá", "Giáo viên", "Nhân viên chăm sóc khách hàng", "Nhân viên xã hội", "Nhà tư vấn"]
        },
        ISTP: {
          id: "ISTP",
          name: "Người thợ thủ công",
          description: "Thực tế và khách quan, giải quyết vấn đề hiệu quả",
          recommendedCareers: ["Kỹ sư", "Thợ cơ khí", "Lập trình viên", "Phi công", "Nhà thể thao"]
        },
        ISFP: {
          id: "ISFP",
          name: "Người nghệ sĩ",
          description: "Nhạy cảm và sáng tạo, thích tự do và làm việc độc lập",
          recommendedCareers: ["Nghệ sĩ", "Nhà thiết kế", "Nhạc sĩ", "Đầu bếp", "Thợ thủ công"]
        },
        ESTP: {
          id: "ESTP",
          name: "Người thực thi",
          description: "Năng động và thực tế, thích mạo hiểm và hành động",
          recommendedCareers: ["Doanh nhân", "Nhà thể thao", "Nhà giao dịch", "Nhà tiếp thị", "Nhà đàm phán"]
        },
        ESFP: {
          id: "ESFP",
          name: "Người trình diễn",
          description: "Hòa đồng và năng động, thích giải trí và làm việc với người khác",
          recommendedCareers: ["Diễn viên", "Nhân viên bán hàng", "Hướng dẫn viên du lịch", "Nhà tổ chức sự kiện", "Nhà thiết kế"]
        }
      },
      riasec: {
        R: {
          id: "R",
          name: "Realistic (Thực tế)",
          description: "Thích làm việc với đồ vật, máy móc, công cụ, thực tế",
          recommendedCareers: ["Kỹ sư", "Thợ cơ khí", "Nông dân", "Kiến trúc sư", "Thợ điện"]
        },
        I: {
          id: "I",
          name: "Investigative (Nghiên cứu)",
          description: "Thích tìm hiểu, phân tích, đánh giá, giải quyết vấn đề",
          recommendedCareers: ["Nhà khoa học", "Bác sĩ", "Lập trình viên", "Nhà nghiên cứu", "Kỹ sư"]
        },
        A: {
          id: "A",
          name: "Artistic (Nghệ thuật)",
          description: "Thích sáng tạo, biểu đạt, không theo khuôn mẫu",
          recommendedCareers: ["Nhà thiết kế", "Nhạc sĩ", "Nhà văn", "Diễn viên", "Kiến trúc sư"]
        },
        S: {
          id: "S",
          name: "Social (Xã hội)",
          description: "Thích làm việc với người, giúp đỡ, dạy dỗ, chăm sóc",
          recommendedCareers: ["Giáo viên", "Y tá", "Nhà tư vấn", "Nhân viên xã hội", "Nhà tâm lý học"]
        },
        E: {
          id: "E",
          name: "Enterprising (Quản lý)",
          description: "Thích lãnh đạo, thuyết phục, quản lý, kinh doanh",
          recommendedCareers: ["Doanh nhân", "Nhà quản lý", "Nhân viên bán hàng", "Luật sư", "Chính trị gia"]
        },
        C: {
          id: "C",
          name: "Conventional (Quy ước)",
          description: "Thích làm việc với dữ liệu, chi tiết, có tổ chức",
          recommendedCareers: ["Kế toán", "Thư ký", "Nhân viên ngân hàng", "Nhân viên hành chính", "Thống kê viên"]
        }
      }
    },
  
    // Dữ liệu về mục tiêu tương lai
    futureGoals: {
      studyAbroad: {
        id: "studyAbroad",
        name: "Du học",
        description: "Học tập ở nước ngoài để mở rộng cơ hội và kinh nghiệm",
        preparationSteps: [
          "Học tiếng Anh hoặc ngôn ngữ của nước đến",
          "Tìm hiểu về các trường và chương trình học",
          "Chuẩn bị kỹ năng và tài chính",
          "Lấy các chứng chỉ cần thiết (IELTS, TOEFL, v.v.)",
          "Tìm học bổng"
        ],
        recommendedCountries: ["Mỹ", "Úc", "Singapore", "Nhật Bản", "Đức", "Hàn Quốc", "Canada"]
      },
      workImmediately: {
        id: "workImmediately",
        name: "Đi làm ngay",
        description: "Tham gia thị trường lao động sau khi tốt nghiệp",
        preparationSteps: [
          "Phát triển kỹ năng chuyên môn",
          "Tìm hiểu về thị trường lao động",
          "Xây dựng CV và portfolio",
          "Rèn luyện kỹ năng phỏng vấn",
          "Xây dựng mạng lưới quan hệ"
        ],
        recommendedSkills: ["Kỹ năng mềm", "Ngoại ngữ", "Công nghệ thông tin", "Kỹ năng chuyên môn"]
      },
      higherEducation: {
        id: "higherEducation",
        name: "Học cao học",
        description: "Tiếp tục học lên trình độ thạc sĩ hoặc tiến sĩ",
        preparationSteps: [
          "Duy trì điểm số tốt",
          "Tham gia nghiên cứu",
          "Chuẩn bị cho các kỳ thi đầu vào (GRE, GMAT, v.v.)",
          "Tìm hiểu về các chương trình học",
          "Tìm nguồn tài trợ và học bổng"
        ],
        recommendedPrograms: ["Thạc sĩ", "Tiến sĩ", "MBA", "Các chương trình nghiên cứu chuyên sâu"]
      },
      startup: {
        id: "startup",
        name: "Khởi nghiệp",
        description: "Bắt đầu doanh nghiệp riêng và phát triển ý tưởng kinh doanh",
        preparationSteps: [
          "Phát triển ý tưởng kinh doanh",
          "Học về quản lý và kinh doanh",
          "Xây dựng mạng lưới quan hệ",
          "Tìm hiểu về nguồn vốn",
          "Tham gia các cuộc thi khởi nghiệp"
        ],
        recommendedResources: ["Các chương trình ươm tạo", "Vườn ươm", "Quỹ đầu tư mạo hiểm", "Cộng đồng khởi nghiệp"]
      }
    }
};

// Export both configurations
module.exports = {
  apiConfig,
  personalizedAdviceData
};