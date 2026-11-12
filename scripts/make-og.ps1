Add-Type -AssemblyName System.Drawing

$forest = [System.Drawing.Color]::FromArgb(255, 38, 53, 30)
$deepForest = [System.Drawing.Color]::FromArgb(255, 27, 39, 21)
$goldBright = [System.Drawing.Color]::FromArgb(255, 216, 169, 91)
$cream = [System.Drawing.Color]::FromArgb(255, 249, 244, 229)
$sage = [System.Drawing.Color]::FromArgb(255, 201, 214, 184)
$softGreen = [System.Drawing.Color]::FromArgb(255, 59, 80, 48)

$og = New-Object System.Drawing.Bitmap(1200, 630, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($og)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

$bg = New-Object System.Drawing.SolidBrush($forest)
$g.FillRectangle($bg, 0, 0, 1200, 630)
$bg.Dispose()

$band = New-Object System.Drawing.SolidBrush($deepForest)
$g.FillRectangle($band, 0, 500, 1200, 130)
$band.Dispose()

# ridge silhouette
$ridgeBrush = New-Object System.Drawing.SolidBrush($softGreen)
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.StartFigure()
$path.AddLine(0, 630, 0, 540)
$path.AddLine(80, 505, 190, 535)
$path.AddLine(300, 480, 420, 525)
$path.AddLine(540, 495, 660, 530)
$path.AddLine(780, 470, 900, 520)
$path.AddLine(1020, 490, 1120, 530)
$path.AddLine(1200, 510, 1200, 630)
$path.CloseFigure()
$g.FillPath($ridgeBrush, $path)
$path.Dispose()
$ridgeBrush.Dispose()

$goldPen = New-Object System.Drawing.Pen($goldBright, 3)
$goldPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
$goldPen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round
$linePts = @(
  (New-Object System.Drawing.PointF(0, 540)),
  (New-Object System.Drawing.PointF(80, 505)),
  (New-Object System.Drawing.PointF(190, 535)),
  (New-Object System.Drawing.PointF(300, 480)),
  (New-Object System.Drawing.PointF(420, 525)),
  (New-Object System.Drawing.PointF(540, 495)),
  (New-Object System.Drawing.PointF(660, 530)),
  (New-Object System.Drawing.PointF(780, 470)),
  (New-Object System.Drawing.PointF(900, 520)),
  (New-Object System.Drawing.PointF(1020, 490)),
  (New-Object System.Drawing.PointF(1120, 530)),
  (New-Object System.Drawing.PointF(1200, 510))
)
$g.DrawLines($goldPen, $linePts)
$goldPen.Dispose()

# farm badge, top right (transparent corners)
$badge = New-Object System.Drawing.Bitmap("C:\Users\HOTEL LOBBY\Desktop\MJ\STONEY RIDGE FARM\public\images\badge.png")
$badgeRect = New-Object System.Drawing.Rectangle(950, 60, 200, 200)
$g.DrawImage($badge, $badgeRect)
$badge.Dispose()

$serif = New-Object System.Drawing.Font("Georgia", 62, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$serifItalic = New-Object System.Drawing.Font("Georgia", 34, [System.Drawing.FontStyle]::Italic, [System.Drawing.GraphicsUnit]::Pixel)
$sans = New-Object System.Drawing.Font("Segoe UI", 20, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$eyebrow = New-Object System.Drawing.Font("Segoe UI", 16, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)

$creamBrush = New-Object System.Drawing.SolidBrush($cream)
$goldBrush = New-Object System.Drawing.SolidBrush($goldBright)
$sageBrush = New-Object System.Drawing.SolidBrush($sage)
$format = New-Object System.Drawing.StringFormat
$format.Alignment = [System.Drawing.StringAlignment]::Near

$dot = [string][char]0x00B7
$g.DrawString("ROOTED IN NATURE $dot ESTABLISHED 2026", $eyebrow, $goldBrush, 80, 110, $format)
$g.DrawString("Stoney Ridge", $serif, $creamBrush, 76, 155, $format)
$g.DrawString("Farm", $serif, $creamBrush, 76, 235, $format)
$g.DrawString("From farm to table", $serifItalic, $goldBrush, 80, 345, $format)
$g.DrawString("Fruit orchard $dot Fresh herbs $dot Farm eggs $dot Honey $dot Fish", $sans, $sageBrush, 80, 415, $format)

$serif.Dispose(); $serifItalic.Dispose(); $sans.Dispose(); $eyebrow.Dispose()
$creamBrush.Dispose(); $goldBrush.Dispose(); $sageBrush.Dispose(); $format.Dispose()
$g.Dispose()
$og.Save("C:\Users\HOTEL LOBBY\Desktop\MJ\STONEY RIDGE FARM\public\og-image.png", [System.Drawing.Imaging.ImageFormat]::Png)
$og.Dispose()
Write-Output "og-image.png done"
