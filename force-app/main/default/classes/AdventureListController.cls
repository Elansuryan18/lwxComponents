public class AdventureListController {
	@auraEnabled(cacheable=true)
    public static Camping_Items__c saveItem(Camping_Items__c campingItems , String coverage)
    {
        List<Camping_Items__c> CampingList = new List<Camping_Items__c>();
        Camping_Items__c campitem = new Camping_Items__c(); 
        
        campitem.Name=campingitems.Name;
        
        if(coverage=='Basic'){
            campitem.Price__c=campingitems.Price__c+(campingitems.Price__c*10/100);
    }
        else if (coverage=='Full'){
        campitem.Price__c=campingitems.Price__c+(campingitems.Price__c*20/100);
    }
    else
    {
    campitem.Price__c=campingitems.Price__c;
    }
        campitem.Quantity__c = campingitems.Quantity__c;
        campitem.Insurance_covered__c = campingitems.Insurance_covered__c;
        CampingList.add(campitem);
    return campitem;
}
    
    
    @auraEnabled
    public static boolean deleteItem(String deleteitemName) {
        boolean dummyVar=false;
        List<Camping_Items__c> campitem=[Select Id,Name FROM Camping_Items__c WHERE Name =:deleteItemName limit 1];
                     delete campitem;
                     dummyVar=true;
                     return dummyVar;
}
}