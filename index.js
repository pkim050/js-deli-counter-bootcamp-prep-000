function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var length = katzDeliLine.length;
  for (var i = 0; i < length; i++) {
    if (i === (length - 1)) {
      i++;
      return `Welcome, ${name}. You are number ${i} in line.`;
    }
  }
}

function nowServing(katzDeliLine) {
  
}