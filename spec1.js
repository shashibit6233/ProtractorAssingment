let  number=    Math.floor((Math.random() * 100000) + 10000);
global.username= `xyz${number}@test.com`

describe("Open application",function()
{
    it("and do registeration for signIn,then verify my account page ",function()
    {
    element(by.className('login')).click();
    element(by.id('email_create')).sendKeys(username);
    element(by.className('icon-user left')).click();
    element(by.id('id_gender1')).click();
    element(by.id('customer_firstname')).sendKeys('shashi');
    element(by.id('customer_lastname')).sendKeys('shekhar');
    element(by.id('passwd')).sendKeys('abc@123');

    let daydd=element(by.id('days'));
      daydd.all(by.tagName('option')).each(function(options){
          options.getAttribute('value').then(function(value){
              if(value==30)
               {
                  options.click();
               }              
                                                            })
                                                            })
    let monthdd=element(by.id('months'));
      monthdd.all(by.tagName('option')).each(function(options){
          options.getAttribute('value').then(function(value){
              if(value==9)
                  {
                  options.click();
                  }
                                                                })
                                                                })
    let yeardd=element(by.id('years'));
      yeardd.all(by.tagName('option')).each(function(options){
          options.getAttribute('value').then(function(value){
              if(value==1991)
                  {
                  options.click();
                  }
                                                                    })
                                                                    })
    element(by.id('address1')).sendKeys('test line area');
    element(by.id('city')).sendKeys('testcity');
    let statedd=element(by.id('id_state'));
      statedd.all(by.tagName('option')).each(function(options){
           options.getAttribute('value').then(function(value){
            if(value==1)
                {
                options.click();
                }
                                                                        })
                                                                        })
    element(by.id('postcode')).sendKeys(12200);
    element(by.id('phone_mobile')).sendKeys(1234567890);
    element(by.id('submitAccount')).click();
    expect(browser.getTitle()).toEqual('My account - My Store')

})

})