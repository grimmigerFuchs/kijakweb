# gulpfile.sh

echo -e "\n\e[1m\e[31mCompiling 'gulpfile.coffee' into 'gulpfile.js'...\e[0m"
echo -e "Command: 'coffee -c --no-header gulpfile.coffee'"
coffee -c --no-header gulpfile.coffee
echo -e "\e[32mDone.\n"
