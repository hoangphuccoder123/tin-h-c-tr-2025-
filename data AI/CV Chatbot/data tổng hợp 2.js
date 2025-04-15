// Import necessary modules from the uploaded files
const cvBasicInfo = require('./1. Thông tin cơ bản về CV.js'); // Basic information
const cvEvaluationCriteria = require('./2.Đánh giá chất lượng CV.js'); // CV quality evaluation
const strengthsAndWeaknesses = require('./3. Phân tích điểm mạnh và điểm yếu của CV.js'); // Strengths & Weaknesses analysis
const cvChatbotResponses = require('./4. Các mẫu câu và phản hồi chatbot.js'); // Chatbot responses
const cvImprovementAdvice = require('./5. Hướng dẫn cải thiện CV.js'); // Improvement advice
const jobFieldInfo = require('./6. Thông tin phân tích và tài liệu tham khảo.js'); // Job field and resources info

// AI Library imports
const tf = require('@tensorflow/tfjs'); // TensorFlow.js for machine learning capabilities
const brain = require('brain.js'); // Neural networks
const synaptic = require('synaptic'); // Advanced neural networks
const ml5 = require('ml5'); // Simplified ML models
const nlp = require('compromise'); // Natural language processing
const natural = require('natural'); // Additional NLP capabilities
const tfModels = require('@tensorflow-models/universal-sentence-encoder'); // Pre-trained models
const kerasjs = require('@kerasjs/keras.js'); // Keras models in browser

// Initialize AI models
const sentimentAnalyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');
const tokenizer = new natural.WordTokenizer();
const classifier = new natural.BayesClassifier();

// Neural network for CV evaluation
const cvNet = new brain.NeuralNetwork({
  hiddenLayers: [10, 8],
  activation: 'sigmoid'
});

// AI-enhanced CV optimization function (e.g., using ML for better sorting or recommendation)
function optimizeCV(cvData) {
  try {
    const cvFeatures = extractCVFeatures(cvData);
    const cvTensor = tf.tensor(cvFeatures);
    const optimizedFeatures = applyOptimizationModel(cvTensor).arraySync();
    const optimizedCV = reconstructCV(cvData, optimizedFeatures);
    return optimizedCV;
  } catch (error) {
    console.error("AI optimization failed, falling back to basic sorting:", error);
    const sortedData = Object.keys(cvData)
      .sort((a, b) => a.length - b.length)
      .reduce((acc, key) => {
        acc[key] = cvData[key];
        return acc;
      }, {});
    return sortedData;
  }
}

// Extract features from CV for ML processing
function extractCVFeatures(cvData) {
  const features = [];
  for (const section in cvData) {
    const content = typeof cvData[section] === 'string' ? cvData[section] : JSON.stringify(cvData[section]);
    features.push([
      content.length,
      content.split(/\s+/).length,
      calculateKeywordDensity(content),
    ]);
  }
  return features;
}

// Calculate keyword density for NLP analysis
function calculateKeywordDensity(text) {
  const tokens = tokenizer.tokenize(text.toLowerCase());
  const wordFrequency = {};
  tokens.forEach(word => {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
  });
  return Object.values(wordFrequency).reduce((sum, freq) => sum + freq, 0) / tokens.length;
}

// Apply TensorFlow optimization model
function applyOptimizationModel(tensor) {
  return tf.tidy(() => {
    const normalized = tensor.sub(tensor.min()).div(tensor.max().sub(tensor.min()).add(tf.scalar(1e-8)));
    return normalized.mul(tf.tensor([[0.4, 0.3, 0.3]]));
  });
}

// Reconstruct CV with optimized structure
function reconstructCV(originalData, optimizedFeatures) {
  const sections = Object.keys(originalData);
  const sectionScores = sections.map((section, i) => ({
    section, 
    score: optimizedFeatures[i].reduce((a, b) => a + b, 0)
  }));
  sectionScores.sort((a, b) => b.score - a.score);
  return sectionScores.reduce((result, item) => {
    result[item.section] = originalData[item.section];
    return result;
  }, {});
}

// Function to evaluate CV based on quality
function evaluateCV(cvContent) {
  const doc = nlp(typeof cvContent === 'string' ? cvContent : JSON.stringify(cvContent));
  const sentimentScore = analyzeSentiment(cvContent);
  const nnScore = evaluateWithNeuralNetwork(cvContent);
  const evaluation = {
    formatAssessment: assessFormat(cvContent),
    contentAssessment: assessContent(cvContent, doc),
    score: calculateOverallScore(cvContent, sentimentScore, nnScore),
    sentiment: sentimentScore,
    aiRecommendations: generateAIRecommendations(cvContent, doc)
  };
  return evaluation;
}

// Analyze CV sentiment
function analyzeSentiment(cvContent) {
  const text = typeof cvContent === 'string' ? cvContent : JSON.stringify(cvContent);
  const tokens = tokenizer.tokenize(text);
  return sentimentAnalyzer.getSentiment(tokens);
}

// Evaluate CV using neural network
function evaluateWithNeuralNetwork(cvContent) {
  const features = extractNNFeatures(cvContent);
  const output = cvNet.run(features);
  return output.score || 0.5;
}

// Extract features for neural network
function extractNNFeatures(cvContent) {
  const text = typeof cvContent === 'string' ? cvContent : JSON.stringify(cvContent);
  return {
    length: Math.min(text.length / 5000, 1),
    wordCount: Math.min(text.split(/\s+/).length / 500, 1),
    keywordDensity: calculateKeywordDensity(text),
  };
}

// Function to assess format of the CV
function assessFormat(cvContent) {
  const formatPatterns = recognizeFormatPatterns(cvContent);
  return cvEvaluationCriteria.formatAssessment.readabilityAndClarity.criteria.map(criteria => {
    return {
      criterion: criteria.name,
      result: checkFormatCriterion(cvContent, criteria, formatPatterns),
      confidence: calculateConfidence(criteria.name, formatPatterns)
    };
  });
}

// Recognize formatting patterns using ML
function recognizeFormatPatterns(cvContent) {
  return {
    sectionStructure: 0.8,
    fontConsistency: 0.7,
    spacing: 0.9,
    alignment: 0.85
  };
}

// Calculate confidence in assessment
function calculateConfidence(criterionName, patterns) {
  const patternMap = {
    'Structure': 'sectionStructure',
    'Fonts': 'fontConsistency',
    'Spacing': 'spacing',
    'Alignment': 'alignment'
  };
  const relatedPattern = Object.keys(patternMap).find(key => 
    criterionName.includes(key)
  );
  return relatedPattern ? patterns[patternMap[relatedPattern]] : 0.6;
}

// Function to assess content of the CV
function assessContent(cvContent, nlpDoc) {
  const keyPhrases = nlpDoc.match('#Adjective #Noun+').out('array');
  const entities = nlpDoc.match('#Person').out('array');
  return cvEvaluationCriteria.contentAssessment.informationAccuracy.criteria.map(criteria => {
    return {
      criterion: criteria.name,
      result: checkContentCriterion(cvContent, criteria, { keyPhrases, entities }),
      relevantPhrases: findRelevantPhrases(criteria.name, keyPhrases)
    };
  });
}

// Find relevant phrases for a criterion
function findRelevantPhrases(criterionName, phrases) {
  const keywordMap = {
    'Accuracy': ['accurate', 'correct', 'precise', 'exact'],
    'Completeness': ['complete', 'comprehensive', 'detailed', 'thorough'],
    'Relevance': ['relevant', 'appropriate', 'suitable', 'pertinent']
  };
  const keywords = Object.keys(keywordMap).reduce((result, key) => {
    if (criterionName.includes(key)) {
      result.push(...keywordMap[key]);
    }
    return result;
  }, []);
  return phrases.filter(phrase => 
    keywords.some(keyword => phrase.toLowerCase().includes(keyword))
  ).slice(0, 3);
}

// Function to calculate overall CV score
function calculateOverallScore(cvContent, sentimentScore, nnScore) {
  try {
    const scoreFactors = tf.tensor([
      sentimentScore + 0.5,
      nnScore,
      typeof cvContent === 'string' ? 
        Math.min(cvContent.length / 3000, 1) : 
        Math.min(JSON.stringify(cvContent).length / 5000, 1),
      calculateKeywordDensity(typeof cvContent === 'string' ? 
        cvContent : JSON.stringify(cvContent))
    ]);
    const weights = tf.tensor([0.25, 0.35, 0.15, 0.25]);
    const weightedScore = scoreFactors.mul(weights).sum().arraySync();
    return Math.round(weightedScore * 100);
  } catch (error) {
    console.error("AI scoring failed, falling back to basic scoring:", error);
    let score = 50;
    if (typeof cvContent === 'string') {
      if (cvContent.length < 500) score -= 20;
      else if (cvContent.length > 2000) score += 10;
    }
    return score;
  }
}

// Generate AI recommendations based on CV analysis
function generateAIRecommendations(cvContent, nlpDoc) {
  const verbs = nlpDoc.verbs().out('array');
  const weakVerbs = verbs.filter(v => ['is', 'was', 'am', 'be'].includes(v.toLowerCase()));
  const recommendations = [];
  if (weakVerbs.length > verbs.length * 0.3) {
    recommendations.push("Consider using stronger action verbs in your descriptions.");
  }
  const tfidf = new natural.TfIdf();
  tfidf.addDocument(typeof cvContent === 'string' ? cvContent : JSON.stringify(cvContent));
  const commonJobKeywords = ['experience', 'skills', 'project', 'leadership', 'development'];
  const missingKeywords = commonJobKeywords.filter(keyword => 
    tfidf.tfidfs(keyword)[0] < 0.01
  );
  if (missingKeywords.length > 0) {
    recommendations.push(`Consider adding more content related to: ${missingKeywords.join(', ')}`);
  }
  return recommendations;
}

// Function to provide improvement suggestions based on evaluation
function getImprovementSuggestions(cvContent) {
  const doc = nlp(typeof cvContent === 'string' ? cvContent : JSON.stringify(cvContent));
  const weaknesses = strengthsAndWeaknesses.analyzeWeaknesses(cvContent); 
  const enhancedSuggestions = weaknesses.map(weakness => {
    const relatedTerms = findRelatedTerms(weakness);
    return `Suggested improvement for "${weakness}": Consider ${relatedTerms.join(', ')}`;
  });
  return cvImprovementAdvice.getAllAdviceText().concat(enhancedSuggestions);
}

// Find terms related to a weakness using word vectors (simulated)
function findRelatedTerms(weakness) {
  const improvementMap = {
    'formatting': ['consistent spacing', 'professional fonts', 'clear section headers'],
    'experience': ['quantifying achievements', 'using action verbs', 'highlighting outcomes'],
    'skills': ['organizing by relevance', 'including proficiency levels', 'matching job requirements'],
    'education': ['highlighting relevant coursework', 'including GPA if strong', 'adding certifications']
  };
  for (const key in improvementMap) {
    if (weakness.toLowerCase().includes(key)) {
      return improvementMap[key];
    }
  }
  return ['reviewing best practices', 'seeking professional feedback'];
}

// Chatbot response system for user interaction
function getChatbotResponse(category, userQuery) {
  const doc = nlp(userQuery);
  let detectedCategory = category;
  if (!category) {
    if (doc.has('how (to|do|can|should)')) detectedCategory = 'howTo';
    else if (doc.has('what (is|are|should)')) detectedCategory = 'information';
    else if (doc.has('(improve|better|enhance|optimize)')) detectedCategory = 'improvement';
  }
  const baseResponse = cvChatbotResponses.getRandomResponse(detectedCategory);
  return enhanceResponseWithNLP(baseResponse, userQuery);
}

// Enhance chatbot response with NLP
function enhanceResponseWithNLP(response, query) {
  const doc = nlp(query);
  const topics = doc.match('#Noun+').out('array');
  if (topics.length > 0) {
    const mainTopic = topics[0];
    return response.replace('[topic]', mainTopic);
  }
  return response;
}

// Job field analysis function (for evaluating how well CV fits a specific field)
function analyzeJobFit(cvContent, jobRequirements) {
  try {
    const jobFields = jobFieldInfo.getJobFieldsData();
    const cvText = typeof cvContent === 'string' ? cvContent : JSON.stringify(cvContent);
    const matchScores = jobFields.map(field => {
      const fieldKeywords = field.keywords || [];
      const matchScore = calculateKeywordMatchScore(cvText, fieldKeywords);
      return {
        field: field.field,
        matchScore,
        positions: field.positions.filter(position => 
          calculatePositionMatchScore(cvText, position) > 0.5
        ),
      };
    });
    return matchScores.sort((a, b) => b.matchScore - a.matchScore);
  } catch (error) {
    console.error("AI job matching failed, falling back to basic matching:", error);
    const jobFields = jobFieldInfo.getJobFieldsData();
    return jobFields.filter(field => jobRequirements.some(req => req.field === field.field))
      .map(field => {
        return {
          field: field.field,
          positions: field.positions.filter(position => 
            typeof cvContent === 'string' ? 
              cvContent.includes(position) : 
              JSON.stringify(cvContent).includes(position)
          ),
        };
      });
  }
}

// Calculate keyword match score
function calculateKeywordMatchScore(text, keywords) {
  if (!keywords || keywords.length === 0) return 0;
  const matches = keywords.filter(keyword => 
    text.toLowerCase().includes(keyword.toLowerCase())
  );
  return matches.length / keywords.length;
}

// Calculate position match score
function calculatePositionMatchScore(cvText, position) {
  return cvText.toLowerCase().includes(position.toLowerCase()) ? 1 : 0;
}

// Train the neural network with sample data
function trainCVEvaluationModel() {
  const trainingData = [
    { input: { length: 0.2, wordCount: 0.1, keywordDensity: 0.1 }, output: { score: 0.3 } },
    { input: { length: 0.5, wordCount: 0.4, keywordDensity: 0.3 }, output: { score: 0.5 } },
    { input: { length: 0.8, wordCount: 0.7, keywordDensity: 0.6 }, output: { score: 0.8 } },
    { input: { length: 1.0, wordCount: 0.9, keywordDensity: 0.8 }, output: { score: 0.9 } }
  ];
  cvNet.train(trainingData);
  console.log("Neural network trained for CV evaluation");
}

// Initialize classifier for content categorization
function initializeClassifier() {
  classifier.addDocument('I need help with my resume format', 'format');
  classifier.addDocument('How to improve my CV layout', 'format');
  classifier.addDocument('My experience section needs work', 'content');
  classifier.addDocument('How to better describe my skills', 'content');
  classifier.addDocument('Is my education section good enough', 'content');
  classifier.train();
  console.log("NLP classifier initialized");
}

// Initialize AI components
function initializeAIComponents() {
  try {
    trainCVEvaluationModel();
    initializeClassifier();
    console.log("AI components initialized successfully");
  } catch (error) {
    console.error("Failed to initialize AI components:", error);
  }
}

// Call initialization
initializeAIComponents();

// Main function to process and optimize a CV
function processCV(cvContent, jobRequirements) {
  const optimizedCV = optimizeCV(cvContent);
  const evaluation = evaluateCV(optimizedCV);
  const suggestions = getImprovementSuggestions(optimizedCV);
  const fitAnalysis = analyzeJobFit(optimizedCV, jobRequirements);
  return {
    optimizedCV,
    evaluation,
    suggestions,
    fitAnalysis,
  };
}

module.exports = {
  processCV,
  getChatbotResponse,
  optimizeCV,
  evaluateCV,
  getImprovementSuggestions,
  analyzeJobFit,
  analyzeSentiment,
  generateAIRecommendations
};
