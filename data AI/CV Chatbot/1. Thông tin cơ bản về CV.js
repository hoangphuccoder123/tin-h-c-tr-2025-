const cvBasicInfo = [
    {
        id: 'fullName',
        name: 'Họ và tên',
        keywords: ['tên', 'họ tên', 'họ và tên', 'full name'],
        importance: 'critical',
        evaluationCriteria: {
            presence: 'Đã có họ và tên đầy đủ',
            clarity: 'Tên rõ ràng, đúng định dạng'
        },
        sampleQuestions: [
            'Bạn tên đầy đủ là gì?',
            'Vui lòng cung cấp họ và tên đầy đủ của bạn?'
        ],
        recommendations: [
            'Tên nên được viết đầy đủ, rõ ràng',
            'Tránh sử dụng biệt danh trong CV chính thức'
        ]
    },
    {
        id: 'contactInfo',
        name: 'Địa chỉ liên lạc',
        keywords: ['email', 'số điện thoại', 'liên hệ', 'liên lạc', 'contact', 'phone', 'địa chỉ'],
        subCategories: ['email', 'phone', 'address'],
        importance: 'critical',
        evaluationCriteria: {
            presence: 'Đã có thông tin liên lạc',
            clarity: 'Thông tin chính xác, đúng định dạng',
            completeness: 'Có đầy đủ email và số điện thoại'
        },
        sampleQuestions: [
            'Email của bạn là gì?',
            'Số điện thoại liên hệ của bạn?'
        ],
        format: {
            email: 'example@domain.com',
            phone: '0912345678 hoặc +84912345678'
        },
        recommendations: [
            'Email nên sử dụng địa chỉ chuyên nghiệp',
            'Số điện thoại nên là số bạn thường xuyên sử dụng'
        ]
    },
    {
        id: 'careerObjective',
        name: 'Mục tiêu nghề nghiệp',
        keywords: ['mục tiêu', 'career objective', 'career goal', 'mục đích'],
        importance: 'high',
        evaluationCriteria: {
            presence: 'Đã có mục tiêu nghề nghiệp',
            clarity: 'Mục tiêu rõ ràng, cụ thể',
            relevance: 'Phù hợp với vị trí ứng tuyển'
        },
        sampleQuestions: [
            'Mục tiêu nghề nghiệp của bạn là gì?',
            'Bạn mong muốn đạt được gì trong sự nghiệp?'
        ],
        recommendations: [
            'Mục tiêu nên ngắn gọn, tập trung vào giá trị bạn mang lại',
            'Nên điều chỉnh mục tiêu phù hợp với từng vị trí ứng tuyển'
        ]
    },
    {
        id: 'education',
        name: 'Trình độ học vấn',
        keywords: ['học vấn', 'trường', 'đại học', 'cao đẳng', 'education', 'university', 'college', 'khóa học'],
        importance: 'high',
        evaluationCriteria: {
            presence: 'Đã có thông tin học vấn',
            clarity: 'Thông tin rõ ràng, đầy đủ',
            completeness: 'Bao gồm tên trường, thời gian, chuyên ngành, bằng cấp'
        },
        sampleQuestions: [
            'Bạn đã học tại trường nào?',
            'Chuyên ngành của bạn là gì?',
            'Bạn đã tham gia những khóa học nào?'
        ],
        format: 'Tên trường - Chuyên ngành - Thời gian (bắt đầu-kết thúc) - Bằng cấp/Chứng chỉ',
        recommendations: [
            'Liệt kê từ trình độ học vấn cao nhất đến thấp nhất',
            'Nêu rõ các thành tích học tập nổi bật nếu có'
        ]
    },
    {
        id: 'workExperience',
        name: 'Kinh nghiệm làm việc',
        keywords: ['kinh nghiệm', 'công ty', 'làm việc', 'vị trí', 'work experience', 'company'],
        importance: 'high',
        evaluationCriteria: {
            presence: 'Đã có thông tin kinh nghiệm làm việc',
            clarity: 'Thông tin rõ ràng, đầy đủ',
            completeness: 'Bao gồm tên công ty, vị trí, thời gian làm việc, trách nhiệm và thành tựu'
        },
        sampleQuestions: [
            'Bạn đã làm việc ở công ty nào?',
            'Vị trí công việc của bạn là gì?',
            'Thời gian làm việc tại mỗi công ty?',
            'Trách nhiệm chính của bạn là gì?'
        ],
        format: 'Tên công ty - Vị trí - Thời gian (bắt đầu-kết thúc) - Mô tả công việc và thành tựu',
        recommendations: [
            'Sắp xếp theo thứ tự thời gian từ gần đây nhất',
            'Sử dụng động từ mạnh mẽ khi mô tả thành tựu',
            'Lượng hóa thành tựu bằng số liệu cụ thể nếu có thể'
        ]
    },
    {
        id: 'skills',
        name: 'Kỹ năng',
        keywords: ['kỹ năng', 'skill', 'năng lực', 'chuyên môn', 'soft skill', 'kỹ năng mềm'],
        subCategories: ['softSkills', 'hardSkills'],
        importance: 'high',
        evaluationCriteria: {
            presence: 'Đã có thông tin về kỹ năng',
            clarity: 'Phân loại rõ ràng các loại kỹ năng',
            relevance: 'Kỹ năng phù hợp với vị trí ứng tuyển',
            assessment: 'Có đánh giá mức độ thành thạo các kỹ năng'
        },
        sampleQuestions: [
            'Những kỹ năng chuyên môn của bạn là gì?',
            'Bạn có những kỹ năng mềm nào?',
            'Mức độ thành thạo của bạn với từng kỹ năng?'
        ],
        recommendations: [
            'Phân loại rõ kỹ năng mềm và kỹ năng chuyên môn',
            'Đánh giá mức độ thành thạo cho mỗi kỹ năng',
            'Ưu tiên những kỹ năng liên quan đến vị trí ứng tuyển'
        ]
    },
    {
        id: 'certificates',
        name: 'Các chứng chỉ, khóa đào tạo',
        keywords: ['chứng chỉ', 'certificate', 'certification', 'khóa học', 'đào tạo', 'training'],
        importance: 'medium',
        evaluationCriteria: {
            presence: 'Đã có thông tin về chứng chỉ',
            clarity: 'Thông tin rõ ràng, đầy đủ',
            relevance: 'Chứng chỉ liên quan đến vị trí ứng tuyển'
        },
        sampleQuestions: [
            'Bạn đã có những chứng chỉ nào?',
            'Bạn đã tham gia những khóa đào tạo nào?',
            'Thời gian và nơi cấp chứng chỉ?'
        ],
        format: 'Tên chứng chỉ - Tổ chức cấp - Thời gian (năm cấp hoặc thời hạn)',
        recommendations: [
            'Ưu tiên các chứng chỉ liên quan đến ngành nghề',
            'Nêu rõ thời hạn của chứng chỉ nếu có'
        ]
    },
    {
        id: 'achievements',
        name: 'Thành tích nổi bật',
        keywords: ['thành tích', 'giải thưởng', 'achievement', 'award', 'accomplishment'],
        importance: 'medium',
        evaluationCriteria: {
            presence: 'Đã có thông tin về thành tích',
            clarity: 'Thành tích được mô tả rõ ràng, cụ thể',
            relevance: 'Thành tích có liên quan đến vị trí ứng tuyển'
        },
        sampleQuestions: [
            'Bạn đã đạt được những thành tích nổi bật nào?',
            'Những giải thưởng hoặc ghi nhận bạn đã nhận được?'
        ],
        recommendations: [
            'Lượng hóa thành tích bằng số liệu cụ thể',
            'Nêu rõ tầm quan trọng của thành tích trong bối cảnh công việc'
        ]
    },
    {
        id: 'hobbies',
        name: 'Sở thích cá nhân',
        keywords: ['sở thích', 'hobby', 'interest', 'thú vui', 'yêu thích'],
        importance: 'low',
        evaluationCriteria: {
            presence: 'Đã có thông tin về sở thích',
            relevance: 'Sở thích có thể tạo điểm cộng cho ứng viên',
            appropriateness: 'Sở thích phù hợp trong môi trường chuyên nghiệp'
        },
        sampleQuestions: [
            'Những sở thích cá nhân của bạn là gì?',
            'Bạn thường làm gì trong thời gian rảnh?'
        ],
        recommendations: [
            'Chọn những sở thích thể hiện kỹ năng hoặc phẩm chất tích cực',
            'Tránh những sở thích quá cá nhân hoặc gây tranh cãi'
        ]
    }
];

module.exports = cvBasicInfo;
