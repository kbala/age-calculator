/*
JS library for adaptivemedia
*/
(function AM() {

    if (!window["AM"]) window["AM"] = {};
    var am = window["AM"];
    if (!am.utils) am.utils = {};

    function dateDiff(startDate, endDate)
    {
    	if( typeof startDate != 'object' || typeof endDate != 'object')  { throw new Error("params should be a Date instance")}
    	var msPerDay=24*60*60*1000;
		var totalDays=0;
		var days=0;
		var totalMonths=0;		
		var sDate=startDate.getDate();
		var sMonth=startDate.getMonth()+1;
		var sYear= startDate.getFullYear();
		var eDate=endDate.getDate();
		var eMonth=endDate.getMonth()+1;
		var eYear= endDate.getFullYear();	
		if(startDate > endDate)
		{ 
			throw new Error("'starDate' should be less than 'endDate'")
		}
		if(sMonth==eMonth && sYear==eYear)
		{
			days=totalDays=eDate-sDate;
		}
		else
		{
			sTimestamp=startDate.getTime();

			eTimestamp=endDate.getTime();
			var dMilliSeconds=(((new Date(sYear,sMonth, 0).getDate()+1)-sDate))*msPerDay;	
			sTimestamp=sTimestamp+dMilliSeconds;
			eTimestamp=eTimestamp+dMilliSeconds;			
			while(sTimestamp != eTimestamp)
			{
				var bMonth=new Date(sTimestamp).getMonth();				
				sTimestamp=sTimestamp+msPerDay;
				totalDays++;
				days++;
				var aMonth=new Date(sTimestamp).getMonth();
				if(aMonth!=bMonth){					
					days=0;
					totalMonths++;
				}				
			}							
		}	
		var result = {};
		result.totalDays = totalDays;
		result.totalMonths = totalMonths;
		result.years = (~~(totalMonths/12));
		result.months = totalMonths%12;
		result.days = days;
		return result;
    }

    am.utils.dateDiff = dateDiff;
    return window["AM"];
})();
