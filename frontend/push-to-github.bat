@echo off
echo ===================================
echo  Push to GitHub
echo ===================================
echo.

set /p url="Paste GitHub URL: "
git remote add origin %url%
git push -u origin main
echo Done!
pause