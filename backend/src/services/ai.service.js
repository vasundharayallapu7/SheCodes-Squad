const axios = require("axios");

const generateAIContent = async (transcript) => {
  try {
    const prompt = `
You are an AI study assistant.

Read the lecture transcript and return ONLY valid JSON.

Do NOT use markdown.
Do NOT wrap the response in \`\`\`json.
Do NOT include explanations.

Return exactly this format:

{
  "summary":"...",
  "notes":["...","...","..."],
  "quiz":[
    {
      "question":"...",
      "options":["A","B","C","D"],
      "answer":"..."
    }
  ],
  "flashcards":[
    {
      "front":"...",
      "back":"..."
    }
  ]
}

Transcript:
${transcript}
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    let content = response.data.choices[0].message.content;

    console.log("===== RAW AI RESPONSE =====");
    console.log(content);

    // Remove markdown code fences
    content = content
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    // Extract JSON object only
    const start = content.indexOf("{");
    const end = content.lastIndexOf("}");

    if (start === -1 || end === -1) {
      throw new Error("No JSON object found in AI response.");
    }

    const jsonString = content.substring(start, end + 1);

    console.log("===== CLEAN JSON =====");
    console.log(jsonString);

    const aiData = JSON.parse(jsonString);

    return {
      summary: aiData.summary || "",
      notes: aiData.notes || [],
      quiz: aiData.quiz || [],
      flashcards: aiData.flashcards || [],
    };
  } catch (error) {
    console.error(
      "OpenRouter Error:",
      error.response?.data || error.message
    );

    return {
      summary: "Unable to generate summary.",
      notes: [],
      quiz: [],
      flashcards: [],
    };
  }
};

module.exports = {
  generateAIContent,
};