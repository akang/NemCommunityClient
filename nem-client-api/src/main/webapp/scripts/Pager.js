define([], function() {

    function Pager(pageSize, list, loading) {
        this.pageSize = pageSize;
        this.pageNum = 0;
        this.list = list || [];
        this.loading = loading || false;
    }

    Pager.prototype.getPage = function() {
        return this.list.slice(this.pageNum * this.pageSize, this.pageNum * this.pageSize + this.pageSize);
    };

    Pager.prototype.getNavText = function() {
        var pageStart = this.pageNum * this.pageSize + 1;
        var pageEnd = this.pageNum * this.pageSize + this.getPage().length;
        return  pageStart + ' - ' +  pageEnd + ' of ' + this.list.length;
    };

    Pager.prototype.getTotalPages = function() {
        var length = this.list.length === 0 ? 0 : this.list.length - 1;
        return Math.floor(length / this.pageSize);
    };

    Pager.prototype.getTotalLength = function() {
        return this.list.length;
    };

    Pager.prototype.setLoading = function(isLoading) {
        this.loading = isLoading;
    };

    return Pager;
});
