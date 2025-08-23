const campaignSchema = new mongoose.Schema({
  brand: { type: mongoose.Schema.Types.ObjectId, ref: "Brand", required: true },
  name: String,
  platform: String,
  slogan: String,
  images: [String],
  status: {
    type: String,
    enum: ["Draft", "Submitted", "Assigned", "InProgress", "Completed"],
    default: "Draft",
  },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // team member
  createdAt: { type: Date, default: Date.now },
});
