import careerApiService from '../../services/careerApi';

const hollandCode = {
    R: {
        type: "Realistic",
        vietnameseName: "Kỹ thuật",
        characteristics: [
            "Thích làm việc với máy móc, công cụ",
            "Thích hoạt động ngoài trời",
            "Thích làm việc với đồ vật hơn con người",
            "Thiên về kỹ thuật và thực hành"
        ],
        careers: [
            "Kỹ sư cơ khí",
            "Kiến trúc sư",
            "Thợ điện",
            "Nông nghiệp",
            "Thợ mộc",
            "Kỹ thuật viên ô tô"
        ],
        workEnvironment: [
            "Môi trường kỹ thuật",
            "Xưởng sản xuất",
            "Công trường",
            "Phòng thí nghiệm"
        ]
    },
    I: {
        type: "Investigative",
        vietnameseName: "Nghiên cứu",
        characteristics: [
            "Thích phân tích và giải quyết vấn đề",
            "Tư duy logic và khoa học",
            "Thích học hỏi và khám phá",
            "Độc lập trong công việc"
        ],
        careers: [
            "Nhà khoa học",
            "Bác sĩ",
            "Nhà nghiên cứu",
            "Chuyên gia phân tích dữ liệu",
            "Kỹ sư phần mềm",
            "Nhà tâm lý học"
        ],
        workEnvironment: [
            "Phòng thí nghiệm",
            "Viện nghiên cứu",
            "Bệnh viện",
            "Môi trường học thuật"
        ]
    },
    A: {
        type: "Artistic",
        vietnameseName: "Nghệ thuật",
        characteristics: [
            "Sáng tạo và độc đáo",
            "Thích thể hiện bản thân",
            "Có khả năng nghệ thuật",
            "Thích tự do và linh hoạt"
        ],
        careers: [
            "Họa sĩ",
            "Nhạc sĩ",
            "Nhà thiết kế",
            "Kiến trúc sư",
            "Nhiếp ảnh gia",
            "Nhà văn"
        ],
        workEnvironment: [
            "Studio",
            "Phòng thiết kế",
            "Môi trường sáng tạo",
            "Freelance"
        ]
    },
    S: {
        type: "Social",
        vietnameseName: "Xã hội",
        characteristics: [
            "Thích làm việc với người",
            "Có khả năng giao tiếp tốt",
            "Thích giúp đỡ người khác",
            "Có tinh thần đồng cảm"
        ],
        careers: [
            "Giáo viên",
            "Tư vấn viên",
            "Nhân viên xã hội",
            "Y tá",
            "Nhà tâm lý trị liệu",
            "Huấn luyện viên"
        ],
        workEnvironment: [
            "Trường học",
            "Bệnh viện",
            "Trung tâm cộng đồng",
            "Tổ chức phi lợi nhuận"
        ]
    },
    E: {
        type: "Enterprising",
        vietnameseName: "Quản lý",
        characteristics: [
            "Có khả năng lãnh đạo",
            "Thích thuyết phục người khác",
            "Năng động và tự tin",
            "Thích cạnh tranh"
        ],
        careers: [
            "Quản lý doanh nghiệp",
            "Nhân viên kinh doanh",
            "Doanh nhân",
            "Luật sư",
            "Chính trị gia",
            "Môi giới bất động sản"
        ],
        workEnvironment: [
            "Văn phòng công ty",
            "Môi trường kinh doanh",
            "Tòa án",
            "Các tổ chức thương mại"
        ]
    },
    C: {
        type: "Conventional",
        vietnameseName: "Nghiệp vụ",
        characteristics: [
            "Có tổ chức và chi tiết",
            "Thích làm việc với số liệu",
            "Tuân thủ quy tắc",
            "Chính xác và cẩn thận"
        ],
        careers: [
            "Kế toán viên",
            "Thư ký hành chính",
            "Nhân viên ngân hàng",
            "Chuyên viên thống kê",
            "Kiểm toán viên",
            "Nhân viên văn phòng"
        ],
        workEnvironment: [
            "Văn phòng",
            "Ngân hàng",
            "Công ty kế toán",
            "Cơ quan hành chính"
        ]
    },

    // Add new methods for API integration
    async getCareerDetails(careerName) {
        try {
            return await careerApiService.searchCareerInfo(careerName);
        } catch (error) {
            console.error(`Error fetching details for ${careerName}:`, error);
            return null;
        }
    },

    async getTypeDetails(typeCode) {
        const type = this[typeCode];
        if (!type) return null;

        const careerDetails = await Promise.all(
            type.careers.map(career => this.getCareerDetails(career))
        );

        return {
            ...type,
            extendedCareerInfo: careerDetails
        };
    }
};

export default hollandCode;
