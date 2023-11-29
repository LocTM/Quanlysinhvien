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
function showStudents() {
    let studentList = document.getElementById('student-list').querySelector('table');
// duyệt mảng
    students.forEach((student, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${student.name}</td>
                         <td>${student.address}</td>
                         <td>${student.phone}</td>
                         <td>${student.gender}</td>
                         <td><button onclick="editStudent(${index})">Sửa</button></td>
                         <td><button class="delete-button" onclick="deleteStudent(${index})">Xóa</button></td>`;
        studentList.appendChild(row);
    });
}
showStudents();1

