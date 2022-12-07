function User(name) {
    this._id = 'xyz';
    this.name = name;
}

User.prototype.getUserId = function () {
    return this._id;
}

User.prototype._destroy = function () {
    this._id = null;
};

const user = new User('Todd Motto');

user._id;
document.write(user.getUserId() + "<br>" + "<br>" + "<br>");
document.write(user._destroy() + "<br>" + "<br>" + "<br>");
document.write(user.getUserId() + "<br>" + "<br>" + "<br>");