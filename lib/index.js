'use strict';

var rules = {};

/**
* RULE: max-depth
*	Maximum depth that blocks can be nested. See [max-depth]{@link http://eslint.org/docs/rules/max-depth}.
*/
rules[ 'max-depth' ] = [ 2, 5 ];

/**
* RULE: max-len
*	Maximum line length. See [max-len]{@link http://eslint.org/docs/rules/max-len}.
*/
rules[ 'max-len' ] = [ 1, 80, 4, {
	'ignoreComments': true,
	'ignoreUrls': true
}];

/**
* RULE: max-params
*	Maximum number of parameters. See [max-params]{@link http://eslint.org/docs/rules/max-params}.
*/
rules[ 'max-params' ] = [ 2, 10 ];

/**
* RULE: max-statements
*	Maximum number of statements in a function. See [max-statements]{@link http://eslint.org/docs/rules/max-statements}.
*/
rules[ 'max-statements' ] = [ 2, 100 ];

/**
* RULE: no-bitwise
*	Allow the use of bitwise operators. See [no-bitwise]{@link http://eslint.org/docs/rules/no-bitwise}.
*/
rules[ 'no-bitwise' ] = 0;

/**
* RULE: allow the use of `++` and `--`. See [no-plusplus]{@link http://eslint.org/docs/rules/no-plusplus}.
*/
rules[ 'no-plusplus' ] = 0;


// EXPORTS //

module.exports = rules;
