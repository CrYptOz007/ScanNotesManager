using System.ComponentModel.DataAnnotations;

namespace ScanNotesManager.DTOs;

public class CreateNoteDto
{
    public string Title { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
}