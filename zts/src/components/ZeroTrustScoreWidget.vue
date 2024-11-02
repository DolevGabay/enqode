<template>
  <div class="zero-trust-widget">
    <div class="header">
      <h2>Zero Trust Score for {{ companyData.companyName }}</h2>
      <h3>Overall Score: {{ companyData.ZeroTrustScore }}</h3>
      <div class="progress-bar overall-score">
        <div
          class="progress-bar-fill"
          :style="{ width: companyData.ZeroTrustScore + '%', backgroundColor: getRiskColor(companyData.ZeroTrustScore) }"
        >
          <span class="progress-text">{{ companyData.ZeroTrustScore }}</span>
        </div>
      </div>
    </div>

    <div class="metrics">
      <h4>Metrics:</h4>
      <div
        v-for="(metric, key) in companyData.metrics"
        :key="key"
        class="metric-item"
      >
        <div class="metric-title">{{ key }}</div>
        <span class="progress-text">{{ metric.description }}</span>
        <div class="progress-bar">
          <div
            class="progress-bar-fill"
            :style="{ width: metric.score + '%', backgroundColor: getRiskColor(metric.score) }"
          >
            <span class="progress-text">{{ metric.score }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="risk-category">
      <h4>Risk Category:</h4>
      <span :class="getRiskCategoryColor(companyData.riskCategory)">
        {{ companyData.riskCategory }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    companyData: {
      type: Object,
      default: () => ({
        companyName: "Default Company",
        ZeroTrustScore: 50,
        metrics: {
          metric1: { score: 70, description: "Default mertic 1" },
          metric2: { score: 55, description: "Default mertic 2" },
          metric3: { score: 45, description: "Default mertic 3" },
          metric4: { score: 65, description: "Default mertic 4" },
        },
        riskCategory: "Moderate Risk",
      }),
    },
  },
  methods: {
    getRiskColor(score) {
      if (score >= 75) return 'green';
      if (score >= 50) return 'orange';
      return 'red';
    },
    getRiskCategoryColor(riskCategory) {
      return {
        'Low Risk': 'low-risk',
        'Moderate Risk': 'moderate-risk',
        'High Risk': 'high-risk',
      }[riskCategory] || 'default-risk';
    },
  },
};
</script>

<style scoped>
.zero-trust-widget {
  font-family: Arial, sans-serif;
  color: #2c3e50;
  text-align: left;
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.header h2,
.header h3 {
  margin: 0;
  font-weight: bold;
}

.progress-bar {
  background-color: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  height: 20px;
  margin: 10px 0;
}

.progress-bar-fill {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
  transition: width 0.3s ease;
}

.progress-text {
  padding: 0 5px;
  font-size: 14px;
}

.metrics {
  margin-top: 20px;
}

.metric-item {
  margin-bottom: 15px;
}

.metric-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.risk-category {
  margin-top: 20px;
}

.risk-category span {
  font-weight: bold;
}

.low-risk {
  color: green;
}

.moderate-risk {
  color: orange;
}

.high-risk {
  color: red;
}
</style>
