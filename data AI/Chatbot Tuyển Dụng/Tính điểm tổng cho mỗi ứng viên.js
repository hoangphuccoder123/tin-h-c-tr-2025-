function tinhDiemTong(trinhDo, kinhNghiem, kyNang, chungChi, mucTieu) {
    const weights = {
        trinhDo: 0.2,
        kinhNghiem: 0.3,
        kyNang: 0.25,
        chungChi: 0.15,
        mucTieu: 0.1
    };

    return (
        trinhDo * weights.trinhDo +
        kinhNghiem * weights.kinhNghiem +
        kyNang * weights.kyNang +
        chungChi * weights.chungChi +
        mucTieu * weights.mucTieu
    );
}

// Example usage:
const diemTong = tinhDiemTong(8, 7, 9, 6, 7);
console.log(`Điểm tổng của ứng viên: ${diemTong}`); // Output: 7.55
