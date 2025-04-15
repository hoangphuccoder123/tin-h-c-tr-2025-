// Định nghĩa trọng số cho từng yếu tố
const WEIGHTS = {
    TrinhDoHocVan: 0.25,    // 25%
    KinhNghiemLamViec: 0.3, // 30%
    KyNangChuyenMon: 0.25,  // 25%
    ChungChi: 0.1,          // 10%
    MucTieuNgheNghiep: 0.1  // 10%
};

// Hàm đánh giá trình độ học vấn (TĐ)
function evaluateEducation(degree) {
    const scores = {
        'phd': 10,
        'thacsi': 8,
        'cunhan': 6,
        'caodang': 5,
        'trungcap': 4
    };
    return scores[degree.toLowerCase()] || 0;
}

// Hàm đánh giá kinh nghiệm làm việc (KN)
function evaluateExperience(yearsExp) {
    if (yearsExp >= 10) return 10;
    if (yearsExp >= 7) return 8;
    if (yearsExp >= 5) return 6;
    if (yearsExp >= 3) return 4;
    if (yearsExp >= 1) return 2;
    return 0;
}

// Hàm đánh giá kỹ năng chuyên môn (KS)
function evaluateSkills(skills) {
    const requiredSkills = ['javascript', 'html', 'css', 'react', 'nodejs'];
    let score = 0;
    
    skills.forEach(skill => {
        if (requiredSkills.includes(skill.toLowerCase())) {
            score += 2;
        }
    });
    
    return Math.min(score, 10);
}

// Hàm đánh giá chứng chỉ (CC)
function evaluateCertificates(certificates) {
    let score = 0;
    certificates.forEach(cert => {
        switch(cert.level.toLowerCase()) {
            case 'international':
                score += 3;
                break;
            case 'national':
                score += 2;
                break;
            case 'local':
                score += 1;
                break;
        }
    });
    return Math.min(score, 10);
}

// Hàm đánh giá mục tiêu nghề nghiệp (MN)
function evaluateCareerGoals(goals) {
    const criteria = {
        specific: 2,    // Mục tiêu cụ thể
        measurable: 2,  // Có thể đo lường
        achievable: 2,  // Có thể đạt được
        relevant: 2,    // Liên quan đến công việc
        timely: 2      // Có thời gian cụ thể
    };
    
    let score = 0;
    Object.keys(criteria).forEach(criterion => {
        if (goals[criterion]) score += criteria[criterion];
    });
    
    return score;
}

// Hàm tính điểm tổng hợp
function calculateOverallScore(candidate) {
    const scores = {
        education: evaluateEducation(candidate.education),
        experience: evaluateExperience(candidate.yearsOfExperience),
        skills: evaluateSkills(candidate.skills),
        certificates: evaluateCertificates(candidate.certificates),
        goals: evaluateCareerGoals(candidate.careerGoals)
    };
    
    return {
        totalScore: (
            scores.education * WEIGHTS.TrinhDoHocVan +
            scores.experience * WEIGHTS.KinhNghiemLamViec +
            scores.skills * WEIGHTS.KyNangChuyenMon +
            scores.certificates * WEIGHTS.ChungChi +
            scores.goals * WEIGHTS.MucTieuNgheNghiep
        ).toFixed(2),
        detailedScores: scores
    };
}

// Hàm phân loại ứng viên
function classifyCandidate(totalScore) {
    if (totalScore >= 8.5) return "Xuất sắc";
    if (totalScore >= 7.0) return "Tốt";
    if (totalScore >= 5.5) return "Khá";
    if (totalScore >= 4.0) return "Trung bình";
    return "Cần cải thiện";
}

// Export các hàm để sử dụng
export {
    calculateOverallScore,
    classifyCandidate,
    WEIGHTS
};
 