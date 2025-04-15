const teacherData = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        subject: "Toán học",
        email: "nguyenvana@school.edu.vn",
        phone: "0901234567",
        experience: 10,
        specialization: "Giải tích",
        classes: ["10", "11", "12"],
        education: {
            degree: "Thạc sĩ Toán học",
            university: "Đại học Sư phạm Hà Nội",
            graduationYear: 2010
        },
        achievements: [
            "Giáo viên dạy giỏi cấp thành phố 2020",
            "Hướng dẫn học sinh đạt giải nhất HSG Quốc gia 2021"
        ],
        certifications: [
            "Chứng chỉ nghiệp vụ sư phạm nâng cao",
            "Chứng chỉ đào tạo giáo viên cốt cán"
        ],
        teachingMethods: [
            "Phương pháp dạy học tích cực",
            "Ứng dụng CNTT trong giảng dạy",
            "Phương pháp giải bài tập điển hình"
        ]
    },
    {
        id: 2,
        name: "Trần Thị B",
        subject: "Vật lý",
        email: "tranthib@school.edu.vn",
        phone: "0902345678",
        experience: 8,
        specialization: "Vật lý hạt nhân",
        classes: ["11", "12"],
        education: {
            degree: "Thạc sĩ Vật lý",
            university: "Đại học Khoa học Tự nhiên",
            graduationYear: 2012
        },
        achievements: [
            "Giáo viên dạy giỏi cấp tỉnh 2019",
            "Hướng dẫn học sinh đạt giải nhì HSG Quốc gia 2020"
        ],
        certifications: [
            "Chứng chỉ nghiệp vụ sư phạm nâng cao",
            "Chứng chỉ đào tạo giáo viên chuyên sâu"
        ],
        teachingMethods: [
            "Phương pháp thí nghiệm thực hành",
            "Ứng dụng mô phỏng trong giảng dạy",
            "Phương pháp giải bài tập sáng tạo"
        ]
    },
    {
        id: 3,
        name: "Lê Văn C",
        subject: "Hóa học",
        email: "levanc@school.edu.vn",
        phone: "0903456789",
        experience: 12,
        specialization: "Hóa hữu cơ",
        classes: ["10", "11", "12"],
        education: {
            degree: "Thạc sĩ Hóa học",
            university: "Đại học Sư phạm Hà Nội",
            graduationYear: 2008
        },
        achievements: [
            "Giáo viên dạy giỏi cấp quốc gia 2018",
            "Hướng dẫn học sinh đạt giải ba HSG Quốc gia 2019"
        ],
        certifications: [
            "Chứng chỉ nghiệp vụ sư phạm nâng cao",
            "Chứng chỉ đào tạo giáo viên chuyên sâu"
        ],
        teachingMethods: [
            "Phương pháp thí nghiệm thực hành",
            "Ứng dụng CNTT trong giảng dạy",
            "Phương pháp giải bài tập điển hình"
        ]
    },
    {
        id: 4,
        name: "Phạm Thị D",
        subject: "Sinh học",
        email: "phamthid@school.edu.vn",
        phone: "0904567890",
        experience: 7,
        specialization: "Di truyền học",
        classes: ["10", "11", "12"],
        education: {
            degree: "Thạc sĩ Sinh học",
            university: "Đại học Khoa học Tự nhiên",
            graduationYear: 2013
        },
        achievements: [
            "Giáo viên dạy giỏi cấp thành phố 2017",
            "Hướng dẫn học sinh đạt giải nhất HSG Quốc gia 2018"
        ],
        certifications: [
            "Chứng chỉ nghiệp vụ sư phạm nâng cao",
            "Chứng chỉ đào tạo giáo viên chuyên sâu"
        ],
        teachingMethods: [
            "Phương pháp thí nghiệm thực hành",
            "Ứng dụng CNTT trong giảng dạy",
            "Phương pháp giải bài tập sáng tạo"
        ]
    },
    {
        id: 5,
        name: "Hoàng Văn E",
        subject: "Ngữ văn",
        email: "hoangvane@school.edu.vn",
        phone: "0905678901",
        experience: 15,
        specialization: "Văn học hiện đại",
        classes: ["10", "11", "12"],
        education: {
            degree: "Thạc sĩ Ngữ văn",
            university: "Đại học Sư phạm Hà Nội",
            graduationYear: 2005
        },
        achievements: [
            "Giáo viên dạy giỏi cấp quốc gia 2015",
            "Hướng dẫn học sinh đạt giải nhì HSG Quốc gia 2016"
        ],
        certifications: [
            "Chứng chỉ nghiệp vụ sư phạm nâng cao",
            "Chứng chỉ đào tạo giáo viên chuyên sâu"
        ],
        teachingMethods: [
            "Phương pháp phân tích tác phẩm",
            "Ứng dụng CNTT trong giảng dạy",
            "Phương pháp thảo luận nhóm"
        ]
    },
    {
        id: 6,
        name: "Lý Thị F",
        subject: "Tiếng Anh",
        email: "lythif@school.edu.vn",
        phone: "0906789012",
        experience: 9,
        specialization: "IELTS",
        classes: ["10", "11", "12"],
        education: {
            degree: "Thạc sĩ Ngôn ngữ Anh",
            university: "Đại học Ngoại ngữ",
            graduationYear: 2011
        },
        achievements: [
            "Giáo viên dạy giỏi cấp thành phố 2019",
            "Hướng dẫn học sinh đạt điểm IELTS cao nhất trường 2020"
        ],
        certifications: [
            "Chứng chỉ nghiệp vụ sư phạm nâng cao",
            "Chứng chỉ đào tạo giáo viên chuyên sâu"
        ],
        teachingMethods: [
            "Phương pháp giao tiếp trực tiếp",
            "Ứng dụng CNTT trong giảng dạy",
            "Phương pháp học từ vựng sáng tạo"
        ]
    },
    {
        id: 7,
        name: "Đỗ Văn G",
        subject: "Lịch sử",
        email: "dovang@school.edu.vn",
        phone: "0907890123",
        experience: 11,
        specialization: "Lịch sử Việt Nam",
        classes: ["10", "11", "12"],
        education: {
            degree: "Thạc sĩ Lịch sử",
            university: "Đại học Sư phạm Hà Nội",
            graduationYear: 2009
        },
        achievements: [
            "Giáo viên dạy giỏi cấp quốc gia 2017",
            "Hướng dẫn học sinh đạt giải nhất HSG Quốc gia 2018"
        ],
        certifications: [
            "Chứng chỉ nghiệp vụ sư phạm nâng cao",
            "Chứng chỉ đào tạo giáo viên chuyên sâu"
        ],
        teachingMethods: [
            "Phương pháp phân tích sự kiện lịch sử",
            "Ứng dụng CNTT trong giảng dạy",
            "Phương pháp thảo luận nhóm"
        ]
    },
    {
        id: 8,
        name: "Vũ Thị H",
        subject: "Địa lý",
        email: "vuthih@school.edu.vn",
        phone: "0908901234",
        experience: 6,
        specialization: "Địa lý kinh tế",
        classes: ["10", "11", "12"],
        education: {
            degree: "Thạc sĩ Địa lý",
            university: "Đại học Khoa học Tự nhiên",
            graduationYear: 2014
        },
        achievements: [
            "Giáo viên dạy giỏi cấp thành phố 2018",
            "Hướng dẫn học sinh đạt giải nhì HSG Quốc gia 2019"
        ],
        certifications: [
            "Chứng chỉ nghiệp vụ sư phạm nâng cao",
            "Chứng chỉ đào tạo giáo viên chuyên sâu"
        ],
        teachingMethods: [
            "Phương pháp phân tích bản đồ",
            "Ứng dụng CNTT trong giảng dạy",
            "Phương pháp thảo luận nhóm"
        ]
    },
    {
        id: 9,
        name: "Ngô Văn I",
        subject: "Tin học",
        email: "ngovani@school.edu.vn",
        phone: "0909012345",
        experience: 5,
        specialization: "Lập trình",
        classes: ["10", "11", "12"],
        education: {
            degree: "Thạc sĩ Công nghệ thông tin",
            university: "Đại học Bách Khoa Hà Nội",
            graduationYear: 2015
        },
        achievements: [
            "Giáo viên dạy giỏi cấp thành phố 2020",
            "Hướng dẫn học sinh đạt giải nhất HSG Quốc gia 2021"
        ],
        certifications: [
            "Chứng chỉ nghiệp vụ sư phạm nâng cao",
            "Chứng chỉ đào tạo giáo viên chuyên sâu"
        ],
        teachingMethods: [
            "Phương pháp thực hành lập trình",
            "Ứng dụng CNTT trong giảng dạy",
            "Phương pháp giải bài tập sáng tạo"
        ]
    },
    {
        id: 10,
        name: "Mai Thị K",
        subject: "GDCD",
        email: "maithik@school.edu.vn",
        phone: "0900123456",
        experience: 8,
        specialization: "Đạo đức học",
        classes: ["10", "11", "12"],
        education: {
            degree: "Thạc sĩ Giáo dục công dân",
            university: "Đại học Sư phạm Hà Nội",
            graduationYear: 2012
        },
        achievements: [
            "Giáo viên dạy giỏi cấp tỉnh 2019",
            "Hướng dẫn học sinh đạt giải nhì HSG Quốc gia 2020"
        ],
        certifications: [
            "Chứng chỉ nghiệp vụ sư phạm nâng cao",
            "Chứng chỉ đào tạo giáo viên chuyên sâu"
        ],
        teachingMethods: [
            "Phương pháp thảo luận nhóm",
            "Ứng dụng CNTT trong giảng dạy",
            "Phương pháp phân tích tình huống"
        ]
    },
    {
        id: 11,
        name: "Trịnh Văn L",
        subject: "Thể dục",
        email: "trinhvanl@school.edu.vn",
        phone: "0901234567",
        experience: 7,
        specialization: "Bóng đá",
        classes: ["10", "11", "12"],
        education: {
            degree: "Cử nhân Giáo dục thể chất",
            university: "Đại học Thể dục Thể thao",
            graduationYear: 2013
        },
        achievements: [
            "Giáo viên dạy giỏi cấp thành phố 2018",
            "Hướng dẫn đội bóng đạt giải nhất cấp tỉnh 2019"
        ],
        certifications: [
            "Chứng chỉ nghiệp vụ sư phạm nâng cao",
            "Chứng chỉ đào tạo giáo viên chuyên sâu"
        ],
        teachingMethods: [
            "Phương pháp huấn luyện thực hành",
            "Ứng dụng CNTT trong giảng dạy",
            "Phương pháp thảo luận nhóm"
        ]
    }
];

module.exports = {
    teacherData,
    getTeacherById: (id) => teacherData.find(teacher => teacher.id === id),
    getTeachersBySubject: (subject) => teacherData.filter(teacher => teacher.subject === subject)
};
