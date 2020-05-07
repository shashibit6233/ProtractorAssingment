var arrayA=[];
 var arrayB=[];
 var compareArray = require('./pageObject/compareArray.js');

 describe("Open application and fetch item detials",function()
{
    it("search item for moto and fetch item detils and compare with first item list ",function()
    {

        browser.get("http://angular.github.io/angular-phonecat/step-12/app/#!/phones");
    
        //fetch item number 
        let items=element(by.css("ul.phones")).all(By.tagName("li"))
       items.count().then(function(count){   })
    
            //fetch product name in a  array
            element.all(by.css("ul.phones li a.ng-binding")).each(function(item)
            {
            item.getText().then(function(text)
            {
                            arrayA.push(text)
            })
            })
            .then(function(){})

            //search for product having text as moto  in name
            var myInput = element(by.css("div.col-md-2 p input"));
            myInput.sendKeys("moto", protractor.Key.ENTER);


        //fetch item number after searching moto 
            let itemsB=element(by.css("ul.phones")).all(By.tagName("li"))
            itemsB.count().then(function(count) {    })

        //fetch item name after search
            element.all(by.css("ul.phones li a.ng-binding")).each(function(item)
                {
                item.getText().then(function(text)
                {
                        arrayB.push(text)
                })
                })
            .then(function(){ })

            function containsmoto(value)
            {
                return value.contains("moto")
            }


        //filter array A having array values which contains moto  
        arrayA=arrayA.filter(containsmoto)


        
        //comparing 2 arrays 
        let status=compareArray.checkArray(arrayA,arrayB)

        expect(status).toBeTrue



            })})