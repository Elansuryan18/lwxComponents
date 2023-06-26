({
	handleAddItem : function(component, event, helper) {
		var handleItem = event.getParam("item");
        var coverage = event.getParam("coverage");
        
        var action = component.get("c.saveItem");
        
        action.setParams({
            "campingItems" : handleItem,
            "coverage" : coverage
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                var retResponse = response.getReturnValue();
                var oldvalues = component.get("v.items");
                oldvalues.push(retResponse);
                component.set("v.items", oldvalues); 
                //alert(JSON.stringify(oldvalues));
                var totalVal=0;
                oldvalues.forEach(function(element){
                    totalVal=totalVal+element.Price__c;
                });
                console.log(totalVal);
                component.set("v.totalPrice", totalVal);
        }else if(state == 'ERROR')
        {
            console.log("Error in AdventureListItem_Helper");
        }
	});
        $A.enqueueAction(action);
},
    
    deleteRow : function (component, event, helper) { 
    var selecteditem = event.currentTarget;
    var selecteditemName = selecteditem.getAttribute("data-value");
    var action = component.get("c.deleteItem");
    action.setParams({ "deleteitem": selecteditemName });
    
    action.setCallback(this, function(response){
    var state = response.getState();
    if(state === 'SUCCESS'){
        var retResponse = response.getReturnValue();
        if(response.getReturnValue()===true){ 
            this.handleAddItem(component, event, helper);
         }
        
    }else if (state === "ERROR") { 
        console.log('Error');
    }
  });
   $A.enqueueAction(action);
},
    
    
    checkout : function(component, event, helper){
        alert("We can integrate payment gateway after that click!. \n Thanks for watching :)");
    }
})