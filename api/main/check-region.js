export default async function handler(req, res) {
  const { uid, key } = req.query;

  if (!uid) {
    return res.status(400).json({
      success: false,
      credits: "t.me/zorvaxo",
      message: "❌ Please provide uid in query params",
      example: "/api/region?uid=8080519000&key=ZORVAXOxRG"
    });
  }

  // Key validation
  if (key !== "ZORVAXOxRG") {
    return res.status(403).json({
      success: false,
      credits: "t.me/zorvaxo",
      message: "❌ Invalid API Key"
    });
  }

  try {
    const response = await fetch(
      `https://danger-region-check.vercel.app/region?uid=${uid}&key=DANGERxREGION`
    );
    const data = await response.json();

    if (data.status === "error") {
      return res.status(404).json({
        success: false,
        credits: "t.me/zorvaxo",
        message: "❌ Player not found in this region",
        status: "error"
      });
    }

    // Agar data sahi mila toh modify karo
    const modifiedJson = {
      ...data,
      credits: "t.me/zorvaxo"
    };

    res.status(200).json(modifiedJson);
  } catch (error) {
    res.status(500).json({
      success: false,
      credits: "t.me/zorvaxo",
      message: "❌ Something went wrong while fetching data",
      error: error.message
    });
  }
}