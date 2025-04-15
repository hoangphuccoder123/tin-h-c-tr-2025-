// Constants for weight coefficients
const WEIGHTS = {
    trinhDo: 0.2,
    kinhNghiem: 0.3,
    kyNang: 0.25,
    chungChi: 0.15,
    mucTieu: 0.1
};

/**
 * Công thức tính điểm tổng:
 * DT = (TĐ × WTĐ) + (KN × WKN) + (KS × WKS) + (CC × WCC) + (MN × WMN)
 * Trong đó:
 * - TĐ: Trình độ học vấn (0-10)
 * - KN: Kinh nghiệm làm việc (0-10)
 * - KS: Kỹ năng chuyên môn (0-10)
 * - CC: Chứng chỉ/Khóa học (0-10)
 * - MN: Mục tiêu nghề nghiệp (0-10)
 */

// Validate weights sum to 1
function validateWeights() {
    const totalWeight = Object.values(WEIGHTS).reduce((sum, weight) => sum + weight, 0);
    if (Math.abs(totalWeight - 1) > 0.0001) { // Using small epsilon for floating point comparison
        throw new Error('Tổng các trọng số phải bằng 1');
    }
}

// Validate score is between 0 and 10
function validateScore(score, fieldName) {
    if (score < 0 || score > 10) {
        throw new Error(`${fieldName} phải nằm trong khoảng từ 0 đến 10`);
    }
}

// Calculate total score for a candidate
function tinhDiemTong(candidate) {
    // Validate all scores
    validateWeights();
    validateScore(candidate.trinhDo, 'Trình độ học vấn');
    validateScore(candidate.kinhNghiem, 'Kinh nghiệm làm việc');
    validateScore(candidate.kyNang, 'Kỹ năng chuyên môn');
    validateScore(candidate.chungChi, 'Chứng chỉ');
    validateScore(candidate.mucTieu, 'Mục tiêu nghề nghiệp');

    // Calculate total score using the formula
    return (
        candidate.trinhDo * WEIGHTS.trinhDo +
        candidate.kinhNghiem * WEIGHTS.kinhNghiem +
        candidate.kyNang * WEIGHTS.kyNang +
        candidate.chungChi * WEIGHTS.chungChi +
        candidate.mucTieu * WEIGHTS.mucTieu
    );
}

// Rank candidates based on their scores
function xepHangUngVien(candidates) {
    return candidates
        .map(candidate => ({
            ...candidate,
            diemTong: tinhDiemTong(candidate)
        }))
        .sort((a, b) => b.diemTong - a.diemTong);
}

// Format and display rankings
function hienThiXepHang(rankedCandidates) {
    console.log('Kết quả xếp hạng ứng viên:');
    rankedCandidates.forEach((candidate, index) => {
        console.log(`${index + 1}. ${candidate.ten}: ${candidate.diemTong.toFixed(2)} điểm`);
    });
}

// Example usage
const ungVien = [
    {
        ten: 'Ứng viên A',
        trinhDo: 8,
        kinhNghiem: 7,
        kyNang: 9,
        chungChi: 6,
        mucTieu: 7
    },
    {
        ten: 'Ứng viên B',
        trinhDo: 9,
        kinhNghiem: 8,
        kyNang: 8,
        chungChi: 8,
        mucTieu: 8
    },
    {
        ten: 'Ứng viên C',
        trinhDo: 7,
        kinhNghiem: 6,
        kyNang: 8,
        chungChi: 7,
        mucTieu: 6
    }
];

const ketQuaXepHang = xepHangUngVien(ungVien);
hienThiXepHang(ketQuaXepHang);
