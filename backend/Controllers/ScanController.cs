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
        return TypedResults.Ok(new
        {
            success = true,
            message = "Scans fetched successfully",
            payload = await db.Scans.ToArrayAsync()
        });
    }

    public static async Task<IResult> GetScanNotes(int id, ApplicationDbContext db)
    {
        var notes = await db.Notes
            .Where(n => n.ScanId == id)
            .ToArrayAsync();
        
        if (!await db.Scans.AnyAsync(s => s.Id == id))
            return TypedResults.Ok(new 
            {
                success = false,
                message = "Scan not found",
                payload = Array.Empty<Note>()
            });
        
        return TypedResults.Ok(new
        {
            success = true,
            message = "Scan notes fetched successfully",
            payload = notes
        });
    }

    public static async Task<IResult> CreateScanNote(int id, CreateNoteDto inputNote, ApplicationDbContext db)
    {
        if (string.IsNullOrWhiteSpace(inputNote.Title))
        {
            return TypedResults.BadRequest(new
            {
                success = false,
                message = "Title is required",
                payload = (object?)null
            });
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

        return TypedResults.Created($"/scans/{id}/notes/{note.Id}", new
        {
            success = true,
            message = "Note created successfully",
            payload = note
        });
    }
}