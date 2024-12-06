git fetch
git pull origin <branch-name>
git log

# if last commit
git commit --amend -m "New commit message"

# if older
git rebase -i HEAD~<number-of-commits>
# Replace <number-of-commits> with how far back the commit is in the history (e.g., HEAD~5 for the last 5 commits).
# In the interactive rebase interface, find the commit you want to rename and replace pick with reword.
# Save and close the editor, then enter the new commit message when prompted.
git push origin <branch-name> --force
