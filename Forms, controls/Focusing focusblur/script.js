input.onblur = function () {
    if (!this.value.includes('@')) { // not email
        // show the error
        this.classList.add("errorClass");
        // ...and put the focus back
        input.focus();
    } else {
        this.classList.remove("errorClass");
    }
};