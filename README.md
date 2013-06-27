## angular-markdown-directive
Original component by [btford](https://github.com/btford/angular-markdown-directive).

### Usage
Static display from content.

    <markdown>**This text will be bold**</markdown>
    
Dynamic update from attribute.

    <textarea ng-init="mdSource='**This text will be bold**'" ng-model="{{mdSource}}"></textarea>
    <markdown markdown="{{mdSource}}"></markdown>
    
or

    <div markdown="{{mdSource}}"></div>

### License
MIT
