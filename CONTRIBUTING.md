# How To Contribute

Community made patches, localizations, bug reports and contributions are always welcome. Your help is greatly appreciated.

When contributing please ensure you follow the guidelines below to help us keep on top of things.

__Please Note:__

GitHub is for *bug reports and contributions only* - if you have a support question or a request for a customization this is not the right place to post it. Use [OceanWP Support](https://oceanwp.org/support/) for customer support, and for customizations we recommend [Codeable](https://codeable.io/).

## Contributing To The Core

### Reporting Issues

Reporting issues is a great way to became a contributor, because it doesn't require technical skills. In fact, you don't even need to know a programming language or to be able to check the code itself. You just need to make sure that everything works as expected and [submit an issue report](https://github.com/oceanwp/oceanwp/issues/new) if you spot a bug. Sounds like something you're up for? Go for it!

#### How To Submit An Issue Report

If something doesn't function - congratulations - you've found a bug! Help us fix it by submitting an issue report:

* Make sure you have a [GitHub account](https://github.com/signup/free)
* Search the [Existing Issues](https://github.com/oceanwp/oceanwp/issues) to be sure that the one you've noticed isn't already there
* Submit a report for your issue
  * Clearly describe the issue (including steps to reproduce it if it's a bug)
  * Make sure you fill in the earliest version that you know has the issue.

### Making Changes

Making changes to the core is a key way to help us improve OceanWP. You will need some technical skills to make a change, like knowing a bit of PHP, CSS, SASS or JavaScript, as well as some other development technologies (more on that shortly).

If you think something could be improved and you're able to do so, make your changes and submit a Pull Request. We'll be pleased to get it :)

#### Set up your development environment
OceanWP utilises technologies such as [Grunt](http://gruntjs.com/) and [Sass](http://sass-lang.com/) to standardise and speed up development. You should familiarise yourself with each before contributing. To get started with your OceanWP development environment:

* Install [Grunt](http://gruntjs.com/)
* Install [Node.js](https://nodejs.org/en/)
* [Fork](https://help.github.com/articles/fork-a-repo/) the [OceanWP repository](https://github.com/oceanwp/oceanwp) on GitHub
* Pull the OceanWP project dependencies into your environment by navigating to your `/oceanwp/` directory in Terminal then run `npm install`.
* Create local copies of OceanWP css (we do not version control the .css files) by running `grunt sass`.

You're now ready to go! You can activate OceanWP in your WordPress install and start making changes.

**Please note:** any style changes you make should be done in the Sass files, not the .css files. Once you've changed a .scss file you will want to compile it to see those changes in your setup. There are two ways to do this;

1. *Manually* - Each time you change a css file run `grunt sass` in Terminal to compile all of the css.
2. *Automatically* - run `grunt watch` in Terminal. This will instruct grunt to 'watch' each of the sass files for changes and then compile automatically when changes are made. This is the recommended method and will also watch Javascript files for changes too.

#### How To Submit A PR

* Make the changes to your forked repository
  * **Ensure you stick to the WordPress Coding Standards for [PHP](http://make.wordpress.org/core/handbook/coding-standards/php/), [CSS](https://make.wordpress.org/core/handbook/best-practices/coding-standards/css/) and [Javascript](https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/).**
  * Ensure you use LF line endings - no crazy Windows line endings please :)
* When committing, reference your issue number (#1234) and include a note about the fix
* Push the changes to your fork and submit a pull request on the master branch of the OceanWP repository.
* Please **don't** modify the changelog - this will be maintained by OceanWP developers.
* Please **don't** add your localizations or update the .pot files - these will also be maintained by OceanWP developers.

After you follow the step above, the next stage will be waiting on us to merge your Pull Request. We review them all, and make suggestions and changes as and if necessary.

# Additional Resources

* [General GitHub documentation](http://help.github.com/)
* [GitHub pull request documentation](http://help.github.com/send-pull-requests/)