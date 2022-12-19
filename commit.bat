@REM get current directory and save it to a variable for later use
set currentDir=%cd%
@REM change commit.ps1 permissions to allow execution
icacls %currentDir%\commit.ps1 /grant %username%:F
@REM execute commit.ps1
powershell -executionpolicy ByPass -File %currentDir%\commit.ps1
@REM Unblock-File -Path .\commit.ps1
@REM powershell -executionpolicy ByPass -File .\commit.ps1