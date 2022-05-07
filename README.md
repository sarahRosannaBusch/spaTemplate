# spaTemplate

A template repository for building single-page applications that can be hosted on GitHub Pages. Uses semantic html, css/sass, vanilla javascript, and nodeJS. Use this template is as, delete the parts you don't need to create a simple webpage, or easily extend it to create a complex website.

Follow the patterns established here to create responsive, accessible, user-focused web pages with code that adheres to common best practices and is easy to read, test, and maintain.

## Getting started
*Skip steps 2 and 3 if you already have node and sass installed.

1. Create a new repository from this one by clicking the "Use this template" button in gitHub.
2. Download and install node and npm from nodejs.org
3. Install sass from the command line: `npm install -g sass`
4. Run sass so it auto-compiles on save: `sass --watch --no-source-map styles.scss styles.css` 
5. Run server: `node server.js`
6. Open webpage in browser at `localhost:9999/index.html`
7. Delete my example content and add your own, or rearrange things to how you like them and save as your own template repository

## Overview

The purpose of this template is to set up a workspace that contains only the essential starting components for front-end web development. It has minimal dependencies so you can add your favourite libraries and frameworks without any conflicts.

### File Structure

I like to keep a project's primary files at the top level. GitHub Pages looks for an index.html file at the top of a repo, so that is required. The server should always be at the top too, so relative pathing is straightforward. And keeping main.js and the primary stylesheet at the top makes everything easy to follow and find.

### server.js

A bare-bones nodeJS server that handles simple GET and POST requests. Run this server as the simplest way to get around CORS policy blockage so that AJAX requests will work in your development environment. Note that GitHub Pages only host webpages, they do not run server files, so if you extend this server to handle back-end changes you will need to serve your site elsewhere.

### index.html

As a single-page application, all meta data is included here as well as links to all stylesheets. All scripts are loaded at the bottom so the primary markup loads first.

### styles.scss

If you only require a few style classes or you don't want to use Sass, you can delete this file (and the styles folder) and just modify the .css file directly. But if you have a lot styles to manage, setting yourself up with modular scss components will save you a lot of headache. Or you can swap this out with whatever css framework you like best.

### main.js

I like to treat every javascript file as a single module that only adds one variable to the global namespace (ideally whose name the same as the filename.) Using the module pattern, as I have here, makes controlling which objects are public and which are private easy and robust. Page initialization, navigation, and communications with the server should be handled in main. All other scripts should be independent modules stored in the 'libs' folder, except view controllers which can go under 'views' or be put in a 'viewControllers' folder, if you prefer.