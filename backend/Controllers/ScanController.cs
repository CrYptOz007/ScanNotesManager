using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using ScanNotesManager.Database;
using ScanNotesManager.DTOs;
using ScanNotesManager.Models;

namespace ScanNotesManager.Controllers;

public static class ScanController
{
    public static async Task<IResult> GetAllScans(ApplicationDbContext db)
    {
        System.Diagnostics.Debug.WriteLine("Fetching all scans from the database.");
        return TypedResults.Ok(await db.Scans.ToArrayAsync());
    }

    public static async Task<IResult> GetScanNotes(int id, ApplicationDbContext db)
    {
        var notes = await db.Notes
            .Where(n => n.ScanId == id)
            .ToArrayAsync();
        
        if (!await db.Scans.AnyAsync(s => s.Id == id))
            return TypedResults.NotFound();
        
        return TypedResults.Ok(notes);
    }

    public static async Task<IResult> CreateScanNote(int id, CreateNoteDto inputNote, ApplicationDbContext db)
    {
        if (string.IsNullOrWhiteSpace(inputNote.Title))
        {
            return TypedResults.BadRequest(new { error = "Title is required" });
        }

        var scan = await db.Scans.FindAsync(id);
        if (scan is null) return TypedResults.NotFound();

        var note = new Note
        {
            ScanId = id,
            Title = inputNote.Title,
            Content = inputNote.Content,
            CreatedAt = DateTime.UtcNow
        };

        db.Notes.Add(note);
        await db.SaveChangesAsync();

        return TypedResults.Created($"/scans/{id}/notes/{note.Id}", note);
    }
}