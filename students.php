<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
      

    <title>STUDENT CRUD</title>

       
       <link href='css/jquery-ui.css' rel='stylesheet'>
   <link rel="stylesheet" href="css/bootstrap.min.css">
   <link rel="stylesheet" href="css/alertify.min.css">
    <script src="js/jquery.min.js" ></script>
    <script src="js/jquery-ui.min.js"></script>   
       
       <script src="js/bootstrap.bundle.min.js"></script>
       <script src="js/alertify.min.js"></script>
      
       <script src="js/students_crud_form.js"></script>
    
       
</head>
<body>

<!-- Add Student -->
<div class="modal fade" id="studentAddModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Student</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form id="saveStudent">
            <div class="modal-body">

                <div id="errorMessage" class="alert alert-warning d-none"></div>

                <div class="mb-3">
                    <label for="">Name</label>
                    <input type="text" name="name" id="name" class="form-control" />
                    <p class="error" id="invalid_name">
                </div>
                <div class="mb-3">
                    <label for="">Email</label>
                    <input type="text" name="email" id="email" class="form-control" />
                    <p class="error" id="invalid_email"></p>
                </div>                 
                <div class="mb-3">
                    <label for="">Gender</label>
                    <select name="gender" id="gender" class="form-control">
                            <option value="" disabled="disabled" selected>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Transgender">Transgender</option>
                        </select>
                        <p class="error" id="invalid_gender"></p>
                </div>
                <div class="mb-3">
                    <label for="">Standard</label>
                    <input type="text" name="standard" id="standard" class="form-control" />
                    <p class="error" id="invalid_standard"></p>
                </div>  
                <div class="mb-3">
                    <label for="">Dob</label>
                    <input type="text" name="dob" id="dob" class="form-control" />
                    <p class="error" id="invalid_dob"></p>
                </div> 
                <div class="mb-3">
                    <label for="">Age</label>
                    <input type="text" name="age" id="age" class="form-control" />
                    <p class="error" id="invalid_age"></p>
                </div> 
                <div class="mb-3">
                    <label for="">Father Name</label>
                    <input type="text" name="father_name" id="father_name" class="form-control" />
                    <p class="error" id="invalid_father_name"></p>
                </div>
                <div class="mb-3">
                    <label for="">Father Mobile</label>
                    <input type="text" name="father_mobile" id="father_mobile" class="form-control" />
                    <p class="error" id="invalid_father_mobile"></p>
                </div>              
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Save Student</button>
            </div>
        </form>
        </div>
    </div>
</div>

<!-- Edit Student Modal -->
<div class="modal fade" id="studentEditModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Student</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form id="updateStudent">
            <div class="modal-body">

                <div id="errorMessageUpdate" class="alert alert-warning d-none"></div>

                <input type="hidden" name="student_id" id="student_id" >

                <div class="mb-3">
                    <label for="">Name</label>
                    <input type="text" name="name" id="edit_name" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Email</label>
                    <input type="text" name="email" id="edit_email" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Gender</label>
                    <select name="gender" id="edit_gender" class="form-control">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                </div>
                <div class="mb-3">
                    <label for="">Standard</label>
                    <input type="text" name="standard" id="edit_standard" class="form-control" />
                </div>   
                <div class="mb-3">
                    <label for="">Dob</label>
                    <input type="text" name="dob" id="edit_dob" class="form-control" />
                   
                </div> 
                <div class="mb-3">
                    <label for="">Age</label>
                    <input type="text" name="age" id="edit_age" class="form-control" disabled />
                    
                </div>              
                <div class="mb-3">
                    <label for="">Father Name</label>
                    <input type="text" name="father_name" id="edit_father_name" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Father Mobile</label>
                    <input type="text" name="father_mobile" id="edit_father_mobile" class="form-control" />
                </div>
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Update Student</button>
            </div>
        </form>
        </div>
    </div>
</div>

<!-- View Student Modal -->
<div class="modal fade" id="studentViewModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">View Student</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
            <div class="modal-body">

                <div class="mb-3">
                    <label for="">Name</label>
                    <p id="view_name" class="form-control"></p>
                </div>
                <div class="mb-3">
                    <label for="">Email</label>
                    <p id="view_email" class="form-control"></p>
                </div>
                <div class="mb-3">
                    <label for="">Gender</label>
                    <p id="view_gender" class="form-control"></p>
                </div>
                <div class="mb-3">
                    <label for="">Standard</label>
                    <p id="view_standard" class="form-control"></p>
                </div>
                 <div class="mb-3">
                    <label for="">Dob</label>
                    <p id="view_dob" class="form-control"></p>
                </div>
                 <div class="mb-3">
                    <label for="">age</label>
                    <p id="view_age" class="form-control"></p>
                </div>
                <div class="mb-3">
                    <label for="">Father Name</label>
                    <p id="view_father_name" class="form-control"></p>
                </div>
                 <div class="mb-3">
                    <label for="">Father Phone</label>
                    <p id="view_father_mobile" class="form-control"></p>
                </div>
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div class="container mt-4">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4>STUDENTS DETAIL
                        
                        <button type="button" class="add_btn btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#studentAddModal">
                            Add Student
                        </button>
                    </h4>
                </div>
                <div class="card-body">

                    <table id="myTable" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Standard</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            require 'dbcon.php';

                            $query = "SELECT * FROM students";
                            $query_run = mysqli_query($conn, $query);

                            if(mysqli_num_rows($query_run) > 0)
                            {
                                foreach($query_run as $student)
                                {
                                    ?>
                                    <tr>
                                        <td><?= $student['id'] ?></td>
                                        <td><?= $student['name'] ?></td>
                                        <td><?= $student['email'] ?></td>
                                        <td><?= $student['father_mobile'] ?></td>
                                        <td><?= $student['standard'] ?></td>
                                        <td>
                                            <button type="button" value="<?=$student['id'];?>" class="viewStudentBtn btn btn-info btn-sm">View</button>
                                            <button type="button" value="<?=$student['id'];?>" class="editStudentBtn btn btn-success btn-sm">Edit</button>
                                            <button type="button" value="<?=$student['id'];?>" class="deleteStudentBtn btn btn-danger btn-sm">Delete</button>
                                        </td>
                                    </tr>
                                    <?php
                                }
                            }
                            ?>
                            
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
</div>  
       
  
      
</body>
</html>