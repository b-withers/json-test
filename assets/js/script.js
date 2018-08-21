$(document).ready(function(){
            $.getJSON("assets/data/data.json", function(data) {
                console.log(data);
                var applicant_data = '';
                $.each(data.applicants, function(key, value){
                    applicant_data += '<tr>';
                    applicant_data += '<td>' + value.id + '</td>';
                    applicant_data += '<td>' + value.name + '</td>';
                    applicant_data += '<td>' + value.website + '<t/d>';
                    applicant_data += '<td>' + value.cover_letter + '</td>';
                    applicant_data += '</tr>'; 
                });
                $('#applicant_table').append(applicant_data);
            });
        });