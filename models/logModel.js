const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  level: String,
  message: String,
  resourceId: String,
  timestamp: Date,
  traceId: String,
  spanId: String,
  commit: String,
  metadata: {
    parentResourceId: String,
  },
});

// Indexes
logSchema.index({ level: 1 });
logSchema.index({ message: 1 });
logSchema.index({ resourceId: 1 });
logSchema.index({ timestamp: 1 });
logSchema.index({ traceId: 1 });
logSchema.index({ spanId: 1 });
logSchema.index({ commit: 1 });
logSchema.index({ 'metadata.parentResourceId': 1 });

const Log = mongoose.model('Log', logSchema);
module.exports = Log;