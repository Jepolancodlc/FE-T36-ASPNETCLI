using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Vista_C07.Controllers
{
    public class PagesController : Controller
    {
        public IActionResult Tabla()
        {
            return View();
        }
    }
}
