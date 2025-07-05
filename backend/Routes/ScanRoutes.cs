using ScanNotesManager.Controllers;

namespace ScanNotesManager.Routes;

public static class ScanRoutes
{
    public static void MapScanRoutes(this IEndpointRouteBuilder app)
    {
        var scans = app.MapGroup("/scans");

        scans.MapGet("/", ScanController.GetAllScans);
        scans.MapGet("/{id}/notes", ScanController.GetScanNotes);
        scans.MapPost("/{id}/notes", ScanController.CreateScanNote);
    }
}