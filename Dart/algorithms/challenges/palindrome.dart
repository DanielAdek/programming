bool isPalindrome(String word) {
  // NOT PALINDROME AT EMPTY STATE
  if (word.isEmpty) return !word.isEmpty;

  // REPLACE SPECIAL CHARACTERS
  final RegExp regex = RegExp(r'[^a-zA-Z0-9]');

  word = word.replaceAll(regex, '').toLowerCase();

  int left = 0;
  int right = word.length - 1;

  while (left < right) {
    String padLeftChar = word[left];

    String padRightChar = word[right];

    if (padLeftChar != padRightChar) return false;

    left++;
    right--;
  }
  return true;
}
