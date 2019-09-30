
  jQuery(function ( $ ) {

    // Add Color Picker to all inputs that have 'color-field' class
        $(
            function () {
            	console.log("color-field");
                jQuery('.astra-widget-field-color input').not('[id*="__i__"]').wpColorPicker();
            }
        );
     
  });
