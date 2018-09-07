# Udacity-Feed-Reader-Testing ![](https://img.shields.io/badge/Code%20Statue-CLose-red.svg)
This repository is the code that I created during the Udacity Feed Reader Testing project.

Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

# Demo
Currently, this web page is hosted using the GitHub Pages feature because it is a site developed solely using static files.

You can access this project through this [link](https://sangumee.github.io/Udacity-Feed-Reader-Testing/) now.

# Installation
You can download with this [link](https://github.com/sangumee/Udacity-Feed-Reader-Testing/archive/master.zip) and install in your web server. If you already installed the Visual Studio Code or Github Program, You can access it directly with these programs.

# Specific Test suites
1. RSS Feed
```js
it('RSS Feeds are defined', function () {
    // Check allFeeds variables are defined
    expect(allFeeds).toBeDefined();
    // Check Array.lengh is 0
    expect(allFeeds.length).not.toBe(0);
});
it('URL is defined and it is not empty', function () {
    allFeeds.forEach(function (feed) {
    //checks if URL is defined
    expect(feed.url).toBeDefined();
    //checks if URL is not empty 
    expect(feed.length).not.toBe(0);
    });
});
it('Has a name defined and this name is not empty', function () {
    allFeeds.forEach(function (feed) {
    //checks name is defined
    expect(feed.name).toBeDefined();
    //checks name is not an empty
    expect(feed.name).not.toBe('');
    });
});
```

2. The menu
```js
it('menu element is hidden by default', function () {
    // Check the body element class is menu-hidden
    expect($('body').attr('class')).toBe('menu-hidden');
});
it('visibility when the menu icon is clicked', function () {
    // First Click
    $('.menu-icon-link').click();
    // When it clicks, body class should be not menu-hidden
    expect($('body').attr('class')).not.toBe('menu-hidden');
    // Second Click 
    $('.menu-icon-link').click();
    // When second clicks, body class should be menu-hidden to close
    expect($('body').attr('class')).toBe('menu-hidden');
    });
});
```

3. Initial Entries
```js
beforeEach(function (done) {
    loadFeed(0, function () {
    done();
    });
});
it('there is at least a single .entry element within the .feed container', function (done) {
    // PostLength Null Check
    let postLength = $('.feed .entry')[0];
    expect(postLength).not.toBeNull();
    done();
});
```

4. New Feed Selection
```js
beforeEach(function (done) {
    loadFeed(0, function () {
    beforeFeed = $('.feed .entry').html();
    done();
    });
});
it('Content changes', function (done) {
    loadFeed(1, function () {
    // Compare with beforeFeed
    expect($('.feed .entry').html()).not.toEqual(beforeFeed);
    done();
    });
});
```

# Contact
If you have some questions or issues about this repository please contact me with the [Issue](https://github.com/sangumee/Udacity-Feed-Reader-Testing/issues) section.

# License
This project is released under the [MIT License](https://choosealicense.com/licenses/mit/). If you think there is a problem with this license, please file an issue through the Issue section.
