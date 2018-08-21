$(document).ready(function () {
    $.getJSON("assets/data/data.json", function (data) {
        //I can see all the individual arrays within the JSON file.
        console.log(data.applicants);
        console.log(data.jobs);
        console.log(data.skills);
        //showing basic data from JSON file is working.
        var applicant_data = '';
        //.each loop over the data from data.json
        $.each(data.applicants, function (key, value) {
            applicant_data += '<tr>';
            applicant_data += '<td>' + value.id + '</td>';
            applicant_data += '<td>' + value.name + '</td>';
            applicant_data += '<td>' + value.website + '<t/d>';
            applicant_data += '<td>' + value.cover_letter + '</td>';
            applicant_data += '</tr>';
        });
        $('#applicant_table').append(applicant_data);
        //WORKING ON JOINING / SORTING / MERGING DATA FIELDS??
    });
});
