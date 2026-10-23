// Run from the repository root: swift -module-cache-path /tmp/portfolio-swift-cache scripts/build-resume.swift
import AppKit
import PDFKit

final class ResumeView: NSView {
    override var isFlipped: Bool { true }
    var content: String = ""
    var bottom: CGFloat = 0
    override func draw(_ dirtyRect: NSRect) {
        NSColor.white.setFill()
        bounds.fill()
        var y: CGFloat = 30
        let width: CGFloat = 540
        for raw in content.components(separatedBy: .newlines) where !raw.isEmpty {
            var line = raw
            var size: CGFloat = 9.1
            var bold = false
            var gap: CGFloat = 1.5
            var x: CGFloat = 36
            if line.hasPrefix("# ") {
                line = String(line.dropFirst(2)); size = 19; bold = true; gap = 4
            } else if line.hasPrefix("## ") {
                line = String(line.dropFirst(3)); size = 11; bold = true; y += 5; gap = 4
            } else if line.hasPrefix("**") {
                line = line.replacingOccurrences(of: "**", with: ""); bold = true; y += 2
            } else if line.hasPrefix("- ") {
                line = "– " + line.dropFirst(2); x = 42
            }
            let paragraph = NSMutableParagraphStyle()
            paragraph.lineSpacing = 0.7
            if x == 42 { paragraph.headIndent = 8 }
            let attributes: [NSAttributedString.Key: Any] = [
                .font: bold ? NSFont.boldSystemFont(ofSize: size) : NSFont.systemFont(ofSize: size),
                .foregroundColor: NSColor.black,
                .paragraphStyle: paragraph
            ]
            let text = NSAttributedString(string: line, attributes: attributes)
            let height = ceil(text.boundingRect(with: NSSize(width: width - (x - 36), height: 1000), options: [.usesLineFragmentOrigin, .usesFontLeading]).height)
            text.draw(with: NSRect(x: x, y: y, width: width - (x - 36), height: height), options: [.usesLineFragmentOrigin, .usesFontLeading])
            y += height + gap
        }
        bottom = y
    }
}
let view = ResumeView(frame: NSRect(x: 0, y: 0, width: 612, height: 792))
view.content = try String(contentsOfFile: "resume.md", encoding: .utf8)
let data = view.dataWithPDF(inside: view.bounds)
guard view.bottom <= 767 else { fatalError("Resume overflows page: \(view.bottom)") }
guard let pdf = PDFDocument(data: data), pdf.pageCount == 1 else { fatalError("Expected one-page PDF") }
pdf.documentAttributes = [PDFDocumentAttribute.titleAttribute: "Arya Venkat Resume", PDFDocumentAttribute.authorAttribute: "Arya Venkat"]
guard pdf.write(toFile: "public/resume.pdf") else { fatalError("Could not write PDF") }
print("Wrote public/resume.pdf (1 page, content ends at \(view.bottom)/792 points)")
