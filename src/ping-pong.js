
export function Entry(subject, body) {
  this.subject = subject;
  this.body = body;
  this.bodyArr = body.split(" ");
  this.entryNumber;
}

Entry.prototype.wordCount = function() {
  const len = this.bodyArr.length;
  return len;
};

Entry.prototype.vowelCount = function() {
  var vowelArr = this.body.split(/[aeiou]/i);
  var vowelLen = vowelArr.length - 1;
  return vowelLen;
};

Entry.prototype.consonantCount = function() {
  var consArr = this.body.split(/[bcdfghjklmnpqrstvwxyz]/i);
  var consLen = consArr.length - 1;
  return consLen;
};

Entry.prototype.getTeaser = function() {
  var truncArr = [];
  // var stop = 7;
  var newWord;
  for (var i = 0; i < 8; i++) {
    newWord = this.bodyArr[i];
    truncArr.push(newWord);
    if (/[.?!]/.test(newWord)) {
      return truncArr.join(' ');
    }
  }
  truncArr.push('...');
  return truncArr.join(' ');
};
