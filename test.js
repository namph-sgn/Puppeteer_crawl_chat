const puppeteer = require('puppeteer-extra');
const { executablePath } = require('puppeteer');
const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

// Add adblocker plugin to block all ads and trackers (saves bandwidth)
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));

async function clickOnChat(page) {
  await page.waitForSelector(
    '.ReactVirtualized__Grid__innerScrollContainer > .fMsb76v3c8'
  );
  await page.click(
    '.ReactVirtualized__Grid__innerScrollContainer > .fMsb76v3c8'
  );
  
}

async function start() {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: executablePath(),
  });
  const page = await browser.newPage();
  const cookiesString = await fs.readFile('./cookies.json');
  const currentCookies = JSON.parse(cookiesString);
  await page.setCookie(...currentCookies);
  await page.goto(
    'https://banhang.shopee.vn/account/signin?next=%2Fwebchat%2Fconversations'
  );
  await page.setViewport({ width: 1848, height: 980 });
    var username = await page.waitForSelector('input[autocomplete="username"]');
    await page.click('input[autocomplete="username"]');
    await username.type('0838216768');

    var password = await page.waitForSelector(
      'input[autocomplete=current-password]'
    );
    await page.click('input[autocomplete=current-password]');
    await password.type('phN@m123');
    await page.screenshot({ path: 'amazing.png' });

    await page.waitForSelector(
      '#shop-login > .shopee-form-item > .shopee-form-item__control > .shopee-form-item__content > .shopee-button'
    );
    await page.click(
      '#shop-login > .shopee-form-item > .shopee-form-item__control > .shopee-form-item__content > .shopee-button'
    );

  await page.screenshot({ path: `amazing${uuidv4()}.png` });
  await clickOnChat(page);
  await page.waitForTimeout(40000);

  const cookies = await page.cookies();
  await fs.writeFile('./cookies.json', JSON.stringify(cookies, null, 2));

  await browser.close();
}

start();
