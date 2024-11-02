For the whole app run:
- npm start

- Screenshot of the widget in action is in widget screenshot.png


* Part 3 answer: - for the single component
- Download ZeroTrustScoreWidget.vue and place it in your src/components folder.
- Import and Register the widget In the file where you want to use the widget (e.g., App.vue):
 "import ZeroTrustScoreWidget from '@/components/ZeroTrustScoreWidget.vue';"
- Create a companyData (given companyData.json as an example), this is the expected structure:
{
  "companyName": "string",                  // Name of the company 
  "ZeroTrustScore": "number",                // Overall Zero Trust Score
  "metrics": {
    "metricName": {
      "score": "number",                     // Individual metric score 
      "description": "string"                // Description of the metric 
    },
    // Repeat similar structure for additional metrics
  },
  "riskCategory": "string"                   // Risk category
} 
- Pass the data as prop and use the Widget:
 "<ZeroTrustScoreWidget :companyData="companyData" />