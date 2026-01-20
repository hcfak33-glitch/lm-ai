// Vercel serverless function (Node.js)
module.exports = (req, res) => {
  if (req.method === 'POST') {
    // এখানে ফাইল প্রসেসিং লজিক থাকবে
    res.status(200).json({
      downloadUrl: "https://example.com/dummy-result.jpg"
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};
