# rental-redesign

 * Site hosted on GitHub Pages: https://andrew-wragg.github.io/rental-redesign/

This project uses ViteJS for development, with auto-deployment to github pages when pushing new commits.

# Redesign points
* Set desktop max-width to 1280px: For better use of available screen area.
* Changed logo colour to blue: The grey lacks impact.
* Simplified main nav.
    * Change Dashboard to My Account: My Account is a more common naming convention.
    * Removed 'Manage' nav item: Was a duplicate of 'My Account'.
    * Changed user's name to 'My Account' in top right: For clarity of expected click behaviour.
    * Removed 'My Account' sub-nav: 
        * Too many sub-navs are messy and hard to navigate.
        * 'Switch accounts' seems superfluous.
        * 'Log out' not required as can be found in My Account / Dashboard.
    * 
* My Account left Nav bar:
    * Added 'Edit account' option, instead of 'Account' tab in secondary nav.
    * Changed 'Log Off' to 'Log out'.
* My Account / Dashboard:
    * Changed name to My Account.
    * Added larger border-radius value to boxes.
    * 
* General site design:
    * Site would benefit from the use of a design system.
    * Lack of consistency between pages and sections of site.
        * Use of border-radius on boxes and images is inconsistent.
        * Font colours are inconsistent and sometimes have poor contrast with bg. Bad for accessibility.
        * 
    * OpenRent branding is inconsistent:
        * Colour of logo on Google search is blue, colour on site landing page is white, colour on other pages is grey.
        * I would recommend use blue on light background and white on dark background.  No other colour variations.
        * I feel the grey logo used on light backgrounds lacks impact. 



# Setup
After cloning the repository, simply install the dependencies:
```shell
% npm i
```

# Development
The following command will build a dev version of the site and host it locally.
A localhost url and local network IP will be provided.
The local network IP can be used to view the site on any device connected to the local network.
```shell
% npm run dev
```

# Build
Running the build command will build the site to the `dist` folder.
```shell
% npm run build
```

# Deploy
There is a github deploy script included in the project.
When git commits are pushed to github, this triggers the build script in github, which will build the site and deploy it to GitHub Pages.  You can find the URL at the top of the README.
```shell
% git push
```
