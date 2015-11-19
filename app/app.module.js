angular.module('app', ['app.main'])
    .controller('SampleCntl', function () {
        var sample = this;

        sample.user = {

        };


        sample.isNameValid = function () {
            return sample.myForm.userName.$invalid && sample.myForm.userName.$dirty
        };

        sample.submit = function () {
            if (sample.myForm.$valid) {
                console.log('valid');
            } else {
                console.log('invalid');
            }
        };
        sample.resetForm = function () {
            sample.user = {};
            sample.myForm.$setPristine();
            sample.myForm.$setUntouched();
        };
        sample.submitActive = function () {
            return sample.myForm.$valid && sample.user.password === sample.password2;
        }
    });
