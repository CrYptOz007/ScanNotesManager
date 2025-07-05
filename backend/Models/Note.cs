namespace ScanNotesManager.Models;
public class Note
{
    public int Id { get; set; }
    public int ScanId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public virtual Scan Scan { get; set; } = null!;

}