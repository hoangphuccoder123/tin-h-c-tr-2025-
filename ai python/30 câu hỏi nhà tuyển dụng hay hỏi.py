"""
30 câu hỏi phỏng vấn hay gặp về Machine Learning, Deep Learning, TensorFlow và Gemini API
"""

interview_questions = {
    "Machine Learning cơ bản": [
        "1. Phân biệt giữa supervised learning, unsupervised learning và reinforcement learning?",
        "2. Overfitting là gì và làm thế nào để tránh overfitting?",
        "3. Giải thích về thuật toán gradient descent và các biến thể của nó?",
        "4. Feature selection và feature engineering là gì? Tại sao chúng quan trọng?",
        "5. Phân biệt giữa bias và variance trong mô hình machine learning?",
        "6. Cross-validation là gì và tại sao nó quan trọng?",
        "7. Giải thích các phương pháp regularization (L1, L2) và tác dụng của chúng?",
        "8. Làm thế nào để xử lý dữ liệu không cân bằng (imbalanced data)?",
    ],
    
    "Deep Learning": [
        "9. Perceptron là gì và cách nó hoạt động?",
        "10. Activation function là gì và tại sao chúng cần thiết trong neural network?",
        "11. So sánh các activation function phổ biến như ReLU, Sigmoid, Tanh, và Leaky ReLU?",
        "12. Backpropagation là gì và nó hoạt động như thế nào?",
        "13. Mô tả kiến trúc của CNN và các ứng dụng của nó?",
        "14. RNN là gì và tại sao LSTM/GRU được phát triển để giải quyết vấn đề của RNN?",
        "15. Giải thích cơ chế Attention và vai trò của nó trong các mô hình Transformer?",
        "16. Transfer learning là gì và khi nào nên sử dụng nó?",
    ],
    
    "TensorFlow": [
        "17. TensorFlow là gì và điểm khác biệt của nó so với PyTorch?",
        "18. Eager execution trong TensorFlow là gì?",
        "19. Giải thích về TensorFlow Serving và cách triển khai mô hình ML lên production?",
        "20. TensorFlow Lite là gì và khi nào nên sử dụng nó?",
        "21. Cách sử dụng TensorFlow Data để tạo pipeline dữ liệu hiệu quả?",
        "22. TensorBoard là gì và làm thế nào để sử dụng nó để theo dõi quá trình huấn luyện?",
    ],
    
    "Gemini API và các mô hình LLM": [
        "23. Gemini API của Google là gì và có những khả năng gì?",
        "24. Làm thế nào để tích hợp Gemini API vào ứng dụng?",
        "25. So sánh Gemini với các mô hình LLM khác như GPT-4?",
        "26. Prompt engineering là gì và tại sao nó quan trọng khi làm việc với API như Gemini?",
        "27. Các kỹ thuật fine-tuning phổ biến cho LLM?",
        "28. RAG (Retrieval-Augmented Generation) là gì và cách áp dụng với Gemini API?",
        "29. Làm thế nào để đánh giá hiệu suất của mô hình LLM?",
        "30. Những thách thức về đạo đức và cách giải quyết khi triển khai AI generative như Gemini?"
    ]
}

# Function to print all questions
def print_all_questions():
    for category, questions in interview_questions.items():
        print(f"\n--- {category} ---")
        for question in questions:
            print(question)

# Function to get questions by category
def get_questions_by_category(category):
    return interview_questions.get(category, ["Không tìm thấy danh mục này"])

# Tích hợp các model AI trong Python
class AIModelsIntegration:
    def __init__(self):
        self.available_models = {
            "scikit-learn": self.sklearn_example,
            "tensorflow": self.tensorflow_example,
            "pytorch": self.pytorch_example,
            "huggingface": self.huggingface_example,
            "openai": self.openai_example,
            "gemini": self.gemini_example,
            "keras": self.keras_example,
            "xgboost": self.xgboost_example,
            "spacy": self.spacy_example
        }
    
    def list_available_models(self):
        print("Các model AI có thể sử dụng:")
        for idx, model in enumerate(self.available_models.keys(), 1):
            print(f"{idx}. {model}")
    
    def sklearn_example(self):
        print("--- Scikit-learn Example (Linear Regression) ---")
        try:
            from sklearn.linear_model import LinearRegression
            from sklearn.model_selection import train_test_split
            from sklearn.datasets import load_diabetes
            import numpy as np
            
            # Load dữ liệu
            diabetes = load_diabetes()
            X, y = diabetes.data, diabetes.target
            
            # Chia dữ liệu train/test
            X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
            
            # Huấn luyện mô hình
            model = LinearRegression()
            model.fit(X_train, y_train)
            
            # Đánh giá mô hình
            score = model.score(X_test, y_test)
            print(f"R² score: {score:.4f}")
            print("Hệ số: ", model.coef_)
            print("Intercept: ", model.intercept_)
            return model
        except ImportError:
            print("Vui lòng cài đặt scikit-learn: pip install scikit-learn")
            return None
    
    def tensorflow_example(self):
        print("--- TensorFlow Example (MLP for MNIST) ---")
        try:
            import tensorflow as tf
            
            # Load dữ liệu
            mnist = tf.keras.datasets.mnist
            (x_train, y_train), (x_test, y_test) = mnist.load_data()
            
            # Tiền xử lý dữ liệu
            x_train, x_test = x_train / 255.0, x_test / 255.0
            
            # Tạo mô hình
            model = tf.keras.models.Sequential([
                tf.keras.layers.Flatten(input_shape=(28, 28)),
                tf.keras.layers.Dense(128, activation='relu'),
                tf.keras.layers.Dropout(0.2),
                tf.keras.layers.Dense(10, activation='softmax')
            ])
            
            # Biên dịch mô hình
            model.compile(optimizer='adam',
                        loss='sparse_categorical_crossentropy',
                        metrics=['accuracy'])
            
            # Hiển thị thông tin mô hình
            model.summary()
            print("Sẵn sàng huấn luyện mô hình với tf.keras")
            return model
        except ImportError:
            print("Vui lòng cài đặt tensorflow: pip install tensorflow")
            return None
    
    def pytorch_example(self):
        print("--- PyTorch Example (Simple Neural Network) ---")
        try:
            import torch
            import torch.nn as nn
            import torch.nn.functional as F
            
            # Định nghĩa một mạng neural network đơn giản
            class SimpleNN(nn.Module):
                def __init__(self):
                    super(SimpleNN, self).__init__()
                    self.fc1 = nn.Linear(784, 128)
                    self.fc2 = nn.Linear(128, 64)
                    self.fc3 = nn.Linear(64, 10)
                
                def forward(self, x):
                    x = F.relu(self.fc1(x))
                    x = F.relu(self.fc2(x))
                    x = self.fc3(x)
                    return F.log_softmax(x, dim=1)
            
            # Khởi tạo model
            model = SimpleNN()
            print(model)
            print(f"PyTorch version: {torch.__version__}")
            print("Các thiết bị có sẵn:", "CUDA" if torch.cuda.is_available() else "CPU")
            return model
        except ImportError:
            print("Vui lòng cài đặt pytorch: pip install torch torchvision")
            return None
    
    def huggingface_example(self):
        print("--- Hugging Face Transformers Example (BERT) ---")
        try:
            from transformers import BertTokenizer, BertModel
            
            # Load tokenizer và model pre-trained
            tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
            model = BertModel.from_pretrained('bert-base-uncased')
            
            # Tokenize một câu ví dụ
            text = "Hello, I'm an AI model from Hugging Face."
            encoded_input = tokenizer(text, return_tensors='pt')
            
            print(f"Tokenized input: {encoded_input}")
            print("Model sẵn sàng để sử dụng")
            return model
        except ImportError:
            print("Vui lòng cài đặt transformers: pip install transformers")
            return None
    
    def openai_example(self):
        print("--- OpenAI API Example ---")
        try:
            import openai
            
            print("Cách sử dụng OpenAI API:")
            print("""
            import openai
            
            # Khởi tạo với API key
            client = openai.OpenAI(api_key="your-api-key")
            
            # Gọi API
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "Bạn là trợ lý AI hữu ích."},
                    {"role": "user", "content": "Giải thích machine learning là gì?"}
                ]
            )
            
            print(response.choices[0].message.content)
            """)
            return "OpenAI API example"
        except ImportError:
            print("Vui lòng cài đặt OpenAI: pip install openai")
            return None
    
    def gemini_example(self):
        print("--- Google Gemini API Example ---")
        try:
            print("Cách sử dụng Google Gemini API:")
            print("""
            import google.generativeai as genai
            
            # Cấu hình API key
            genai.configure(api_key="YOUR_API_KEY")
            
            # Khởi tạo model
            model = genai.GenerativeModel('gemini-pro')
            
            # Tạo câu trả lời
            response = model.generate_content("Giải thích về deep learning")
            
            print(response.text)
            """)
            return "Gemini API example"
        except ImportError:
            print("Vui lòng cài đặt Google Generative AI: pip install google-generativeai")
            return None
    
    def keras_example(self):
        print("--- Keras Example (CNN) ---")
        try:
            import tensorflow as tf
            from tensorflow import keras
            
            # Tạo mô hình CNN đơn giản
            model = keras.Sequential([
                keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
                keras.layers.MaxPooling2D((2, 2)),
                keras.layers.Conv2D(64, (3, 3), activation='relu'),
                keras.layers.MaxPooling2D((2, 2)),
                keras.layers.Flatten(),
                keras.layers.Dense(128, activation='relu'),
                keras.layers.Dense(10, activation='softmax')
            ])
            
            # Biên dịch mô hình
            model.compile(optimizer='adam',
                        loss='sparse_categorical_crossentropy',
                        metrics=['accuracy'])
            
            model.summary()
            print("CNN model đã sẵn sàng!")
            return model
        except ImportError:
            print("Vui lòng cài đặt tensorflow: pip install tensorflow")
            return None
    
    def xgboost_example(self):
        print("--- XGBoost Example ---")
        try:
            import xgboost as xgb
            import numpy as np
            from sklearn.datasets import load_breast_cancer
            from sklearn.model_selection import train_test_split
            
            # Load dữ liệu
            data = load_breast_cancer()
            X, y = data.data, data.target
            
            # Chia dữ liệu
            X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
            
            # Chuyển đổi dữ liệu sang định dạng DMatrix của XGBoost
            dtrain = xgb.DMatrix(X_train, label=y_train)
            dtest = xgb.DMatrix(X_test, label=y_test)
            
            # Thiết lập tham số
            params = {
                'max_depth': 3,
                'eta': 0.3,
                'objective': 'binary:logistic',
                'eval_metric': 'logloss'
            }
            
            print("XGBoost model đã sẵn sàng để huấn luyện!")
            return params
        except ImportError:
            print("Vui lòng cài đặt xgboost: pip install xgboost")
            return None
    
    def spacy_example(self):
        print("--- SpaCy Example (NLP) ---")
        try:
            import spacy
            
            # Kiểm tra xem model đã được tải chưa
            try:
                nlp = spacy.load("en_core_web_sm")
            except:
                print("Đang tải model spaCy...")
                import sys
                import subprocess
                subprocess.check_call([sys.executable, "-m", "spacy", "download", "en_core_web_sm"])
                nlp = spacy.load("en_core_web_sm")
            
            # Phân tích văn bản
            text = "Apple is looking at buying U.K. startup for $1 billion"
            doc = nlp(text)
            
            # Hiển thị các entities
            print("Named Entities:", [(ent.text, ent.label_) for ent in doc.ents])
            
            # Hiển thị tokens và các thuộc tính của chúng
            print("\nTokens và thuộc tính:")
            for token in doc:
                print(f"{token.text}: pos={token.pos_}, dep={token.dep_}")
            
            return nlp
        except ImportError:
            print("Vui lòng cài đặt spacy: pip install spacy")
            return None
    
    def run_model(self, model_name):
        if model_name.lower() in self.available_models:
            return self.available_models[model_name.lower()]()
        else:
            print(f"Model '{model_name}' không tồn tại. Các model có sẵn:")
            self.list_available_models()
            return None

# Example usage
if __name__ == "__main__":
    print("30 câu hỏi phỏng vấn về Machine Learning, Deep Learning, TensorFlow và Gemini API")
    print_all_questions()
    
    print("\n\n" + "="*50)
    print("TÍCH HỢP CÁC MODEL AI TRONG PYTHON")
    print("="*50)
    
    ai_models = AIModelsIntegration()
    ai_models.list_available_models()
    
    # Ví dụ chạy một model
    print("\nDemo model Scikit-learn:")
    ai_models.run_model("scikit-learn")
