input.oncut = input.oncopy = input.onpaste = function (evn) {
    console.log(evn.type + ' - ' + evn.clipboardData.getData('text/plain'));
    return false;
};