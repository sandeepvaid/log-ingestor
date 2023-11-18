const LogsModel = require("../../../models/logModel");

const ingestLogs = async (req,res) =>{
    try {
        const logData = req.body;
        const newLog = new LogsModel(logData);
        await newLog.save();
    
        res.status(201).json({ message: 'Log ingested successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const queryLogs = async (req, res) =>{
    try {
        const filters = req.query;
        const query = {};
        for (const key in filters) {
          query[key] = filters[key];
        }
        const logs = await LogsModel.find(query);
        res.status(200).json(logs);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

module.exports = {
    ingestLogs,queryLogs
};
