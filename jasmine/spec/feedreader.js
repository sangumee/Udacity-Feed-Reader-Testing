$(function () {
    describe('RSS Feeds', function () {
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
                expect(feed.url.length).not.toBe(0);
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
    });
    describe('The menu', function () {
        it('menu element is hidden by default', function () {
            // Check the body element class is menu-hidden
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        it('visibility when the menu icon is clicked', function () {
            // First Click
            $('.menu-icon-link').click();
            // When it clicks, body class should be not menu-hidden
            expect($('body').hasClass('menu-hidden')).toBe(false);
            // Second Click 
            $('.menu-icon-link').click();
            // When second clicks, body class should be menu-hidden to close
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });
        it('there is at least a single .entry element within the .feed container', function (done) {
            // PostLength Null Check
            let postLength = $('.feed .entry')[0];
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });
    describe('New Feed Selection', function () {
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
    });
}());