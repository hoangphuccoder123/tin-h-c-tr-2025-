// Training data for complex interview questions
const complexQuestions = {
    conflict_resolution: {
        question: "Làm thế nào bạn xử lý xung đột trong nhóm?",
        keywords: ["xung đột", "nhóm", "xử lý", "giải quyết"],
        category: "soft_skills",
        context: "team_management"
    },
    uncertainty_handling: {
        question: "Bạn sẽ làm gì khi đối mặt với một tình huống không chắc chắn?",
        keywords: ["không chắc chắn", "tình huống", "đối mặt", "xử lý"],
        category: "problem_solving",
        context: "decision_making"
    },
    leadership_style: {
        question: "Phong cách lãnh đạo của bạn là gì?",
        keywords: ["lãnh đạo", "phong cách", "quản lý", "điều hành"],
        category: "leadership",
        context: "management_skills"
    },
    stress_management: {
        question: "Bạn đối phó với áp lực công việc như thế nào?",
        keywords: ["áp lực", "stress", "đối phó", "quản lý"],
        category: "stress_management",
        context: "work_pressure"
    }
};

// Industry-specific vocabulary
const industryVocabulary = {
    programming: {
        terms: [
            { word: "algorithm", definition: "thuật toán" },
            { word: "debugging", definition: "gỡ lỗi" },
            { word: "framework", definition: "khung làm việc" }
        ],
        context: "software_development"
    },
    marketing: {
        terms: [
            { word: "ROI", definition: "lợi nhuận đầu tư" },
            { word: "CTA", definition: "lời kêu gọi hành động" },
            { word: "KPI", definition: "chỉ số hiệu suất" }
        ],
        context: "digital_marketing"
    },
    finance: {
        terms: [
            { word: "assets", definition: "tài sản" },
            { word: "liability", definition: "nợ phải trả" },
            { word: "equity", definition: "vốn chủ sở hữu" }
        ],
        context: "financial_management"
    },
    technology: {
        terms: [
            { word: "API", definition: "giao diện lập trình ứng dụng" },
            { word: "cloud computing", definition: "điện toán đám mây" },
            { word: "blockchain", definition: "chuỗi khối" }
        ],
        context: "tech_industry"
    }
};

// NLP processing functions
const processQuestion = (question) => {
    // TODO: Implement question processing logic
    return {
        tokenized: question.split(' '),
        normalized: question.toLowerCase(),
        keywords: extractKeywords(question)
    };
};

const extractKeywords = (text) => {
    // TODO: Implement keyword extraction logic
    return [];
};

// Add response patterns
const responsePatterns = {
    positive: [
        "Tôi có kinh nghiệm về...",
        "Tôi đã từng giải quyết vấn đề này bằng cách...",
        "Điểm mạnh của tôi là..."
    ],
    negative: [
        "Tôi chưa có kinh nghiệm về...",
        "Tôi đang học hỏi về...",
        "Tôi cần cải thiện..."
    ]
};

// Add sentiment analysis data
const sentimentKeywords = {
    positive: ["thành công", "hiệu quả", "tích cực", "giải quyết", "phát triển"],
    negative: ["thất bại", "khó khăn", "tiêu cực", "vấn đề", "trở ngại"],
    neutral: ["bình thường", "trung bình", "cân nhắc", "đang xem xét"]
};

module.exports = {
    complexQuestions,
    industryVocabulary,
    processQuestion,
    responsePatterns,
    sentimentKeywords
};
