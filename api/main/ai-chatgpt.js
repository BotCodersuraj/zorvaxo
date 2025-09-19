export default async function handler(req, res) {
  const { text, key } = req.query;

  // Agar key nahi di gayi
  if (!key) {
    return res.status(400).json({
      success: false,
      owner: "@Zorvaxo",
      message: "❌ Invalid API Key"
    });
  }

  // Agar galat key di gayi
  if (key !== "ZORVAXOxAI") {
    return res.status(403).json({
      success: false,
      owner: "@Zorvaxo",
      message: "❌ Invalid API Key"
    });
  }

  // Agar text missing hai
  if (!text) {
    return res.status(400).json({
      success: false,
      owner: "@Zorvaxo",
      message: "❌ Please provide a text query"
    });
  }

  try {
    // External Jenil API call
    const response = await fetch(
      `https://jenil-ai.vercel.app/ask-jenil?text=${encodeURIComponent(text)}`
    );
    const data = await response.json();

    // Apna JSON format me response
    res.status(200).json({
      answer: data.answer,
      owner: "@Zorvaxo",
      your_question: data.question
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      owner: "@Zorvaxo",
      message: "❌ Something went wrong",
      error: error.message
    });
  }
}