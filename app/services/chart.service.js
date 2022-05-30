import axios from 'axios';

export default {
  ChartDataService() {
    let chartDataURL = 'https://fe-task.getsandbox.com/performance';

    return axios.get(chartDataURL);
  },
};
