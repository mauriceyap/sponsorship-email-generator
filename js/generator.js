var app = angular.module('emailGenerator', []);

app.controller('emailGeneratorCtrl', function($scope) {
    $scope.yourName = '';
    $scope.yourPos = '';
    $scope.company = '';
    $scope.theirName = '';
    $scope.email = '';
    // company types - software: 1, engineering: 2, consultancy: 3, other: 4
    $scope.companyType = 'software';

    $scope.essentialsFilled = function() {
        return $scope.yourName.length > 0 &&
            $scope.yourPos.length > 0 &&
            $scope.theirName.length > 0 &&
            $scope.company.length > 0;
    };

    $scope.emailFilled = function() {
        return $scope.email.length > 0;
    };

    // If you're using the "we're great for companies in your sectors because...", change this:
    $scope.getSuitabilityMessage = function() {
        if ($scope.companyType == 'software') {
            return "We're great for software companies like " + $scope.company + ", because...!";
        }
        if ($scope.companyType == 'engineering') {
            return "We're great for engineering companies like " + $scope.company + ", because...!";
        }
        if ($scope.companyType == 'consultancy') {
            return "We're great for consultancy companies like " + $scope.company + ", because...!";
        }
        return "Although we have historically chiefly focused on x companies, we think our members would be a great fit for " + $scope.company + " because...!";
    };

    $scope.getMessage = function() {
        $('textarea').trigger('input');
        var string = "Hi " + $scope.theirName + ",\n\n";
        string += "I'm " + $scope.yourName + " and I’m the incoming " + $scope.yourPos + " of Imperial College London’s MySociety. ";
        string += "We'd love " + $scope.company + " to sponsor us!\n\n";
        string += "You should consider sponsoring us because we're quite good.\n\n";

        // Uncomment this if you're using the "we're great for companies in your sectors because..." bit
        //string += $scope.getSuitabilityMessage() + "/n/n"''

        string += "Here's another reason why we're awesome.\n\n";
        string += "I’ve attached our Sponsorship Proposal. I hope that on this occasion, you swipe right!\n\n";
        string += "Kind regards,\n" + $scope.yourName;
        return string;
    };

    $scope.getEmailMessageBody = function() {
        return encodeURIComponent($scope.getMessage());
    };
});
