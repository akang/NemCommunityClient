'use strict';
/* globals MutationObserver:true */
define(['jquery'], function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    };

    // set height of scrollable tables
    function setupTableHeight($container) {
        var $tableHead = $container.children('.tradingTable-head'),
            height = $container.height() - $tableHead.height();
        $container.find('.tradingTable-body-container').height(height);
    }

    function eachTdInColumn($rows, index, func) {
        $rows.each(function(trIndex, tr) {
            var $tr = $(tr),
                $td = $tr.children('td').eq(index);

            func($td);
        });
    }

    // set column headers width to fit column data
    function setupTableWidth($container) {
        var $ths = $container.children('.tradingTable-head').find('th'),
            $tableBody = $container.find('.tradingTable-body'),
            $tableBodyContainer = $container.find('.tradingTable-body-container'),
            $dataRows = $tableBody.find('tr');

        $ths.each(function(thIndex, th) {
            var $th = $(th),
                thWidth = $th.outerWidth(),
                tdMaxWidth = 0;

            eachTdInColumn($dataRows, thIndex, function($td) {
                tdMaxWidth = $td.outerWidth() > tdMaxWidth ? $td.outerWidth() : tdMaxWidth;
            });

            if ($tableBodyContainer.hasScrollBar() && thIndex === $ths.length - 1) {
                tdMaxWidth += 16;
            }
            $th.outerWidth(tdMaxWidth);

            // check for the case when head itself is wider
            // than conent
            eachTdInColumn($dataRows, thIndex, function($td) {
                tdMaxWidth = $td.outerWidth() > tdMaxWidth ? $td.outerWidth() : tdMaxWidth;
            });
            thWidth = $th.outerWidth();
            // fix it
            if (tdMaxWidth < thWidth) {
                eachTdInColumn($dataRows, thIndex, function($td) {
                    $td.outerWidth(thWidth);
                });
            }
        });
    }

    function decorator(node) {
        var $container = $(node);

        function setup () {
            setupTableHeight($container);
            setupTableWidth($container);
            setupTableHeight($container);
            setupTableWidth($container);
        }
        var mutationObserver = new MutationObserver(setup);
        setup();

        mutationObserver.observe(node, {
            childList: true,
            subtree: true
        });

        return {
            teardown: function () {
                mutationObserver.disconnect();
            }
        };
    }

    return decorator;
});
