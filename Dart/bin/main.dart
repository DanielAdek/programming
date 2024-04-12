import '../algorithms/challenges/count_unique.dart';
import '../algorithms/challenges/palindrome.dart';
import '../algorithms/challenges/reverse.dart';
import '../algorithms/challenges/rotate_array.dart';
import '../algorithms/patterns/frequency.dart';
import '../algorithms/patterns/sliding_window.dart';
import '../algorithms/patterns/two_pointers.dart';
import '../algorithms/search/binary_search.dart';

void main() {
  List<int> integers = [1, 2, 3, 4, 5, 6, 7];
  // List<int> integers = [2, 2, 3, 4, 4, 5, 6, 7, 7, 7, 7, 8, 9];
  // String? reversed = reverseStr(word: "cocacola");
  //
  // List<int> unique_numbers = count_unique(integers);
  //
  // bool palindromeA = isPalindrome("Nurses run");
  // bool palindromeB = isPalindrome("Doctors run");
  //
  // int remove_dup = removeDuplicate(integers);
  // int remove_dup_s = removeDuplicates(integers);
  //
  // int mode = majorityElement(integers);
  // int mode2 = highestCommonFactor([3, 2, 3]);

  // int maxSubArraySumResult = maxSubArraySum([3, 2, 5, 7, 8, 4, 1], 2);

  rotateArray(integers, 3);

  // DISPLAY UNIT
  // print(reversed);
  // print(unique_numbers);
  // print(palindromeA);
  // print(palindromeB);
  // print("Maximum sub array sum is: $maxSubArraySumResult");
  // print("The number of unique values is $remove_dup");
  // print("The number of doubly unique values is $remove_dup_s");
  // print("The highest common factor is $mode");
  // print("The highest common factor2 is $mode2");
}
