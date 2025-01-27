function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    elem = document.getElementById("mainStyleSheet");

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    currStyle = elem.getAttribute("href");

    // 1 (c) Determine new stylesheet file name
    if (currStyle == "style2.css") {
        elem.setAttribute("href","style3.css");
        currStyle = "style3.css";
    }
    else {
        elem.setAttribute("href","style2.css");
        currStyle = "style2.css";
    }

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)

    //localStorage.setItem("style",document.getElementById("mainStyleSheet").getAttribute("href"));
    localStorage.setItem("style",currStyle);
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)

    // 2 (b) get html style element by ID

    // 2 (c) replace href attribute of html element.
    document.getElementById("mainStyleSheet").setAttribute("href",localStorage.getItem("style"));
    
}