// pages/api/myregion.js
// pages/api/myregion.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  const { uid, key } = req.query;

  if (!uid || !key) {
    return res.status(400).json({ success: false, message: "Please provide uid and key in query params" });
  }

  try {
    // External API fetch
    const response = await fetch(`https://danger-region-check.vercel.app/region?uid=${uid}&key=${key}`);
    const data = await response.json();

    // Apni API format me convert karna
    const formattedData = {
      Channel: "@Suraj_Official_1",
      api_credits: "@Zorvaxo",
      id_level: data.level,
      id_likes: data.likes,
      id_nickname: data.nickname,
      id_region: data.region,
      uid: data.uid
    };

    res.status(200).json(formattedData);
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching external API", error: error.message });
  }
}