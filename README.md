AI Resume Analyzer

An AI-powered full-stack web application that analyzes resumes and provides structured ATS feedback using the OpenAI API.

Upload your resume → Get ATS Score → Improve your chances.

📌 Overview

AI Resume Analyzer allows users to upload a PDF resume and receive:

✅ ATS Score (0–100)

✅ Strengths

✅ Weaknesses

✅ Improvement Suggestions

✅ Recommended Roles

✅ Missing Keywords

The system extracts text from the uploaded resume, sends it to the OpenAI API for analysis, and returns structured JSON feedback rendered in a modern UI.

🛠 Tech Stack
Frontend

HTML5

CSS3 (Glassmorphism UI)

Vanilla JavaScript (Fetch API)

Backend

Node.js

Express.js

Multer (File Upload Handling)

pdf-parse (PDF Text Extraction)

OpenAI API Integration

Deployment

Render (Cloud Hosting)

🏗 Architecture

User uploads a PDF resume.

Multer stores the file temporarily in /uploads.

pdf-parse extracts the resume text.

Backend sends structured prompt to OpenAI.

OpenAI returns structured JSON feedback.

Backend sends response to frontend.

UI renders ATS score and analysis sections.

📂 Project Structure
ai-resume-analyzer/
│
├── public/               # Frontend files
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── routes/               # Express route handlers
│   └── analyzeRoute.js
│
├── services/             # AI integration logic
│   └── openaiService.js
│
├── server.js             # Main server entry
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
⚙️ Local Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/chiksharma221-ui/ai-resume-analyzer.git
cd ai-resume-analyzer
2️⃣ Install Dependencies
npm install
3️⃣ Create Environment File

Create a .env file in the root folder:

OPENAI_API_KEY=your_api_key_here
4️⃣ Run Server
node server.js

Open in browser:

http://localhost:5000
🌍 Deployment (Render)

Connect GitHub repository to Render

Set Build Command: npm install

Set Start Command: npm start

Add Environment Variable:

Key: OPENAI_API_KEY

Value: Your real API key

Deploy

After deployment, add your live link here:

Live Demo: https://your-render-link.onrender.com
🔐 Security Notes

.env file is excluded using .gitignore

Uploaded resumes are deleted after processing

API key is stored securely as an environment variable

No resume data is permanently stored

📈 Future Improvements

User authentication system

Resume history tracking (MongoDB integration)

Download feedback as PDF

Theme toggle (Light/Dark mode)

AI job matching system

SaaS payment integration

👨‍💻 Author

Chirag Sharma
GitHub: https://github.com/chiksharma221-ui
