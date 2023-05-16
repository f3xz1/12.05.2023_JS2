function task_1(a, b) {
  if (a > b) return -1;
  else if (a < b) return 1;

  return 0;
}

function task_2(a) {
  let res = 1;
  for (let i = 1; i <= a; i++) {
    res *= i;
  }
  return res;
}

function task_3(a, b, c) {
  return a * 100 + b * 10 + c;
}

function task_4(a) {
  return a ** 2;
}

function task_4(a, b) {
  return a * b;
}

function task_5(a) {
  let sum = 0;

  for (let i = 1; i <= a / 2; i++) {
    if (a % i === 0) {
      sum += i;
    }
  }

  return sum === a;
}

function task_6(a, b) {
  for (let i = a; i < b; i++) {
    if (task_5(i) == true) console.log(i);
  }
}

function task_7(a, b = "00", c = "00") {
  return a + ":" + b + ":" + c;
}

function task_8(a, b, c) {
  let h = a;
  let m = b;
  let s = c;

  m += h * 60;
  s += m * 60;
  return s;
}

function task_9(a) {
  let h = parseInt(a / 3600);
  let m = parseInt((a % 3600) / 60);
  let s = a % 60;

  return task_7(h, m, s);
}
function task_10(h1, m1, s1, h2, m2, s2) {
  let fst_time = task_8(h1, m1, s1);
  let scd_time = task_8(h2, m2, s2);

  if (fst_time > scd_time) {
    return task_9(fst_time - scd_time);
  } else {
    return task_9(scd_time - fst_time);
  }
}
