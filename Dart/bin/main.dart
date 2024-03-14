import '../algorithms/challenges/count_unique.dart';
import '../algorithms/challenges/palindron.dart';
import '../algorithms/challenges/reverse.dart';

void main() {
  String? reversed = reverseStr(word: "cocacola");

  List<int> unique_numbers =
      count_unique([2, 2, 3, 4, 4, 5, 6, 7, 7, 7, 7, 8, 9]);

  bool palindromeA = isPalindrome("Nurses run");
  bool palindromeB = isPalindrome("Doctors run");

  // DISPLAY UNIT
  print(reversed);
  print(unique_numbers);
  print(palindromeA);
  print(palindromeB);
}
