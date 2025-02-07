 
$(document).on('submit', '#saveStudent', function (e) {
            e.preventDefault();



              var isValid = true;
              var name = $('#name').val();
              var email = $('#email').val();
              var gender = $('#gender').val();
              
              var standard = $('#standard').val();
              var dob = $('#dob').val();
              var age = $('#age').val();
              var father_name = $('#father_name').val();
              var father_mobile = $('#father_mobile').val();

             

              if(name === ''){
                $('#invalid_name').text("Name Field can not be Empty!!");
                $('#invalid_name').css("color", "red");
                $('#name').css({"border": "1px solid red","background": "#FFCECE"});
                return false;                
              }

               else if(email === ''){
                $('#invalid_email').text("email Field can not be Empty!!");
                $('#invalid_email').css("color", "red");
                $('#email').css({"border": "1px solid red","background": "#FFCECE"});
                return false;
                
              }

               else if(IsEmail(email)==false){                    
                $('#invalid_email').text("Invalid Email Format!!");
                $('#invalid_email').css("color", "red");
                $('#email').css({"border": "1px solid red","background": "#FFCECE"});
                return false;
                }

            else if(gender===null){
                $('#invalid_gender').text("gender Fields can not be Empty!!");
                $('#invalid_gender').css("color", "red");
                $('#gender').css({"border": "1px solid red","background": "#FFCECE"});
                return false;
              }

            else if(standard===''){
                $('#invalid_standard').text("standard Fields can not be Empty!!");
                $('#invalid_standard').css("color", "red");
                $('#standard').css({"border": "1px solid red","background": "#FFCECE"});
                return false;
              }

            else if(dob===''){
                $('#invalid_dob').text("dob Fields can not be Empty!!");
                $('#invalid_dob').css("color", "red");
                $('#dob').css({"border": "1px solid red","background": "#FFCECE"});
                return false;
              }

            else if(age===''){
                $('#invalid_age').text("age Fields can not be Empty!!");
                $('#invalid_age').css("color", "red");
                $('#age').css({"border": "1px solid red","background": "#FFCECE"});
                return false;
              }

            else if(father_name===''){
                $('#invalid_father_name').text("father_name Fields can not be Empty!!");
                $('#invalid_father_name').css("color", "red");
                $('#father_name').css({"border": "1px solid red","background": "#FFCECE"});
                return false;
              }

            else if(father_mobile===''){
               $('#invalid_father_mobile').text("Father Mobile Fields can not be Empty!!");
               $('#invalid_father_mobile').css("color", "red")
               $('#father_mobile').css({"border": "1px solid red","background": "#FFCECE"});
               return false;
              }



              else if(isNaN(father_mobile)){
              $('#invalid_father_mobile').text("Father Mobile should be numbers only.!!");
               $('#invalid_father_mobile').css("color", "red")
               $('#father_mobile').css({"border": "1px solid red","background": "#FFCECE"});
               return false;
              }
              else if(father_mobile.length != 10){                    
               $('#invalid_father_mobile').text("Invalid number. It should be 10 digits only.");
               $('#invalid_father_mobile').css("color", "red")
               $('#father_mobile').css({"border": "1px solid red","background": "#FFCECE"});
               return false;
                }
               
              //if (name === '' || email === '' || gender === '' || standard === '' || father_name === '' || father_mobile === '') {
                   /* $('#invalid_name').text("Name Field can not be Empty!!");
                    $('#invalid_email').text("Email Fields can not be Empty!!");
                    $('#invalid_gender').text("Gender Fields can not be Empty!!");
                    $('#invalid_standard').text("Standard Fields can not be Empty!!");
                    $('#invalid_father_name').text("Father Name Fields can not be Empty!!");
                    $('#invalid_father_mobile').text("Father Mobile Fields can not be Empty!!");*/
                  /*  
                    $('#invalid_name').css("color", "red");
                    $('#invalid_email').css("color", "red");
                    $('#invalid_gender').css("color", "red");
                    $('#invalid_standard').css("color", "red");
                    $('#invalid_father_name').css("color", "red");
                    $('#invalid_father_mobile').css("color", "red");*/
                    
                    
                 /*   $('#name').css({"border": "1px solid red","background": "#FFCECE"});
                    $('#email').css({"border": "1px solid red","background": "#FFCECE"});
                    $('#gender').css({"border": "1px solid red","background": "#FFCECE"});
                    $('#standard').css({"border": "1px solid red","background": "#FFCECE"});
                    $('#father_name').css({"border": "1px solid red","background": "#FFCECE"});
                    $('#father_mobile').css({"border": "1px solid red","background": "#FFCECE"});
                   */
                    //return false;
                //}
              /*  else if (IsEmail(email) === false) {
                    $('#invalid_email').text("Entered Email is not Valid!!");
                    $('#email').css({"border": "1px solid red","background": "#FFCECE"});
                    return false;
                }
                else if (father_mobile!='') {
                    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(father_mobile)) {
        $('#invalid_father_mobile').css("color", "green");
        $('#father_mobile').css({"border": "","background": ""});
        
    }
    else {
        $('#invalid_father_mobile').text("Entered Mobile Number is not Valid!!");
        $('#father_mobile').css({"border": "1px solid red","background": "#FFCECE"});
        
    }

                   
                }*/


                else{
                   
                    location.reload();  
                    $('#name').css({"border": "","background": ""});
                    $('#email').css({"border": "","background": ""});
                    $('#gender').css({"border": "","background": ""});
                    $('#standard').css({"border": "","background": ""});
                    $('#dob').css({"border": "","background": ""});
                    $('#age').css({"border": "","background": ""});
                    $('#father_name').css({"border": "","background": ""});
                    $('#father_mobile').css({"border": "","background": ""});
                  
                   $('#invalid_name').text("Valid name!!");
                   $('#invalid_email').text("Valid email!!");
                   $('#invalid_gender').text("Valid gender!!");
                   $('#invalid_standard').text("Valid standard!!");
                   $('#invalid_dob').text("Valid dob!!");
                   $('#invalid_age').text("Valid age!!");
                   $('#invalid_father_name').text("Valid father_name!!");
                   $('#invalid_father_mobile').text("Valid Mobile !!");
                    
                   $('#invalid_name').css("color", "green");
                   $('#invalid_email').css("color", "green");
                   $('#invalid_gender').css("color", "green");
                   $('#invalid_standard').css("color", "green");
                   $('#invalid_dob').css("color", "green");
                   $('#invalid_age').css("color", "green");
                   $('#invalid_father_name').css("color", "green");
                   $('#invalid_father_mobile').css("color", "green");
                    
            var formData = new FormData(this);
            formData.append("save_student", true);

            $.ajax({
                type: "POST",
                url: "code.php",
                data: formData,
                processData: false,
                contentType: false,
                success: function (response) {
                    
                    var res = jQuery.parseJSON(response);
                    if(res.status == 422) {
                        $('#errorMessage').removeClass('d-none');
                        $('#errorMessage').text(res.message);

                    }else if(res.status == 200){

                        $('#errorMessage').addClass('d-none');
                        $('#studentAddModal').modal('hide');
                        $('#saveStudent')[0].reset();

                        alertify.set('notifier','position', 'top-right');
                        alertify.success(res.message);

                        $('#myTable').load(location.href + " #myTable");

                    }else if(res.status == 500) {
                        alert(res.message);
                    }
                }
            });
                            
return true;
            
        }
        return false;
  
        });

 function IsEmail(email) {
            if (!email.trim().includes('@') || email.trim().includes(',')) {
                return false;
            }
            else {
                return true;
            }
        }




        $(document).on('click','.close', function() {
            //alert("Hiiiiii");
            
            location.reload();    
        });


        $(document).on('click', '.editStudentBtn', function () {

            var student_id = $(this).val();

           // alert(student_id);
            
            $.ajax({
                type: "GET",
                url: "code.php?student_id=" + student_id,
                success: function (response) {

                    var res = jQuery.parseJSON(response);
                    if(res.status == 404) {

                        alert(res.message);
                    }else if(res.status == 200){

                        $('#student_id').val(res.data.id);
                        $('#edit_name').val(res.data.name);
                        $('#edit_email').val(res.data.email);
                        $('#edit_gender').val(res.data.gender);
                        $('#edit_standard').val(res.data.standard);
                        $('#edit_father_name').val(res.data.father_name);
                        $('#edit_father_mobile').val(res.data.father_mobile);
                        $('#studentEditModal').modal('show');
                    }

                }
            });

        });

        $(document).on('submit', '#updateStudent', function (e) {
            e.preventDefault();

            var formData = new FormData(this);
            formData.append("update_student", true);

            $.ajax({
                type: "POST",
                url: "code.php",
                data: formData,
                processData: false,
                contentType: false,
                success: function (response) {
                    
                    var res = jQuery.parseJSON(response);
                    if(res.status == 422) {
                        $('#errorMessageUpdate').removeClass('d-none');
                        $('#errorMessageUpdate').text(res.message);

                    }else if(res.status == 200){

                        $('#errorMessageUpdate').addClass('d-none');

                        alertify.set('notifier','position', 'top-right');
                        alertify.success(res.message);
                        
                        $('#studentEditModal').modal('hide');
                        $('#updateStudent')[0].reset();

                        $('#myTable').load(location.href + " #myTable");

                    }else if(res.status == 500) {
                        alert(res.message);
                    }
                }
            });

        });

        $(document).on('click', '.viewStudentBtn', function () {

            var student_id = $(this).val();
            $.ajax({
                type: "GET",
                url: "code.php?student_id=" + student_id,
                success: function (response) {

                    var res = jQuery.parseJSON(response);
                    if(res.status == 404) {

                        alert(res.message);
                    }else if(res.status == 200){

                        $('#view_name').text(res.data.name);
                        $('#view_email').text(res.data.email);
                        $('#view_gender').text(res.data.gender);
                        $('#view_standard').text(res.data.standard);
                        $('#view_father_name').text(res.data.father_name);
                        $('#view_father_mobile').text(res.data.father_mobile);
                        

                        $('#studentViewModal').modal('show');
                    }
                }
            });
        });

        $(document).on('click', '.deleteStudentBtn', function (e) {
            e.preventDefault();

            if(confirm('Are you sure you want to delete this data?'))
            {
                var student_id = $(this).val();
                $.ajax({
                    type: "POST",
                    url: "code.php",
                    data: {
                        'delete_student': true,
                        'student_id': student_id
                    },
                    success: function (response) {

                        var res = jQuery.parseJSON(response);
                        if(res.status == 500) {

                            alert(res.message);
                        }else{
                            alertify.set('notifier','position', 'top-right');
                            alertify.success(res.message);

                            $('#myTable').load(location.href + " #myTable");
                        }
                    }
                });
            }
        });


