// Returns target character with the capitalization of model character.
function matchCaps(model, target) {
  var lowerModel = model.toLowerCase();
  var lowerTarget = target.toLowerCase();
  var shift = lowerTarget.charCodeAt(0) - lowerModel.charCodeAt(0);
  return String.fromCharCode(model.charCodeAt(0) + shift);
}

var coinReplacers = [
  {
    regex: /\b(B|b)itcoins?/gi, // TODO handle possessives
    fn: function(match, b, offset, string) {
      var t = matchCaps(b, 't');
      var m = matchCaps(b, 'm');
      return `${t}hin ${m}ints`;
    }
  },
  {
    regex: /\bBTC/g,
    fn: function() { return 'THM'; }
  },
  {
    regex: /\bBCH/g,
    fn: function() { return 'THC'; }  // now that's a lit coin.
  },
  {
    regex: /\bBTG/g,
    fn: function() { return 'THG'; }
  },
  {
    regex: /\b(E|e)thereum/gi,
    fn: function(match, e, offset, string) {
      var s = matchCaps(e, 's');
      return `${s}amoas`; // TODO do we have a pluralization problem here? also, add 'ether'?
    }
  },
  {
    regex: /\bETH/g,
    fn: function() { return 'SAM'; }
  },
  {
    regex: /\bETC/g,
    fn: function() { return 'SMC'; }
  },
  {
    regex: /\b(R|r)ipple/gi,
    fn: function(match, r, offset, string) {
      var t = matchCaps(r, 't');
      return `${t}agalongs`;
    }
  },
  {
    regex: /\bXRP/g,
    fn: function() { return 'TAG'; }
  },
  {
    regex: /\b(L|l)itecoins?/gi,
    fn: function(match, l, offset, string) {
      var d = matchCaps(l, 'd');
      return `${d}o-si-dos`;
    }
  },
  {
    regex: /\bLTC/g,
    fn: function() { return 'DSD'; }
  },
  {
    regex: /\b(Z|z)cash/gi,
    fn: function(match, z, offset, string) {
      var t = matchCaps(z, 't');
      return `${t}refoils`;
    }
  },
  {
    regex: /\bZEC/g,
    fn: function() { return 'TRF'; }
  },
  {
    regex: /\b(M|m)onero/gi,
    fn: function(match, m, offset, string) {
      var s = matchCaps(m, 's');
      return `${s}avannah ${s}miles`;
    }
  },
  {
    regex: /\bXMR/g,
    fn: function() { return 'SVS'; }
  },
  {
    regex: /\b(B|b)lock\s?chain/gi,
    fn: function(match, b, offset, string) {
      var c = matchCaps(b, 'c');
      return `${c}ookie order form`;
    }
  },
  {
    regex: /\b(C|c)rypto-?currenc(y|ies)/gi,
    fn: function(match, c, suffix, offset, string) {
      var g = matchCaps(c, 'g');
      var s = matchCaps(c, 's');
      return `${g}irl ${s}cout ${c}ook${suffix === 'y' ? 'ie' : suffix}`;
    }
  },
  {
    regex: /\b(C|c)rypto(?!-?c)/gi,  // TODO handle is/are, add context
    fn: function(match, c, offset, string) { // TODO handle cryptograph
      var g = matchCaps(c, 'g');
      var s = matchCaps(c, 's');
      return ` ${g}irl ${s}cout`;
    }
  },
  {
    // TODO add context, then add "mine"
    regex: /\b(M|m)in(ing|er)/gi,  // TODO don't match e.g. "undermining"
    fn: function(match, m, suffix, offset, string) {
      var b = matchCaps(m, 'b');
      return ` ${b}ak${suffix}`;
    }
  },
]
