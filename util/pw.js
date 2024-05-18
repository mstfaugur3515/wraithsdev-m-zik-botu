function printWatermark() {
  const uptimeInSeconds = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log('Bota Bağlanıldı');
}

module.exports = {
  printWatermark,
};