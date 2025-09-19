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
  if (key !== "ZORVAXOxRG") {
    return res.status(403).json({
      success: false,
      credits: "t.me/zorvaxo",
      message: "❌ Invalid API Key"
    });
  }

  try {
    // Sirf correct key par external API call
    const response = await fetch(
      `https://danger-region-check.vercel.app/region?uid=${uid}&key=DANGERxREGION`
    );
    const data = await response.json();

    // Apni branding ke liye credits change
    res.status(200).json({
      ...data,
      credits: "t.me/zorvaxo"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      credits: "t.me/zorvaxo",
      message: "❌ Something went wrong",
      error: error.message
    });
  }
}