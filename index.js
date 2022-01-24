const puppeteer = require('puppeteer');
const fs = require('fs');

var name = ''
var pass = ''

async function run() {
  try {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('https://hh.ru/account/login');
    await page.waitForTimeout(1000);
    await page.click("#HH-React-Root > div > div > div > div > div > div > div:nth-child(1) > div.account-login-tile-content-wrapper > div.account-login-tile-content > div:nth-child(2) > div > div > form > div.account-login-actions > button.bloko-link-switch")
    await page.waitForTimeout(1000);
    await page.focus('#HH-React-Root > div > div > div > div > div > div > div:nth-child(1) > div.account-login-tile-content-wrapper > div.account-login-tile-content > div:nth-child(2) > div > form > div:nth-child(7) > input');
    await page.keyboard.type(name)
    await page.waitForTimeout(1000);
    await page.focus('#HH-React-Root > div > div > div > div > div > div > div:nth-child(1) > div.account-login-tile-content-wrapper > div.account-login-tile-content > div:nth-child(2) > div > form > div:nth-child(8) > span > input');
    await page.keyboard.type(pass)
    await page.waitForTimeout(1000);
    await page.click("#HH-React-Root > div > div > div > div > div > div > div:nth-child(1) > div.account-login-tile-content-wrapper > div.account-login-tile-content > div:nth-child(2) > div > form > div.bloko-form-row > div > button > span")
    await page.waitForTimeout(5000);
    await page.click("body > div.HH-Supernova-Search-Container.supernova-navi-search-wrapper.supernova-navi-search-wrapper_expanded > div.supernova-navi-wrapper > div > div > div.supernova-navi.supernova-navi_lvl-2.HH-Supernova-Menu-Container.HH-Supernova-NotificationManager-Container > div:nth-child(3) > a")
    await page.waitForTimeout(5000);
    try {
      await page.click("#HH-React-Root > div > div > div > div.bloko-column.bloko-column_container.bloko-column_xs-4.bloko-column_m-8.bloko-column_l-11 > div.bloko-column.bloko-column_xs-4.bloko-column_s-8.bloko-column_m-8.bloko-column_l-11 > div.bloko-gap.bloko-gap_top.bloko-gap_bottom > div > div.bloko-gap.bloko-gap_top > div > div > div > div:nth-child(1) > span > button")
      await page.waitForTimeout(1000);
      log("Ok.")
      await browser.close();
    } catch (e) {
      log("Failed.")
      await browser.close();
    }
  } catch (e) {
    log("Fatal error: " + e)
  }

}

function log(r) {
  fs.appendFile('log.txt', "[" + new Date().toISOString().replace('T', ' ').substr(0, 19) + "] " + r + '\n', (err) => {
    if (err) {
      throw err;
    }
    console.log("File is updated.");
  });
}

setInterval(function () {
   run()
}, 1000 * 60 * 60 * 4 + 1000 * 60 * 5); // 4 hours and 5 minuts
