// Even number counter

function countEvens(array) {
    if (typeof array !== "object" || !Array.isArray(array)) {
        return "Invalid input";
    }

    filtered = array.filter(x => x % 2 === 0)
    let len = filtered.length;
}



countEvens([2, 1, 2, 3, 4, "y"])


// Username formatter

function formatUserName(name) {
    if (name.length > 15) {
        name = name.slice(0, 15).trim();
    }
    format = name.toLowerCase().split(" ").join("_");
    return format;
}

formatUserName("Samuel Ubong")


// Closure-Base Counter

function createCounter() {
    let count = 0;
    console.log(count);
    
    return function () {
        count++;
        return count;
    };
}
let counter = createCounter();

console.log(counter());
console.log(counter());

// Password Strength Checker

function checkPasswordStrength(password) {
  if (typeof password !== "string") {
    return "Invalid input";
  }

  let score = 0;

  if (password.length >= 8) {
    score++;
  }

  if (/[A-Z]/.test(password)) {
    score++;
  }

  if (/[a-z]/.test(password)) {
    score++;
  }

  if (/[0-9]/.test(password)) {
    score++;
  }

  if (/[!@#$%^&*]/.test(password)) {
    score++;
  }

  if (score < 3) {
    return "Weak";
  } else if (score <= 4) {
    return "Medium";
  } else {
    return "Strong";
  }
}