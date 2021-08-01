import { SpecPage } from "./SpecPage";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new SpecPage(driver);

test("it works", async () => {
  await page.navigate();
  await page.doSearch("otters");
  expect(await page.getResults()).toContain("otters");
});
afterAll(async () => {
  await driver.quit();
});
