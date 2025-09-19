export default async function handler(req, res) {
  const { uid, key } = req.query;

  // Agar key nahi di gayi
  if (!key) {
    return res.status(400).json({
      success: false,
      credits: "t.me/zorvaxo",
      message: "❌ Invalid API Key"
    });
  }

  // Agar key galat hai
  if (key !== "ZORVAXOxREGION") {
    return res.status(403).json({
      success: false,
      credits: "t.me/zorvaxo",
      message: "❌ Invalid API Key"
    });
  }

  try {
    // External API call
    const response = await fetch(
      `https://danger-region-check.vercel.app/region?uid=${uid}&key=DANGERxREGION`
    );
    const data = await response.json();

    // Agar external API ne error bheja
    if (data.status === "error") {
      return res.status(404).json({
        success: false,
        credits: "t.me/zorvaxo",
        message: "❌ Invalid UID or Player not found",
        status: "error"
      });
    }

    // Agar data sahi hai toh apna credits set karo
    res.status(200).json({
      ...data,
      credits: "t.me/zorvaxo"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      credits: "t.me/zorvaxo",
      message: "❌ Something went wrong while fetching data"
    });
  }
}