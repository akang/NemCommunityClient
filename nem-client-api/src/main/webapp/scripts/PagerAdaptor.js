'use strict';
define(['Pager'], function(Pager) {
    return {

        filter: function(object) {
            return object instanceof Pager;
        },

        // If an object passes the filter, we wrap it.
        wrap: function(ractive, pager, keypath, prefixer) {

            function expose() {
                ractive.set(prefixer({
                    page: pager.getPage(),
                    navString: pager.getNavText(),
                    pageNum: pager.pageNum,
                    totalPages: pager.getTotalPages(),
                    totalLength: pager.getTotalLength(),
                    loading: pager.loading
                }));
            }

            pager.nextPage = function() {
                if (this.getTotalPages() === this.pageNum) {
                    return false;
                }
                this.pageNum++;
                expose();
            };

            pager.previousPage = function() {
                if (this.pageNum === 0) {
                    return false;
                }
                this.pageNum--;

                expose();
            };

            pager.setList = function(list) {
                this.list = list;
                expose();
            };

            pager.resetPage = function() {
                this.pageNum = 0;
                expose();
            };

            pager.setLoading = function(isLoading) {
                this.loading = isLoading;
                expose();
            };

            return {
                teardown: function() {
                    delete pager.getPage;
                    delete pager.getNavText;
                },

                get: function() {
                    return {
                        page: pager.getPage(),
                        navString: pager.getNavText(),
                        pageNum: pager.pageNum,
                        totalPages: pager.getTotalPages(),
                        totalLength: pager.getTotalLength(),
                        loading: pager.loading
                    }
                },

                set: function(property, value) {
                    if (value && ['list'].indexOf(property) !== -1) {
                        pager[property] = value;
                        ractive.set(prefixer({
                            page: pager.getPage(),
                            navString: pager.getNavText(),
                            totalPages: pager.getTotalPages(),
                            totalLength: pager.getTotalLength(),
                            loading: pager.loading
                        }));
                    }
                }
                //,
                // // The `reset()` method is called when you do `ractive.set()`, if the keypath
                // // is _identical_ to the keypath of the wrapped object. Two things could happen
                // // - the wrapped object could modify itself to reflect the new data, or (if it
                // // doesn't know what to do with the new data) it could return `false`, in which
                // // case it will be torn down.
                // reset: function(data) {
                //     // if `data` is a new Box instance, or if it isn't an object at all,
                //     // we should get rid of this one
                //     if (typeof data !== 'object' || data instanceof Pager) {
                //         return false;
                //     }
                //
                //     if (data.width !== undefined) {
                //         box.width = width;
                //     }
                //
                //     if (data.height !== undefined) {
                //         box.height = width;
                //     }
                // }
            };
        }
    };
});
