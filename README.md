# SASS Skeleton

Simple SASS skeleton folder structure. Clone the repo, then run `npm install`. You will then be able to run gulp commands to compile and watch any changes to the project. Run `gulp serve` to launch the project and automatically watch changes to SCSS and HTML. If you want to independently compile SASS, run *gulp sass*.

### SCSS Directory
The SCSS directory is split into *base* classes and *module* classes. The base classes contain a starting point for your project, and the module classes can be added to as you build your project.

#### Base
The base folder is split up into three sub-folders:
- Helpers  – this contains variables, resets and utility classes
- Layout	 — this contains grids and global, high-level elements like wrappers
- Elements – this contains global element classes for html elements like headings, lists and forms

##### Helpers Explained
Mixins: Located in *base/helpers/_mixins*, this contains useful SASS helpers
Reset: Eric Meyer's CSS Reset
Utilities: Contain global "helper" classes such as a clearfix
Vars: Main point of control for font-sizes, grid-sizes, colours and breakpoints

##### Layout Explained
Grids: Contains a mixin to calculate a grid, variables for this are set in *base/helpers/vars*
Layout: High-level elements that are generally used on every page to control layout

##### Elements Explained
Often we find that we have similar types of style for particular types of elements that aren't specifically attached to a particular module or UI component. In this instance we can set a "base element" style to create a globally used class, this is useful for things like headings or form field styles. In the elements folder we have sub-folders separated into element type or function.