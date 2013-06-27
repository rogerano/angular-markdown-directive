# angular-markdown-directive
Original component by [btford](https://github.com/btford/angular-markdown-directive).
Bower Component for a simple AngularJS Markdown directive using [Showdown](https://github.com/coreyti/showdown). Based on [this excellent tutorial](http://blog.angularjs.org/2012/05/custom-components-part-1.html) by [@johnlinquist](https://twitter.com/johnlindquist).

## Usage
Static display from content.
    <markdown>**This text will be bold**</markdown>
Dynamic update from attribute.
    <textarea ng-init="mdSource='**This text will be bold**'" ng-model="{{mdSource}}"></textarea>
    <markdown markdown="{{mdSource}}"></markdown>

## License
MIT
