// //----------------I: Khai báo biến với từ khóa var let const ---------------------
// // Sự khác biệt của var let const
// // var: Hỗ trợ cơ chế hoisting (Có thể khai báo nhiều lần trong 1 scope => gán lại giá trị)

// // Let: Không hỗ trợ cơ chế hoisting (trong 1 scope chỉ khai báo 1 biến duy nhất => scope phân biệt biến)

// // Const: Tương tự Let tuy nhiên dùng để khia báo giá trị hằng số (không gán lại được) đối với kiểu dữ liệu cơ sở 
// // (number, string, boolean, null, undefine). Đối với kiểu dữ liệu là object thì không gán được bằng object mới tuy nhiên có thể gán
// // lại từng thuộc tính bên trong. array thì không thể gán array mới tuy nhiên có thể gán lại các phần tử bên trong.

// let number = 5;
// {
//     // Nội dung bên trong scope
//     let number = 10;
//     console.log('numeber1', number);
// }
// console.log('number2', number);

// var numbers = 5;
// {
//     // Nội dung bên trong scope
//     var numbers = 10;
//     console.log('numeber3', numbers);
// }
// console.log('number4', numbers);

// const domain = 'https://cybersoft.edu.vn/api';

// const sinhVien = {
//     ma: 1,
//     ten: 'A',
// }
// // // Lỗi 
// // sinhVien = {
// //     ma: 2,
// //     ten: 'B'
// // }
// sinhVien.ma = 2;
// sinhVien.ten = 'B';
// console.log('sinhVien', sinhVien);

// // ---------------II: Arrow function -----------------
// // Arrow function: Nếu nội dung hàm có duy nhất 1 lệnh return thì khong cần ghi {return} có thể thay bằng => kết quả

// // ES5
// var tinhTichS5 = function (a, b) {
//     return a * b;
// }
// var tich = tinhTichS5(5, 10)
// console.log('tichES5', tich);

// // ES6
// var tinhTichES6 = (c, d) => c * d;
// var tichES6 = tinhTichES6(5, 10);
// console.log('tichES6', tichES6);

// var apiChinhSua = thamSo => 'http://svcy.myclass.vn/api/quanlynguoidung/xoanguoidungn?manguoidung=' + thamSo; // Chỉ có một tham số thì không cần dấu ngoặc 
// apiChinhSua(5); // api có chứa tham số

// // Arrow function sử dụng trong đối tượng và lớp đối tượng
// // Trong ES6 arrow function dùng để khai báo hàm, hoặc phương thức
// // function dùng để khai báo phương thức
// // class dùng để khai báo lớp đối tượng

// // Xây dựng đối tượng dựa trên funtion es5
// let hocVien = {
//     hoTen: 'Nguyen Van A',
//     lop: 'frontEnd xxx',
//     layThongTinHocVien: function () {
//         // Cách khác: hienThiThongTin = () => {
//         var hienThiThongTin = () => {
//             console.log(`Ho ten: ${this.hoTen} - Lop: ${this.lop}`);
//         }
//         hienThiThongTin();
//     }
// }
// // dùng đối tượng hocVien gọi phương thức layThongTinHocVien()
// hocVien.layThongTinHocVien();

// // ------------III: Rest params---------------
// // ...

// // var tinhTong = (a, b) => {
// //     var tong = Number(a) + Number(b);
// //     console.log('tinhTong2So',tong);
// // }

// var tinhTong = (...restParams) => {
//     switch (restParams.length) {
//         case 2: {
//             var tong = Number(restParams[0] + restParams[1]);
//             console.log('tong', tong);
//             return tong;
//         };
//         case 3: {
//             var tong = Number(restParams[0] + restParams[1] + restParams[2]);
//             console.log('tong', tong);
//             return tong;
//         };
//         case 4: {
//             var tong = Number(restParams[0] + restParams[1] + restParams[2] + restParams[3]);
//             console.log('tong', tong);
//             return tong;
//         };
//         default: {
//             console.log('Dữ liệu không hợp lệ!');
//             return 0;
//         };
//     }
// }
// tinhTong(1, 2);
// tinhTong(1, 2, 3);
// tinhTong(1, 2, 3, 4)
// tinhTong(1, 2, 3, 4, 5)

// // -----------IV: Spread operator----------
// var sinhVien = {
//     ma: 1,
//     ten: 'Nguyen Van A',
//     lop: 'frontEnd54',
//     hienThiThongTin: () => {
//         console.log(`Ma:,${this.ma}`);
//         console.log(`lop:,${this.lop}`);
//         console.log(`ten:,${this.ten}`);
//     }
// }

// // Lấy ra thông tin sinh viên 
// // ------------- Spread operator object
// // C1:
// let { ma, ten, ...sv } = sinhVien;
// console.log(sv.lop);
// // // C2:
// // var ma = sinhVien.ma;
// // var ten = sinhVien.ten

// // Ex1:
// let num1 = 5;
// let num2 = num1;
// num2 = 10;
// console.log('num1', num1);
// console.log('num2', num2);

// // Ex2:
// let sv1 = { ma: 1, ten: 'Teo' };
// let sv2 = { ...sv1, lop: 'FE54--1', ten: 'Nam' };
// // sv2.ma = 10;
// // sv2.ten = 'Nam';
// console.log('sv1', sv1);
// console.log('sv2', sv2);

// // --------------Spread operator array
// let arrNumber1 = [1, 2, 3, 4, 5];
// let arrNumber2 = [...arrNumber1, 9, 97, ...arrNumber1];
// console.log('arr1', arrNumber1);
// console.log('arr2', arrNumber2);

// // --------------------V: Default param ------------------
// // Tham số mặc định cho hàm: Khi truyền tham số thì sẽ lấy giá trị mình truyền, không truyền tham số lẻ lấy giá trị mặc định
// var thongTinSinhVien = (ten = 'Nam', namSinh = '1999', tuoi = (2020 - namSinh)) => {
//     console.log(`ten: ${ten} - Tuổi: ${tuoi}`);
// }
// thongTinSinhVien();
// thongTinSinhVien('Minh', 2001);


// -----------------------VI: Destructuring--------------------
// // Object
// var lopHoc = {
//     maLop: 'FE54',
//     tenLop: 'FrontEnd54',
//     hienThiThongTinLop: () => {
//         console.log('ma lop', lopHoc.maLop);
//         console.log('ten lop', lopHoc.tenLop);
//     },
//     thongTinMoRong: {
//         diaChi: '82 UVK',
//         soDienThoai: '0366210327',
//     }
// }
// let { maLop, tenLop, hienThiThongTinLop, thongTinMoRong } = lopHoc;
// let { diaChi, soDienThoai } = thongTinMoRong;
// // hienThiThongTinLop();
// console.log('ma lop:', maLop);
// console.log('dia chi:', diaChi);

// // Array
// let ngaySinh = [10, 10, 2010];
// let [ngay, thang, nam] = [10, 10, 2010];
// // Dữ liệu object thể hiện bằng array
// let lh = [
//     'FE54',
//     'FrontEnd54',
//     () => {
//         console.log('ma lop', lh[0]);
//         console.log('ten lop', lh[1]);
//     },
//     {
//         diaChi: '82 UVK',
//         soDienThoai: '0366210327',
//     }
// ]
// // C1:
// lh[2]();

// // C2:
// let [maLopHoc, tenLopHoc, thongTinLopHoc, ...restParams]= lh;
// thongTinLopHoc();
// console.log(restParams);

// // ------------------------- VII: Stringtemplate ------------------------
// console.log('abxxyes');

// //-------------------------- VIII: Object Literals ----------------------
// // Truyền động thuộc tính
// var sanPham = {
//     ['maSP']: 1,
//     ['tenSP']: 'Iphone12 pro max',
//     ['gia']: 1000
// }
// console.log('Sản phẩm:',sanPham);
// // Từ tên biến giá trị tạo ra tên thuộc tính 
// var maSP = 1;
// var tenSP = 'Iphone XS MAX';
// var gia = 1200;

// var thongTinSanPham = () =>{
//     console.log('sp:',maSP,tenSP,gia);
// }

// var sp = {
//     maSP,
//     tenSP,
//     gia,
//     thongTinSanPham
// }

// sp.thongTinSanPham();

// // ------------------------- IX: For in and For of
// let mangSP = [
//     {maSP:1, tenSP: 'IPhone', gia:1000},
//     {maSP:2, tenSP: 'IPhone X', gia:1200},
//     {maSP:3, tenSP: 'IPhone XS', gia:1300}
// ]
// // Mảng sản phẩm thể hiện dưới định dạng object
// let mangSPOject = {
//     'O': {maSP:4, tenSP: 'IPhone 9', gia:1400},
//     'a5': {maSP:5, tenSP: 'IPhone 10', gia:1500},
//     'luia81.$57()sdhasd7': {maSP:6, tenSP: 'IPhone 11', gia:1600},
// }
// console.log('SPO1', mangSPOject.a5);
// console.log('SPO1', mangSPOject.O);
// console.log('SPO1', mangSPOject['luia81.$57()sdhasd7']);

// // for in dùng để duyệt mảng dưới dạng object từ 1 số cơ sở dữ liệu đặc biệt 
// // for of: Dùng để duyệt mảng object bình thường
// // for i tăng dần

// // for i tăng dần
// for(let i = 0; i<mangSP.length; i++){
//     console.log('SP1:',mangSP[i]);
// }
// // for in
// for (let index in mangSP){
//     let sanPham = mangSP[index]
//     console.log('SP2:',sanPham);
// }
// for (let key in mangSPOject){
//     let sanPham = mangSPOject[key]
//     console.log('SP2_1:',sanPham);
// }

// // for of
// for (let sanPhamFO of mangSP){
//     console.log('SP3',sanPhamFO);
// }

// // ---------------- Import
// import { GiaoVien, NhanVien, domain } from './SinhVien.js';
// import GiaoVien123 from './SinhVien.js';

// let giaoVien = new GiaoVien(1, 'Nguyen Van K');
// console.log('giaoVien:', giaoVien);

// let nv = new NhanVien(2, 'Hung LOKA');
// console.log('nhanVien:', nv);

// console.log('domain', domain);

// let giaoVienX = new GiaoVien123(123, 'Le Thi T');
// console.log('giaoVien123:', giaoVienX);

// ---------------- Filter()
let mangSanPham = [
    { maSP: 1, tenSP: 'Sony Xperia XZ2', gia: 17500000, hangSX: 'SONY' }, //index: 0
    { maSP: 2, tenSP: 'Sony Xperia XZ1', gia: 15500000, hangSX: 'SONY' }, //index: 1
    { maSP: 3, tenSP: 'Sony Xperia XZPremium', gia: 18500000, hangSX: 'SONY' }, //index: 2
    { maSP: 4, tenSP: 'Google Pixel XL', gia: 27500000, hangSX: 'GOOGLE' },
    { maSP: 5, tenSP: 'Google Pixel 2', gia: 17500000, hangSX: 'GOOGLE' },
    { maSP: 6, tenSP: 'Samsung Galaxy Note 9', gia: 17500000, hangSX: 'SAMSUNG' },
    { maSP: 7, tenSP: 'Samsung Galaxy S10 Plus', gia: 27500000, hangSX: 'SAMSUNG' },
    { maSP: 8, tenSP: 'Samsung Galaxy 5G', gia: 37500000, hangSX: 'SAMSUNG' },
]

// // ---------------- Filter()
// // ES5 console.log() các sản phẩm có hangSX là samsung
// let result = [];
// // Duyệt mảng và kiểm tra
// // for (let sp of mangSanPham) {
// //     if (sp.hangSX == "SAMSUNG") {
// //         result.push(sp);
// //     }
// // }
// for (let i = 0; i < mangSanPham.length; i++) {
//     let sp = mangSanPham[i];
//     if (sp.hangSX === "SAMSUNG") {
//         result.push(sp);
//     }
// }
// console.log('ES5:', result);

// // ES6: Lấy ra sản phẩm có hãng sx = sangsung
// // .filterfilter(callback): Là hàm lấy ra các kết quả trong hàm callback trả về giá trị true
// // C1: 
// let result1 = mangSanPham.filter((sp) => {
//     if (sp.hangSX === 'SAMSUNG') return true;
// });
// console.log('ES6_1:', result1);
// // C2:
// let mangDienThoaiSony = mangSanPham.filter(sanPham => sanPham.hangSX === 'SONY');
// console.log('ES6_2:', mangDienThoaiSony);

// // Lấy ra các sản phẩm có giá trên 20tr
// let dienThoaiTren20tr = mangSanPham.filter(sanPham => sanPham.gia > 20000000);
// console.log('SP > 20tr:', dienThoaiTren20tr);

// // ---------------- Find()
// // find(): Tương tự pt filter những kết quả trả về là một đối tượng đầu tiên thỏa điều kiện, ngược lại trả về undefine 
// // khi không tìm thấy. Thường dùng cho thuộc tính khác biệt giữa các đối tượng trong mảng (thuộc tính khóa chính)

// // Lấy ra 1 sp có mã là 7
// var spTimKiem = mangSanPham.find(sp => sp.maSP === 7);
// if (!spTimKiem) {
//     console.log('Không tìm thấy sản phẩm', spTimKiem);
// } else {
//     // let sp = {...spTimKiem}; // Fix ko cho giá bị thay đổi
//     // sp.gia = 10000;
//     console.log('spTimKiem:', spTimKiem);
// }
// // console.log('mangSP', mangSanPham);

// // ---------------- FindIndex(): Tương tự hàm find => tìm thấy sẽ trả index (có thể chỉnh sửa haocjw xóa dựa vào index). 
// // Nếu không tìm thấy sẽ trả về -1
// var index = mangSanPham.findIndex(sp => sp.maSP === 2);
// console.log('index:', index);
// if (index !== -1) {
//     // Tìm thấy 
//     // Xóa đi
//     // mangSanPham.splice(index, 1);
//     // Sửa
//     mangSanPham[index].gia = 2000000;
// } else {
//     console.log('Không tìm thấy sp');
// }
// console.log('sanPham:', mangSanPham);

// var arrResult = mangSanPham.filter(sp => sp.maSP !== 2);
// console.log('arrResult',arrResult);

// // ---------------- ForEach(): Kết quả trả về của hàm này là undefine => thường dùng cho việc duyệt mảng
// mangSanPham.forEach((sp,index) => {
//     console.log('sanPham:', sp);
// })


// ----------- map(): Tương tự foreach duyệt qua các phần tử của mảng để biến đổi mảng đó thành mảng khác
var mangDivSanPham = mangSanPham.map((sp, index) => {
    return `
    <div class="col-3">
        <div class="card text-left">
            <img class="card-img-top" src="http://picsum.photos/200/200" alt="">
            <div class="card-body">
                <h6 class="card-title">${sp.tenSP}</h6>
                <p class="card-text">${sp.gia}</p>
            </div>
        </div>
    </div>
    `
});
// console.log('Mảng sản phẩm:', mangDivSanPham);

for (let divSP of mangDivSanPham) {
    document.getElementById('divSanPham').innerHTML += divSP;
}

// Chỉ lấy sp của samsung
var mangSPSamSung = mangSanPham.filter((sp => sp.hangSX === "SAMSUNG"));
var mangTrSanPham = mangSPSamSung.map((sp, index) => {
    return `
    <tr>
        <td>${sp.maSP}</td>
        <td>${sp.tenSP}</td>
        <td>${sp.gia}</td>
        <td><img class="card-img-top" src="http://picsum.photos/50/50" alt="" style="width:50px"></td>
        <td>${sp.hangSX}</td>
        <td><button class="btn btn-danger">Xóa</button></td>
    </tr>
    `
})

for (let trSP of mangTrSanPham) {
    document.getElementById('tblSanPham').innerHTML += trSP;
}

// reduce: Là hàm trả về 1 giá trị duy nhất của mảng
let tongTienSP = mangSanPham.reduce((tongTien,sanPham,index) => {
    tongTien += sanPham.gia;
    return tongTien;
},0);
console.log('tongTienTatCaSP:',tongTienSP.toLocaleString());


let chuoiTheTr = mangSanPham.reduce((chuoiTr, sp, index) => {
    chuoiTr += `
    <tr>
        <td>${sp.maSP}</td>
        <td>${sp.tenSP}</td>
        <td>${sp.gia}</td>
        <td><img class="card-img-top" src="http://picsum.photos/50/50" alt="" style="width:50px"></td>
        <td>${sp.hangSX}</td>
        <td><button class="btn btn-danger">Xóa</button></td>
    </tr>
    `
    return chuoiTr;
}, '');
document.getElementById('tblSanPhamTr').innerHTML = chuoiTheTr;
