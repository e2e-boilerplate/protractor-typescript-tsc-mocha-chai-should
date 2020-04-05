import { should } from "chai";
import { before } from "mocha";
import { browser, by, element } from "protractor";

should();

describe("Sandbox", () => {
  before(function fn() {
    this.timeout(20000);
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    title.should.eql("Sandbox");

    const header = await element(by.css("h1")).getText();
    header.should.eql("Sandbox");
  });
});
