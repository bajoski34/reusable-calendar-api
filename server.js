// Import the Express framework
const express = require('express');
const cors = require('cors');

// Initialize the Express app
const app = express();

app.use(cors({'method': 'GET'}));

// Define a mock in-memory database
const companies = [
  { id: 1, name: 'Company A', color: '#FF5733' },
  { id: 2, name: 'Company B', color: '#33FF57' },
  { id: 3, name: 'Company C', color: '#3357FF' }
];

app.get('/', (req, res) => {
    res.send('Silence is golden.')
})

app.get('/companies/:id', (req, res) => {
  const companyId = parseInt(req.params.id, 10);

  if (isNaN(companyId)) {
    return res.status(400).json({ error: 'Invalid company ID format.' });
  }

  const company = companies.find((c) => c.id === companyId);

  if (!company) {
    return res.status(404).json({ error: 'Company not found.' });
  }

  res.json(company);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
