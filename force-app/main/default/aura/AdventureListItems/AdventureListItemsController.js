({
	
    handleAddItem: function (component, event, helper) { 
        helper.handleAddItem(component, event, helper);
     
    },
    
    //delete rows
    removeRow: function (component, event, helper) {
        helper.deleteRow(component, event, helper);
    },
    //display msg on checkout
    checkoutClick: function (component, event, helper) {
        helper.checkout (component, event, helper);
    }

})