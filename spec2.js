describe('add product and order',function(){
    it(',also verify order details',function(){      
   element(by.className('home')).click();
   
    element(by.xpath("//div[@id='block_top_menu']/ul[1]/li[2]/a")).click();
    browser.sleep(3000)
    browser.actions().mouseMove(
    element(by.css("a.product_img_link img[src='http://automationpractice.com/img/p/8/8-home_default.jpg']"))).perform()    
    browser.sleep(3000)
    expect(element(by.css("a[class='button ajax_add_to_cart_button btn btn-default'] span")).isPresent()).toEqual(true)
    expect(element(By.css("span[class='price product-price']")).getText()).toEqual("$26.00")
    element(by.css("a[class='button ajax_add_to_cart_button btn btn-default']  span")).click()
    browser.sleep(9000)
    expect(element(By.css("a[class='btn btn-default button button-medium'] span")).isPresent()).toEqual(true)
    element(by.css("a[class='btn btn-default button button-medium'] span")).click();
    element(By.css("a[class='button btn btn-default standard-checkout button-medium'] span")).click()
    
    browser.sleep(9000)
                  

  let delname= element(By.css("ul#address_delivery li[class='address_firstname address_lastname']")).getText();
let billingname=element(by.css("ul#address_invoice li[class='address_firstname address_lastname']")).getText();
expect(delname).toEqual(billingname)

let delstreet= element(By.css("ul#address_delivery li[class='address_address1 address_address2']")).getText();
let billingstreet=element(by.css("ul#address_invoice li[class='address_address1 address_address2']")).getText();
expect(delstreet).toEqual(billingstreet)
let delcity= element(By.css("ul#address_delivery li[class='address_city address_state_name address_postcode']")).getText();
let billingcity=element(by.css("ul#address_invoice li[class='address_city address_state_name address_postcode']")).getText();
expect(delcity).toEqual(billingcity)
let delcountry= element(By.css("ul#address_delivery li[class='address_country_name']")).getText();
let billingcountry=element(by.css("ul#address_invoice li[class='address_country_name']")).getText();
expect(delcountry).toEqual(billingcountry)
let delmobile= element(By.css("ul#address_delivery li[class='address_phone_mobile']")).getText();
let billingmobile=element(by.css("ul#address_invoice li[class='address_phone_mobile']")).getText();
expect(delmobile).toEqual(billingmobile) 
element(by.css("button[class='button btn btn-default button-medium'] span")).click();
element(by.css("button[class='button btn btn-default standard-checkout button-medium'] span")).click();
browser.sleep(5000)
expect(element(by.css("div[class='fancybox-inner'] p")).getText()).toEqual("You must agree to the terms of service before continuing.");
element(by.css("a[class='fancybox-item fancybox-close']")).click();
browser.sleep(4000)
element(by.css("input[id='cgv']")).click();
element(by.css("button[class='button btn btn-default standard-checkout button-medium'] span")).click();
element(by.css('a.bankwire')).click();
expect(element(By.css("div[class='box cheque-box'] h3")).getText()).toEqual("BANK-WIRE PAYMENT.")
element(By.css("button[class='button btn btn-default button-medium'] span")).click();
let orderdetails=element(by.css("div.box")).getText();
element(by.css("a[class='button-exclusive btn btn-default']")).click();
let orderid=element(By.css("td[class='history_link bold footable-first-column'] a")).getText()
expect(orderdetails).toContain(orderid)
let totalprice=element(by.css("td.history_price span")).getText();
expect(orderdetails).toContain(totalprice)
expect(orderdetails).toContain("bank wire")
//get today date in mm/dd/yyyy format
var today = new Date();
today = String(today.getMonth() + 1).padStart(2, '0') + '/' + String(today.getDate()).padStart(2, '0') + '/' + today.getFullYear();;


let orderdate=element(by.css("td[class='history_date bold']")).getText();
expect(orderdate).toEqual(today)





})

  
  
  })