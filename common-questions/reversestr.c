// Implement a function void reverse(char* str) in Cor C++ which reverses a null-terminated
// string.

// nb: for this, scoring is weighted for optimization, including space optimization. So the implementation should do the reversal 'in place', ie no extra buffer.
// the 'clever insight' use two pointers at opposite ends
// https://www.youtube.com/watch?v=Y9duHb1fyUQ



  void reverse(char *str) {
  char* end = str;
  char tmp;
  if (str) {
  while (*end) { /* find end of the string */
  ++end;
  }
  --end; /* set one char back, since last char is null */

  /* swap characters from start of string with the end of the
  11 * string, until the pointers meet in middle. */
  while (str < end) {
  tmp = *str;
  *str++ = *end;
  *end-- = tmp;
  }
  }
  }
