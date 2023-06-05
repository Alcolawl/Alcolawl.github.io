function sort_drunk_scale() 
{
    var tbody =$('#fullList');

    tbody.find('tr').sort(function(a, b) 
    {
        if($('#drunk_scale_order').val()=='asc') {return $('td:first', a).text().localeCompare($('td:first', b).text());}
        else {return $('td:first', b).text().localeCompare($('td:first', a).text());}		
    }).appendTo(tbody);
	
    var sort_order=$('#drunk_scale_order').val();
    if(sort_order=="asc"){document.getElementById("drunk_scale_order").value="desc";}
    if(sort_order=="desc"){document.getElementById("drunk_scale_order").value="asc";}
}

function sort_name()
{
    var tbody =$('#fullList');

    tbody.find('tr').sort(function(a, b) 
    {
        if($('#name_order').val()=='asc') {return $('td:eq(1)', a).text().localeCompare($('td:eq(1)', b).text());}
        else {return $('td:eq(1)', b).text().localeCompare($('td:eq(1)', a).text());}		
    }).appendTo(tbody);
	
    var sort_order=$('#name_order').val();
    if(sort_order=="asc"){document.getElementById("name_order").value="desc";}
    if(sort_order=="desc"){document.getElementById("name_order").value="asc";}
}

function sort_runtime()
{
    var tbody =$('#fullList');

    tbody.find('tr').sort(function(a, b) 
    {
        if($('#runtime_order').val()=='asc') {return $('td:eq(2)', a).text().localeCompare($('td:eq(2)', b).text());}
        else {return $('td:eq(2)', b).text().localeCompare($('td:eq(2)', a).text());}		
    }).appendTo(tbody);
	
    var sort_order=$('#runtime_order').val();
    if(sort_order=="asc"){document.getElementById("runtime_order").value="desc";}
    if(sort_order=="desc"){document.getElementById("runtime_order").value="asc";}
}