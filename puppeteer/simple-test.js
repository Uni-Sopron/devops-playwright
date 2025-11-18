import puppeteer from 'puppeteer'
// import puppeteer from 'puppeteer-core'

const browser = await puppeteer.launch({
  headless: false,
  devtools: true,
  defaultViewport: null,
})

// const browser = await puppeteer.launch({
//   executablePath:
//     '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
// })

const page = await browser.newPage()

await page.goto('https://developer.chrome.com/')

await page.screenshot({
  path: 'puppeteer/chrome.png',
})
await page.pdf({
  path: 'puppeteer/chrome.pdf',
})

await page.setViewport({ width: 1080, height: 1024 })
await page.screenshot({
  path: 'puppeteer/chromex2.png',
})
await page.pdf({
  path: 'puppeteer/chromex2.pdf',
})

await browser.close()
