const brandSchema = new mongoose.Schema({
  name: String,
  logo: String,
  website: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  strategy: {
    goals: String,
    budget: Number,
    competitors: [String],
  },
  servicePackage: { type: mongoose.Schema.Types.ObjectId, ref: "Package" },
});
