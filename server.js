app.post("/api/process", upload.single("file"), (req, res) => {
  res.json({
    downloadUrl: "https://example.com/dummy-result.jpg"
  });
});
