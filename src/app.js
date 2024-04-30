const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
const astrologerRoutes = require('./routes/astrologerRoutes');
const connectRoutes = require('./routes/connectRoutes');

// Use routes
app.use('/user', userRoutes);
app.use('/astrologer', astrologerRoutes);
app.use('/connect', connectRoutes);
// Connect to MongoDB with Mongoose
mongoose.connect('mongodb+srv://ayushshivrai098:HybKUvYf7bj77Apc@cluster0.pw5xdm9.mongodb.net/')
.then(() => {
  console.log('Connected to MongoDB');
  // Start the Express server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
