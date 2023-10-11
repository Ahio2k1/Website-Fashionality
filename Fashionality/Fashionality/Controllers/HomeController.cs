using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Fashionality.Models;

namespace Fashionality.Controllers
{
    
    public class HomeController : Controller
    {
        CT25Team27Entities db = new CT25Team27Entities();
        public ActionResult Index()
        {
             var sanpham = db.SanPham.Where(m => m.status == 2).OrderByDescending(m => m.SoLuong).ToList();

            return View(sanpham);
        }

        public ActionResult Login()
        {
         

            return View();
        }

        public ActionResult SanPham()
        {
            var sanpham = db.SanPham.Where(m => m.status == 1).OrderByDescending(m=>m.NgayNhap).ToList();

            return View(sanpham);
        }
        public ActionResult Sale()
        {
            


            return View();
        }
        public ActionResult Hoodie()
        {
            var sanpham = db.SanPham.Where(m => m.LoaiSanPham == 4).OrderByDescending(m => m.NgayNhap).ToList();

            return View(sanpham);

            
        }
        public ActionResult About()
        {


            return View();
        }

        public ViewResult Contact()
        {
            throw new NotImplementedException();
        }

        public ActionResult Accessories()
        {
            var sanpham = db.SanPham.Where(m => m.LoaiSanPham == 3).OrderByDescending(m => m.NgayNhap).ToList();

            return View(sanpham);

         

            
        }
        public ActionResult LienHe()
        {


            return View();
        }
        public ActionResult DangKy(KhachHang kh )
        {
            //thêm khách hàng vào csdl
            db.KhachHang.Add(kh);
            db.SaveChanges();
            return View();
        }
        public ActionResult GioHang()
        {


            return View();
        }
        public ActionResult Pants()
        {
            var sanpham = db.SanPham.Where(m => m.LoaiSanPham == 2).OrderByDescending(m => m.NgayNhap).ToList();

            return View(sanpham);

            
        }
        public ActionResult Shirts()
        {


            var sanpham = db.SanPham.Where(m => m.LoaiSanPham == 1).OrderByDescending(m => m.NgayNhap).ToList();

            return View(sanpham);
        }
        public ActionResult Search(string key )
        {
            //tìm kiếm theo tên sản phẩm
            var sanpham = db.SanPham.Where(m => m.TenSanPham.Contains(key));
            return View(sanpham.OrderBy(n=>n.TenSanPham));


        }
        public ActionResult ChiTietSP(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SanPham sp = db.SanPham.Find(id);
            if (sp == null)
            {
                return HttpNotFound();
            }
            return View(sp);
        }
        public ActionResult BestSeller()
        {


            var sanpham = db.SanPham.Where(m => m.status == 1).OrderByDescending(m => m.SoLuong).ToList();

            return View(sanpham);
        }
       
    }
}