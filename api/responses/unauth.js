module.exports = function unauth(){

    var req = this.req;
    var res = this.res;
    res.status(501);
};
