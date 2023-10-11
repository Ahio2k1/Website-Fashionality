using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Fashionality.Startup))]
namespace Fashionality
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
