var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://novaposhta.ua/');

driver.findElement({xpath: '//*[@id="user_menu"]/a[1]/span' }).click(); 

driver.wait(webdriver.until.elementLocated({xpath: '//*[@id="popup_login"]/div/div[1]/input[2]'}));

driver.findElement(By.name('LoginForm[username]')).sendKeys('Test'); 
driver.findElement(By.name('LoginForm[password]')).sendKeys('Test'); 

driver.findElement(By.name('yt0')).click();

var driver2 = new webdriver.Builder().forBrowser('chrome').build();
driver2.get('https://novaposhta.ua/');

driver2.findElement({xpath: '//*[@id="user_menu"]/a[1]/span' }).click();
driver2.wait(webdriver.until.elementLocated({xpath: '//*[@id="popup_login"]/div/div[1]/input[2]'}));
driver2.findElement(By.name('yt0')).click();

