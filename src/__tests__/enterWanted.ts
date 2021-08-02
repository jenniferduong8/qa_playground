import { By, until, WebDriver } from "selenium-webdriver";

export class enterWanted {
    driver: WebDriver;

    url: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";

    headerField: By = By.xpath('//*[@class="hdrInput"]');
    nameField: By = By.xpath('//*[@name="namInput"]');
    weightField: By = By.xpath("//*[@name= 'wgtInput']");
    InputFields: By = By.xpath('//*[@class="inputField]');
    resultsInput: By = By.xpath("//*[@name= 'queryBody']");


    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.InputFields));
        await this.driver.wait(
            until.elementIsVisible(await this.driver.findElement(this.InputFields))
        );

    }
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).sendKeys(keys);
}
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).getText();
}
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).click();

    }
    async typeName(text: string) {
        return this.sendKeys(this.nameField,`${text}`);
  }
  
  async typeHeader(text: string) {
    return this.sendKeys(this.headerField, `${text}`);
  }

  async typeWeight(text: string) {
    return this.sendKeys(this.weightField, `${text}`);
  }
    async getResults() {
        return this.getText(this.resultsInput); 
    }
}
// https://dmutah.atlassian.net/browse/JD4DL-49