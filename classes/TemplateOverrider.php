<?php namespace Inggo\WPAR;

class TemplateOverrider
{
    protected $plugin_dir;

    public function __construct($plugin_dir)
    {
        $this->plugin_dir = $plugin_dir;

        add_filter('template_include', array($this, 'load_template'), 99);
    }

    public function load_template($template)
    {
        if ($this->maybe_load_template()) {
            $react_template = locate_template(array('wp-react.php'));
            if ($react_template !== '') {
                return $react_template;
            } else {
                return load_template($this->plugin_dir . '/templates/wp-react.php');
            }
        }
        return $template;
    }

    public function maybe_load_template()
    {
        return get_query_var('name') === 'react-admin';
    }
}
