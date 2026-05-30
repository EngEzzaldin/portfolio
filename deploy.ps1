param(
  [switch]$Prod = $false
)

$env:VERCEL_PROJECT_ID = "portfolio-virid-three-58"

Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Cyan
$cmd = "npx vercel ."
if ($Prod) { $cmd += " --prod" }

Write-Host "`nCommand: $cmd" -ForegroundColor Gray
Write-Host "`n⚠ Make sure you're logged in: npx vercel login" -ForegroundColor Yellow
Write-Host "`nTo deploy:" -ForegroundColor Green
Write-Host "  .\deploy.ps1" -ForegroundColor White
Write-Host "  .\deploy.ps1 -Prod (for production)" -ForegroundColor White
