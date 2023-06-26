({
    createItem : function(component, event, helper) {
        var saveRecordEvent = $A.get("e.c:addItemEvent"); 
        console.log('saveRecordEvent from event' + saveRecordEvent);
        var newitemlist= component.get("v.newItem");
        var coverage = component.get("v.selectCoverage");
        
        saveRecordEvent.setParams({
            "item": newitemlist,
            "coverage": coverage
         });
        saveRecordEvent.fire();
        component.set("v.newItem", {'sobjectType': 'Camping_Items__c',                           
                                    'Name': '',                          
                                    'Quantity_c': 0,                               
                                    'Price_c': 0,                         
                                    'Insurance_covered__c': false                             
                                   });
        component.set('v.showcomponent', false);

        component.set('v.selectCoverage','');
    
    }
})