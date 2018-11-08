function takeANumber(katzDeliLine, name) {
  var length = katzDeliLine.length;
  for (var i = 0; i < length; i++) {
    if (i === length - 1) {
      var temp = katzDeliLine[i];
      return `Welcome, ${name}. You are number ${temp} in line.`;
    }
  }
}