package com.practice.challenges;

public class BestTradingTime {

  /**
   * Main function
   * @param args
   */
  public static void main(String[] args) {
    int[] trandingTimes = {7, 1, 5, 3, 6, 4};

    int profitGained = maxProfit(trandingTimes);

    System.out.println(profitGained);

    System.out.println(maxProfitGained(trandingTimes));
  }

  /**
   You are given an array prices where prices[i] is the price of a given stock on the ith day.
   You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
   Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

   Example 1:
   Input: prices = [7,1,5,3,6,4]
   Output: 5
   Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
   Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

   Example 2:
   Input: prices = [7,6,4,3,1]
   Output: 0
   Explanation: In this case, no transactions are done and the max profit = 0
   */
  public static int maxProfit(int[] prices) {
    int minPrice = prices[0], maxProfit = 0;

    for (int i = 1; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else {
        int calcProfit = prices[i] - minPrice;

        // UPDATE PROFIT
        if (maxProfit < calcProfit) {
          maxProfit = calcProfit;
        }

      }
    }

    return maxProfit;
  }



  // ************************* SECOND QUESTION ***********************//
  /**
   You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
   On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time.
   However, you can buy it then immediately sell it on the same day. Find and return the maximum profit you can achieve.

   Example 1:
   Input: prices = [7,1,5,3,6,4]
   Output: 7
   Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
   Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
   Total profit is 4 + 3 = 7.

   Example 2:
   Input: prices = [1,2,3,4,5]
   Output: 4
   Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
   Total profit is 4.

   Example 3:
   Input: prices = [7,6,4,3,1]
   Output: 0
   Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
   */
  public static int maxProfitGained(final int[] prices) {
    if (prices == null || prices.length <= 1) return 0;

    int maxProfit = 0;

    for (int i = 0; i < prices.length - 1; i++) {
      if (prices[i] < prices[i + 1]) {
        maxProfit += Math.abs(prices[i] - prices[i + 1]);
      }
    }

    return maxProfit;
  }
}
