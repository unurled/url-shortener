import FetchService from './service/FetchService.js';

/*-- Objects --*/
const fetchService = new FetchService();
/*-- /Objects --*/

/*--Functions--*/
async function submitForm(e, form) {
    // 1. Prevent reloading page
    e.preventDefault();
    // 2. Submit the form
    // 2.1 User Interaction
    const btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.disabled = true;
    setTimeout(() => btnSubmit.disabled = false, 2000);
    // 2.2 Build JSON body
    const jsonFormData = buildJsonFormData(form);
    // 2.3 Build Headers
    const headers = buildHeaders();
    // 2.4 Request & Response
    const response = await fetchService.performPostHttpRequest(window.location.href + `api/url/shorten`, headers, jsonFormData); // Uses JSON Placeholder
    // 2.5 Inform user of result
    if(response) {
        document.getElementById("shortUrl").innerHTML = response.shortUrl
        document.getElementById("shortUrl").href = response.shortUrl
        document.getElementById("longUrl").innerHTML = "Long Url: " + response.longUrl
    }    
    else
        alert(`An error occured.`);
}

function buildHeaders(authorization = null) {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": (authorization) ? authorization : "Bearer TOKEN_MISSING"
    };
    return headers;
}

function buildJsonFormData(form) {
    const jsonFormData = { };
    for(const pair of new FormData(form)) {
        jsonFormData[pair[0]] = pair[1];
    }
    return jsonFormData;
}
/*--/Functions--*/

/*--Event Listeners--*/
const sampleForm = document.querySelector("#form");
if(sampleForm) {
    sampleForm.addEventListener("submit", function(e) {
        submitForm(e, this);
    });
}
/*--/Event Listeners--*/