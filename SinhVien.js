// //--------------X: OOP--------------
// //es5
// var SinhVienES5 = function () {
//     this.ma = '';
//     this.ten = '';
//     this.thongTinSinhVien = function () {
//         console.log('mã:', this.ma);
//         console.log('ten:', this.ten);
//     }
// }

// // es6
// class SinhVienES6 {
//     #lop=1;
//     //Thuộc tính
//     ma = '';
//     ten = '';
//     // Phương thức khởi tạo được gọi khi newSinhVienES6
//     constructor(maSV, tenSV) {
//         this.ma = maSV;
//         this.ten = tenSV;
//     }
//     // Phương thức
//     thongTinSinhVien() {
//         console.log(this.ma);
//         console.log(this.ten);
//         console.log(this.#lop);
//     }
//     // Đây là một phương thức không phải thuộc tính
//     xuatThongTinSinhVien = () => {
//         console.log(this.ma);
//         console.log(this.ten);
//     }
// }

// var sv = new SinhVienES6(1,'Dang Phuc Minh');
// console.log(sv);

// // ------------------- OOP Super()
// export class NhanVien {

//     ma = '';
//     ten = '';
//     constructor(ma, ten){
//         this.ma = ma;
//         this.ten = ten;
//     }

//     xuatThongTinNhanVien = () =>{
//         console.log(this.ma);
//         console.log(this.ten);
//     }
// }
// var nv = new NhanVien(10, 'Hoàng Đình Men')
// console.log(nv);

// // ----------------Kế thừa Extends
// export class GiaoVien extends NhanVien {
//     dsLopHoc = [];
//     constructor(ma,ten){
//         super(ma,ten);
//     }
//     tinhLuong = () =>{
//         console.log(1000000);
//     }
// }

// export const domain = "http://lms.myclass.vn/my/";

// var gv = new GiaoVien(1, 'Nguyen Thi Hanh');
// gv.xuatThongTinNhanVien();


// // -----------Export default file chir export được một lần duy nhất
// export default GiaoVien;

