const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerHTML;
    const increment = target / 200;
    if (count < target) {
      counter.innerHTML = `${Math.ceil(count + increment)}`;
      setTimeout(() => {
        updateCounter();
      }, 1);
    } else {
      counter.innerHTML = target;
    }
  };

  updateCounter();
});
