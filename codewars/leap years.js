function deepReverse(l) {
    if (Array.isArray(l)) {
      l.reverse();
      for (let i = 0; i < l.length; i++) {
        l[i] = deepReverse(l[i]);
      }
    }
    return l;
  }