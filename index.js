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
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var temp = katzDeliLine[0];
    katzDeliLine.pop();
    return temp;
  }
}

function currentLine(katzDeliLine)