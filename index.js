function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var length = katzDeliLine.length;
  for (var i = 0; i < length; i++) {
    if (i === (length - 1)) {
      var temp = katzDeliLine[i];
      i++;
      return `Welcome, ${name}. You are number ${i} in line.`;
    }
  }
}