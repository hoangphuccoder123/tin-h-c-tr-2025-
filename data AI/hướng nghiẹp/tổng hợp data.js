import hollandCode from './holland';
import careerApiService from '../../services/careerApi';
import * as tf from '@tensorflow/tfjs';  // Thêm thư viện TensorFlow.js để sử dụng ML/DL

const careerGuidanceData = {
    // Cấu hình API
    apiConfig: {
        key: 'AIzaSyAXZGbJsHN_CJpbBmdDx18u-dBH3JsuBkQ',
        baseUrl: 'https://www.googleapis.com/customsearch/v1'
    },

    // Dữ liệu mã Holland
    hollandTypes: hollandCode,

    // Tóm tắt các danh mục nghề nghiệp
    careerCategories: {
        technical: {
            name: "Kỹ thuật - Công nghệ",
            types: ["R", "I"],
            description: "Nhóm ngành liên quan đến kỹ thuật, công nghệ và nghiên cứu"
        },
        social: {
            name: "Xã hội - Giáo dục",
            types: ["S", "E"],
            description: "Nhóm ngành liên quan đến con người và giáo dục"
        },
        creative: {
            name: "Nghệ thuật - Sáng tạo",
            types: ["A"],
            description: "Nhóm ngành liên quan đến nghệ thuật và sáng tạo"
        },
        business: {
            name: "Kinh doanh - Quản lý",
            types: ["E", "C"],
            description: "Nhóm ngành liên quan đến kinh doanh và quản lý"
        }
    },

    // Các phương thức hỗ trợ
    async getCareerDetail(career) {
        try {
            return await careerApiService.searchCareerInfo(career);
        } catch (error) {
            console.error('Lỗi khi lấy thông tin nghề nghiệp:', error);
            return null;
        }
    },

    // Lấy các nghề nghiệp theo loại mã Holland
    getCareersByType(hollandType) {
        return this.hollandTypes[hollandType]?.careers || [];
    },

    // Lấy môi trường làm việc theo loại mã Holland
    getWorkEnvironmentsByType(hollandType) {
        return this.hollandTypes[hollandType]?.workEnvironment || [];
    },

    // Các gợi ý nghề nghiệp
    getRecommendations(hollandTypes) {
        const recommendations = [];
        hollandTypes.forEach(type => {
            if (this.hollandTypes[type]) {
                recommendations.push(...this.hollandTypes[type].careers);
            }
        });
        return [...new Set(recommendations)]; // Loại bỏ các mục trùng lặp
    },

    // Dữ liệu về các chuyên ngành của cấp 3
    highSchoolMajors: {
        naturalScience: {
            name: "Ban Tự nhiên",
            subjects: ["Toán", "Lý", "Hóa", "Sinh"],
            suitableTypes: ["R", "I"],
            careerPaths: [
                "Kỹ sư",
                "Bác sĩ",
                "Dược sĩ",
                "Nhà nghiên cứu",
                "Chuyên gia công nghệ"
            ],
            universityMajors: [
                "Công nghệ thông tin",
                "Y khoa",
                "Dược",
                "Điện - Điện tử",
                "Cơ khí"
            ]
        },
        socialScience: {
            name: "Ban Xã hội",
            subjects: ["Văn", "Sử", "Địa", "GDCD"],
            suitableTypes: ["S", "E", "A"],
            careerPaths: [
                "Giáo viên",
                "Nhà báo",
                "Luật sư",
                "Nhà quản lý",
                "Chuyên gia marketing"
            ],
            universityMajors: [
                "Luật",
                "Báo chí",
                "Quản trị kinh doanh",
                "Ngôn ngữ học",
                "Tâm lý học"
            ]
        },
        basicScience: {
            name: "Ban Cơ bản",
            subjects: ["Toán", "Văn", "Anh", "Lý/Sử"],
            suitableTypes: ["C", "E"],
            careerPaths: [
                "Kế toán",
                "Nhân viên văn phòng",
                "Chuyên viên tư vấn",
                "Nhân viên ngân hàng"
            ],
            universityMajors: [
                "Kinh tế",
                "Kế toán",
                "Quản trị văn phòng",
                "Tài chính ngân hàng"
            ]
        }
    },

    // Gợi ý lộ trình học tập
    getAcademicPath(hollandType) {
        const recommendedMajors = Object.values(this.highSchoolMajors)
            .filter(major => major.suitableTypes.includes(hollandType))
            .map(major => ({
                name: major.name,
                subjects: major.subjects,
                universityMajors: major.universityMajors
            }));
        return recommendedMajors;
    },

    // Gợi ý kết hợp nghề nghiệp và học tập
    getFullGuidance(hollandTypes) {
        const guidance = {
            careers: this.getRecommendations(hollandTypes),
            academics: hollandTypes.map(type => this.getAcademicPath(type)).flat(),
            workEnvironments: hollandTypes.map(type => this.getWorkEnvironmentsByType(type)).flat()
        };
        return guidance;
    },

    // Chi tiết lộ trình học tập
    getStudyPathDetails(majorName) {
        const major = Object.values(this.highSchoolMajors)
            .find(m => m.name === majorName);

        if (!major) return null;

        return {
            ...major,
            relatedHollandTypes: major.suitableTypes.map(type => ({
                code: type,
                details: this.hollandTypes[type]
            }))
        };
    },

    // Machine Learning / Deep Learning: Dự đoán nghề nghiệp dựa trên dữ liệu người dùng
    async predictCareerPath(userData) {
        const inputFeatures = this.extractFeatures(userData);  // Xử lý dữ liệu người dùng
        const model = await this.loadMLModel();  // Tải mô hình đã huấn luyện
        const prediction = await model.predict(inputFeatures);  // Dự đoán nghề nghiệp phù hợp
        return prediction;
    },

    // Trích xuất các đặc trưng từ dữ liệu người dùng
    extractFeatures(userData) {
        return [userData.hollandCode, ...userData.subjects];  // Ví dụ trích xuất các đặc trưng như mã Holland và các môn học
    },

    // Tải mô hình ML đã huấn luyện
    async loadMLModel() {
        const model = await tf.loadLayersModel('path_to_pretrained_model/model.json');  // Đường dẫn tới mô hình
        return model;
    }
};

export default careerGuidanceData;
 