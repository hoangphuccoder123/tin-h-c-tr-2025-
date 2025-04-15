const API_KEY = 'AIzaSyBu9qXzymzcblC_kTx3Cpbr1bNENt-rbqo';

const accountingInterviewData = {
    apiConfig: {
        key: API_KEY,
        baseUrl: 'https://www.googleapis.com/customsearch/v1',
        async fetchQuestionData(topic) {
            try {
                const response = await fetch(
                    `${this.baseUrl}?key=${this.key}&cx=YOUR_SEARCH_ENGINE_ID&q=accounting ${topic} interview questions`
                );
                return await response.json();
            } catch (error) {
                console.error('Error fetching data:', error);
                return null;
            }
        }
    },

    categories: {
        basic: {
            name: "Kiến thức cơ bản kế toán",
            questions: [
                {
                    id: 1,
                    question: "Các nguyên tắc kế toán cơ bản là gì?",
                    answer: "Nguyên tắc trọng yếu, nguyên tắc nhất quán, nguyên tắc thận trọng, nguyên tắc phù hợp",
                    score: 10
                },
                {
                    id: 2,
                    question: "Phương trình kế toán cơ bản là gì?",
                    answer: "Tài sản = Nợ phải trả + Vốn chủ sở hữu",
                    score: 10
                }
            ]
        },
        intermediate: {
            name: "Kỹ năng thực hành",
            questions: [
                {
                    id: 3,
                    question: "Cách lập báo cáo tài chính?",
                    answer: "Bao gồm: Bảng cân đối kế toán, Báo cáo kết quả kinh doanh, Báo cáo lưu chuyển tiền tệ",
                    score: 15
                },
                {
                    id: 4,
                    question: "Các phương pháp tính giá hàng tồn kho?",
                    answer: "FIFO, LIFO, Bình quân gia quyền",
                    score: 15
                }
            ]
        },
        advanced: {
            name: "Xử lý tình huống",
            questions: [
                {
                    id: 5,
                    question: "Cách xử lý khi phát hiện sai sót trong sổ kế toán?",
                    answer: "Phải lập chứng từ điều chỉnh, ghi chú rõ ràng và có xác nhận của kế toán trưởng",
                    score: 20
                }
            ]
        }
    },

    scoringSystem: {
        excellent: {
            minScore: 45,
            feedback: "Kiến thức kế toán xuất sắc"
        },
        good: {
            minScore: 35,
            feedback: "Kiến thức kế toán tốt"
        },
        average: {
            minScore: 25,
            feedback: "Kiến thức kế toán trung bình"
        },
        needImprovement: {
            minScore: 0,
            feedback: "Cần cải thiện kiến thức kế toán"
        }
    },

    getQuestionsByLevel(level) {
        return this.categories[level]?.questions || [];
    },

    calculateScore(answers) {
        return answers.reduce((total, answer) => {
            const question = this.findQuestionById(answer.questionId);
            return total + (answer.isCorrect ? question.score : 0);
        }, 0);
    },

    getFeedback(score) {
        for (const [level, criteria] of Object.entries(this.scoringSystem)) {
            if (score >= criteria.minScore) {
                return criteria.feedback;
            }
        }
        return this.scoringSystem.needImprovement.feedback;
    }
};

export default accountingInterviewData;
