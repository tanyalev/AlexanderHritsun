var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).build();
  

driver.get('https://novaposhta.ua/');

driver.findElement({xpath: '//*[@id="user_menu"]/a[1]/span' }).click(); 
driver.wait(webdriver.until.elementLocated({xpath:'//input[@class="button-tab"]'}));

driver.findElement({xpath:'//input[@class="button-tab"]'}).click();
driver.findElement({xpath:'//input[@class="button-tab"]'}).click();


driver.findElement(By.name('LoginForm[username]')).sendKeys('alexander.hritsun@gmail.com'); 
driver.findElement(By.name('LoginForm[password]')).sendKeys('sashahritsun19984'); 
driver.findElement(By.name('yt0')).click();


driver.wait(webdriver.until.elementLocated({xpath:'//*[@id="top_menu"]/li[1]'}));

driver.manage().setTimeouts({implicit: 10000, pageLoad: 10000});
//driver.findElement({xpath:'//*[@id="top_menu"]/li[1]'}).click();

driver.findElement(By.xpath('//*[@id="top_menu"]/li[1]')).click();


//driver.findElement({xpath:'//*[@data-original-title="Створити ЕН"]'}).click();

//<a class="btn btn-small btns btna" href="/newOrder" title data-original-title="Створити ЕН">