# Author: M. Mahdi Javid
# this script is used to commit changes to the repository with the current date and time
$CurrTime = Get-Date
git add -A
git commit -m "Commit at $CurrTime"
git push
