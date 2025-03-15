#!/bin/bash

main() {
    clear
    cd /Applications/MacSploit.app/Contents/Resources/CodeViewer_CodeViewer.bundle/Contents/Resources/ace.bundle || exit
    
    curl -s "https://raw.githubusercontent.com/curriesandwich/t/main/cool.js" -o "theme-tomorrow_night.js"

    img="${1:-https://your-image.com/background.jpg}"

    sed -i '' "s|https://i.imgur.com/example.jpeg|$img|g" "theme-tomorrow_night.js"

    echo "Background image updated to $img"
    echo "this was made off of EclipsaSolaria's themes, and i also am not very great with CSS styling so you might face some issues. anyways i tried my best ty"
}

# Call the function
main "$@"
