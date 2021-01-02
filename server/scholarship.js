$(document).ready(function() {
    // create variables to dom 
    var $searchTerm = $('#searchTerm');
    var $searchButton = $('#searchButton');
    var $getAllButton = $('#getAllButton');
    var $tableDiv = $('#tableDiv');

    // create api object for ajax calls
    var searchAPI = {

        getAll: function() {
            return $.ajax({
                url: '/scholarships/all',
                type: 'GET'
            });
        },
        searchTerm: function(term) {
            return $.ajax({
                url: '/scholarships/search/' + term,
                type: 'GET'
            });
        }
    };
    
    // functions called by listeners
    var handleSearchSubmit = function(event) {
        var searchTerm = $searchTerm.val().trim();

        searchAPI.searchTerm(searchTerm).then(function(resp) {
            var data = prepareResponseForTable(resp);
            makeTable($tableDiv, data);
        });
        //clear search field
        $searchTerm.val('');
    }
    var handleGetAll = function (event) {

        searchAPI.getAll().then(function(resp) {
            var data = prepareResponseForTable(resp);
            makeTable($tableDiv, data);
        })
        .catch(function(err) {
            console.log(err);
        });
    };

    // utilities
    function makeTable(container, data) {
        var table = $("<table/>").addClass("table table-striped");
        $.each(data, function(rowIndex, r) {
            var row = $("<tr/>");
            $.each(r, function(colIndex, c) {
                row.append($("<t" + (rowIndex == 0 ? "h" : "d") + 
                "/>").text(c));
            });
            table.append(row);
        });
        return container.html(table);
    }
    function prepareResponseForTable(response) {
        var data = [];
        data[0] = ["Scholarship"]; // row header
    

        response.forEach(function (eachItem) {
            data.push([eachItem.title, eachItem.deadline, 
                eachItem.award, eachItem.description]);
        });
        return data;// returns arrays for table
    }

    //listeners
    $searchButton.on('click', handleSearchSubmit);
    $getAllButton.on('click', handleGetAll);


})