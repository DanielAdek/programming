void main() {
  Solution solution = new Solution();

  print(solution.hIndex([3, 0, 5, 1, 4, 6]));
}

class Solution {
  int hIndex(List<int> citations) {
    // sort it first
    citations.sort((a, b) => b - a);

    int h = 0;

    for (int i = 0; i < citations.length; i++) {
      if (citations[i] >= i + 1) {
        h = i + 1;
      } else
        break;
    }
    return h;
  }
}
