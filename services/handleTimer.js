//TODO: Lấy ra thời gian hiện tại

const getCurrentTime = () => {
  const currentDate = new Date();
  const h = currentDate.getHours().toString().padStart(2, "0");
  const m = currentDate.getMinutes().toString().padStart(2, "0");
  const s = currentDate.getSeconds().toString().padStart(2, "0");

  return `${h}:${m}:${s}`;
};
const result = getCurrentTime();
console.log(result);

const hours = document.querySelector(".time-hour");
const minutes = document.querySelector(".time-minutes");
const second = document.querySelector(".time-second");

setInterval(() => {
  const currentTime = getCurrentTime();
  const [hoursValue, minutesValue, secondsValue] = currentTime.split(":");

  hours.textContent = hoursValue;
  minutes.textContent = minutesValue;
  second.textContent = secondsValue;
});
