let students = [
    {
        name: "Trần Minh Lộc",
        address: "Hà Nội",
        phone: "0989999999",
        gender: "Nam"
    },
    {
        name: "Nguyễn Đình Thống",
        address: "Hà Nội",
        phone: "09123456789",
        gender: "Nam"
    },
    {
        name: "Nguyễn Đình Phong",
        address: "Hà Nội",
        phone: "0988888888",
        gender: "Nam"
    }
];
// Show danh sách sinh viên
function showStudentList() {
    let content = "<tr><th>Họ và tên</th><th>Địa chỉ</th><th>Số điện thoại</th><th>Giới tính</th><th></th><th></th></tr>";

    students.forEach((student, index) => {
        content += `<tr>
                        <td>${student.name}</td>
                        <td>${student.address}</td>
                        <td>${student.phone}</td>
                        <td>${student.gender}</td>
                        <td><button onclick="editStudent(${index})">Sửa</button></td>
                        <td><button onclick="deleteStudent(${index})" class="delete-button">Xóa</button></td>
                    </tr>`;
    });

    document.getElementById("student-list").querySelector('table').innerHTML = content;
}

// Thêm sv
function addStudent() {
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let phone = document.getElementById('phone').value;
    let gender = document.getElementById('gender').value;

    if (!name || !address || !phone || !gender) {
        alert("Hãy nhập đầy đủ thông tin");
        return;
    }

    let newStudent = {
        name: name,
        address: address,
        phone: phone,
        gender: gender
    };

    students.push(newStudent);
//reset form
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone').value = '';
    showStudentList();
}

// Hàm xóa sinh viên
function deleteStudent(index) {
    if (confirm("Bạn có chắc chắn muốn xóa sinh viên này không?")) {
        students.splice(index, 1);
        showStudentList();
    }
}
showStudentList();

function editStudent(index) {
    let editedName = prompt("Nhập tên mới:", students[index].name);
    let editedAddress = prompt("Nhập địa chỉ mới:", students[index].address);
    let editedPhone = prompt("Nhập số điện thoại mới:", students[index].phone);
    let editedGender = prompt("Nhập giới tính mới:", students[index].gender);

    if (editedName === null || editedAddress === null || editedPhone === null || editedGender === null) {
        return alert("Hãy nhập lại");
    }
    students[index] = {
        name: editedName,
        address: editedAddress,
        phone: editedPhone,
        gender: editedGender
    };
    showStudentList();
}
// Hàm search
function searchStudents() {
    // Lấy từ khóa trong input và chuyển thành chữ thường
    let searchTerm = document.getElementById('search').value.toLowerCase();

    // Dùng hàm filter để lọc sinh viên theo từ khóa tìm kiếm
    let filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm) ||
        student.address.toLowerCase().includes(searchTerm) ||
        student.phone.toLowerCase().includes(searchTerm) ||
        student.gender.toLowerCase().includes(searchTerm)
    );

    // cho sinh viên được lọc vào 1 chuỗi mới
    let content = "";
    filteredStudents.forEach((student, index) => {
        content += `<tr>
                        <td>${student.name}</td>
                        <td>${student.address}</td>
                        <td>${student.phone}</td>
                        <td>${student.gender}</td>
                        <td><button onclick="editStudent(${index})">Sửa</button></td>
                        <td><button onclick="deleteStudent(${index})" class="delete-button">Xóa</button></td>
                    </tr>`;
    });

    // Cập nhật nội dung tbody của bảng với nội dung sinh viên được lọc
    document.querySelector('tbody').innerHTML = content;
}

// Gắn hàm searchStudents() cho event input của ô searh
document.getElementById('search').addEventListener('input', searchStudents);






