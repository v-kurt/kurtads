const packageSchema = new mongoose.Schema({
  name: String, // e.g., "Meta Ads", "Google Ads", "Full Bundle"
  description: String, // Highlight features
  platforms: [String], // ['Meta', 'Google', 'TikTok']
  price: Number,
  isActive: { type: Boolean, default: true },
});
