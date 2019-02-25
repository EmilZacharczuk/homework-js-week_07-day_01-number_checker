const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result', (event) => {
    const isPrimeNumber = event.detail;
    this.displayResult(isPrimeNumber);
  });
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  if (result == true) {
  return resultElement.textContent = `Yeah! Your number is prime`}
  else {
    return resultElement.textContent = 'Sorry:), Your number is not prime'
  }

};

module.exports = ResultView;
