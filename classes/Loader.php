<?php namespace Inggo\WPAR;

class Loader
{
    public function __construct($plugin_dir)
    {
        if (!class_exists('Inggo\WPAR\TemplateOverrider')) {
            include_once($plugin_dir . 'classes/TemplateOverrider.php');
        }
        $this->template_overrider = new TemplateOverrider($plugin_dir);
    }
}
