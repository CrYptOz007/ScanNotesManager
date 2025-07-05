using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using ScanNotesManager.Database;
using ScanNotesManager.Models;
using ScanNotesManager.Controllers;
using ScanNotesManager.Routes;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

builder.Services.AddDbContext<ApplicationDbContext>(opt =>
    opt.UseInMemoryDatabase("Scans")
        .UseSeeding((context, _) =>
       {
           if (!context.Set<Scan>().Any())
           {
               context.Set<Scan>().AddRange(
                   new Scan { CreatedAt = DateTime.UtcNow.AddDays(-7) },
                   new Scan { CreatedAt = DateTime.UtcNow.AddDays(-3) },
                   new Scan { CreatedAt = DateTime.UtcNow.AddDays(-1) },
                   new Scan { CreatedAt = DateTime.UtcNow }
               );
               context.SaveChanges();
           }
       }));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{    
    using var scope = app.Services.CreateScope();
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    context.Database.EnsureCreated();
    
    app.UseDeveloperExceptionPage();
}

app.UseCors();

app.MapScanRoutes();

app.Run();
