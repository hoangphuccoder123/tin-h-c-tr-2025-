/**
 * Module for analyzing CV strengths and weaknesses
 */

// Define criteria for strengths
const strengthsCriteria = {
  relevantExperience: {
    name: "Kinh nghiệm và kỹ năng phù hợp",
    description: "Kinh nghiệm và kỹ năng phù hợp với vị trí ứng tuyển."
  },
  achievements: {
    name: "Thành tích nổi bật",
    description: "Các thành tích đạt được có thể chứng minh được khả năng làm việc xuất sắc."
  },
  professionalPresentation: {
    name: "Trình bày chuyên nghiệp",
    description: "Trình bày chuyên nghiệp, rõ ràng, dễ hiểu."
  },
  relevantCertifications: {
    name: "Chứng chỉ hữu ích",
    description: "Chứng chỉ, đào tạo bổ sung hữu ích cho công việc."
  }
};

// Define criteria for weaknesses
const weaknessesCriteria = {
  lackOfExperience: {
    name: "Thiếu kinh nghiệm hoặc kỹ năng",
    description: "Thiếu kinh nghiệm hoặc kỹ năng cần thiết cho vị trí ứng tuyển."
  },
  generalContent: {
    name: "Nội dung quá chung chung",
    description: "Nội dung CV quá chung chung hoặc thiếu chi tiết."
  },
  poorStructure: {
    name: "Cấu trúc chưa hợp lý",
    description: "Cấu trúc CV chưa hợp lý, khiến người đọc mất thời gian để tìm thông tin quan trọng."
  },
  grammarIssues: {
    name: "Lỗi ngữ pháp và chính tả",
    description: "Sử dụng ngữ pháp không chuẩn hoặc có lỗi chính tả."
  },
  missingInfo: {
    name: "Thiếu mục cần thiết",
    description: "Thiếu các mục cần thiết như thông tin liên lạc, mục tiêu nghề nghiệp không rõ ràng."
  }
};

/**
 * Analyze CV for strengths based on provided content
 * @param {Object} cvContent - The parsed CV content
 * @param {Object} jobRequirements - Job requirements for comparison
 * @return {Array} - List of identified strengths
 */
function analyzeStrengths(cvContent, jobRequirements) {
  const identifiedStrengths = [];
  
  // Check for relevant experience and skills
  if (hasRelevantExperience(cvContent, jobRequirements)) {
    identifiedStrengths.push(strengthsCriteria.relevantExperience);
  }
  
  // Check for notable achievements
  if (hasAchievements(cvContent)) {
    identifiedStrengths.push(strengthsCriteria.achievements);
  }
  
  // Check for professional presentation
  if (isProfessionallyPresented(cvContent)) {
    identifiedStrengths.push(strengthsCriteria.professionalPresentation);
  }
  
  // Check for relevant certifications
  if (hasRelevantCertifications(cvContent, jobRequirements)) {
    identifiedStrengths.push(strengthsCriteria.relevantCertifications);
  }
  
  return identifiedStrengths;
}

/**
 * Analyze CV for weaknesses based on provided content
 * @param {Object} cvContent - The parsed CV content
 * @param {Object} jobRequirements - Job requirements for comparison
 * @return {Array} - List of identified weaknesses
 */
function analyzeWeaknesses(cvContent, jobRequirements) {
  const identifiedWeaknesses = [];
  
  // Check for lack of required experience or skills
  if (lacksRequiredExperience(cvContent, jobRequirements)) {
    identifiedWeaknesses.push(weaknessesCriteria.lackOfExperience);
  }
  
  // Check if content is too general
  if (isTooGeneral(cvContent)) {
    identifiedWeaknesses.push(weaknessesCriteria.generalContent);
  }
  
  // Check for poor structure
  if (hasPoorStructure(cvContent)) {
    identifiedWeaknesses.push(weaknessesCriteria.poorStructure);
  }
  
  // Check for grammar and spelling issues
  if (hasGrammarIssues(cvContent)) {
    identifiedWeaknesses.push(weaknessesCriteria.grammarIssues);
  }
  
  // Check for missing necessary information
  if (hasMissingInformation(cvContent)) {
    identifiedWeaknesses.push(weaknessesCriteria.missingInfo);
  }
  
  return identifiedWeaknesses;
}

/**
 * Generate a comprehensive CV analysis report
 * @param {Object} cvContent - The parsed CV content
 * @param {Object} jobRequirements - Job requirements for comparison
 * @return {Object} - Complete analysis report with strengths and weaknesses
 */
function analyzeCv(cvContent, jobRequirements) {
  const strengths = analyzeStrengths(cvContent, jobRequirements);
  const weaknesses = analyzeWeaknesses(cvContent, jobRequirements);
  
  return {
    strengths,
    weaknesses,
    overallScore: calculateOverallScore(strengths, weaknesses),
    improvementSuggestions: generateImprovementSuggestions(weaknesses)
  };
}

// Helper functions (to be implemented based on specific CV parsing logic)
function hasRelevantExperience(cvContent, jobRequirements) {
  // Implementation logic to check relevant experience
  // This would compare job requirements keywords with CV content
  return true; // Placeholder
}

function hasAchievements(cvContent) {
  // Implementation logic to detect achievements
  return true; // Placeholder
}

function isProfessionallyPresented(cvContent) {
  // Implementation logic to check presentation quality
  return true; // Placeholder
}

function hasRelevantCertifications(cvContent, jobRequirements) {
  // Implementation logic to check for relevant certifications
  return true; // Placeholder
}

function lacksRequiredExperience(cvContent, jobRequirements) {
  // Implementation logic to check for missing required experience
  return false; // Placeholder
}

function isTooGeneral(cvContent) {
  // Implementation logic to check if content is too general
  return false; // Placeholder
}

function hasPoorStructure(cvContent) {
  // Implementation logic to assess structure quality
  return false; // Placeholder
}

function hasGrammarIssues(cvContent) {
  // Implementation logic to detect grammar/spelling issues
  return false; // Placeholder
}

function hasMissingInformation(cvContent) {
  // Implementation logic to check for missing essential information
  return false; // Placeholder
}

function calculateOverallScore(strengths, weaknesses) {
  // Calculate an overall score based on strengths vs weaknesses
  const strengthsWeight = 1.0;
  const weaknessesWeight = 0.8;
  
  const score = (strengths.length * strengthsWeight - weaknesses.length * weaknessesWeight) * 10;
  return Math.max(0, Math.min(100, score + 50)); // Scale to 0-100
}

function generateImprovementSuggestions(weaknesses) {
  // Generate specific improvement suggestions based on identified weaknesses
  return weaknesses.map(weakness => {
    switch(weakness.name) {
      case weaknessesCriteria.lackOfExperience.name:
        return "Hãy nhấn mạnh hơn các kỹ năng chuyển đổi và kinh nghiệm liên quan gián tiếp.";
      case weaknessesCriteria.generalContent.name:
        return "Bổ sung thêm các con số cụ thể và ví dụ chi tiết về thành tích của bạn.";
      case weaknessesCriteria.poorStructure.name:
        return "Sắp xếp lại CV với mục quan trọng nhất ở đầu và sử dụng định dạng nhất quán.";
      case weaknessesCriteria.grammarIssues.name:
        return "Kiểm tra lại lỗi chính tả và ngữ pháp trước khi nộp CV.";
      case weaknessesCriteria.missingInfo.name:
        return "Thêm đầy đủ thông tin liên hệ và mục tiêu nghề nghiệp rõ ràng.";
      default:
        return "Xem xét lại và cải thiện nội dung CV của bạn.";
    }
  });
}

module.exports = {
  analyzeCv,
  analyzeStrengths,
  analyzeWeaknesses,
  strengthsCriteria,
  weaknessesCriteria
};
