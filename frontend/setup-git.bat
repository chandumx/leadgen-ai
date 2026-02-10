@echo off
echo ===================================
echo  Git Setup
echo ===================================
echo.

git --version >nul 2>&1
if errorlevel 1 (
    echo Git not installed! Download from git-scm.com
    pause
    exit
)

git init
set /p name="Enter your name: "
git config user.name "%name%"
set /p email="Enter your email: "
git config user.email "%email%"
git add .
git commit -m "Initial commit"
echo Done!
pause