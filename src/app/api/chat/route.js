import { NextResponse } from "next/server";
import portfolio from "../../../data/portfolio.json";

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages array" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not defined in environment variables");
      return NextResponse.json({ 
        error: "Gemini API key not configured. Please add GEMINI_API_KEY to your environment variables." 
      }, { status: 500 });
    }

    // System prompt grounding the assistant in Anshuman's data
    const systemPrompt = `You are the AI Career Copilot for Anshuman Singh, a student at BITS Pilani. Your goal is to answer questions about Anshuman's education, projects, skills, and experience in a professional, polite, and helpful manner.

Here is the verified data about Anshuman Singh:
${JSON.stringify(portfolio, null, 2)}

Strict Guidelines:
1. Ground all your answers strictly in the provided data. Do not make up or assume anything not present in the context.
2. If the user asks about something not mentioned in the data, or a general question completely unrelated to Anshuman (e.g. general coding questions, unrelated facts, writing unrelated code), reply politely that your knowledge is limited to Anshuman's portfolio and professional credentials, and you cannot answer that.
3. Be professional, direct, and supportive. Emphasize his strengths in Mathematics & Computing, machine learning, and full-stack development.
4. If asked for contact details, provide his email (f20240217@hyderabad.bits-pilani.ac.in) and phone (8097622762) from the contact info.
5. Keep your responses concise, engaging, and structured (using lists or bold text where appropriate) so they are easy to read in a chat window.`;

    let geminiMessages = messages.map(m => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }]
    }));

    // Ensure the message history starts with a 'user' turn by removing the local greeting
    if (geminiMessages.length > 0 && geminiMessages[0].role === "model") {
      geminiMessages.shift();
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: geminiMessages,
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          },
          generationConfig: {
            temperature: 0.3
          }
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Gemini API error:", errorData);
      return NextResponse.json({ 
        error: errorData.error?.message || "Failed to fetch response from Gemini engine" 
      }, { status: response.status });
    }

    const data = await response.json();
    const assistantMessage = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't generate a response.";

    return NextResponse.json({ content: assistantMessage });
  } catch (error) {
    console.error("Chat API route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
