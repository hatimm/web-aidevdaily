$filePath = "c:\Users\HatimMEFTAHI\Desktop\web-aidevdaily\index.html"
$content = [System.IO.File]::ReadAllText($filePath)
$content = $content.Replace("Weavy ", "NEXUS ")
[System.IO.File]::WriteAllText($filePath, $content)
Write-Host "Done - replaced Weavy with NEXUS"
