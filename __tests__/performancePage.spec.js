import { mount } from '@vue/test-utils';
import axios from 'axios';
import PerformancePage from '../app/pages/performance-page.vue';

const mockChartData = [
  { date_ms: 1641772800000, performance: 0.2 },
  { date_ms: 1641859200000, performance: 0.33 },
  { date_ms: 1641945600000, performance: 0.83 },
  { date_ms: 1642032000000, performance: 0.31 },
  { date_ms: 1642118400000, performance: 0.65 },
  { date_ms: 1642204800000, performance: 0.88 },
  { date_ms: 1642291200000, performance: 0.9 },
];

// eslint-disable-next-line no-undef
jest.spyOn(axios, 'get').mockResolvedValue(mockChartData);
/* TODO:
  Check how to mock axios correctly
*/
// eslint-disable-next-line no-undef
test('Test updating chart data', () => {
  const wrapper = mount(PerformancePage);
  expect(axios.get).toHaveBeenCalledTimes(1);

  console.log(wrapper.vm.testFun());
  console.log(wrapper.vm.chartData);
});
