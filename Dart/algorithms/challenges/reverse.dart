String? reverseStr({String? word}) {
  String reversed = "";

  for (int i = word!.length - 1; i >= 1; i--) {
    reversed += word[i];
  }

  return reversed;
}
