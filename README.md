* Part 1 answer:
The given code will print the following line five times (equal to the array's size):
"The element in position 5 is: undefined"

This happens because of the initialization of i using var. When setTimeout is called in each iteration, it doesn’t capture the current value of i at that moment. Instead, it captures a reference to the i variable itself. Since var is function-scoped rather than block-scoped, all iterations in the loop share the same i variable in memory.

As a result, when the loop completes (in under 5 seconds), i has already reached the value of 5. When setTimeout callbacks execute after the delay, they all see i as 5, leading to the output "The element in position 5 is: undefined" because the array has no element at index 5.

If we replace var with let, we would get the expected behavior. Using let creates a new instance of i for each iteration due to its block-scoping. Consequently, each setTimeout callback captures its own unique i value specific to that iteration, allowing it to access the correct element in the array.

* Part 3 answer:
- Download ZeroTrustScoreWidget.vue and place it in your src/components folder.
- Install Vuetify (Optional, if you want to use Vuetify styling)
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



# enqode
