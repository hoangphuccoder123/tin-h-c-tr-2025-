export const careerQuestions = {
    config: {
        geminiApi: {
            key: 'AIzaSyBu9qXzymzcblC_kTx3Cpbr1bNENt-rbqo',
            endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'
        }
    },
    initial: [
      "Bạn đang học năm mấy/đã tốt nghiệp chưa?",
      "Bạn có sở thích hoặc đam mê đặc biệt nào không?",
      "Bạn tự đánh giá điểm mạnh của mình là gì?",
      "Bạn mong muốn mức lương khởi điểm như thế nào?"
    ],
  
    followUp: {
      skills: [
        "Bạn có thế mạnh về kỹ năng gì (ví dụ: phân tích, sáng tạo, giao tiếp)?",
        "Bạn đã có chứng chỉ hoặc bằng cấp liên quan nào chưa?",
        "Bạn có kinh nghiệm làm việc nhóm hoặc dự án nào không?"
      ],
      
      interests: [
        "Bạn thích làm việc trong môi trường nào (văn phòng, linh hoạt, đi lại nhiều)?",
        "Bạn có sở thích về công nghệ, nghệ thuật hay khoa học không?",
        "Công việc lý tưởng của bạn sẽ như thế nào?"
      ],
  
      goals: [
        "Bạn có kế hoạch phát triển sự nghiệp trong 5 năm tới không?",
        "Bạn muốn học thêm kỹ năng gì để phát triển nghề nghiệp?",
        "Bạn có dự định khởi nghiệp trong tương lai không?"
      ]
    },
  
    industrySpecific: {
      it: [
        "Bạn thích mảng frontend hay backend hơn?",
        "Bạn đã học những ngôn ngữ lập trình nào?",
        "Bạn có kinh nghiệm với AI/ML không?"
      ],
  
      marketing: [
        "Bạn thích digital marketing hay marketing truyền thống?",
        "Bạn có kinh nghiệm quản lý social media không?",
        "Bạn đã từng lên kế hoạch marketing chưa?"
      ],
  
      finance: [
        "Bạn có kiến thức về thị trường chứng khoán không?",
        "Bạn có chứng chỉ CFA hoặc ACCA không?",
        "Bạn thích phân tích tài chính hay kế toán hơn?"
      ]
    },
  
    prompts: {
      greeting: "Xin chào! Tôi là trợ lý AI tư vấn nghề nghiệp. Tôi sẽ giúp bạn tìm hiểu về định hướng nghề nghiệp phù hợp. Bạn có thể chia sẻ về bản thân không?",
      
      analysis: "Dựa trên thông tin bạn chia sẻ, tôi nghĩ những ngành nghề sau đây có thể phù hợp với bạn:",
      
      suggestion: "Bạn có muốn tìm hiểu thêm về ngành nào trong số này không?",
      
      conclusion: "Bạn có câu hỏi gì thêm về các ngành nghề này không? Tôi có thể cung cấp thông tin chi tiết về mức lương, cơ hội việc làm và lộ trình phát triển."
    }
  };