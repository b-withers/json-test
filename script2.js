//use XMLHttpRequest to load data from the json file

//(method='GET', url='/assets/data/data.json')
function loadJSON(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        //(method='GET', url='/assets/data/data.json')
        //xhr.open initializes the request
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                })
            }
        };
        xhr.onerror = function () {
            reject({
                status: xhr.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
};


function sortData(data) {
    data = JSON.parse(data);
    let sortedArray = [];
    // Loop through job data
    for (let i = 0; i < data.jobs.length; i++) {
        // create an array on the jobs[i] object to store corresponding applicants data in
        data.jobs[i].applicants = [];
        // loop through applicants to match job ids
        for (let k = 0; k < data.applicants.length; k++) {
            // create a new array property on the applicant's object to store their skills
            data.applicants[k].skills = [];
            // loop through skills to match up with applicant ids
            for (let l = 0; l < data.skills.length; l++) {
                // if applicant id and skill match, push skill into applicant skills property
                if (data.applicants[k].id === data.skills[l].applicant_id) {
                    data.applicants[k].skills.push(data.skills[l]);
                };
            };
            // after skills have been matched and stored with applicant, push applicant data into jobData object
            if (data.jobs[i].id === data.applicants[k].job_id) {
                data.jobs[i].applicants.push(data.applicants[k]);
            };
        };
        sortedArray.push(data.jobs[i]);
    };
//    console.log(sortedArray);
    return buildTable(sortedArray);
}

function buildTable(data) {
    console.log(data);
}



loadJSON('GET', '/assets/data/data.json').then(res => sortData(res)).catch(err => console.log('err', err));