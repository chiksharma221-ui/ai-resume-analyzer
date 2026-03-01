const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function analyzeResume(resumeText) {

    const prompt = `
You are an expert ATS resume evaluator.

Analyze the following resume and return STRICT JSON in this format:

{
  "ats_score": number,
  "strengths": [list],
  "weaknesses": [list],
  "improvement_suggestions": [list],
  "recommended_roles": [list],
  "keyword_gaps": [list]
}

Resume:
${resumeText}
`;

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "user", content: prompt }
        ],
        temperature: 0.3
    });

    const raw = response.choices[0].message.content;

    try {
        return JSON.parse(raw);
    } catch (err) {
        return {
            ats_score: 60,
            strengths: ["Resume structure is decent"],
            weaknesses: ["AI response formatting issue"],
            improvement_suggestions: ["Improve formatting and keywords"],
            recommended_roles: ["Software Developer"],
            keyword_gaps: ["Add more technical keywords"]
        };
    }
}

module.exports = analyzeResume;