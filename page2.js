const puppeteer = require('puppeteer');
const browser = await puppeteer.launch();
const page = await browser.newPage();
const navigationPromise = page.waitForNavigation();

await navigationPromise;

await page.goto('https://banhang.shopee.vn/webchat/conversations');

await page.setViewport({ width: 1848, height: 980 });

await page.waitForSelector(
  '.ZWrg9QvNPg > div > .ReactVirtualized__Grid > .ReactVirtualized__Grid__innerScrollContainer > .fMsb76v3c8'
);
await page.click(
  '.ZWrg9QvNPg > div > .ReactVirtualized__Grid > .ReactVirtualized__Grid__innerScrollContainer > .fMsb76v3c8'
);

await page.waitForSelector(
  '.DEwekPN7v2:nth-child(1) > .x_vjYCA89K > .MT4zHfbzNe > .YaVM1kOYDt > .aB1BdEhUar'
);
await page.click(
  '.DEwekPN7v2:nth-child(1) > .x_vjYCA89K > .MT4zHfbzNe > .YaVM1kOYDt > .aB1BdEhUar'
);

await page.waitForSelector(
  '.DEwekPN7v2:nth-child(2) > .x_vjYCA89K > .MT4zHfbzNe > .YaVM1kOYDt > .aB1BdEhUar'
);
await page.click(
  '.DEwekPN7v2:nth-child(2) > .x_vjYCA89K > .MT4zHfbzNe > .YaVM1kOYDt > .aB1BdEhUar'
);

await page.waitForSelector(
  '.DEwekPN7v2:nth-child(3) > .IjkExKWyR_ > .MT4zHfbzNe > .YaVM1kOYDt > .aB1BdEhUar'
);
await page.click(
  '.DEwekPN7v2:nth-child(3) > .IjkExKWyR_ > .MT4zHfbzNe > .YaVM1kOYDt > .aB1BdEhUar'
);

await page.waitForSelector(
  '.DEwekPN7v2:nth-child(4) > .IjkExKWyR_ > .MT4zHfbzNe > .YaVM1kOYDt > .aB1BdEhUar'
);
await page.click(
  '.DEwekPN7v2:nth-child(4) > .IjkExKWyR_ > .MT4zHfbzNe > .YaVM1kOYDt > .aB1BdEhUar'
);

await page.waitForSelector(
  '.DEwekPN7v2:nth-child(5) > .x_vjYCA89K > .MT4zHfbzNe > .YaVM1kOYDt > .aB1BdEhUar'
);
await page.click(
  '.DEwekPN7v2:nth-child(5) > .x_vjYCA89K > .MT4zHfbzNe > .YaVM1kOYDt > .aB1BdEhUar'
);

await page.waitForSelector(
  '.gOr75DiXAR > .x_vjYCA89K > .MT4zHfbzNe > .YaVM1kOYDt > .aB1BdEhUar'
);
await page.click(
  '.gOr75DiXAR > .x_vjYCA89K > .MT4zHfbzNe > .YaVM1kOYDt > .aB1BdEhUar'
);

await browser.close();
