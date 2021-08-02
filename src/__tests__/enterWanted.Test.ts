import { enterWanted } from "./enterWanted";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, By, until } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new enterWanted(driver);

const submitButton: By = By.xpath("//*[@id= 'saveBtn']");
const clearButton: By = By.xpath("//*[@id= 'clearBtn']");


test("Enter correct inputs and expect positive results", async () => {
    await page.navigate();
    await page.typeHeader('Correct answer is');
    await page.typeName('Tahoe Otter');
    await page.typeWeight('100');

    await driver.findElement(submitButton).click();
    expect(await page.getResults()).toBe("Correct answer is. Tahoe Otter. 100")
});

afterAll(async () => {
await driver.quit();

})
				
