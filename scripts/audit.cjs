const puppeteer = require("puppeteer-core");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: "new",
    args: ["--hide-scrollbars", "--force-prefers-reduced-motion", "--window-size=1440,900"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const errors = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push(String(e)));

  async function audit(path) {
    await page.goto("http://localhost:5173" + path, { waitUntil: "networkidle2", timeout: 60000 });
    await page.evaluate(async () => {
      for (let y = 0; y <= document.body.scrollHeight; y += window.innerHeight) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 100));
      }
      window.scrollTo(0, 0);
    });
    await new Promise((r) => setTimeout(r, 900));
    return page.evaluate(() => {
      const text = document.body.innerText;
      return {
        brackets: (text.match(/\[Add [^\]]*\]/g) || []),
        pickupDelivery: (text.match(/pickup|delivery/gi) || []).length,
        pickupDeliveryLines: text.split("\n").filter((l) => /pickup|delivery/i.test(l)),
        broken: [...document.images].filter((i) => !(i.complete && i.naturalWidth > 0)).map((i) => i.getAttribute("src")),
        imgCount: document.images.length,
        h1: document.querySelectorAll("h1").length,
        tours: [...document.querySelectorAll(".tours-meta .meta-value")].map((e) => e.textContent),
        trayAreaPlaceholder: (document.getElementById("tray-area") || {}).placeholder,
        contactDl: [...document.querySelectorAll(".contact-details dt")].map((e) => e.textContent.trim()),
        footerContact: [...document.querySelectorAll(".footer-col")].map((c) => c.innerText.replace(/\n/g, " | ")),
      };
    });
  }

  const home = await audit("/");
  const contact = await audit("/contact");
  const tours = await audit("/farm-tours");
  const gallery = await audit("/gallery");

  await page.goto("http://localhost:5173/", { waitUntil: "networkidle2" });
  await page.evaluate(() => document.querySelector(".site-footer").scrollIntoView());
  await new Promise((r) => setTimeout(r, 700));
  await page.screenshot({ path: ".screenshots/rev11-footer.png" });
  await page.evaluate(() => document.querySelector(".contact-section, #contact").scrollIntoView());
  await new Promise((r) => setTimeout(r, 700));
  await page.screenshot({ path: ".screenshots/rev11-home-contact.png" });

  console.log(JSON.stringify({ home, contact, tours, gallery, consoleErrors: errors }, null, 2));
  await browser.close();
})();
