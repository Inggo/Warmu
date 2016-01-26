<?php
/*
 * Plugin Name: Warmu
 * Plugin URI: https://github.com/Inggo/Warmu
 * Description: WordPress Admin interface using React and Material-UI
 * Author: Inggo Espinosa
 * Author URI: https://inggo.xyz/
 * Version: 0.1.0
 * License: GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

// Define constants

// Plugin Path
if (!defined('WPAR_PLUGIN_DIR')) {
    define('WPAR_PLUGIN_DIR', plugin_dir_path(__FILE__));
}

// Plugin URL
if (!defined('WPAR_PLUGIN_URL')) {
    define('WPAR_PLUGIN_URL', plugin_dir_url(__FILE__));
}

// Plugin Root
if (!defined('WPAR_PLUGIN_FILE')) {
    define('WPAR_PLUGIN_FILE', __FILE__);
}

// Load dependencies
if (!class_exists('Inggo\WPAR\Loader')) {
    include_once(WPAR_PLUGIN_DIR . 'classes/Loader.php');
}

// Initialize plugin
new Inggo\WPAR\Loader(WPAR_PLUGIN_DIR);
