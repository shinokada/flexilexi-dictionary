export function removeHyphensAndCapitalize(str: string) {
  // Handle empty string or strings without '-'
  if (!str || !str.includes('-')) {
    return str;
  }

  // Capitalize the first letter (including after hyphens)
  const capitalized = str.replace(/(^|\s|-)\w/g, (match) => match.toUpperCase());

  // Remove hyphens and ensure spaces after words
  return capitalized.replace(/-|\s{2,}/g, ' ');
}

export function randomword(wordList: string[]) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

export function getRandomItemFromDictionary(dictionary: { [key: string]: string }): {
  [key: string]: string;
} {
  const keys = Object.keys(dictionary);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];

  return {
    [randomKey]: dictionary[randomKey]
  };
}

export function openTab(word: string, website: string) {
  let baseUrl = '';
  if (website === 'google') {
    baseUrl = 'https://translate.google.com/?hl=en&tab=TT&sl=no&tl=en&op=translate&text=';
  } else {
    baseUrl = 'https://ordbokene.no/bm/search?q=';
  }

  const url = baseUrl + encodeURIComponent(word);
  window.open(url, '_blank');
}

export function cleanWord(word: string) {
  // Remove characters after '/'
  const withoutSlash = word.replace(/\/.*$/, '');

  // Remove characters after ','
  const withoutComma = withoutSlash.replace(/,.*/, '');

  // Remove characters after ' -'
  const withoutHyphen = withoutComma.replace(/ -.*/, '');

  return withoutHyphen.trim(); // Trim to remove leading/trailing spaces
}
