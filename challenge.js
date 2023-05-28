// Good Luck! You got this 💪🏾
// Write your code here.

function pG(p1, p2) {
    if (p1 === p2) {
      return "ti";
    } else if (
      (p1 === "r" && p2 === "s") ||
      (p1 === "p" && p2 === "rock") ||
      (p1 === "s" && p2 === "p")
    ) {
      return "p1 wins";
    } else {
      return "p2 wins";
    }
  }

  console.log(pG("r", "p"));