#pragma checksum "C:\Users\jpola\Downloads\T36-ASP_NET_CLI-master\VIEW_C07_JWT\VIEW_C07_JWT\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "433bc425f4a6cd2cbd49f74cab6aae10d9edd546"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\jpola\Downloads\T36-ASP_NET_CLI-master\VIEW_C07_JWT\VIEW_C07_JWT\Views\_ViewImports.cshtml"
using VIEW_C07_JWT;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\jpola\Downloads\T36-ASP_NET_CLI-master\VIEW_C07_JWT\VIEW_C07_JWT\Views\_ViewImports.cshtml"
using VIEW_C07_JWT.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"433bc425f4a6cd2cbd49f74cab6aae10d9edd546", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"7c8aa0528e68040fbd6510bc5296f3646e40592a", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("d-flex"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "C:\Users\jpola\Downloads\T36-ASP_NET_CLI-master\VIEW_C07_JWT\VIEW_C07_JWT\Views\Home\Index.cshtml"
   ViewData["Title"] = "Home Page"; 

#line default
#line hidden
#nullable disable
            WriteLiteral("\n<div class=\"row\">\n    <div class=\"col title\">\n        <h1>Listado de Usuarios del Sistema</h1>\n    </div>\n</div>\n<div class=\"row\">\n \n    <div class=\"col-6\">\n        ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "433bc425f4a6cd2cbd49f74cab6aae10d9edd5464016", async() => {
                WriteLiteral("\n            <input class=\"form-control me-2\" type=\"search\" placeholder=\"Buscar\" aria-label=\"Search\">\n        ");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"
    </div>
    <div id=""lista"" class=""row"">
        <div class=""col"">
            <div class=""table-responsive"">
                <table it=""taula"" class=""table table-striped table-bordered "">
                    <thead>
                        <tr>
                            <th scope=""col"">
                                ID Producto
                            </th>
                            <th scope=""col"">
                                Nombre
                            </th>
                            <th scope=""col"">
                                Categoria
                            </th>
                            <th scope=""col"">
                                Color
                            </th>
                            <th scope=""col"">
                                Precio Unidad
                            </th>
                            <th scope=""col"">
                                Cantidad Disponible
                            </th>
                            <th scope=""");
            WriteLiteral(@"col"">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody id=""contentTable"">
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<div class=""row"">
    <div class=""col-9"">
        Mostrando del 1 al 5 de un total de 5 registros
    </div>

    <div class=""container""></div>
    <div class=""col-3"">
        <nav aria-label=""Navegación"">
            <ul class=""pagination"">
                <li class=""page-item""><a class=""page-link"" href=""#"">Anterior</a></li>
                <li class=""page-item active""><a class=""page-link"" href=""#"">1</a></li>
                <li class=""page-item""><a class=""page-link"" href=""#"">Siguiente</a></li>
            </ul>
        </nav>
    </div>
</div>
<div class=""row"">
    <div class=""col-3"">
    </div>
    <div class=""col-9""></div>
</div>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
