/** @format */

let inputDate = document.getElementById("date");
inputDate.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("dateIs");
function age() {
  let BD = new Date(inputDate.value); // التاريخ اللي جاي من اليوزر

  let DU1 = BD.getDate();
  let MU1 = BD.getMonth() + 1;
  let YU1 = BD.getFullYear();

  let today = new Date();

  let DT2 = today.getDate();
  let MT2 = today.getMonth() + 1;
  let YT2 = today.getFullYear();

  let d, m, y;
  y = YT2 - YU1; // كده حساب السنه
  if (MT2 >= MU1) {
    m = MT2 - MU1; //هيطرح عادي
  } else {
    y--; //هنقص سنه الاول
    m = 12 + MT2 - MU1; // هزود 12 شهر و اطرح
  }
  if (DT2 >= DU1) {
    d = DT2 - DU1;
  } else {
    // ع شان الايام مش زي بعضها غي كل الشهور -->هنعمل فانكشن نديها الشهر و السنه و نطلع منها اخر يوم
    m--;
    d = getDay(YU1, MU1) + DT2 - DU1;
  }
  if (m < 0) {
    // لو الشهر رقم سالب هنخليه ينقص السنه و هيخلي الشهر 11 و هو هيزود 1 يبقي 12
    m = 11;
    y--;
  }
  result.innerHTML = `your age is ${y}`;
}
function getDay(year, month) {
  return new Date(year, month, 0).getDate();
}
