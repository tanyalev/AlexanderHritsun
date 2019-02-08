var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();

driver.get('https://novaposhta.ua/');

driver.findElement({xpath: '//*[@id="user_menu"]/a[1]/span' }).click(); 
driver.wait(webdriver.until.elementLocated({xpath:'//input[@class="button-tab"]'}));

driver.findElement({xpath:'//input[@class="button-tab"]'}).click();
driver.findElement({xpath:'//input[@class="button-tab"]'}).click();


driver.findElement(By.name('LoginForm[username]')).sendKeys('alexander.hritsun@gmail.com'); 
driver.findElement(By.name('LoginForm[password]')).sendKeys('sashahritsun19984'); 
driver.findElement(By.name('yt0')).click();


//<input type="button" class="button-tab" data-type="person" value="Я приватна особа">
//#popup_login > div > div.tabs.tabs-registration > input:nth-child(2)