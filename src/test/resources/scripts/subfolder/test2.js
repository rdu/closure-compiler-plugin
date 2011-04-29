/*global window,document,jQuery */

/*!
* Skeleton: a jQuery Plugin
* @author: Trevor Morris (trovster)
* @url: http://www.trovster.com/lab/code/plugins/jquery.skeleton.js
* @documentation: http://www.trovster.com/lab/plugins/skeleton/
* @published: 11/09/2008
* @updated: 26/02/2011
* @license Creative Commons Attribution Non-Commercial Share Alike 3.0 Licence
*		   http://creativecommons.org/licenses/by-nc-sa/3.0/
*/
if(typeof jQuery != 'undefined') {
	jQuery(function($) {
		$.fn.extend({
			skeleton: function(options) {
				var settings = $.extend({}, $.fn.skeleton.defaults, options);
			
				return this.each(function () {
					var $$	= $(this),
						o	= $.metadata ? $.extend({}, settings, $$.metadata()) : settings;

					/**
					* Start your Plugin Here…
					*/
				});
			}
		});
		
		/**
		* Set your Plugin Defaults Here…
		*/
		$.fn.skeleton.defaults = {
			key:	"value"
		};
		
	}(jQuery));
}