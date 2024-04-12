import 'dart:collection';

class JumpGame {
  /**
   * Given an array of non-negative integers arr, you are initially positioned at start index of the array.
   * When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach any index with value 0.
      Notice that you can not jump outside of the array at any time.

      Example 1:
      Input: arr = [4,2,3,0,3,1,2], start = 5
      Output: true
      Explanation:
      All possible ways to reach at index 3 with value 0 are:
      index 5 -> index 4 -> index 1 -> index 3
      index 5 -> index 6 -> index 4 -> index 1 -> index 3

      Example 2:
      Input: arr = [4,2,3,0,3,1,2], start = 0
      Output: true
      Explanation:
      One possible way to reach at index 3 with value 0 is:
      index 0 -> index 4 -> index 1 -> index 3

      Example 3:
      Input: arr = [3,0,2,1,2], start = 2
      Output: false
      Explanation: There is no way to reach at index 1 with value 0.
   * */

  // This solution uses BFS
  bool canReachBFS(List<int> arr, int start) {
    int n = arr.length;
    Set<int> visited = Set<int>();
    Queue<int> queue = Queue<int>();
    queue.add(start);

    while (queue.isNotEmpty) {
      int currentPos = queue.removeFirst();
      if (arr[currentPos] == 0) {
        return true;
      }

      visited.add(currentPos);

      int nextPos1 = currentPos + arr[currentPos];
      int nextPos2 = currentPos - arr[currentPos];

      if (nextPos1 >= 0 && nextPos1 < n && !visited.contains(nextPos1)) {
        queue.add(nextPos1);
      }

      if (nextPos2 >= 0 && nextPos2 < n && !visited.contains(nextPos2)) {
        queue.add(nextPos2);
      }
    }

    return false;
  }

  // THIS SOLUTION USES DFS (DEPTH FIRS SEARCH)
  bool canReach(List<int> arr, int start) {
    Set<int> visited = Set<int>();
    return dfs(arr, start, visited);
  }

  bool dfs(List<int> arr, int pos, Set<int> visited) {
    if (pos < 0 || pos >= arr.length || visited.contains(pos)) {
      return false;
    }

    if (arr[pos] == 0) {
      return true;
    }

    visited.add(pos);

    // Explore next positions
    return dfs(arr, pos + arr[pos], visited) ||
        dfs(arr, pos - arr[pos], visited);
  }

  /**
   * You are given a 0-indexed binary string s and two integers minJump and maxJump.
   * In the beginning, you are standing at index 0, which is equal to '0'.
   * You can move from index i to index j if the following conditions are fulfilled:

      i + minJump <= j <= min(i + maxJump, s.length - 1), and
      s[j] == '0'.
      Return true if you can reach index s.length - 1 in s, or false otherwise.

      Example 1:
      Input: s = "011010", minJump = 2, maxJump = 3
      Output: true
      Explanation:
      In the first step, move from index 0 to index 3.
      In the second step, move from index 3 to index 5.

      Example 2:
      Input: s = "01101110", minJump = 2, maxJump = 3
      Output: false
   * */

  // THIS SOLUTION USES DYNAMIC PROGRAMMING WITH GREEDY ALGO
  bool canReachEnd(String s, int minJump, int maxJump) {
    int n = s.length;
    if (s[n - 1] == '1') {
      // If the last position is '1', unreachable
      return false;
    }

    List<bool> dp = List.filled(n, false); // Initialize dp array

    dp[0] = true; // We can always reach the first position

    int maxReachable = 0; // Furthest reachable index

    for (int i = 1; i < n; i++) {
      if (i >= minJump && dp[i - minJump]) {
        maxReachable = (maxReachable > i - minJump + maxJump)
            ? maxReachable
            : i - minJump + maxJump;
      }
      if (maxReachable >= i && s[i] == '0') {
        // If it's possible to reach this index and it's '0'
        dp[i] = true;
      }
    }
    return dp[n - 1];
  }
}
