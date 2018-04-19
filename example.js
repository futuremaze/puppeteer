'use strict';

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    "ignoreHTTPSErrors": true,
  });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1');

  // require proxy authentication.
  await page.authenticate({username: "username", password: "password"});

  for (var i=1; i<=186; i++) {
    await page.goto('https://example.com/' + i, {waitUntil: "domcontentloaded"});
    await page.evaluate(() => {
      var elements = document.querySelectorAll(".page-wrapper [class^=powerpress]");
      elements.forEach(function(e) {
        if (e != null) {
          e.parentNode.removeChild(e);
        }
      });
      elements = document.querySelectorAll(".post-page-thumbnail");
      elements.forEach(function(e) {
        if (e != null) {
          e.parentNode.removeChild(e);
        }
      });
      elements = document.querySelectorAll(".link-itune");
      elements.forEach(function(e) {
        if (e != null) {
          e.parentNode.removeChild(e);
        }
      });
      elements = document.querySelector(".post-page-content > div:not([id]");
      if (elements != null) {
        elements.parentNode.removeChild(elements);
      }
      elements = document.querySelectorAll('.page-wrapper > .content-wrap ~ :not([class=wptouch-mobile-switch])');
      elements.forEach(function(e) {
        if (e != null) {
          e.parentNode.removeChild(e);
        }
      });
      elements = document.querySelectorAll(".sbver");
      elements.forEach(function(e) {
        if (e != null) {
          e.parentNode.removeChild(e);
        }
      });
      elements = document.querySelectorAll("[class^=ad]");
      elements.forEach(function(e) {
        if (e != null) {
          e.parentNode.removeChild(e);
        }
      });
      elements = document.querySelectorAll("[class*=wp-image]");
      elements.forEach(function(e) {
        if (e != null) {
          e.parentNode.removeChild(e);
        }
      });
      elements = document.querySelectorAll('nav');
      elements.forEach(function(e) {
        if (e != null) {
          e.parentNode.removeChild(e);
        }
      });
      elements = document.querySelectorAll('aside');
      elements.forEach(function(e) {
        if (e != null) {
          e.parentNode.removeChild(e);
        }
      });
      elements = document.querySelectorAll('.yarpp-related');
      elements.forEach(function(e) {
        if (e != null) {
          e.parentNode.removeChild(e);
        }
      });
      
    });
    //await page.screenshot({path: 'podcast' + i + '.png'});
    var filename = ('0000' + i).slice(-4) + '_podcast' + i + '.pdf';
    await page.pdf({
      path: 'pdf/' + filename,
      printBackground: true,
      width: '750px',
      height: '1334px'
    });
  }
  await browser.close();
})();
