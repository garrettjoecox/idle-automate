function repeat(interval, method) {
  method();
  setTimeout(() => repeat(interval, method), interval);
}

repeat(10, () => {
  const cookie = document.querySelector('#bigCookie');
  if (cookie) cookie.click();
});

repeat(500, () => {
  const goldCookie = document.querySelector('.shimmer');
  if (goldCookie) goldCookie.click();
});

repeat(1000, () => {
  const crateUpgrades = document.querySelectorAll('#upgrades .crate.upgrade.enabled');
  const productUpgrades = document.querySelectorAll('#products .product.unlocked.enabled');
  if (crateUpgrades.length) crateUpgrades[0].click();
  else if (productUpgrades.length) productUpgrades[productUpgrades.length - 1].click();
});
