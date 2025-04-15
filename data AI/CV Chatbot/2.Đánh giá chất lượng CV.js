/**
 * Data structure for CV quality assessment
 */

const cvEvaluationCriteria = {
    formatAssessment: {
        readabilityAndClarity: {
            title: "Độ rõ ràng và dễ đọc",
            criteria: [
                {
                    name: "Font chữ",
                    details: "Đánh giá kích thước font, loại font, và tính nhất quán",
                    checks: [
                        "Font chữ chuyên nghiệp (Arial, Calibri, Times New Roman)",
                        "Kích thước font phù hợp (11-12pt cho nội dung chính)",
                        "Sử dụng font nhất quán trong toàn bộ CV"
                    ],
                    scoringGuidelines: {
                        excellent: "Sử dụng font chuyên nghiệp, nhất quán và dễ đọc",
                        good: "Font chữ ổn định nhưng có thể cải thiện về tính nhất quán",
                        needsImprovement: "Font chữ không chuyên nghiệp hoặc quá nhiều font khác nhau"
                    }
                },
                {
                    name: "Cấu trúc trình bày",
                    details: "Đánh giá bố cục, khoảng cách, và định dạng",
                    checks: [
                        "Khoảng trắng hợp lý giữa các phần",
                        "Căn lề nhất quán",
                        "Sử dụng bullet points để liệt kê",
                        "Nổi bật các tiêu đề bằng bold hoặc font size lớn hơn"
                    ],
                    scoringGuidelines: {
                        excellent: "Cấu trúc rõ ràng, dễ theo dõi, định dạng nhất quán",
                        good: "Cấu trúc rõ ràng nhưng có vài điểm không nhất quán",
                        needsImprovement: "Cấu trúc không rõ ràng, khó theo dõi thông tin"
                    }
                }
            ]
        },
        overallStructure: {
            title: "Cấu trúc tổng thể",
            criteria: [
                {
                    name: "Phân mục rõ ràng",
                    details: "Đánh giá tính rõ ràng của các tiêu đề và mục",
                    checks: [
                        "Các phần chính (thông tin cá nhân, học vấn, kinh nghiệm) được phân chia rõ ràng",
                        "Tiêu đề mỗi phần được định dạng nổi bật",
                        "Có phân cấp rõ ràng giữa tiêu đề chính và phụ"
                    ],
                    scoringGuidelines: {
                        excellent: "Phân mục rõ ràng, dễ phân biệt giữa các phần",
                        good: "Phân mục khá rõ ràng nhưng có thể cải thiện",
                        needsImprovement: "Thiếu phân mục hoặc cấu trúc lộn xộn"
                    }
                },
                {
                    name: "Thứ tự logic",
                    details: "Đánh giá tính logic trong sắp xếp thông tin",
                    checks: [
                        "Thông tin được sắp xếp theo thứ tự phù hợp (mới nhất lên trước)",
                        "Các mục có liên quan được nhóm lại với nhau",
                        "Các phần quan trọng được đặt ở vị trí nổi bật"
                    ],
                    scoringGuidelines: {
                        excellent: "Sắp xếp logic, thứ tự thông tin hợp lý",
                        good: "Thứ tự thông tin có logic nhưng cần một số điều chỉnh",
                        needsImprovement: "Sắp xếp không hợp lý, khó theo dõi"
                    }
                }
            ]
        },
        cvLength: {
            title: "Độ dài CV",
            criteria: [
                {
                    name: "Số trang",
                    details: "Đánh giá độ dài phù hợp của CV",
                    checks: [
                        "CV nên có 1-2 trang với người mới, tối đa 3 trang với người có nhiều kinh nghiệm",
                        "Nội dung đầy đủ nhưng súc tích",
                        "Không có khoảng trống lớn không cần thiết"
                    ],
                    scoringGuidelines: {
                        excellent: "Độ dài phù hợp, thông tin súc tích và đầy đủ",
                        good: "Độ dài chấp nhận được nhưng có thể tinh gọn hơn",
                        needsImprovement: "Quá dài hoặc quá ngắn, không phù hợp với kinh nghiệm"
                    }
                }
            ]
        }
    },
    contentAssessment: {
        informationAccuracy: {
            title: "Tính chính xác của thông tin",
            criteria: [
                {
                    name: "Thông tin nhất quán",
                    details: "Kiểm tra sự nhất quán trong thông tin cung cấp",
                    checks: [
                        "Thời gian học tập/làm việc không chồng chéo hoặc mâu thuẫn",
                        "Vai trò và trách nhiệm phù hợp với chức danh",
                        "Không có mâu thuẫn giữa các phần khác nhau trong CV"
                    ],
                    scoringGuidelines: {
                        excellent: "Thông tin nhất quán và đáng tin cậy",
                        good: "Phần lớn thông tin nhất quán, có vài điểm nhỏ cần làm rõ",
                        needsImprovement: "Có nhiều điểm mâu thuẫn hoặc không chính xác"
                    }
                }
            ]
        },
        grammarAndSpelling: {
            title: "Ngữ pháp và chính tả",
            criteria: [
                {
                    name: "Lỗi chính tả",
                    details: "Đánh giá độ chính xác về chính tả",
                    checks: [
                        "Không có lỗi chính tả",
                        "Sử dụng dấu câu đúng",
                        "Viết hoa đúng quy tắc"
                    ],
                    scoringGuidelines: {
                        excellent: "Không có lỗi chính tả",
                        good: "Có vài lỗi chính tả nhỏ",
                        needsImprovement: "Nhiều lỗi chính tả, ảnh hưởng đến tính chuyên nghiệp"
                    }
                },
                {
                    name: "Ngữ pháp",
                    details: "Đánh giá cấu trúc câu và ngữ pháp",
                    checks: [
                        "Cấu trúc câu đúng ngữ pháp",
                        "Sử dụng thời động từ nhất quán",
                        "Các câu rõ ràng và dễ hiểu"
                    ],
                    scoringGuidelines: {
                        excellent: "Ngữ pháp hoàn hảo, câu cú rõ ràng",
                        good: "Ngữ pháp tốt với một vài lỗi nhỏ",
                        needsImprovement: "Nhiều lỗi ngữ pháp làm giảm tính chuyên nghiệp"
                    }
                }
            ]
        },
        careerGoalRelevance: {
            title: "Sự phù hợp của mục tiêu nghề nghiệp",
            criteria: [
                {
                    name: "Tính liên quan",
                    details: "Đánh giá sự phù hợp giữa mục tiêu và vị trí",
                    checks: [
                        "Mục tiêu nghề nghiệp rõ ràng và cụ thể",
                        "Mục tiêu phù hợp với vị trí đang ứng tuyển",
                        "Thể hiện được định hướng phát triển phù hợp với ngành nghề"
                    ],
                    scoringGuidelines: {
                        excellent: "Mục tiêu rõ ràng, cụ thể và liên quan chặt chẽ đến vị trí",
                        good: "Mục tiêu có liên quan nhưng có thể cụ thể hơn",
                        needsImprovement: "Mục tiêu mơ hồ hoặc không liên quan đến vị trí"
                    }
                }
            ]
        },
        achievementsSpecificity: {
            title: "Tính cụ thể của thành tích và kinh nghiệm",
            criteria: [
                {
                    name: "Thông tin định lượng",
                    details: "Đánh giá việc sử dụng dữ liệu cụ thể",
                    checks: [
                        "Sử dụng con số cụ thể để minh họa thành tích",
                        "Nêu rõ tỷ lệ phần trăm cải thiện hoặc kết quả đạt được",
                        "Đề cập đến quy mô dự án hoặc nhóm quản lý"
                    ],
                    scoringGuidelines: {
                        excellent: "Thành tích được định lượng rõ ràng và có sức thuyết phục",
                        good: "Có một số thông tin định lượng nhưng cần bổ sung",
                        needsImprovement: "Thiếu thông tin định lượng, chủ yếu là mô tả chung chung"
                    }
                },
                {
                    name: "Mô tả hành động",
                    details: "Đánh giá cách mô tả kinh nghiệm",
                    checks: [
                        "Sử dụng động từ hành động mạnh mẽ",
                        "Mô tả rõ vai trò và trách nhiệm",
                        "Làm nổi bật đóng góp cá nhân trong thành tích tập thể"
                    ],
                    scoringGuidelines: {
                        excellent: "Mô tả hành động rõ ràng, thể hiện vai trò và trách nhiệm cụ thể",
                        good: "Mô tả khá rõ ràng nhưng có thể cụ thể hơn",
                        needsImprovement: "Mô tả mơ hồ, không thể hiện rõ vai trò cá nhân"
                    }
                },
                {
                    name: "Tính liên quan",
                    details: "Đánh giá sự liên quan của kinh nghiệm với vị trí",
                    checks: [
                        "Nêu bật những kinh nghiệm liên quan đến vị trí ứng tuyển",
                        "Tập trung vào những kỹ năng chuyển đổi được sang vị trí mới",
                        "Thể hiện sự phát triển chuyên môn qua thời gian"
                    ],
                    scoringGuidelines: {
                        excellent: "Kinh nghiệm được trình bày có liên quan chặt chẽ đến vị trí",
                        good: "Phần lớn kinh nghiệm có liên quan nhưng có thể tập trung hơn",
                        needsImprovement: "Nhiều kinh nghiệm không liên quan đến vị trí ứng tuyển"
                    }
                }
            ]
        }
    },
    
    // Helper function to calculate overall score
    calculateScore: function(evaluationData) {
        // Implementation for calculating score based on evaluation data
        // This would process the evaluations and return a summary with recommendations
    },
    
    // Recommendations based on score ranges
    recommendations: {
        format: {
            high: "CV có định dạng chuyên nghiệp và dễ đọc. Tiếp tục duy trì phong cách này.",
            medium: "Định dạng CV nhìn chung ổn nhưng có thể cải thiện về tính nhất quán và cấu trúc.",
            low: "CV cần cải thiện đáng kể về định dạng. Xem xét việc sử dụng template chuyên nghiệp."
        },
        content: {
            high: "Nội dung CV có chất lượng cao, thể hiện rõ thành tích và kỹ năng phù hợp.",
            medium: "Nội dung CV cần được làm rõ hơn với thông tin cụ thể và liên quan đến vị trí.",
            low: "Cần cải thiện đáng kể nội dung CV, tập trung vào thành tích cụ thể và phù hợp."
        }
    }
};

// Export để sử dụng trong các module khác
export default cvEvaluationCriteria;
